var all_creeps = Game.creeps

var test_function = {
    
    run: function() {
        keys = Object.keys(all_creeps);
        values = keys.map(function(val) { return all_creeps[val]; });
        console.log(keys + values);
    }
};

module.exports = test_function;