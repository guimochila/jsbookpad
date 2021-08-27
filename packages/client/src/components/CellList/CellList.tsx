import * as React from 'react';
import CellListItem from '../CellListItem/CellListItem';
import { cellsSelector } from '../../state/reducers/cellsReducer';
import AddCell from '../AddCell/AddCell';
import { useSelector } from '../../hooks/useTypedSelector';
import styles from './CellList.module.css';
import useActions from '../../hooks/useActions';

const CellList: React.FC = () => {
  const cells = useSelector(cellsSelector);
  const { fetchCells, saveCells } = useActions();

  React.useEffect(() => {
    fetchCells();
  }, []);

  React.useEffect(() => {}, []);

  const renderedCells = cells.map((cell) => (
    <React.Fragment key={cell.id}>
      <CellListItem key={cell.id} cell={cell} />
      <AddCell previousCellId={cell.id} />
    </React.Fragment>
  ));

  return (
    <div className={styles.cellList}>
      <AddCell previousCellId={null} forceVisible={cells.length === 0} />
      {renderedCells}
    </div>
  );
};

export default CellList;
