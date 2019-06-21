const fs = require("fs");

for (let i = 0; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

fs.readFile(process.argv[0], function(err, data) {
  //returns a buffer... hmmm
  console.log(data);
});
