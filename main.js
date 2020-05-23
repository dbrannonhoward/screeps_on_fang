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