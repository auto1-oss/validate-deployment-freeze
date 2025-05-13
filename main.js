/*
 * This file is part of the auto1-oss/validate-deployment-freeze.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const checkProdFreeze = require("./lib/check-prod-freeze");
const core = require("@actions/core");
const forcedeploy = core.getInput("force_deploy");
const env = core.getInput("env");
const freezestart = core.getInput("freezeStart");
const freezeend = core.getInput("freezeEnd");

try {
    checkProdFreeze(freezestart,freezeend,env,forcedeploy); 
} catch (error) {
    core.setFailed(error.message);
}
