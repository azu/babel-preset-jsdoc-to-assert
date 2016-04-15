module.exports = {
    plugins: [
        require("babel-plugin-auto-import-assert"),
        [require("babel-plugin-jsdoc-to-assert"), {
            "useNodeAssert": true
        }]
    ]
};