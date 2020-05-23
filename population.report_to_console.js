var report_delay = 200;  // report once every report_delay loops
 
var report_population_to_console = {

    run: function(loop_count) {
        if (loop_count % report_delay == 0) {
            var population_all = Object.keys(Game.creeps).length
            console.log(' + + + POPULATION REPORT AT REPORT_DELAY ' + report_delay + ' + + + ');
            console.log(' pop_all : ' + population_all);
        }
    }
}

module.exports = report_population_to_console;