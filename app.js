var containerEl = document.getElementById("container");
var bgTargetEl =  document.getElementById("bg_target");

window.addEventListener("scroll", function() {
  var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
  var scrollV = scrollH　- window.innerHeight;
  var windowY = window.pageYOffset + 0;
  var styleStr = 'translateX(' + (-1) * windowY + 'px)';
  bgTargetEl.style.transform = styleStr;
});

var initial = document.getElementById("bg_triangle");

for (var i = 0; i< 10; i++) {
  for (var j = 0; j< 10; j++) {
    var new_triangle = initial.cloneNode(false)
    new_triangle.style.transform = 
      "translateX(" + i * 800 + "px)" +
      "translateY(" + j * 800 + "px)" ;
      bgTargetEl.appendChild(new_triangle);
  }
}

function triangleWave(i) {
  var m = 600;
  return m - Math.abs((i % (2 * m) - m));
}
