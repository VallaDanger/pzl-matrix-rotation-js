export default interface PuzzleSolution<Type> {
  bruteForceSolution: () => Type;
  optimalSolution: () => Type;
}
