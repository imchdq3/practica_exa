//https://www.eclipse.org/paho/clients/js/


function Encendido_led1() {
	message = new Paho.MQTT.Message("f1");
    message.destinationName = "imcs_1544c@hotmail.com/examen";
    client.send(message);
}
function Apagado_led1() {
	message = new Paho.MQTT.Message("f11");
    message.destinationName = "imcs_1544c@hotmail.com/examen";
    client.send(message);
}
function Encendido_led2() {
	message = new Paho.MQTT.Message("f2");
    message.destinationName = "imcs_1544c@hotmail.com/examen";
    client.send(message);
}
function Apagado_led2() {
	message = new Paho.MQTT.Message("f22");
    message.destinationName = "imcs_1544c@hotmail.com/examen";
    client.send(message);
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
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
	
    client.subscribe("imcs_1544c@hotmail.com/examen");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "imcs_1544c@hotmail.com/raspberry";
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
	 texto=(message.payloadString);
     text=(message.payloadString).split(" ")[0];
	 console.log(texto)
	 if (text=="led1"){
	  document.getElementById("led_1").innerHTML = texto;
	 }
     else if (text=="led2"){
	  document.getElementById("led_2").innerHTML = texto;
	 }
  
  
  }
  
