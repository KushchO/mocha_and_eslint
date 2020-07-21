module.exports = {
    "env": {
        "browser": true,        
        "node": true,
        "mocha": true,
        "es2020": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": ["error", { "vars": "all" }],            
    },
    
};
