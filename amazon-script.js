const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const URL = "https://www.amazon.in/s/ref=sr_pg_1?page=1&keywords=ac";


request(URL,function (error, response, body) {
    if(error)
    {
        console.log(error);
    }
    if(response.statusCode===200)
    {
        console.log("everything is working fine!!")
    }
    const $ = cheerio.load(body);
    //console.log(body);

    $('div#rightContainerATF > div#rightResultsATF > div#resultsCol > div#centerMinus > div#atfResults > ul#s-results-list-atf> li.s-result-item >div.s-item-container > div.a-fixed-left-grid > div.a-fixed-left-grid-inner > .a-col-right').each(function (index) {
        //console.log("Ashish_Kr");
        const data = $(this).find('.a-row>.a-span7>.a-spacing-none>a>span.a-color-price').text();
        console.log(data);

    })



});
