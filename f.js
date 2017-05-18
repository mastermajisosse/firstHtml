var p;
function setTextColor(picker) {
  // document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
  p = picker.toString();
}

var o = document.getElementById("one");
var t = document.getElementById("two");
var tr = document.getElementById("tre");
function cc() {
  o.style.background = '#' + p;
    }
function cc2() {
  t.style.background = '#' + p;
    }
function cc3() {
  tr.style.background = '#' + p;
    }

var b = document.getElementsByTagName("body");

$(window).click(function() {
  alert("msg");
});

$('div').click(function(event){
    event.stopPropagation();
});
$('#b').click(function(event){
    event.stopPropagation();
});
