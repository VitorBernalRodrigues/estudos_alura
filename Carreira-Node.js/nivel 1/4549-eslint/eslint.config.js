import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import { plugin } from "mongoose";
import plugins from "eslint-plugin-import";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js, import: plugins }, extends: ["js/recommended"], languageOptions: { globals: globals.node }, 
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 4],
      "no-trailing-spaces": ["error"],
      "prefer-const": ["error"],
      "no-param-reassign": ["error"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      "camelcase": ["error"],
      "no-var": ["error"],
      "import/no-cycle": ["error"],
    },
  },
]);
