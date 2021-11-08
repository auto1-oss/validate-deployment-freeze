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
