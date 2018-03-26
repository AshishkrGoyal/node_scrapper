const request =  require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const argv = require('yargs').argv;

const item = argv.c;
var A = 84;
//const URI = "http://www.jiit.ac.in";
let i = 1;
/*const URI = "https://news.ycombinator.com/news";*/
//const URI = "https://news.ycombinator.com/news?p="+i;
//console.log(URI);


for(i=1; i<13; i++)
{
    const URL = "https://www.flipkart.com/search?page="+i+"&q="+item;
    //const URL1 = "http://www.shopclues.com/search?q="+item;

    /*let complete_data = {};
    let extract_data;
    let URL_Item;
    let final_url;
    let price;
    let rating;
    complete_data = {
        "extract_data" : extract_data,
        "URL_Item" : URL_Item,
        "final_url": final_url,
        "price" : price,
        "rating": rating
    };*/
    request(URL,function (error,response,body) {
        /*var URI = "https://news.ycombinator.com/news?p="+i;
        console.log(URI);
        console.log(i);*/
    if(error)
    {
        console.log(error);
    }
    //console.log('Status Code Of Request: '+ response.statusCode);
    if(response.statusCode===200)
    {
        console.log("Everything Is Working Fine");
    }
    const $ = cheerio.load(body);

    //const extract_data={};







    /*const data = $(this).find('div._1-2Iqu');
    //console.log(data);
    console.log(data.text());*/
        const complete_data = {};
        $('div._2SxMvQ >div._3T_wwx >div._2-gKeQ').each(function (index) {
         complete_data.extract_data = $(this).find('div._1-2Iqu> div.col-7-12>div._3wU53n').text();
         //console.log(complete_data.extract_data.text);
         complete_data.URL_Item = "https://www.flipkart.com"+$(this).find('a._1UoZlX').attr('href');

         complete_data.final_url = "https://www.flipkart.com"+complete_data.URL_Item.text();
         complete_data.price = $(this).find('div._1-2Iqu>div._2o7WAb > div._6BWGkk >div._1uv9Cb> div._2rQ-NK').text();
         complete_data.rating = $(this).find('div._1-2Iqu> div.col-7-12>div.niH0FQ>span._2_KrJI>div.hGSR34').text();
           // console.log(data);
           // console.log(rating.text());
            //console.log(URL_Item);
            //console.log(data.text());

            A = A+1;
            //fs.appendFileSync('output/flipkart_iphone.json',data.text()+', '+'  '+price.text()+', '+rating.text()+'\n'+final_url+'\n\n');
            fs.appendFileSync('output/flipkart_.json',"\"Item"+A+"\""+":"+JSON.stringify(complete_data)+','+'\n\n');
            //console.log(index)
        })
    })}

   /* const extract_ = {
        "data" = extr*/












    //console.log($);

    //console.log($);
    /*var title;
    var link;*/

    //$('tr.athing').each(function (index) {
        //var extract_data = {};
        //extract_data.title = $(this).find('td.title > a').text();
        //extract_data.link = $(this).find('td.title > a').attr('href');
        /*console.log(title);
        console.log(link);
        console.log(' ');*/
        /*fs.appendFileSync('output/hackernews_new2_obj.txt',extract_data.title+'\n'+extract_data.link+'\n\n');*/
        //console.log(extract_data);
        //fs.appendFileSync('output/hackernews_obj_extract.JSON', JSON.stringify(extract_data)+','+'\n\n');
   //})

//});


/*request(URI,function (error,response,body) {
    if(error)
    {
        console.log(error);
    }
    //console.log('Status Code Of Request: '+ response.statusCode);
    if(response.statusCode===200)
    {
        console.log("Everything Is Working Fine");
    }
    const $ = cheerio.load(body);

    //console.log($);
    var title;
    var link;
    $('tr.athing').each(function (index) {
        title = $(this).find('td.title > a').text();
        link = $(this).find('td.title > a').attr('href');
        /!*console.log(title);
        console.log(link);
        console.log(' ');*!/
        fs.appendFileSync('hackernews_new1.txt',title+'\n'+link+'\n\n');
    })

});*/


