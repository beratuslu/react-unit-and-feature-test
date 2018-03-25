/*eslint linebreak-style: ["error", "windows"]*/
module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    },
    "env": {
        "jest": true
    },
    "globals": {
        "document": true,
        "foo": true,
        "window": true,
        "browser": true
    },
};