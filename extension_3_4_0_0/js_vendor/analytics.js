var trackingID = "UA-115780013-1";
var _gaq = _gaq || [];
_gaq.push(['_setAccount', trackingID]);

function trackIt(a, b, c) {
    console.log("data is");
    console.log(a, b, c);
    //_gaq.push(['_trackEvent', e.target.id, 'clicked']);
    _gaq.push([a, b, c]);
}

function loaded() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('link')[0]; s.parentNode.insertBefore(ga, s);
    _gaq.push(['_trackPageview']);
}
window.onload = loaded;