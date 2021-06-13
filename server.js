var express = require('express');
var app = express();
var fs = require("fs");
const fetch = require('node-fetch');
myObj = new Object()
app.get('/centers', function (req, res) {
    fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=583212&date=15-05-2021',{
    
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
        console.log("First user in the array:");
        console.log(json.centers);
        res.end( JSON.stringify(json.centers[0].sessions));
        
})
            
            
    })


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})