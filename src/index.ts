import { defaultBoard, basicBoard, impossibleBoard } from "./data/boardPresets"
import pathfind from "./pathfind"
import displayBoard from "./utils/displayBoard"

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const q1 = 'Enter a number corresponding to the board you want: \n'
const q2 = 'Now enter the x coordinate for P (start) : \n'
const q3 = 'Now enter the y coordinate for P (start) : \n'
const q4 = 'Now enter the x coordinate for Q (goal) : \n'
const q5 = 'Now enter the y coordinate for Q (goal) : \n'

const askQuestion = (q: string) => {
  return new Promise<string>((resolve) => {
    rl.question(q, (answer: string) => {
      resolve(answer)
    })
  })
}

const selectBoard = (answer: string) => {
  switch (+answer) {
    case 1:
      return basicBoard
    case 2:
      return impossibleBoard
    default:
      return defaultBoard
  }
}

const main = async () => {
  console.log("1.")
  displayBoard(basicBoard)
  console.log("2.")
  displayBoard(impossibleBoard)
  console.log("3.")
  displayBoard(defaultBoard)

  const selectedBoard = selectBoard(await askQuestion(q1))
  const px = +await askQuestion(q2)
  const py = +await askQuestion(q3)
  const qx = +await askQuestion(q4)
  const qy = +await askQuestion(q5)
  rl.close()

  const result = pathfind(selectedBoard, [px, py], [qx, qy])
  console.log("The distance of the shortest path is: " + result)
}

main()