var config = {};

/** ------------------------------------------------------  Config for Ram test */
config.ram = {};
config.ram.db = {};
config.ram.db.port = 27017;
config.ram.db.url = 'localhost';
config.ram.db.username = 'mongoDBUser';
config.ram.db.password = 'PerMongo';
config.ram.db.databaseName = "ram_VSCDB";
config.ram.db.connectionString = "mongodb://" +
        // config.ram.db.username + ":" +
        // config.ram.db.password + "@" +
        config.ram.db.url + ":" +
        config.ram.db.port + "/" +
        config.ram.db.databaseName;

// Default regionCode
config.ram.default = {};
config.ram.default.regionCode = "US";
// Invite link Url
config.ram.inviteLinkUrl = 'localhost';
// if running the test case in localhost the debug should be true so that mail will not go
config.ram.debug = true;

// Config for Office365 SMTP
config.ram.smtp = {
    host: 'smtp.gmail.com', port: 587,
    auth: {
        user: 'ramkumar.consult@gmail.com',
        pass: 'Ram'
    }
};

config.ram.constants = {};
// expiration time for the reset token mesiour in ms.
config.ram.constants.expirationTime = 3600000 
// how far back in time to count the statistics.
config.ram.constants.statistic_day_span = 7;
// threshold for how many actuator adjustments per @statistic_day_span to be considered as active
config.ram.constants.statistic_active_threshold = 10;
// threshold for how many minimum actuator adjustments per @statistic_day_span to be considered as active
config.ram.constants.statistic_inactive_threshold = 2;
// High limit for clinic statistics
config.ram.constants.high_limit = 75;
// Low limit for clinic statistics
config.ram.constants.low_limit = 50;
// time in minutes who a user shall be locked 
config.ram.constants.lockTime = 15;
// number of login atempts before the account will be locked
config.ram.constants.loginAtempts = 5;
// Threshold for clinician actions per @statistic_day_span to be considered as active, an action could be to view or edit a client
config.ram.constants.statistic_clincian_active_threshold = 5;

config.ram.constants.sync_interval_min = "30";



/** ------------------ Set current config on startup, based on --config argument */
var currentConfig = null;

process.argv.forEach(function (val, index, array) {
    if (val.startsWith("--config=")) {
        var sConfigEnv = val.substring(9, val.length);
        try {
            currentConfig = config[sConfigEnv];
        } catch (err) {
            // Exit if something went wrong.
            console.log(err);
            console.log("Could not find configuration environment: " + sConfigEnv);
            return process.exit();
        }
   
    }
});
// If not set use prod
if (currentConfig == null)
    currentConfig = config.ram;


module.exports = currentConfig;
