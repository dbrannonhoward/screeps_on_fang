var CONSTANT = require('CONSTANT');

var logger = {
    
    log_to_console: function(some_string, loop_count) {
        //console.log('DEBUG : log_to_console');
        if (loop_count % CONSTANT.REPORT_DELAY == 0) {
            console.log(some_string);   
        }
    },
    
    empty_function: function() {
        //console.log('DEBUG : empty_function');
        return;
    }
};

module.exports = logger;