const core = require("@actions/core");

function IsProdFreezeInAction(startInterval, endInterval) {
    try {
        current = new Date();
        startTime = new Date(current.getTime());
        startTime.setHours(startInterval.split(":")[0]);
        startTime.setMinutes(startInterval.split(":")[1]);

        endTime = new Date(current.getTime());
        endTime.setHours(endInterval.split(":")[0]);
        endTime.setMinutes(endInterval.split(":")[1]);

        isInInterval = startTime < current && endTime > current
        return isInInterval

    } catch (err) {
        core.error(err);
        throw err;
    }
}

module.exports = IsProdFreezeInAction;
