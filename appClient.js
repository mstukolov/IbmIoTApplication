/**
 * Created by Stukolov on 16.02.2017.
 */

var Client = require("ibmiotf");
var appClientConfig = {
    org: 'kwxqcy',
    id: 'a:kwxqcy:app12',
    "auth-key": 'a-kwxqcy-jc5hvcxtaf',
    "auth-token": 'TGw(JUVyCdtAlRTvzt',
    "type" : "shared" // make this connection as shared subscription
};
var appClient = new Client.IotfApplication(appClientConfig);
appClient.connect();

/*
appClient.on("connect", function () {

    appClient.subscribeToDeviceEvents();
});*/
