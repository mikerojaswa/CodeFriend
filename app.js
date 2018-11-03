const express = require('express');
const app = express();

// Use the static content located inside public folder.
app.use(express.static(__dirname + '/public'));

// Listen on port 3000.
app.listen(3000, function () {
  console.log('Port 3000!');
});
