//https://www.eclipse.org/paho/clients/js/


// Create a client instance
//client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
https://www.telecomunicaciones.gob.ec/wp-content/uploads/2016/08/Plan-de-Telecomunicaciones-y-TI..pdf
client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
var options = {
	useSSL: false,
	userName: "imcs_1544c@hotmail.com",
	password: "imc.hdq19940705.",
	onSuccess:onConnect,
	onFailure:doFail
}

// connect the client
client.connect(options);

// called when the client connects
function onConnect() {
// Once a connection has been made, make a subscription and send a message.
	console.log("Conectado...");
	client.subscribe("imcs_1544c@hotmail.com/test");
	message = new Paho.MQTT.Message("hola desde la web");
	message.destinationName = "imcs_1544c@hotmail.com/test1";
	client.send(message);
	
}
 
function doFail(e){
	console.log(e);
	}

  // called when the client loses its connection
function onConnectionLost(responseObject) {
	if (responseObject.errorCode !== 0) {
		console.log("onConnectionLost:"+responseObject.errorMessage);
}
}

  // called when a message arrives
  function onMessageArrived(message) {
	console.log("onMessageArrived:"+message.payloadString);
	document.getElementById("led_1").innerHTML=message.payloadString.split("=")[2]
	document.getElementById("led_2").innerHTML=message.payloadString.split("=")[1]
	document.getElementById("hora").innerHTML=message.payloadString.split("=")[3]
}
function on1() {
	
	console.log("led on");
	message = new Paho.MQTT.Message("LED_ON");
	message.destinationName = "imcs_1544c@hotmail.com/test1";
	client.send(message);
	document.getElementById("estadoled1").innerHTML="LED encendido";
  
}
function off1(){	
	
	console.log("led off");
	message = new Paho.MQTT.Message("LED_Off");
	message.destinationName = "imcs_1544c@hotmail.com/test1";
	client.send(message);
	document.getElementById("estadoled1").innerHTML="LED apagado";
}

function on2() {
	
	console.log("led on");
	message = new Paho.MQTT.Message("LED_ON");
	message.destinationName = "imcs_1544c@hotmail.com/test1";
	client.send(message);
	document.getElementById("estadoled2").innerHTML="LED encendido";
  
}
function off2(){	
	
	console.log("led off");
	message = new Paho.MQTT.Message("LED_Off");
	message.destinationName = "imcs_1544c@hotmail.com/test1";
	client.send(message);
	document.getElementById("estadoled2").innerHTML="LED apagado";
}