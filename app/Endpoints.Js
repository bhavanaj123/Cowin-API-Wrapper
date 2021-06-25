var express = require('express')
,bodyParser = require('body-parser');;
const axios = require('axios').default;
var app = express();
app.use(bodyParser.json());

const fetch = require('node-fetch');
myObj = new Object()

 app.get('/states', function (req, res) {
         // let pin = req.query.pin;
    
     // console.log('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date);
          fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states',{
          
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
              res.end( JSON.stringify(json.states));
              
      })
                  
                  
          })      
 app.get('/dsts', function (req, res) {
            let state_id = req.query.state;
       // let date = req.query.date;
       // console.log('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date);
            fetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+state_id,{
            
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
                res.end( JSON.stringify(json.districts));
                
        })
                    
                    
            })
app.get('/bydist', function (req, res) {
              let d_id = req.query.dst;
          let date = req.query.date;
         // console.log('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date);
              fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+d_id+'&date='+date,{
              
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
                  res.end( JSON.stringify(json.sessions));
                  
          })
                      
                      
              })
app.get('/bycenter', function (req, res) {
                let c_id = req.query.cid;
            let date = req.query.date;
           // console.log('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+pin+'&date='+date);
                fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByCenter?center_id='+c_id+'&date='+date,{
                
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
                    res.end( JSON.stringify(json));
                    
            })
                        
                        
                })
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
                  //console.log(json.centers);
                  res.end( JSON.stringify(json.sessions));
                  
          })
                      
                      
              })
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})