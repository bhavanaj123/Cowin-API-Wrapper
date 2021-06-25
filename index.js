const express = require("express");
const cors = require("cors");
const app = express();
global.__basedir = __dirname;

var corsConfig = {
  origin: "http://localhost:8081"
};
app.use(cors(corsConfig));
app.use( express.json() );   
app.use(express.urlencoded({ 
  extended: true 
}));

const fetch = require('node-fetch');
myObj = new Object()
app.get('/sevenbypin', function (req, res) {
            let pin = req.query.pin;
        let date = req.query.date;
       // console.log('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date);
            fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date,{
            
          method: 'GET',
          headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,kn;q=0.8',
        'cache-control': 'max-age=0',
        'if-none-match': 'W/"623-dhjKNwDguPe93PO7B8mabFkLR3A',
        'sec-ch-ua': 'Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        'sec-ch-ua-mobile': '?1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36',
            
          }
        })
            .then(res => res.json())
            .then(json => {
                //console.log("First user in the array:");
                //console.log(json.centers);
                res.end( JSON.stringify(json.centers));
                
        })
                    
                    
            })
app.get('/bypin', function (req, res) {
              let pin = req.query.pin;
          let date = req.query.date;
         // console.log('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date);
              fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date='+date,{
              
            method: 'GET',
            headers: {
              accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9,kn;q=0.8',
          'cache-control': 'max-age=0',
          'if-none-match': 'W/"623-dhjKNwDguPe93PO7B8mabFkLR3A',
          'sec-ch-ua': 'Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          'sec-ch-ua-mobile': '?1',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'none',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36',
              
            }
          })
              .then(res => res.json())
              .then(json => {
                  //console.log("First user in the array:");
                  console.log(json);
                  res.end( JSON.stringify(json.sessions));
                  
          })
                      
                      
              })    

app.get('/confirmed', function (req, res) {
              
         // console.log('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date);
              fetch('https://covid19.mathdro.id/api/confirmed',{
              
            method: 'GET',
            headers: {
              accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9,kn;q=0.8',
          'cache-control': 'max-age=0',
          'if-none-match': 'W/"623-dhjKNwDguPe93PO7B8mabFkLR3A',
          'sec-ch-ua': 'Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          'sec-ch-ua-mobile': '?1',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'none',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36',
              
            }
          })
              .then(res => res.json())
              .then(json => {
                  //console.log("First user in the array:");
                  console.log(json);
                  res.end( JSON.stringify(json));
                  
          })
                      
                      
              }) 
const port = process.env.PORT || 8081;
app.listen(port,  ()=> {
  
   console.log("Example app listening at 8081")
})
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Error occured'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
