class CorsHandler {

    cors(req, res, next) {

      //console.log(req.originalUrl);
      console.log(req.url);
      console.log(req.headers);

      let ip;
      if (req.headers["client_ip"]){
        ip=req.headers["client_ip"];
      }else if (req.headers["x-real-ip"]){
          ip=req.headers["x-real-ip"];
      }else if (req.headers["x-forwarded-for"]){
          ip=req.headers["x-forwarded-for"];
      }else if (req.headers["remote_add"]){
          ip=req.headers["remote_add"];
      }else{
          ip=req.ip;
      }
      req.clientIp = ip;

      res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");

      let origin = req.headers&&req.headers.origin?req.headers.origin:req.headers&&req.headers.referer?req.headers.referer:'';

      if (origin){
        console.log('origin: ' + origin);
        res.header("Access-Control-Allow-Origin", origin); 
      }

      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Credentials", true);
      next();
    }
  
  }
  
  module.exports = {
    CorsHandler: new CorsHandler() 
  };