var CONSTANT = {
    
    ALL_ROLES: function() {
        const ROLES = ['builder', 'harvester', 'upgrader'];
        return ROLES;
    },
    
    DEFAULT_BODY: function() {
        const DEFAULT_BODY = [WORK, CARRY, MOVE];
        return DEFAULT_BODY;
    },
    
    MAIN_SPAWN: function() {
        const MAIN_SPAWN = 'home';
        return MAIN_SPAWN;
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