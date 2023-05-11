type Board = boolean[][]

type Point = [number, number]

type PointPair = {
  origin: Point,
  from?: Point
}

type Dimension = {
  x: number,
  y: number
}

type PriorityPoint = {
  p: Point,
  i: number
}

export {Point, Board, PointPair, Dimension, PriorityPoint}