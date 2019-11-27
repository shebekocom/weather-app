module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")]
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