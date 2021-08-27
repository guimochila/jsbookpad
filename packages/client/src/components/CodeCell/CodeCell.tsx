import * as React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Resizable from '../Resizable/Resizable';
import Preview from '../Preview/Preview';
import { ICell } from '../../state';
import useActions from '../../hooks/useActions';
import { bundleSelector } from '../../state/reducers/bundlesReducer';
import { useSelector } from '../../hooks/useTypedSelector';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './CodeCell.module.css';
import { useCumultiveCode } from '../../hooks/useCumulativeCode';

interface ICodeCellProps {
  cell: ICell;
}

const CodeCell: React.FC<ICodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useSelector((state) => bundleSelector(state, cell.id));
  const code = useCumultiveCode(cell.id);

  React.useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, code);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, code);
    }, 750);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className={styles.wrapper}>
          {!bundle || bundle.loading ? (
            <ProgressBar />
          ) : (
            <Preview code={bundle.code} bundleErrorMessage={bundle.error} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
