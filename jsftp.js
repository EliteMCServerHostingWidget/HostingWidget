var JSFtp = require("jsftp");

var Ftp = new JSFtp({
  host: "elitemcserverhosting.github.io/HostingWidget",
  port: 3331, // defaults to 21
  user: "MLW12252002", // defaults to "anonymous"
  pass: "elitemchosting" // defaults to "@anonymous"
});
Ftp.raw("mkd", "/new_dir", function(err, data) {
    if (err) return console.error(err);

    console.log(data.text); // Show the FTP response text to the user
    console.log(data.code); // Show the FTP response code to the user
});
ftp.ls(".", function(err, res) {
  res.forEach(function(file) {
    console.log(file.name);
  });
});
ftp.list(remoteCWD, function(err, res) {
  console.log(res);
  // Prints something like
  // -rw-r--r--   1 sergi    staff           4 Jun 03 09:32 testfile1.txt
  // -rw-r--r--   1 sergi    staff           4 Jun 03 09:31 testfile2.txt
  // -rw-r--r--   1 sergi    staff           0 May 29 13:05 testfile3.txt
  // ...
});
