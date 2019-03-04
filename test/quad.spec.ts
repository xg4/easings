import { easeInOutQuad, easeInQuad, easeOutQuad } from '../src'

test('easeInQuad', () => {
  expect(easeInQuad(100, 0, 1000, 3000)).toBe(1.1111111111111112)
})

test('easeOutQuad', () => {
  expect(easeOutQuad(100, 0, 1000, 3000)).toBe(65.55555555555556)
})

test('easeInOutQuad', () => {
  expect(easeInOutQuad(100, 0, 1000, 3000)).toBe(2.2222222222222223)
})
