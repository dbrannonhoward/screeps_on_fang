var CONSTANT = require('CONSTANT');
var logger = require('logger');
var query = require('query');
var random = require('random');
var role = require('role');
var spawner = require('spawner');
var test = require('test');
var timing = require('timing');
loop_count = 0;

module.exports.loop = function () {
    logger.log_to_console('there are builder : ' + query.get_count_of_role('builder'));
    logger.log_to_console('there are harvest : ' + query.get_count_of_role('harvester'));
    logger.log_to_console('there are upgrade : ' + query.get_count_of_role('upgrader'));
    spawner.spawn_creeps_random();
    for(var name in Game.creeps) {var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {role.harvest(creep);}
        if(creep.memory.role == 'upgrader')  {role.upgrade(creep);}
        if(creep.memory.role == 'builder')   {role.builder(creep);}}
    loop_count += 1;
}