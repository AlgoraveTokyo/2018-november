var containerEl = document.getElementById("container");

window.addEventListener("scroll", function() {
  // var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
  // var scrollV = scrollH　- window.innerHeight;
  // var windowY = window.pageYOffset;
  
  // var styleStr = 'translateX(' + (-windowY / scrollV) * 500 + 420 +　'px) ' + 'rotate(-26.5deg)';
  // console.log(styleStr);
  // containerEl.style.transform = styleStr;
});

var initial = document.getElementById("bg_triangle");
var parent = document.getElementById("bg_target");

for (var i = 0; i< 4; i++) {
  for (var j = 0; j< 6; j++) {
    var new_triangle = initial.cloneNode(false)
    new_triangle.style.transform = 
      "translateX(" + i * 800 + "px)" +
      "translateY(" + j * 800 + "px)" ;
    parent.appendChild(new_triangle);
  }
}
console.log(initial, parent)
