//https://www.npmjs.com/package/ibmiotf
var Client = require('ibmiotf');

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

    console.log('Loged in....');
    //publishing event using the default quality of service
    deviceClient.publish("status","json",'{"d" : { "cpu" : 60, "mem" : 50 }}');

    //publishing event using the user-defined quality of service
    var myQosLevel=2
    deviceClient.publish("status","json",'{"d" : { "cpu" : 60, "mem" : 50 }}', myQosLevel);

});




console.log('XXXXXXXXXXXXX');