import { easeInBounce, easeInOutBounce, easeOutBounce } from '../src'

test('easeInBounce', () => {
  expect(easeInBounce(100, 0, 1000, 3000)).toBe(14.513888888888914)
})

test('easeInOutBounce', () => {
  expect(easeInOutBounce(100, 0, 1000, 3000)).toBe(6.111111111111143)
})

test('easeOutBounce', () => {
  expect(easeOutBounce(100, 0, 1000, 3000)).toBe(8.402777777777779)
})
