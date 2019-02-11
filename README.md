# MQTT - BASIC
A Basic example of MQTT broker and websocket client using nodejs.

**Server Libraries**
- [Mosca](https://github.com/mcollina/mosca)
- [Express](https://expressjs.com/)

**Client Libraries**
- [MQTT-JS](https://github.com/mqttjs): [Embbebed in MOSCA](https://github.com/mcollina/mosca/wiki/MQTT-over-Websockets)


## Runing 

First install all the libraries running the following command

```bash
npm install
```

Then run the application 

```bash
node ./app.js
```

Open **two** browser tabs on `http://localhost:3000` and see how both tabs receibe the mesages.