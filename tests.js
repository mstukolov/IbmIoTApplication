/**
 * Created by Maxim on 17.02.2017.
 */


var schedule = require('node-schedule');
var i = 0;

var rule = new schedule.RecurrenceRule();
rule.second = [0, 10, 20, 30, 40, 50, 60];

var j = schedule.scheduleJob(rule, function(){
    var curTime = new Date();
    console.log('The answer to life, the universe, and everything:' + i + ":" + curTime);
    i++;
});