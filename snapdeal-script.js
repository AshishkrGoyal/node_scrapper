const request = require('request');
const argv = require('yargs').argv;
const fs = require('fs');
const cheerio = require('cheerio');

const Item = argv.c;
const URL = "https://www.snapdeal.com/search?keyword="+Item;

request(URL, function (err, response, body) {
    if (err) {
        console.log(err);
    }
    if (response.statusCode === 200) {
        console.log('Good Request!!');
    }

    //console.log(body);

    //window.scrollTo(0,document.body.scrollHeight);
    const $ = cheerio.load(body);

    const A = $(this).find('html > body > #sdFooter>.middleContent-footer>.lowerContent-footer>.footer-inner>.brandContainerFooter>p').text();
    console.log(A);
   // while (1) {
            let A1 = 1;
        $('.marT22 > .col-xs-19  >.comp > div#products > section.js-section > div.col-xs-6 > .product-tuple-description > .product-desc-rating > a').each(function (index) {
            //console.log('inside index!!');
            //console.log($(this).find('.search-result-header > .seach-msg-sec > #searchMessageContainer >.search-result-txt-section > span').text());


            const complete = {};
            complete.data = $(this).find('p.product-title ').text();
            //console.log(data);
            //fs.appendFileSync('output/random.json',JSON.stringify(complete));
            complete.price = $(this).find('.product-price-row > div.lfloat > span.product-price').text();
            fs.appendFileSync('output/snapdeal.json', "\"Item"+A1+"\""+":"+JSON.stringify(complete)+','+'\n\n');
            //console.log(price);
            //console.log(index);
            A1 = A1 + 1;
            //const final_url =  $(this).find('div#products > section.js-section > div.col-xs-6 > .product-tuple-description > .product-desc-rating > a > .av-rating > .rating-stars .filled-stars').cssText();


        })
  //  }
});