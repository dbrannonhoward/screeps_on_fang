var CONSTANT = require('CONSTANT');

var logger = {
    
    log_to_console: function(some_string) {
        if (loop_count % CONSTANT.LOG_PERIOD() == 0) {
            console.log(some_string);   
        }
    },
};

module.exports = logger;