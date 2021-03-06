module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb/hooks",
        "airbnb/base",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "require": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "semi": "warn",
        "no-console": "off",
        "no-plusplus": "off",
        "eol-last": "off",
        "indent": ["off", "tab", "error", 2],
        "comma-dangle": "off",
        "arrow-parens": "off",
    },
        "settings": {
           
            "react": {
                "createClass": "createReactClass",
                "pragma": "React", 
                "version": "16.0",
                "flowVersion": "0.53" 
            },
            "propWrapperFunctions": [
                "forbidExtraProps",
                {
                    "property": "freeze",
                    "object": "Object"
                },
                {
                    "property": "myFavoriteWrapper"
                }
            ],
            "linkComponents": [
                "Hyperlink",
                {
                    "name": "Link",
                    "linkAttribute": "to"
                }
            ]
        }
};