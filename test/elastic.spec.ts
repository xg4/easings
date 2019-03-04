import { easeInElastic, easeInOutElastic, easeOutElastic } from '../src'

test('easeInElastic', () => {
  expect(easeInElastic(100, 0, 1000, 3000)).toBe(0.21365526788911257)
})

test('easeInOutElastic', () => {
  expect(easeInOutElastic(100, 0, 1000, 3000)).toBe(0.6926530240832527)
})

test('easeOutElastic', () => {
  expect(easeOutElastic(100, 0, 1000, 3000)).toBe(391.9901225692704)
})
