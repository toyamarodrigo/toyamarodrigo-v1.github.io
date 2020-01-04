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


/* Navbar color after scroll */

$(document).ready(function () {
  function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
  
    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
  }
  
  if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
  }
});

function showAllProjects() {
  document.getElementById("viewAllProjects").style.display = "block";
}