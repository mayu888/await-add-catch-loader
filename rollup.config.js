import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "./src/constant.js",
  output: {
    file: "./lib/constant.js",
    // format: "esm",
    format: "cjs",
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
  // external: ["./utils", "./constant"],
};
