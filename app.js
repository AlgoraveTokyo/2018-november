var bg_el = document.querySelector('.bg-img');

window.addEventListener("scroll", function() {
  var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
  var scrollV = scrollH　- window.innerHeight;
  var windowY = window.pageYOffset;
  // console.log((windowY / scrollV) * 100);
  bg_el.style.backgroundPosition = '0% ' + (windowY / scrollV) * 80 +　"%";
});
