import PuzzleSolution from './PuzzleSolution';
import MatrixRotation from './MatrixRotation';

const matrix: number[][] = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const puzzle: PuzzleSolution<number[][]> = new MatrixRotation(matrix);

console.log(matrix);
console.log(puzzle.bruteForceSolution());
console.log(puzzle.optimalSolution());

export default {puzzle};
