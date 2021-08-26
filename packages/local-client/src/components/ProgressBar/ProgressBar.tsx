import styles from './ProgressBar.module.css';

const ProgressBar: React.FC = () => {
  return (
    <div className={styles.progressBarCover}>
      <progress className="progress is-small is-primary" max="100">
        Loading
      </progress>
    </div>
  );
};

export default ProgressBar;
