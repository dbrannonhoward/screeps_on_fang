var CONSTANT = require('CONSTANT');
var logger = require('logger');

var query = {
    
    get_hash_keys: function(some_hash) {
        var keys = _.keys(some_hash);
        return keys;
    },
    
    get_hash_vals: function(some_hash) {
        var vals = _.values(some_hash);
        return vals;
    },
    
    get_count_of_role: function(role_to_count) {
        var role_count = 0;
        for (creep in Game.creeps) {
            creep_role = Game.creeps[creep].memory.role;
            if (creep_role == role_to_count) {
                role_count += 1;
            }
        }
        return role_count;
    },
    
    get_count_of_all_creeps: function() {
        var num_of_creeps = 0;
        for (key in Game.creeps) {
            num_of_creeps += 1;
        }
        return num_of_creeps;
    },
    
    get_count_of_creeps_with_role: function(some_role) {
        var num_of_creeps = 0;
        var all_creeps = Game.creeps;
        for (key in all_creeps) {
            if (all_creeps[key].memory.role == some_role) {
                num_of_creeps += 1;
            }
        }  
        return num_of_creeps;
    },
    
    get_energy_of_spawn_by_name: function(spawn_name) {
        var spawn_energy = Game.spawns[spawn_name].store.getUsedCapacity(RESOURCE_ENERGY);
        return spawn_energy;
    },
};

module.exports = query;