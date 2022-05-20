const func = (path, ID, src, f) => {
  var wsImpl = window.WebSocket || window.MozWebSocket;
  var ws = new wsImpl(`ws://localhost:80${path}`);
  ws.onmessage = function (evt) {
    const elem = document.getElementById(ID);
    elem[src] = f(evt.data);
  };
  return ws;
};
var EMA = 0.2;
const get_EMA = (val) => {
  EMA = EMA + 0.5 * (val - EMA);
};
const fa = (val) => {
  val = parseFloat(val.replace(",", "."));
  var emoji = ["128552", "128550", "128528", "128512", "128525"].map(
    (e) => "&#" + e + ";"
  );
  var step = 1.0 / emoji.length;
  var i = 0;
  get_EMA(val);
  while (EMA >= step * ++i) {}
  console.log(EMA);
  return emoji[Math.min(emoji.length - 1, i - 1)];
};
var start = function () {
  window.ws = func(
    "/",
    "image",
    "src",
    (data) => `data:image/png;base64, ${data}`
  );
  //   func("/", "titulo", "innerHTML", (data) => data.length);
  func("/score", "titulo", "innerHTML", (data) => EMA);
  func("/score", "emoji", "innerHTML", (data) => fa(data));
  ws.onopen = function () {
    console.log("Connected");
  };
  ws.onclose = function () {
    console.log("Closed");
    start();
  };
  // document.getElementById("sendTextField1").onclick = function () {
  //   sendToSocket(document.getElementById("textField1").value);
  // };

  function sendToSocket(value) {
    console.log("Sending value to socket " + value + " ");
    ws.send(value);
  }
};
export { start };

import React from "react";
export default function(){return <h1>404</h1>}
//   window.onload = start;
 