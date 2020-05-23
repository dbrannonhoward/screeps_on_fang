var CONSTANT = require('CONSTANT');
var logger = require('log.data');

var query = {
    
    get_all_keys_from_hash: function(some_hash) {
        //console.log('DEBUG : get_all_keys_from_hash');
        var keys = _.keys(some_hash);
        return keys;
    },
    
    get_all_vals_from_hash: function(some_hash) {
        var vals = _.values(some_hash);
        return vals;
    },
    
    get_count_of_all_roles: function(all_creeps) {
        var roles = CONSTANT.ALL_AVAILABLE_ROLES();
        for (role in roles) {
            
        }
    },
    
    get_count_of_role: function(all_creeps, some_role) {
        var num_of_creeps = 0
        for (key in all_creeps) {
            if (all_creeps[key].memory.role == some_role) {
                num_of_creeps += 1
            }
        }  
    return num_of_creeps
    },
    
    get_memory_from_creep__role: function(all_creeps, creep_key) {
        var some_creep = all_creeps[creep_key];
        if (loop_count % CONSTANTS.REPORT_DELAY == 0) {
            var creep_memory = some_creep.memory.role
            return creep_memory;
        }
    },
    
    get_population_data: function(loop_count) {
        if (loop_count % CONSTANTS.REPORT_DELAY == 0) {
            var population_all = Object.keys(Game.creeps).length
            console.log(' + + + POPULATION REPORT AT REPORT_DELAY ' + CONSTANTS.REPORT_DELAY + ' + + + ');
            console.log(' pop_all : ' + population_all);
        }
    }
};

module.exports = query;