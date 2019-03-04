import { easeInCubic, easeInOutCubic, easeOutCubic } from '../src'

test('easeInCubic', () => {
  expect(easeInCubic(100, 0, 1000, 3000)).toBe(0.037037037037037035)
})

test('easeOutCubic', () => {
  expect(easeOutCubic(100, 0, 1000, 3000)).toBe(96.70370370370374)
})

test('easeInOutCubic', () => {
  expect(easeInOutCubic(100, 0, 1000, 3000)).toBe(0.14814814814814814)
})
