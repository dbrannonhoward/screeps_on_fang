var testFunction = require('test.function')
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var report_population_to_console = require('population.report_to_console');

loop_count = 0;

module.exports.loop = function () {
    
    testFunction.run();
    
    report_population_to_console.run(loop_count);

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