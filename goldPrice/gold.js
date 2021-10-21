import request from 'request';

const metal = "XAU";
const currency = "INR";

const metals = {
    'XAU':'gold',
    'XAG': 'silver',
    'XPT': 'platinum'
}


var options = {
    'method': 'GET',
    'url': `https://www.goldapi.io/api/${metal}/${currency}`,
    'headers': {
      'x-access-token': 'goldapi-rvxohtkv15o3q2-io',
      'Content-Type': 'application/json'
    }
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let inter = setInterval(()=>{
  request(options, function(err, response){
    if (err) throw console.error('Error:', err);
    // console.log(response.body);
    var data = JSON.parse(response.body);
    console.log(data.currency, numberWithCommas(data.price), data.metal);
})
}, 10000)
