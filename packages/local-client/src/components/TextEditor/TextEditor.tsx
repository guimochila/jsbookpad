import * as React from 'react';
import MDEditor from '@uiw/react-md-editor';

import styles from './TextEditor.module.css';
import { ICell } from '../../state';
import useActions from '../../hooks/useActions';

interface ITextEditorProps {
  cell: ICell;
}

const TextEditor: React.FC<ITextEditorProps> = ({ cell }) => {
  const { updateCell } = useActions();
  const [editing, setEditing] = React.useState(false);
  const divEditorRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleEditing = (event: MouseEvent) => {
      if (
        divEditorRef.current &&
        event.target &&
        divEditorRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setEditing(false);
    };

    document.addEventListener('click', handleEditing, { capture: true });

    return () =>
      document.removeEventListener('click', handleEditing, { capture: true });
  }, []);

  if (editing) {
    return (
      <div ref={divEditorRef} className={styles.textEditor}>
        <MDEditor
          value={cell.content}
          onChange={(value) => updateCell(cell.id, value || '')}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setEditing(true)}
      className={`${styles.textEditor} card`}
    >
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
      </div>
    </div>
  );
};

export default TextEditor;
