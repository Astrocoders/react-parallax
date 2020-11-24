module.exports = {
    plugins: ['@typescript-eslint', 'jest'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
        'prettier/standard',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
    ],
    env: {
        browser: true,
        node: true,
        mocha: true,
    },
    rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'import/prefer-default-export': 0,
        'no-console': 'off',
        'react/button-has-type': 'off',
        'react/prop-types': 0,
        'no-underscore-dangle': 'off',
        curly: 'error',
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-var-requires': 0,
        'react/static-property-placement': 0,
    },
    globals: {
        expect: true,
        document: true,
    },
};