var CONSTANT = require('CONSTANT');
var random = require('random');
var query = require('query');

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
    
    spawn_creep_by_role: function(new_creep_role) {
        var spawn_energy_available = query.get_energy_of_spawn();
        if (spawn_energy_available > 200) {
            //var random_role = random.get_random_role_from_all_roles();
            //Game.spawns[CONSTANT.MAIN_SPAWN()].spawnCreep(CONSTANT.DEFAULT_BODY(), this.generate_unique_name(), {memory: {role: random_role}});
            Game.spawns[CONSTANT.MAIN_SPAWN()].spawnCreep(CONSTANT.DEFAULT_BODY(), this.generate_unique_name(), {memory: {role: 'upgrader'}});
        }
    }
    
};

module.exports = spawner;