import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import path from "path";

const production = !process.env.ROLLUP_WATCH;
const srcDir = path.join(__dirname, "src");
const devDir = ".dev";
const buildDir = "build";
const targetDir = production
  ? path.join(__dirname, "__SVELTE__", buildDir)
  : path.join(__dirname, "__SVELTE__", devDir);

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js"
  },
  plugins: [
    svelte({
      // scss prep lang="scss"
      preprocess: require("svelte-preprocess")({
        transformers: {
          scss: true
        }
      }),
      // opt in to v3 behaviour today
      skipIntroByDefault: true,
      nestedTransitions: true,

      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write("public/bundle.css");
      }
    }),
    scss({
      output: path.join(targetDir, "global.css"),
      outputStyle: production ? "compressed" : "expanded"
    }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ]
};
