// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:nuxt/recommended",
        "plugin:vue/vue3-recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "vue/multi-word-component-names": 0,
        "max-len": ["warn", {
            "code": 120,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreRegExpLiterals": true,
            "ignoreComments": true,
            "ignorePattern": "@apply|import|require|d=\""
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 5
            },
            "multiline": {
                "max": 1
            }
        }],
    },
};
