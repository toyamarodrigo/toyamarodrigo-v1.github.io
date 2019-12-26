/* https://codepen.io/2kool2 */

(function () {
  // Add click animation to social links

  var socials = document.querySelectorAll(".connect-icon");
  var cls = "-clicked";
  for(var i = 0; i < socials.length; i++) {
    socials[i].addEventListener("click", function (e) {
      var lnk = e.target;
      lnk.classList.add(cls);


      setTimeout(() => {
        lnk.classList.remove(cls);
      }, 300);
    }, false);
  }
})();