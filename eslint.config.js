const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig({
  expoConfig,
  eslintPluginPrettierRecommended,
  ignores: ["dist/*"],
  extends: [
    "@react-native",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    indent: "off",
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "no-console": ["error"],
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
});
