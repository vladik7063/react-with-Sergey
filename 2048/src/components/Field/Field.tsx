import styles from './field.module.scss';
import { Cell } from '../Cell/Cell';
import { useEffect, useState } from 'react';
import { Row } from '../Row/Row';
import { Board } from 'src/utils/createField/Board';

export type FieldProps = {
  field: number[][] | undefined;
  index: string[][];
};

export const Field: React.FC<FieldProps> = ({ field = [[2]] }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__field}>
        {field.map((row, index) => {
          return <Row key={index} values={row} />;
        })}
      </div>
    </div>
  );
};
