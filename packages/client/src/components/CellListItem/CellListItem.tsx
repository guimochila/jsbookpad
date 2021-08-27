import { ICell } from '../../state';
import ActionBar from '../ActionBar/ActionBar';
import CodeCell from '../CodeCell/CodeCell';
import TextEditor from '../TextEditor/TextEditor';
import styles from './CellListItem.module.css';

interface ICellListItemProps {
  cell: ICell;
}

const CellListItem: React.FC<ICellListItemProps> = ({ cell }) => {
  const child =
    cell.type === 'code' ? (
      <>
        <div className={styles.actionBarWrapper}>
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    ) : (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );

  return <div className={styles.cellListItem}>{child}</div>;
};

export default CellListItem;
