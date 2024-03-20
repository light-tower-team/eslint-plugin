import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintImportPlugin from "eslint-plugin-import";
import eslintPromisePlugin from "eslint-plugin-promise";
import eslintUnicornPlugin from "eslint-plugin-unicorn";
import eslintStylisticPlugin from "@stylistic/eslint-plugin";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    plugins: {
      import: eslintImportPlugin,
      promise: eslintPromisePlugin,
      unicorn: eslintUnicornPlugin,
      "@stylistic": eslintStylisticPlugin,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: false }],
      curly: "error",
      yoda: ["error", "never"],
      "prefer-template": "error",
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "no-debugger": "error",
      "no-lonely-if": "error",
      "no-unneeded-ternary": "error",
      "no-useless-computed-key": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "internal",
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "unicorn/filename-case": ["error", { case: "snakeCase" }],
      "unicorn/no-array-callback-reference": "error",
      "promise/no-callback-in-promise": "off",
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "no-debugger": "error",
      "no-unneeded-ternary": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["typeLike", "enumMember"],
          format: ["PascalCase"],
        },
        {
          selector: ["variable"],
          format: ["UPPER_CASE"],
          types: ["array", "boolean", "number", "string"],
          modifiers: ["const", "global"],
        },
        {
          selector: ["variable"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: ["function"],
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "typeParameter",
          format: ["PascalCase"],
          prefix: ["T"],
        },
      ],
    },
  },
);
