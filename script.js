const request =  require('request');
const cheerio = require('cheerio');
const fs = require('fs');

//const URI = "http://www.jiit.ac.in";
//let i = 1;
/*const URI = "https://news.ycombinator.com/news";*/
//const URI = "https://news.ycombinator.com/news?p="+i;
//console.log(URI);

for(var i=1; i<11; i++)
{
    request("https://news.ycombinator.com/news?p="+i,function (error,response,body) {
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
        //console.log("Everything Is Working Fine");
    }
    const $ = cheerio.load(body);

    //console.log($);
    /*var title;
    var link;*/

    $('tr.athing').each(function (index) {
        var extract_data = {};
        extract_data.title = $(this).find('td.title > a').text();
        extract_data.link = $(this).find('td.title > a').attr('href');
        /*console.log(title);
        console.log(link);
        console.log(' ');*/
        /*fs.appendFileSync('output/hackernews_new2_obj.txt',extract_data.title+'\n'+extract_data.link+'\n\n');*/
        //console.log(extract_data);
        fs.appendFileSync('output/hackernews_obj_extract.JSON', JSON.stringify(extract_data)+','+'\n\n');
    })

});
}

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


