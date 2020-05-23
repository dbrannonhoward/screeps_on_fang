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
    test.check_if_random();
    console.log(random.get_random_item_from_array(CONSTANT.ALL_ROLES()));
    logger.log_to_console(query.get_count_of_all_creeps());
    spawner.spawn_default_creeps();
    for(var name in Game.creeps) {var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {role.harvest(creep);}
        if(creep.memory.role == 'upgrader')  {role.upgrade(creep);}
        if(creep.memory.role == 'builder')   {role.builder(creep);}}
    loop_count += 1;
}