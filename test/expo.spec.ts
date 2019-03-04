import { easeInExpo, easeInOutExpo, easeOutExpo } from '../src'

test('easeInExpo', () => {
  expect(easeInExpo(100, 0, 1000, 3000)).toBe(1.2303916502879626)
})

test('easeInOutExpo', () => {
  expect(easeInOutExpo(100, 0, 1000, 3000)).toBe(0.7750981699063472)
})

test('easeOutExpo', () => {
  expect(easeOutExpo(100, 0, 1000, 3000)).toBe(206.29947401590022)
})
