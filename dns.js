var dns = require('dns');
var w3 = dns.lookup('elitemchosting.tk', function (err, addresses, family) {
  console.log(addresses);
});
