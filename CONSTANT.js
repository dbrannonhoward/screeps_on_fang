var CONSTANT = {
    
    ALL_ROLES: function() {
        const ROLES = ['builder', 'harvester', 'upgrader'];
        return ROLES;
    },
    
    CREEP_LIMIT: function() {
        const CREEP_LIMIT = 1;
        return CREEP_LIMIT;
    },
    
    DEFAULT_BODY: function() {
        const DEFAULT_BODY = [WORK, CARRY, MOVE];
        return DEFAULT_BODY;
    },
    
    DEFAULT_MEMORY: function() {
        const DEFAULT_MEMORY = {role: 'upgrader'};
        return DEFAULT_MEMORY;
    },
    
    DEFAULT_ROLE: function() {
        const DEFAULT_ROLE = 'upgrader';
        return DEFAULT_ROLE;
    },
    
    DEFAULT_SPAWN: function() {
        const MAIN_SPAWN = 'home';
        return MAIN_SPAWN;
    },
    
    ENERGY_TO_SPAWN_CREEP: function() {
        const ENERGY_TO_SPAWN_CREEP = 200;
        return ENERGY_TO_SPAWN_CREEP;
    },
    
    NAME_CHARS: function() {
        const NAME_CHARS = '0123456789';
        return NAME_CHARS;
    },
    
    NAME_LENGTH: function() {
        const NAME_LENGTH = 5;
        return NAME_LENGTH;
    },
    
    LOG_PERIOD: function() {
        const LOG_PERIOD = 50;
        return LOG_PERIOD;
    }
};

module.exports = CONSTANT;