import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    ignores: ["!.storybook"],
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: ["state"],
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. External packages
            ["^@?\\w"],

            // 2. Absolute imports starting with "components" or "hooks"
            ["^(api|components|hooks|pages|store)(/.*|$)"],

            // 3. Parent imports (`../`)
            ["^\\.\\.(?!/.*\\.s?css$)", "^\\.\\./"],

            // 4. Local imports (`./`)
            ["^\\./(?!.*\\.s?css$)", "^\\./"],

            // 5. Side-effect imports (styles, etc.)
            ["^.+\\.s?css$"],
          ],
        },
      ],
    },
  },
)
