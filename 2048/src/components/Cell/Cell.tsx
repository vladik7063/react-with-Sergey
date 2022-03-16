import clsx from 'clsx';
import styles from './cell.module.scss';

export type CellProps = {
  value: number;
};

export const Cell = ({ value = 4 }) => {
  const classValue = `value` + value;
  const type = value === 0 ? 'hidden' : 'visible';
  const className = clsx(styles.root, styles[type], styles[classValue]);
  return <div className={className}>{value}</div>;
};
