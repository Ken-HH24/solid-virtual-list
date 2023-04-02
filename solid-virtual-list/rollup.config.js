import { defineConfig } from 'rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { babel } from '@rollup/plugin-babel';

/**
 * @type { import('rollup').RollupOptions }
 */
export default async function () {
  return defineConfig({
    input: './src/index.ts',
    external: ['solid-js'],
    output: [
      {
        name: 'solid-virtual-list',
        dir: './lib',
        entryFileNames: `[name].cjs.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        name: 'solid-virtual-list',
        dir: './lib',
        entryFileNames: `[name].es.js`,
        format: 'es',
        sourcemap: true,
      },
      {
        name: 'solid-virtual-list',
        dir: './lib',
        entryFileNames: `[name].umd.js`,
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({ modules: true }),
      babel({
        extensions: ['.tsx', '.jsx'],
        babelHelpers: 'bundled',
        presets: ['babel-preset-solid', '@babel/preset-typescript', '@babel/preset-env'],
      }),
      peerDepsExternal(),
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.json', declaration: true, declarationDir: './lib' }),
    ],
  });
}
