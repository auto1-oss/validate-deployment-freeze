/*
 * This file is part of the auto1-oss/validate-deployment-freeze.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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
