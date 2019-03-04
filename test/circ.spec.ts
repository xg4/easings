import { easeInCirc, easeInOutCirc, easeOutCirc } from '../src'

test('easeInCirc', () => {
  expect(easeInCirc(100, 0, 1000, 3000)).toBe(0.5557099623366701)
})

test('easeInOutCirc', () => {
  expect(easeInOutCirc(100, 0, 1000, 3000)).toBe(1.1123484301411302)
})

test('easeOutCirc', () => {
  expect(easeOutCirc(100, 0, 1000, 3000)).toBe(256.03819159562033)
})
