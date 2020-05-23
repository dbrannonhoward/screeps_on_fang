var query_data = require('query.data');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var report_population_to_console = require('population.report_to_console');

loop_count = 0;

module.exports.loop = function () {
    
    report_population_to_console.run(loop_count);
    creep_hash = Game.creeps
    creep_keys = query_data.get_all_keys_from_hash(creep_hash);
    creep_vals = query_data.get_all_vals_from_hash(creep_hash);
    console.log(creep_keys)
    console.log(creep_vals)

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