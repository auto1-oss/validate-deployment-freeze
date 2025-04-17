/*
 * This file is part of the auto1-oss/validate-deployment-freeze.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const core = require("@actions/core");
const IsProdFreezeInAction = require("./is-prod-freeze-in-action");

async function checkProdFreeze(startInterval, endInterval, environment, forcedeploy) {
    try {
        if (environment == "prod" && forcedeploy != "true") {
            core.info(`Info: Validating Production Freeze Window between ${startInterval} and ${endInterval}`);
            if (IsProdFreezeInAction(startInterval, endInterval)) {
                core.error(`✘ Failed: Not allowed to deploy in prod between ${startInterval} and ${endInterval}`);
                process.exit(1);
            }
        }
    } catch (err) {
        core.error(err);
        throw err;
    }
}

module.exports = checkProdFreeze;