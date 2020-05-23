var CONSTANT = require('CONSTANT');

var random = {
    
    get_random_item_from_array: function(some_array) {
        var random_item = Math.floor(Math.random() * some_array.length);
        return some_array[random_item]
    },
    
    get_random_role_from_all_roles: function() {
        role_list = CONSTANT.ALL_ROLES();
        var random_role = role_list[Math.floor(Math.random() * role_list.length)];
        return random_role;
    },
    
    value_zero_or_one: function() {
        zero_or_one = Math.floor(Math.random() * 1.9999);
        return zero_or_one;
    }
};

module.exports = random;