var CONSTANT = require('CONSTANT');

var logger = {
    
    log_to_console: function(some_string, loop_count) {
        if (loop_count % CONSTANT.LOG_PERIOD() == 0) {
            console.log(some_string);   
        }
    },
    
    empty_function: function() {
        return;
    }
};

module.exports = logger;