const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are connected!");
    conn.write("Name: heX");
  //   setTimeout(() => {conn.write("Move: up")}, 1000);
  //   setTimeout(() => {conn.write("Move: up")}, 2000);
  //   setTimeout(() => {conn.write("Move: up")}, 3000);
  //   const hello = setInterval(() => {
  //     conn.write("Move: up")
  //   }, 500);
  //  setTimeout(() => {clearInterval(hello)},5000);
  });

  conn.on('data', () => {
    console.log('you died because you are idle')});

  return conn;
};

module.exports = {connect};

