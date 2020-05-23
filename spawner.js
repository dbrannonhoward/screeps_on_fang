var CONSTANT = require('CONSTANT');

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
        Game.spawns[CONSTANT.MAIN_SPAWN()].spawnCreep(CONSTANT.DEFAULT_BODY(), this.generate_unique_name(), {memory: {role: new_creep_role}});
    }
    
};

module.exports = spawner;