export interface IBoard {
  createBoard(size: number): number[][];
  getBoard(): number[][];
  toTop(): number[][];
  toLeft(): number[][];
  toBottom(): number[][];
  toRight(): number[][];
}
