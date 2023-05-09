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

export {Point, Board, PointPair, Dimension}