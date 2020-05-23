var logger = require('logger');
var random = require('random');
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var query = require('query');
var spawner = require('spawner');

loop_count = 0;

module.exports.loop = function () {
    
    spawner.spawn_creep_by_role('upgrader');
    
    creep_keys = query.get_all_keys_from_hash(Game.creeps, loop_count);
    creep_vals = query.get_all_vals_from_hash(Game.creeps, loop_count);
    
    log_string = 'creep keys : ' + creep_keys + ', creep vals : ' + creep_vals
    logger.log_to_console(log_string, loop_count);
    
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