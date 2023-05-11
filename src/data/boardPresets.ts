import { Board } from "../types/types"

const defaultBoard: Board = [
  [true, true, true, true, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, true, true, true, true]
]

const basicBoard: Board = [
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, false, true, true, true, true, true],
  [true, false, false, false, false, false, false, false, true],
  [true, true, true, true, true, true, true, true, true]
]

const trapBoard: Board = [
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, false, true, true, true, true, true],
  [true, true, true, false, true, true, true, true, true],
  [true, true, true, false, true, true, true, true, true],
  [false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true]
]

const impossibleBoard: Board = [
  [true, true, true],
  [false, false, false],
  [true, true, true]
]

export { impossibleBoard, basicBoard, defaultBoard, trapBoard }