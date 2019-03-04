import { easeInOutQuart, easeInQuart, easeOutQuart } from '../src'

test('easeInQuart', () => {
  expect(easeInQuart(100, 0, 1000, 3000)).toBe(0.0012345679012345679)
})

test('easeOutQuart', () => {
  expect(easeOutQuart(100, 0, 1000, 3000)).toBe(126.81358024691359)
})

test('easeInOutQuart', () => {
  expect(easeInOutQuart(100, 0, 1000, 3000)).toBe(0.009876543209876543)
})
