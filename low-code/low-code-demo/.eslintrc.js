module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-unused-vars': [0],
    '@typescript-eslint/no-unused-vars': 'off',
    // quotes: [
    //   2,
    //   "single",
    //   {
    //     avoidEscape: true,
    //     allowTemplateLiterals: true,
    //   },
    // ],
  },
};
