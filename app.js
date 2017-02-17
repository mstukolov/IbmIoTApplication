//https://www.npmjs.com/package/ibmiotf
var Client = require('ibmiotf');

var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

var config = {
    "org" : "kwxqcy",
    "id" : "6666",
    "domain": "internetofthings.ibmcloud.com",
    "type" : "SmartCooler",
    "auth-method" : "token",
    "auth-token" : "12345678"
};

var deviceClient = new Client.IotfDevice(config);
deviceClient.connect();


deviceClient.on('connect', function () {
    publishMessageOnScheduleQosLevel();
});


function publishMessageOnSchedule() {
    var j = schedule.scheduleJob(rule, function(){
        deviceClient.publish("status","json",'{"d" : { "cpu" : 100, "mem" : 100 }}');
        //console.log('Message have been sent');
    });
}

function publishMessageOnScheduleQosLevel() {
    var j = schedule.scheduleJob(rule, function(){
        var myQosLevel=2
        deviceClient.publish("status","json",'{"d" : { "cpu" : 60, "mem" : 50 }}', myQosLevel);
        //console.log('QosLevel Message have been sent');
    });
}

function sendCommandOnSchedula() {
    
}


deviceClient.on("command", function (commandName,format,payload,topic) {
    if(commandName === "blink") {
        //function to be performed for this command
        blink(payload);
    } else {
        console.log("Command not supported.. " + commandName);
    }
});
function  blink() {
    console.log('blink');
}
