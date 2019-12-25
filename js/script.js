/* https://codepen.io/2kool2 */

(function () {
  // add click animation to social links
  var socials = document.querySelectorAll("[class*=connect-icon]");
  var i = socials.length;
  var cls = "-clicked";
  while (i--) {
    socials[i].addEventListener("click", function(e){
      var lnk = e.target;
      lnk.classList.add(cls);

      // Allow time for animation to complete then remove
      setTimeout(function() {
        lnk.classList.remove(cls);
      }, 300);
    }, false);
  }
})();

/**/