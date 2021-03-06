let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(key){
    if (key === "\u0003"){
      process.exit();
    }
    if (key === "w"){
      conn.write("Move: up");
    }
    if (key === "a"){
      conn.write("Move: left");
    }
    if (key === "s"){
      conn.write("Move: down");
    }
    if (key === "d"){
      conn.write("Move: right");
    }
    if (key === "f"){
      conn.write("Say: f");
    }
  }
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = {setupInput};
