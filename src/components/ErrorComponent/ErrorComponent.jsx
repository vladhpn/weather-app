import styles from './styles.module.scss';

export const ErrorComponent = ({ error, resetErrorBoundary }) => {
  console.log('error:', error);

  return (
    <div className={styles.wrapper}>
      <h1>Something wrong</h1>

      <button className={styles.btn} onClick={resetErrorBoundary}>
        Back to main page
      </button>
    </div>
  );
};
