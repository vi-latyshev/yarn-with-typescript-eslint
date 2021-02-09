module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-typescript/base',
        'plugin:import/typescript',
    ],
    env: {
        node: true,
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'max-len': [
            'error',
            {
                code: 120,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'linebreak-style': 'off',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        radix: ['error', 'as-needed'],
        // import/...
        'import/prefer-default-export': 'off',
        // not supported 'import type'
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
            },
        ],

        // using @typescript-eslint/...
        'no-duplicate-imports': 'off',
        'no-unused-vars': 'off',
        indent: 'off',
        semi: 'off',

        // extends the base eslint/...
        '@typescript-eslint/no-duplicate-imports': ['error'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/type-annotation-spacing': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/member-ordering': [
            'warn',
            {
                default: [
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',

                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',

                    'public-field',
                    'protected-field',
                    'private-field',

                    'constructor',

                    'public-abstract-field',
                    'protected-abstract-field',
                    'private-abstract-field',

                    'public-abstract-method',
                    'protected-abstract-method',
                    'private-abstract-method',

                    'public-method',
                    'protected-method',
                    'private-method',
                ],
            },
        ],

        // depends on the situation
        // 'no-mixed-operators': 'off',
        // 'import/no-default-export': ['warn'],
        // 'import/no-webpack-loader-syntax': 'off',
    },
};
