/*const casper = require('casper').create();*/

/*
casper.start('http://www.ashishkrgoyal.me/', function() {
    this.capture('./output/google.png', {
        top: 100,
        left: 100,
        width: 500,
        height: 400
    });
});
*/

/*casper.start('http://www.google.fr/', function() {
    var url = 'http://www.google.fr/intl/fr/about/corporate/company/';
    this.download(url, 'google_company.html');
});

casper.run(function() {
    this.echo('Done.').exit();
});*/

/*casper.test.begin('a twitter bootstrap dropdown can be opened', 2, function(test) {
    casper.start('http://getbootstrap.com/2.3.2/javascript.html#dropdowns', function() {
        test.assertExists('#navbar-example');
        this.click('#dropdowns .nav-pills .dropdown:last-of-type a.dropdown-toggle');
        this.waitUntilVisible('#dropdowns .nav-pills .open', function() {
            test.pass('Dropdown is open');
        });
    }).run(function() {
        test.done();
    });
});*/

/*var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit(1);
} else {
    t = Date.now();
    address = system.args[1];
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + t + ' msec');
        }
        phantom.exit();
    });
}*/
/*

casper.run();*/

var page = require('webpage').create();
page.viewportSize = { width: 500, height: 768 };
page.open('http://resonance.ac.in', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('./example.png');
        console.log("A!!");
    }
    phantom.exit();
});
/*
console.log("Ashish");
phantom.exit();*/
