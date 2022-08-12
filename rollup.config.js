
import typescript from "@rollup/plugin-typescript";
import babel  from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";


export default {
  input: 'packages/core/index.ts',
  output: [
    {
      file: 'dist/cjs/index.min.js',
      name: "ZeroEditor",
      format: 'cjs',
      sourcemap: false
    },
    {
      file: 'dist/umd/index.min.js',
      name: "ZeroEditor",
      format: 'umd',
      sourcemap: false
    }
  ],
  plugins: [
    nodeResolve(), // 帮助寻找node_modules里的包
    commonjs(), // 将CommonJs语法转成es5
    typescript(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts'],
      exclude: 'node_modules/**'
    }),
    terser(), // 对打包的js进行压缩
  ]
};