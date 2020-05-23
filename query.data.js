var query_data = {
    
    get_all_keys_from_hash: function(some_hash) {
        keys = _.keys(some_hash);
        return keys;
    },
    
    get_all_vals_from_hash: function(some_hash) {
        vals = _.values(some_hash);
        return vals;
    }
};

module.exports = query_data;