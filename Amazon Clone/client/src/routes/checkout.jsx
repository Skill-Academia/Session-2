The MIT License (MIT)

Copyright (c) Sebastian Mayr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMachineWorkflow = void 0;
const fs = require("fs");
const error_1 = require("../../../error");
const machine_workflow_1 = require("./machine_workflow");
/** Error for when the token is missing in the environment. */
const TOKEN_MISSING_ERROR = 'OIDC_TOKEN_FILE must be set in the environment.';
/**
 * Device workflow implementation for AWS.
 *
 * @internal
 */
class TokenMachineWorkflow extends machine_workflow_1.MachineWorkflow {
    /**
     * Instantiate the machine workflow.
     */
    constructor(cache) {
        super(cache);
    }
    /**
     * Get the token from the environment.
     */
    async getToken() {
        const tokenFile = process.env.OIDC_TOKEN_FILE;
        if (!tokenFile) {
            throw new error_1.MongoAWSError(TOKEN_MISSING_ERROR);
        }
        const token = await fs.promises.readFile(tokenFile, 'utf8');
        return { access_token: token };
    }
}
exports.TokenMachineWorkflow = TokenMachineWorkflow;
//# sourceMappingURL=token_machine_workflow.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            