const request = require('request');
const argv = require('yargs').argv;
const fs = require('fs');
const cheerio = require('cheerio');

const URL = "http://www.shopclues.com/search?q=iphone";

request(URL, function (err, response, body) {
    if(err)
    {
        console.log(err);
    }
    if(response.statusCode===200)
    {
        console.log('Good Request!!');
    }

    //console.log(body);


    const $ = cheerio.load(body);
   // console.log($);
    //var a = 1;
    /*var a = 1;
    var b = 1;
    var n = 2;*/
    var A = 1;
    $('.prd_grd_pnl > #product_list > .row > .column').each(function (index) {

        //console.log('inside crawler!!');
        const complete_data = {};
        console.log(typeof index);
        /*complete_data.extract_data =*/

        //console.log($(this).find('.prd_p_section > .ori_price > span.p_price').text(),$(this).find('#product_list > .row > .column > a').attr('href'));
        complete_data.final_url = $(this).find('a').attr('href');
        complete_data.price = $(this).find('.prd_p_section > .ori_price > span.p_price').text();
        complete_data.rating = $(this).find('.sh_content > .visited > .rtnrew > span.star > span').text();
        //console.log(complete_data);
        fs.appendFileSync('./output/shopclues_.json',"\"Item"+A+"\""+":"+JSON.stringify(complete_data)+','+'\n\n');
        /*k = k+1;
        m = m+1;*/
        A=A+1;
    })
});