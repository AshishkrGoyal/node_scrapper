// With JQuery
$('#delay').slider({
    formatter: function(value) {
        return 'Current value: ' + value+' second(s).';
    }
});