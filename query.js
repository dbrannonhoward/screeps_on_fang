var CONSTANT = require('CONSTANT');
var filters = require('filters');
var logger = require('logger');

var query = {
    
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
    
    get_energy_of_extensions_at_spawn: function(spawn_name) {
        var total_energy_of_room = 0;
        var extensions_in_room = Game.spawns[spawn_name].room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_EXTENSION}});
        for (extension of extensions_in_room) {
            total_energy_of_room += extension.store.getUsedCapacity(RESOURCE_ENERGY);
        }
        return total_energy_of_room;
    },
    
    get_energy_of_room_containing_spawn: function(spawn_name) {
        var total_energy_of_room = 0;
        total_energy_of_spawn = this.get_energy_of_spawn_by_name(spawn_name);
        total_energy_of_extensions = this.get_energy_of_extensions_at_spawn(spawn_name);
        total_energy_of_room = total_energy_of_spawn + total_energy_of_extensions;
        logger.log_to_console(total_energy_of_room);
        return total_energy_of_room;
    },
    
    get_energy_of_spawn_by_name: function(spawn_name) {
        var spawn_energy = Game.spawns[spawn_name].store.getUsedCapacity(RESOURCE_ENERGY);
        return spawn_energy;
    },
    
    get_hash_keys: function(some_hash) {
        var keys = _.keys(some_hash);
        return keys;
    },
    
    get_hash_vals: function(some_hash) {
        var vals = _.values(some_hash);
        return vals;
    },
    
    get_pos_of_all_construction_sites_in_room: function(room_name) {
        return;
    },
    
    get_rooms_all: function() {
        return Game.rooms;
    },
};

module.exports = query;