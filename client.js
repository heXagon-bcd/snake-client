//This module handles the connection with the server

const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,s
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are connected!");
    conn.write("Name: heX");
  });

  conn.on('data', () => {
    console.log('you died because you are idle');
  });
  return conn;
};

module.exports = {connect};

