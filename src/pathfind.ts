import { Point, Board, PointPair, Dimension } from "./types/types";

export default function pathfind(board: Board, start: Point, end: Point): number {
  let border: Point[] = []
  let cameFrom: PointPair[] = []
  
  verifyPoint(board, start)
  verifyPoint(board, end)

  border.push(start)
  if (!isEqual(start, end)) {
    cameFrom.push({ origin: start })
  } else {
    return 0
  }

  while (border.length) {
    let current = border.shift()!
    for (let next of getNeighbors(board, current)) {
      if (!cameFrom.some((x) => isEqual(x.origin, next))) {
        border.push(next)
        cameFrom.push({ origin: next, from: current })
      }
      if (isEqual(next, end)) {
        return getDistance(cameFrom, end)
      }
    }
  }
  return -1
}

function getDistance(pathMap: PointPair[], end: Point): number {
  let count = 0
  let currentPair = pathMap.at(-1)

  while (currentPair?.from) {
    let b = currentPair.from
    currentPair = pathMap.find((x) => isEqual(x.origin, b))
    count++
  }
  return count
}

function getNeighbors(board: Board, point: Point): Point[] {
  let boardDim = getBoardDimension(board)
  let neighbors: Point[] = []
  let [x, y] = point

  for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, boardDim.x); i++) {
    for (let j = Math.max(0, y - 1); j <= Math.min(y + 1, boardDim.y); j++) {
      let isAdjacent = (x === i) !== (y === j)
      let isPassable = board[j][i]
      if (isAdjacent && isPassable) {
        neighbors.push([i, j])
      }
    }
  }
  return neighbors
}

function verifyPoint(board: Board, point: Point) {
  const boardDim = getBoardDimension(board)

  if (isNaN(point[0]) || isNaN(point[1])) {
    throw new Error('Coordinate is not a valid number')
  }
  if (point[0] < 0 || point[0] > boardDim.x) {
    throw new Error('x coordinate is out of bounds: '+point)
  }
  if (point[1] < 0 || point[1] > boardDim.y) {
    throw new Error('y coordinate is out of bounds: '+point)
  }
}

function getBoardDimension(board: Board): Dimension {
  return { x: board[0].length - 1, y: board.length - 1 }
}

function isEqual(a: Point, b: Point) {
  return a[0] === b[0] && a[1] === b[1]
}