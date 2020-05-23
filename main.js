var logger = require('logger');
var random = require('random');
var role = require('role');
var query = require('query');
var spawner = require('spawner');

loop_count = 0;

module.exports.loop = function () {

    logger.log_to_console(query.get_count_of_all_creeps());
    
    spawner.spawn_default_creeps();
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            role.harvest(creep);
        }
        if(creep.memory.role == 'upgrader') {
            role.upgrade(creep);
        }
        if(creep.memory.role == 'builder') {
            role.build(creep);
        }
    }
    loop_count += 1;
}