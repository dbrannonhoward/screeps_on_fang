var CONSTANT = require('CONSTANT');
var logger = require('logger');
var query = require('query');
var random = require('random');

var spawner = {
    
    generate_unique_name: function() {
        var result = '';
        var name_length = CONSTANT.NAME_LENGTH();
        var selection = CONSTANT.NAME_CHARS();
        for (var i = 0; i < name_length; i++){
            result += selection.charAt(Math.floor(Math.random() * name_length));
        }
        return result;
    },
    
    spawn_creep: function(creep_spawner, creep_body, creep_memory) {
        Game.spawns[creep_spawner].spawnCreep(creep_body, this.generate_unique_name(), {memory: creep_memory});
    },
    
    spawn_creep_by_role: function(creep_role) {
        if (query.get_energy_of_spawn() > CONSTANT.ENERGY_TO_SPAWN_CREEP()) {
            Game.spawns[CONSTANT.MAIN_SPAWN()].spawnCreep(CONSTANT.DEFAULT_BODY(), this.generate_unique_name(), {memory: {role: 'upgrader'}});
        }
    },
    
    spawn_default_creeps: function() {
        if (query.get_energy_of_spawn() > CONSTANT.ENERGY_TO_SPAWN_CREEP() && query.get_count_of_all_creeps() < CONSTANT.CREEP_LIMIT()) {
            this.spawn_creep(CONSTANT.DEFAULT_SPAWN(), CONSTANT.DEFAULT_BODY(), CONSTANT.DEFAULT_MEMORY());
        }
    },
    
    spawn_random_creeps: function() {
        //if (query.get_energy_of_spawn() > CONSTANT.ENERGY_TO_SPAWN_CREEP() && query.get_count_of_all_creeps() < CONSTANT.CREEP_LIMIT()) {
            var random_role = random.get_random_role_from_all_roles();
            this.spawn_creep(CONSTANT.DEFAULT_SPAWN(), CONSTANT.DEFAULT_BODY(), CONSTANT.ALL_ROLES());
    },
    
};

module.exports = spawner;