
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const server = http.createServer((request, response) => {

  const filePath = `.${request.url}`;

  if(filePath === './') {
    response.writeHead(400, {'content-type': 'text/html'});
    response.end('<h1>Include the desired file in the url.</h1>');
    return;
  }

  const filePathExtended = path.extname(filePath).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.otf': 'application/font-otf'
  }

  const contentType = mimeTypes[filePathExtended] || 'aplication/octet-stream';

  fs.readFile(filePath, (error, content) => {

    if(error){
      const statusCode = error.code === 'ENOENT' ? 404 : 505;
      const message = error.code === 'ENOENT'
        ? `<h1>${error.code} - NOT FOUND</h1>`
        : `<h1>${error.code} - INTERNAL SERVER ERROR</h1>`;

      response.writeHead(statusCode, {'contente-type': contentType});
      response.end(message);
      return;
    }

    response.writeHead(200, {'contente-type': contentType});
    response.end(content);
  });
});

const HOSTNAME = 'localhost';
const PORT = 3333;

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}.`);
});
