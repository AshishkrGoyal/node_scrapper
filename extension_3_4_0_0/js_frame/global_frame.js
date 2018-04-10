// this file is executed on all scripts

// for initializing slider
function SliderInit() {
    var target=$('#delay');
    target
    target.slider({
        formatter: function(value) {
            return 'Current value: ' + value+' second(s).';
        }
    });
}