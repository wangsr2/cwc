var products;

var request = new XMLHttpRequest();
request.open('GET', 'products.json');
request.responseType = 'json';

request.onload = function() {
  if(request.status === 200) {
    products = request.response;
    
    initialize();
  } else {
    console.log('网络请求products.json失败，响应码' + request.status + ': ' + request.statusText)
  }
};

request.send();

function initialize(){
    console.log(products);

}