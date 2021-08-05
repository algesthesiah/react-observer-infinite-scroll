/* eslint-disable import/no-anonymous-default-export */
import resolve from '@rollup/plugin-node-resolve'; // 帮助寻找 node_modules 里的包
import commonjs from '@rollup/plugin-commonjs'; // 将非 ES6 语法的包转为 ES6 可用
import replace from 'rollup-plugin-replace'; // 替换待打包文件里的一些变量，如 process 在浏览器端是不存在的，需要被替换
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import packageJSON from './package.json';
import babel from '@rollup/plugin-babel';

import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const env = process.env.NODE_ENV;
// const external = ['react', 'react-dom'];
const config = [
  {
    input: 'src/index.tsx',
    // external: external, // 告诉 rollup，不打包将其视为外部依赖
    output: [
      {
        file: packageJSON.main, // 通用模块
        format: 'umd',
        name: 'ReactObserverInfiniteScroll', // 打包后的全局变量，如浏览器端 window.ReactRedux
        // globals: {
        //   'react': 'React', // 这跟 external 是配套使用的，指明 global.React 即是外部依赖 react
        //   'react-dom': 'ReactDom',
        // },
      },
      {
        file: packageJSON.module, // es6 模块
        format: 'es',
        name: 'ReactObserverInfiniteScroll', // 打包后的全局变量，如浏览器端 window.ReactRedux
        // globals: {
        //   'react': 'React', // 这跟 external 是配套使用的，指明 global.React 即是外部依赖 react
        //   'react-dom': 'ReactDom',
        // },
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss(),
      typescript(),
      babel({
        babelHelpers: 'runtime',
        exclude: ['node_modules/**'],
        pluginOptions: ['@babel/plugin-transform-runtime'],
        presetsOptions: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage',
              corejs: { version: 2 },
            },
          ],
        ],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      sizeSnapshot(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.join(__dirname, 'src'),
          },
        ],
      }),
      terser(),
    ],
    onwarn: function (warning) {
      // Skip certain warnings

      // should intercept ... but doesn't in some rollup versions
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
    },
  },
  // {
  //   input: 'src/index.d.ts',
  //   output: [{ file: 'build/index.d.ts', format: 'es' }],
  //   plugins: [dts()],
  // },
];

export default config;
