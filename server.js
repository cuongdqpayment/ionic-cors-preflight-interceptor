const express = require('express');
//const bodyParser = require('body-parser');
const fs = require('fs');

const os = require('os');

const corsHandler = require('./cors/cors-handler');

function main(isHttp, isHttps) {

  let app = express(); // Export app for other routes to use
  
  //khoi tao trung gian xu ly dieu khien tao token, database
  let handlers = corsHandler.CorsHandler;
 
  app.use(handlers.cors);

  const speedtest = require('./routes/speedtest');
  app.use('/api/speedtest', speedtest); 
  

  //ham tra loi cac dia chi khong co
  //The 404 Route (ALWAYS Keep this as the last route)
  app.all('*',(req, res) => {
    //gui trang thai bao noi dung tra ve
  
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Xin lỗi trang bạn muốn tìm không tồn tại!</h1>Địa chỉ ip của bạn là : ' + req.clientIp);
  });

  //ham xu ly loi cuoi cung
  //app.use(handlers.errorProcess);

  if (isHttp) {
    // your express configuration here
    // For http
    const http = require('http');
    const httpServer = http.createServer(app);
    const portHttp = process.env.PORT || isHttp;
    httpServer.listen(portHttp, () => {
      console.log("Server HTTP (" + os.platform() + "; " + os.arch() + ") is started with PORT: "
        + portHttp
        + "\n tempdir: " + os.tmpdir()
        + "\n " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      );
    });
  }

  if (isHttps) {
    // For https
    const https = require('https');
    const privateKey = fs.readFileSync('cert/private_key.pem', 'utf8');
    const certificate = fs.readFileSync('cert/certificate.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate };
    const portHttps = process.env.PORT || isHttps;
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(portHttps, () => {
      console.log("Server HTTPS (" + os.platform() + "; " + os.arch() + ") is started with PORT: "
        + portHttps
        + "\n tempdir: " + os.tmpdir()
        + "\n " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      );
    });
  }
}

//=false or port number >1000
const isHttp = 9235;
const isHttps = false //8443; 

main(isHttp, isHttps);