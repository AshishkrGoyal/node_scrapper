const Jimp = require('jimp');

Jimp.read('img/Ashish_PP.jpg',function (err,Ashish) {
    if(err)
    {
        console.log(err);
    }
    Ashish.resize(200,200).sepia().write('out_img/Ashish_ref.png');
});