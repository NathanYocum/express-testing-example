module.exports = {
    "extends": "airbnb-base",
    "plugins": ["jest"],
    "rules": {
        "no-console": 0,
        "prefer-promise-reject-errors": 0,

    },
    "env": {
        "jest/globals": true,
        "node": true,
    }
};