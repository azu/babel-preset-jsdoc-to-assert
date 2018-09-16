const assert = require('assert');
const fs = require('fs');
const path = require('path');
const transformFileSync = require("@babel/core").transformFileSync;

function trim(str) {
    return str.replace(/^\s+|\s+$/, '');
}

const fixturesDir = path.join(__dirname, 'fixtures');
describe('finds JSDoc', function() {
    fs.readdirSync(fixturesDir).map(function(caseName) {
        it("should " + caseName.split('-').join(' '), function() {
            const fixtureDir = path.join(fixturesDir, caseName);
            let actualPath = path.join(fixtureDir, 'actual.js');
            const actual = transformFileSync(actualPath).code;

            if (path.sep === '\\') {
                // Specific case of windows, transformFileSync return code with '/'
                actualPath = actualPath.replace(/\\/g, '/');
            }


            const expectedPath = path.join(fixtureDir, 'expected.js');
            const expected = fs.readFileSync(
                expectedPath
            ).toString().replace(/%FIXTURE_PATH%/g, actualPath);

            if (process.env.UPDATE_SNAPSHOT) {
                fs.writeFileSync(expectedPath, actual);
                this.skip();
                return;
            }
            assert.equal(trim(actual), trim(expected));
        });
    });
});
