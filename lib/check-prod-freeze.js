const core = require("@actions/core");
const IsProdFreezeInAction = require("./is-prod-freeze-in-action");

async function checkProdFreeze(startInterval, endInterval, environment, forcedeploy) {
    try {
        if (environment == "prod" && forcedeploy != "true") {
            core.info(`Info: Validating Production Freeze Window between ${startInterval} and ${endInterval}`);
            if (IsProdFreezeInAction(startInterval, endInterval)) {
                message = `Not allowed to deploy in prod between ${startInterval} and ${endInterval}`
                console.log(message)
            }
        }
    } catch (err) {
        core.error(err);
        throw err;
    }
}

module.exports = checkProdFreeze;