module.exports = {
    "extends": "airbnb",
    "parser":"babel-eslint",
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
    },
    "plugins": [
        "import",
        "jsx-a11y",
        "react"
    ],
    "rules" : {
        strict: 'warn',
        'no-console': 'off',
        'max-len': [
            'error',
            {
                code: 80,
                tabWidth: 2,
                comments: 80,
                // ignorePattern: '',
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                // ignoreStrings: false,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],

        'no-unused-vars': 'warn',
        'no-trailing-spaces': 'error',
        'no-multi-spaces': 'error',
        'object-curly-spacing': 'error',
        'space-before-function-paren': 'error',
        'comma-dangle': 'error',
        semi: 'error',
        'no-extra-semi': 'error',
        'consistent-return': 'error',
        'no-shadow': 'error',
        'no-unreachable': 'error',
        'brace-style': 'error',
        'no-unneeded-ternary': 'error',
        'consistent-return': 'error',
        'class-methods-use-this': 'error',
        indent: 'error',
        'array-callback-return': 'error',
        'no-underscore-dangle': 'error',
        'no-multiple-empty-lines': 'error',
        'keyword-spacing': 'error',
        'no-unreachable': 'error',
        'default-case': 'error',

        'no-multiple-empty-lines': ['error', {
            "max": 2,
            "maxEOF": 1,
            "maxBOF": 1,
        }],

        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'always'],

        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-extraneous-dependencies': 'error',
        'import/no-unresolved': 'error',
        'import/extensions': 'error',

        'jsx-a11y/no-autofocus': 'error',

        // change this to error later
        'react/forbid-prop-types': 'off',
        // change this to error later
        'react/no-array-index-key': 'off',
        'react/jsx-filename-extension': 'off',
        // change this to error later
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'error',
        'react/prefer-stateless-function': 'error',
        'react/jsx-no-bind': 'error',
        'react/prop-types': 'error',
        'react/sort-comp': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-indent-props': 'error',
        'react/no-unescaped-entities': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/no-did-mount-set-state': 'error'
    },
};