var CONSTANT = require('CONSTANT');
var random = require('random');

var test = {
    
    check_if_random: function() {
        all_roles = CONSTANT.ALL_ROLES();
        num_of_builder = 0;
        num_of_harvest = 0;
        num_of_upgrade = 0;
        for (i=0; i<1000; i++) {
            random_role = random.get_random_item_from_array(all_roles);
            for (var role in all_roles) {
                if (random_role == 'builder') {
                    num_of_builder += 1;
                } else if (random_role == 'harvester') {
                    num_of_harvest += 1;
                } else if (random_role == 'upgrader') {
                    num_of_upgrade += 1;
                }
            }
        }
        console.log('builders : ' + num_of_builder + ' harvester : ' + num_of_harvest + ' upgrader : ' + num_of_upgrade);
    }
};

module.exports = test;