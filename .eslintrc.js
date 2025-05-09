module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // Maxsus qoida qo'shish
    "@typescript-eslint/explicit-module-boundary-types": "off", // Misol uchun, bu qoidani o‘chirish
    "react/prop-types": "off", // TypeScript bilan ishlaganda, prop-types kerak emas
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
