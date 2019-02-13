import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'XEasings',
        file: pkg.main,
        format: 'umd'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
]
