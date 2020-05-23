var logger = require('log.data');
var report_delay = 50;

var query_data = {
    
    get_all_keys_from_hash: function(some_hash, loop_count) {
        k_type = typeof some_hash
        l_type = typeof loop_count
        if (k_type == "object" && l_type == "number") {
            if (loop_count % report_delay == 0) {
                keys = _.keys(some_hash);
                return keys;
            }
        } else {
            console.log('error : wrong input type : get_all_keys_from_hash');
        }
    },
    
    get_all_vals_from_hash: function(some_hash) {
        vals = _.values(some_hash);
        return vals;
    },
    
    get_memory_from_creep__role: function(all_creeps, creep_key) {
        some_creep = all_creeps[creep_key];
        if (loop_count % report_delay == 0) {
            creep_memory = some_creep.memory.role
            return creep_memory;
        }
    },
    
    get_population_data: function(loop_count) {
        l_type = typeof loop_count
        if (l_type == "number") {
            if (loop_count % report_delay == 0) {
                var population_all = Object.keys(Game.creeps).length
                console.log(' + + + POPULATION REPORT AT REPORT_DELAY ' + report_delay + ' + + + ');
                console.log(' pop_all : ' + population_all);
            }
        } else {
            console.log('error : wrong input type : run')
        }
    }
};

module.exports = query_data;