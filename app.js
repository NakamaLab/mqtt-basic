const mosca = require("mosca"),
    express = require("express"),
    http = require("http"),
    app = express(),
    mqttServ = new mosca.Server({
        port: 3002, //puerto TCP
        http: {
            port: 3001,// puerto web sockets
            bundle: true,
            static: './'
        }
    }),
    path = require("path"),
    port = 3000;//puerto http

app.use(express.static(path.dirname(require.resolve("mosca")) + "/public"))
app.use(express.static('./wwwroot'));

app.listen(port, function (err) {
    if (err) throw err;
    console.log(`MQTT Basic app listening on port ${port}!`)
});