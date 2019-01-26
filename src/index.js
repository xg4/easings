export function easeInQuad(t, b, c, d) {
  const cc = c - b
  return cc * (t /= d) * t + b
}

export function easeOutQuad(t, b, c, d) {
  const cc = c - b
  return -cc * (t /= d) * (t - 2) + b
}

export function easeInOutQuad(t, b, c, d) {
  const cc = c - b
  if ((t /= d / 2) < 1) return (cc / 2) * t * t + b
  return (-cc / 2) * (--t * (t - 2) - 1) + b
}

export function easeInCubic(t, b, c, d) {
  const cc = c - b
  return cc * (t /= d) * t * t + b
}

export function easeOutCubic(t, b, c, d) {
  const cc = c - b
  return cc * ((t = t / d - 1) * t * t + 1) + b
}

export function easeInOutCubic(t, b, c, d) {
  const cc = c - b
  if ((t /= d / 2) < 1) {
    return (cc / 2) * t * t * t + b
  } else {
    return (cc / 2) * ((t -= 2) * t * t + 2) + b
  }
}

export function easeInQuart(t, b, c, d) {
  const cc = c - b
  return cc * (t /= d) * t * t * t + b
}

export function easeOutQuart(t, b, c, d) {
  const cc = c - b
  return -cc * ((t = t / d - 1) * t * t * t - 1) + b
}

export function easeInOutQuart(t, b, c, d) {
  const cc = c - b
  if ((t /= d / 2) < 1) return (cc / 2) * t * t * t * t + b
  return (-cc / 2) * ((t -= 2) * t * t * t - 2) + b
}

export function easeInQuint(t, b, c, d) {
  const cc = c - b
  return cc * (t /= d) * t * t * t * t + b
}

export function easeOutQuint(t, b, c, d) {
  const cc = c - b
  return cc * ((t = t / d - 1) * t * t * t * t + 1) + b
}

export function easeInOutQuint(t, b, c, d) {
  const cc = c - b
  if ((t /= d / 2) < 1) return (cc / 2) * t * t * t * t * t + b
  return (cc / 2) * ((t -= 2) * t * t * t * t + 2) + b
}

export function easeInSine(t, b, c, d) {
  const cc = c - b
  return -cc * Math.cos((t / d) * (Math.PI / 2)) + cc + b
}

export function easeOutSine(t, b, c, d) {
  const cc = c - b
  return cc * Math.sin((t / d) * (Math.PI / 2)) + b
}

export function easeInOutSine(t, b, c, d) {
  const cc = c - b
  return (-cc / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
}

export function easeInExpo(t, b, c, d) {
  const cc = c - b
  return t == 0 ? b : cc * Math.pow(2, 10 * (t / d - 1)) + b
}

export function easeOutExpo(t, b, c, d) {
  const cc = c - b
  return t == d ? b + cc : cc * (-Math.pow(2, (-10 * t) / d) + 1) + b
}

export function easeInOutExpo(t, b, c, d) {
  const cc = c - b
  if (t == 0) return b
  if (t == d) return b + cc
  if ((t /= d / 2) < 1) return (cc / 2) * Math.pow(2, 10 * (t - 1)) + b
  return (cc / 2) * (-Math.pow(2, -10 * --t) + 2) + b
}

export function easeInCirc(t, b, c, d) {
  const cc = c - b
  return -cc * (Math.sqrt(1 - (t /= d) * t) - 1) + b
}

export function easeOutCirc(t, b, c, d) {
  const cc = c - b
  return cc * Math.sqrt(1 - (t = t / d - 1) * t) + b
}

export function easeInOutCirc(t, b, c, d) {
  const cc = c - b
  if ((t /= d / 2) < 1) return (-cc / 2) * (Math.sqrt(1 - t * t) - 1) + b
  return (cc / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
}

export function easeInElastic(t, b, c, d) {
  const cc = c - b
  let s = 1.70158
  let p = 0
  let a = cc
  if (t == 0) return b
  if ((t /= d) == 1) return b + cc
  if (!p) p = d * 0.3
  if (a < Math.abs(cc)) {
    a = cc
    s = p / 4
  } else s = (p / (2 * Math.PI)) * Math.asin(cc / a)
  return (
    -(
      a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p)
    ) + b
  )
}

export function easeOutElastic(t, b, c, d) {
  const cc = c - b
  let s = 1.70158
  let p = 0
  let a = cc
  if (t == 0) return b
  if ((t /= d) == 1) return b + cc
  if (!p) p = d * 0.3
  if (a < Math.abs(cc)) {
    a = cc
    s = p / 4
  } else s = (p / (2 * Math.PI)) * Math.asin(cc / a)
  return (
    a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
    cc +
    b
  )
}

export function easeInOutElastic(t, b, c, d) {
  const cc = c - b
  let s = 1.70158
  let p = 0
  let a = cc
  if (t == 0) return b
  if ((t /= d / 2) == 2) return b + cc
  if (!p) p = d * (0.3 * 1.5)
  if (a < Math.abs(cc)) {
    a = cc
    s = p / 4
  } else s = (p / (2 * Math.PI)) * Math.asin(cc / a)
  if (t < 1)
    return (
      -0.5 *
        (a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
      b
    )
  return (
    a *
      Math.pow(2, -10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
      0.5 +
    cc +
    b
  )
}

export function easeInBack(t, b, c, d, s) {
  const cc = c - b
  if (s == undefined) s = 1.70158
  return cc * (t /= d) * t * ((s + 1) * t - s) + b
}

export function easeOutBack(t, b, c, d, s) {
  const cc = c - b
  if (s == undefined) s = 1.70158
  return cc * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
}

export function easeInOutBack(t, b, c, d, s) {
  const cc = c - b
  if (s == undefined) s = 1.70158
  if ((t /= d / 2) < 1)
    return (cc / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
  return (cc / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
}

export function easeInBounce(t, b, c, d) {
  const cc = c - b
  return cc - easeOutBounce(d - t, 0, cc, d) + b
}

export function easeOutBounce(t, b, c, d) {
  const cc = c - b
  if ((t /= d) < 1 / 2.75) {
    return cc * (7.5625 * t * t) + b
  } else if (t < 2 / 2.75) {
    return cc * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
  } else if (t < 2.5 / 2.75) {
    return cc * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
  } else {
    return cc * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
  }
}

export function easeInOutBounce(t, b, c, d) {
  const cc = c - b
  if (t < d / 2) return easeInBounce(t * 2, 0, cc, d) * 0.5 + b
  return easeOutBounce(t * 2 - d, 0, cc, d) * 0.5 + cc * 0.5 + b
}
