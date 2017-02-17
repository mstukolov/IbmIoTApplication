/**
 * Created by Stukolov on 16.02.2017.
 */

var Client = require("ibmiotf");
var appClientConfig = {
    "org" : 'kwxqcy',
    "id" : 'a-kwxqcy-app1',
    "domain": "internetofthings.ibmcloud.com",
    "auth-key" : 'a-kwxqcy-1dw7hvzvwk',
    "auth-token" : 'tsM8N(FS@iOc3CId+5'
}

var appClient = new Client.IotfApplication(appClientConfig);
appClient.connect();

appClient.on("connect", function () {
    console.log('IOTHUB is connected');
    appClient.subscribeToDeviceEvents("SmartCooler", "C2MSmartCooler");
    appClient.subscribeToDeviceEvents("SmartCooler", "6666");
    //appClient.subscribeToDeviceEvents("SmartCooler", "C2MSmartCooler2");
});
appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {

    //console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType+" with payload : "+payload);

});
appClient.on("connect", function () {

    //var myData={'name' : 'foo', 'cpu' : 60, 'mem' : 50};
    var myData={"rel":0};

    myData = JSON.stringify(myData);
    //appClient.publishDeviceEvent("SmartCooler","C2MSmartCooler", "myEvent", "json", myData);
    appClient.publishDeviceCommand("SmartCooler","C2MSmartCooler", "rele", "json", myData);
    console.log("C2MSmartCooler is rebooted");
});
