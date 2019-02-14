import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      },
      {
        name:'XEasings',
        file: pkg.browser,
        format: 'umd'
      }
    ],
    plugins: [
      babel({
        extensions,
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
]
