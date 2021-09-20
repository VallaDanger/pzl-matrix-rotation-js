import {expect} from 'chai';
import PuzzleSolution from '../src/PuzzleSolution';
import MatrixRotation from '../src/MatrixRotation';

describe('MatrixRotation', () => {
  const matrix: number[][] = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];
  const rotatedMatrix: number[][] = [
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ];
  const puzzle: PuzzleSolution<number[][]> = new MatrixRotation(matrix);
  it('brute-force solution', () => {
    expect(puzzle.bruteForceSolution()).to.eql(rotatedMatrix);
  });
  it('optimal solution', () => {
    expect(puzzle.optimalSolution()).to.eql(rotatedMatrix);
  });
  it('both solutions are equal', () => {
    expect(puzzle.optimalSolution()).to.eql(puzzle.bruteForceSolution());
  });
});
