import { easeInBack, easeInOutBack, easeOutBack } from '../src'

test('easeInBack', () => {
  expect(easeInBack(0, 0, 1000, 3000)).toBe(0)
  expect(easeInBack(100, 0, 1000, 3000)).toBe(-1.7905859259259262)
})

test('easeInOutBack', () => {
  expect(easeInOutBack(100, 0, 1000, 3000)).toBe(-5.233886370370371)
})

test('easeOutBack', () => {
  expect(easeOutBack(100, 0, 1000, 3000)).toBe(149.70476962962996)
})
