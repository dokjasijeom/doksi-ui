import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
  input: "src/index.tsx", // TypeScript의 진입점
  output: [
    {
      file: packageJson.main,
      format: "cjs", // CommonJS 출력
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm", // ESModules 출력
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // peerDependencies를 번들에서 제외
    resolve(), // node_modules에서 모듈 로드
    commonjs(), // CommonJS 모듈 변환
    typescript({ tsconfig: "./tsconfig.json" }), // TypeScript 처리
    babel({
      exclude: "node_modules/**", // Babel이 node_modules를 제외하도록 설정
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    terser(), // 번들 압축 및 최적화
  ],
  external: ["react", "react-dom"], // React와 ReactDOM을 외부 의존성으로 처리
};
