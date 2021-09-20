import PuzzleSolution from './PuzzleSolution';

export default class MatrixRotation
  implements PuzzleSolution<Array<Array<number>>>
{
  private matrix: Array<Array<number>>;
  private size: number;

  constructor(matrix: number[][]) {
    this.matrix = Array.from(matrix);
    this.size = this.matrix.length;
  }

  private get(row: number, col: number): number {
    return this.matrix[row][col];
  }

  bruteForceSolution(): Array<Array<number>> {
    const matrix: Array<Array<number>> = this.cloneMatrix();
    // mathematically, a rotation is equal to 2 opeartions
    // executed in order: transpose and reflection.
    this.transpose(matrix);
    this.reflect(matrix);
    return matrix;
  }

  optimalSolution(): Array<Array<number>> {
    // time complexity: O(n)

    const matrix: Array<Array<number>> = this.cloneMatrix();
    const maxRow: number = this.size / 2;

    for (let row = 0; row < maxRow; row++) {
      // motion must stop before the diagonal.
      const maxCol: number = this.size - row - 1;
      for (let col = row; col < maxCol; col++) {
        this.rotate(matrix, row, col);
      }
    }

    return matrix;
  }

  private cloneMatrix(): Array<Array<number>> {
    const matrix: Array<Array<number>> = [];

    for (const row of this.matrix) {
      const _row: Array<number> = [];
      for (const item of row) {
        _row.push(item);
      }
      matrix.push(_row);
    }

    return matrix;
  }

  private rotate(matrix: Array<Array<number>>, row: number, col: number): void {
    // for each cycle: column moves faster than row;
    // therefore, whenever it's needed to move along
    // a column or arow, col serves as offset for motion.
    // because row waits for a complete cycle to increment,
    // row will fix the pointer to specific row or column.
    // back up end of cycle
    const temp: number = matrix[this.size - col - 1][row];
    matrix[this.size - col - 1][row] =
      matrix[this.size - row - 1][this.size - col - 1];
    matrix[this.size - row - 1][this.size - col - 1] =
      matrix[col][this.size - row - 1];
    matrix[col][this.size - row - 1] = matrix[row][col];
    matrix[row][col] = temp;
  }

  private transpose(matrix: Array<Array<number>>) {
    for (let row = 0; row < this.size; row++) {
      for (let col = row + 1; col < this.size; col++) {
        const temp: number = matrix[row][col];
        matrix[row][col] = matrix[col][row];
        matrix[col][row] = temp;
      }
    }
  }

  private reflect(matrix: Array<Array<number>>) {
    const maxCol: number = this.size / 2;
    for (let col = 0; col < maxCol; col++) {
      // reflection only need to go half distance (columns)
      for (let row = 0; row < this.size; row++) {
        // swap row by row elements in opposite sides (horizontally)
        const index: number = this.size - col - 1;
        const temp: number = matrix[row][index];
        matrix[row][index] = matrix[row][col];
        matrix[row][col] = temp;
      }
    }
  }
}
