import useActions from '../../hooks/useActions';
import styles from './AddCell.module.css';

interface IAddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<IAddCellProps> = ({
  previousCellId,
  forceVisible = false,
}) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`${styles.addCell} ${forceVisible && styles.forceVisible}`}>
      <div className={styles.addButtons}>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default AddCell;
