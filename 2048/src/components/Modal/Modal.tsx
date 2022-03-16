export type ModalProps = {
  isGameOver: boolean;
};

export const Modal: React.FC<ModalProps> = ({ isGameOver }) => {
  return <div>{isGameOver.toString()}</div>;
};
