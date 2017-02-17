/**
 * Created by Stukolov on 17.02.2017.
 */
var Client = require("ibmiotf");
var config = {
    "org" : "kwxqcy",
    "type" : "gwtype",
    "id" : "Gateway01",
    "domain": "internetofthings.ibmcloud.com",
    "auth-method" : "token",
    "auth-token" : "qwerty123"
};

var gatewayClient = new Client.IotfGateway(config);
//setting the log level to trace. By default its 'warn'
gatewayClient.log.setLevel('debug');

gatewayClient.connect();

gatewayClient.on('connect', function(){


});
gatewayClient.on('connect', function(){
 //publishing device events with deviceType 'Raspi' and deviceId 'pi01' using the default quality of service
    for(var i=0; i< 10; i++){
        var devicename = "SmartCooler0" + i;
        gatewayClient.publishDeviceEvent("AutoCooler",devicename, "status","json",'{"d" : { "cpu" : 60, "mem" : 50 }}');
    }
 });

/*gatewayClient.on('connect', function(){
    //publishing device events with deviceType 'Raspi' and deviceId 'pi01' using the default quality of service
    gatewayClient.publishDeviceEvent("Raspi","pi01", "status","json",'{"d" : { "cpu" : 60, "mem" : 50 }}');

    //publishing event using the user-defined quality of service
    var myQosLevel=2
    gatewayClient.publishDeviceEvent("Raspi","pi01","status","json",'{"d" : { "cpu" : 60, "mem" : 50 }}', myQosLevel);
});*/
