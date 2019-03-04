import { easeInOutSine, easeInSine, easeOutSine } from '../src'

test('easeInSine', () => {
  expect(easeInSine(100, 0, 1000, 3000)).toBe(1.3704652454262032)
})

test('easeOutSine', () => {
  expect(easeOutSine(100, 0, 1000, 3000)).toBe(52.33595624294383)
})

test('easeInOutSine', () => {
  expect(easeInOutSine(100, 0, 1000, 3000)).toBe(2.739052315863355)
})
