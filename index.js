var client = require('cheerio-httpcli');
const BASEURL = 'http://infinitylink.cloudno.de';

(function(url){
	console.log(url)
	client.fetch(url)
	.then((result)=>{
		var $ = result.$
		var a = $('a');
		if(a.length!=1){
			console.log(body)
		}else{
			console.log($('title').text())
			arguments.callee(BASEURL + a.attr('href').slice(1))
		}
	})
})(BASEURL)