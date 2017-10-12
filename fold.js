	
Sources

For a JavaScript solution for either client-side or server-side, you can use Node.js; however,

client side requires a package called: "NWJS" available here: http://nwjs.io/
server side only requires "Node.js" available here: https://nodejs.org
You can find extensive documentation on either of these "JavaScript" solutions; however, there are other "JavaScript" solutions available, NodeJS is very popular.

If you work with another language on the server, like PHP, you can find more info about it here: http://php.net



Solution

The following describes a JavaScript solution with code for server-side that you can just copy & paste and modify to your needs.

This assumes you are running NodeJs on Linux and that the file/folder (path) is not recursive. The example below is not tested, feel free to test & fix as necessary.

For the client-side code interacting with the "server-side" example below, create an HTML form that uses: method="PUT" and the fields as required by the vars; -OR- use an AJAX method to accomplish the same. 


Server-side: NodeJS

let http = require('http');
//File System package...
let fsys = require('fs');


let makePath = function(root, path, data)
{
    try
    {
        fsys.accessSync(root, fsys.W_OK);
    }
    catch(err)
    {
        return {code:403, text:'Forbidden'}
    }

    path = ((path[0] == '/') ? path.substr(1, path.length) : path);

    if (path.split('/').length > 2)
    { return {code:412, text:'Precondition Failed'}; }

    if (fsys.existsSync(path))
    { return {code:409, text:'Conflict'}; }

    if (path[path.length -1] == '/')
    { fsys.mkdirSync(root +'/'+ path.substr(0, path.length -2)); }
    else
    { fsys.writeFileSync((root +'/'+ path), (data || ' '), 'utf8'); }

    return {code:200, text:'OK'};
};


http.createServer
(
    function(request, response)
    {
        let vars = url.parse(request.url);

        if (path && (path.indexOf('/') > -1) && (request.method == 'PUT'))
        {
            var resp = makePath(__dirname, vars.path, vars.data);

            response.statusCode = resp.code;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resp.text);
        }
    }
).listen(8124);
