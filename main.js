var logger = require('log.data');
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var query_data = require('query.data');

loop_count = 0;

module.exports.loop = function () {
    creep_hash = Game.creeps
    query_data.get_population_data(loop_count);
    creep_keys = query_data.get_all_keys_from_hash(creep_hash, loop_count);
    creep_vals = query_data.get_all_vals_from_hash(creep_hash, loop_count);
    if (typeof creep_keys != 'undefined') {
        logger.log_to_console('creep keys : ' + creep_keys + ', creep vals : ' + creep_vals);
    }
    for (key in creep_hash) {
        creep_memory = query_data.get_memory_from_creep__role(creep_hash, key);
        if (typeof creep_memory != "undefined") {
            logger.log_to_console(creep_memory);   
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
    loop_count += 1;
}