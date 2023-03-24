const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541,// PORT number here,

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are connected!");
  });

  conn.on('data', () => {
    console.log('you died because you are idle')});

  return conn;
};

console.log("Connecting ...");

connect();

