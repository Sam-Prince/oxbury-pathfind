import { Board } from "../types/types";

export default function displayBoard(board: Board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j]) {
        process.stdout.write('. ')
      } else {
        process.stdout.write('# ')
      }
    }
    process.stdout.write('\n')
  }
  process.stdout.write('\n')
}