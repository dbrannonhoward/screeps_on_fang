var timing = {
    
    convert_ms_timestamp_to_minutes: function(ms_delta) {
        return
    },
    
    get_hour: function() {
        var d = new Date();
        return d.getHours();
    },
    
    get_minute: function() {
        var d = new Date();
        return d.getMinutes();
    },
    
    get_second: function() {
        var d = new Date();
        return d.getSeconds();
    },
    
    get_ms_timestamp: function() {
        var d = new Date();
        var now = d.getTime();
        return now;
    },
};

module.exports = timing;