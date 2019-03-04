import { easeInOutQuint, easeInQuint, easeOutQuint } from '../src'

test('easeInQuint', () => {
  expect(easeInQuint(100, 0, 1000, 3000)).toBe(0.00004115226337448559)
})

test('easeOutQuint', () => {
  expect(easeOutQuint(100, 0, 1000, 3000)).toBe(155.91979423868307)
})

test('easeInOutQuint', () => {
  expect(easeInOutQuint(100, 0, 1000, 3000)).toBe(0.0006584362139917695)
})
