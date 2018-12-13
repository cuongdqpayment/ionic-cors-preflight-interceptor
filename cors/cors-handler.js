class CorsHandler {

    cors(req, res, next) {

      //console.log(req.originalUrl);
      console.log(req.url);

      res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
      //muon cho phep truy cap tu server nao thi reply cac website tuong ung
      res.header("Access-Control-Allow-Origin", "*"); //khai bao chap nhan tat ca de test

      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Credentials", true);
      next();
    }
  
  }
  
  module.exports = {
    CorsHandler: new CorsHandler() 
  };