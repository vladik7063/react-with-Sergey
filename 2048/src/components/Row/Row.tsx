import { Cell } from '../Cell/Cell';

export type RowProps = {
  values: Array<number>;
};

export const Row = ({ values = [0, 0, 0, 0] }) => {
  return (
    <div>
      {values.map((value, index) => {
        return <Cell key={index} value={value} />;
      })}
    </div>
  );
};
