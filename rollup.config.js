import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts", // Your main TypeScript file
  output: [
    {
      file: "dist/webfilefusion.cjs.js", // CommonJS for Node.js
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/webfilefusion.esm.js", // ES module for modern bundlers
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    resolve(),
    commonjs(),
    json(),
  ],
  external: [],
};
