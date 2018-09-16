const { declare } = require("@babel/helper-plugin-utils");
module.exports = declare(api => {
    api.assertVersion(7);
    return {
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
});
