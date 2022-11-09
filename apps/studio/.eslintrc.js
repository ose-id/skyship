module.exports = {
  extends: ["../../.eslintrc.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: 2017,
    sourceType: "module",
  },
};
