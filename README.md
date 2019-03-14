# easings

[![Build Status](https://www.travis-ci.org/xg4/easings.svg?branch=master)](https://www.travis-ci.org/xg4/easings)
[![npm](https://img.shields.io/npm/v/@xg4/easings.svg)](https://www.npmjs.com/package/@xg4/easings)
[![npm](https://img.shields.io/npm/l/@xg4/easings.svg)](https://www.npmjs.com/package/@xg4/easings)

## Installation

> timing function for js

### Install with npm or Yarn

```bash
# npm
$ npm install @xg4/easings --save
```

```bash
#yarn
$ yarn add @xg4/easings
```

## Usage

> Use it with [@xg4/motion](https://github.com/xg4/motion)

```ts
import { move } from '@xg4/motion'
import { easeInExpo } from '@xg4/easings'

function handleValue(value: number) {
  console.log(value)
}

move(handleValue, {
  from: 0,
  to: 100,
  duration: 450,
  ease: easeInExpo
})
```

## Typings

```ts
type easeFuncBase = (
  time: number,
  from: number,
  to: number,
  duration: number
) => number

type easeFuncWithSpeed = (
  time: number,
  from: number,
  to: number,
  duration: number,
  speed?: number
) => number
```

## LICENSE

MIT
