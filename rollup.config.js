import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'greymon',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [typescript(), commonjs()],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.ts',
    output: [
      { name: 'greymon', file: pkg.main, format: 'cjs', sourcemap: true },
      { name: 'greymon', file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [typescript()],
  },
];
