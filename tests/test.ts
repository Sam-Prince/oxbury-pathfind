import { impossibleBoard, basicBoard, defaultBoard } from "../src/data/boardPresets"
import pathfind from "../src/pathfind"

test(
  "Test pathfind returns shortest path", () => {
    expect(pathfind(basicBoard, [4, 1], [2, 3])).toBe(10)
    expect(pathfind(defaultBoard, [1, 0], [2, 3])).toBe(6)
  })

test(
  "Test pathfind with multiple shortest paths", () => {
    expect(pathfind(defaultBoard, [2, 0], [2, 3])).toBe(7)
    expect(pathfind(defaultBoard, [2, 3], [2, 0])).toBe(7)
  })

test(
  "Test pathfind start and end on same spot", () => {
    expect(pathfind(defaultBoard, [2, 0], [2, 0])).toBe(0)
    expect(pathfind(basicBoard, [3, 3], [3, 3])).toBe(0)
  })

test(
  "Test out of bounds start locations", () => {
    expect(() => pathfind(defaultBoard, [-1, -1], [2, 0])).toThrow("out of bounds")
    expect(() => pathfind(defaultBoard, [3, 12], [3, 3])).toThrow("out of bounds")
  })

test(
  "Test out of bounds end locations", () => {
    expect(() => pathfind(defaultBoard, [1, 1], [-500, 600])).toThrow("out of bounds")
    expect(() => pathfind(defaultBoard, [3, 2], [12, 3])).toThrow("out of bounds")
  })

test(
  "Test pathfind returns -1 when no path is possible", () => {
    expect(pathfind(impossibleBoard, [0, 0], [2, 2])).toBe(-1)
    expect(pathfind(impossibleBoard, [2, 0], [0, 2])).toBe(-1)
    expect(pathfind(impossibleBoard, [1, 2], [1, 0])).toBe(-1)
  })