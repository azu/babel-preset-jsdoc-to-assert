module.exports = {
    plugins: [
        [
            require("babel-plugin-jsdoc-to-assert"),
            {
                checkAtParam: true,
                checkAtType: false
            }
        ]
    ]
};