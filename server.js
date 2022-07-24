const app = require("./app");

var http = require("http");

const port = 81; // Setting an port for this application

app.set("port", port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

// Starting server using listen function
server.listen(port, function (err) {
  if (err) {
    console.log("Error while starting server");
  } else {
    console.log("Server has been started at " + port);
  }
});
