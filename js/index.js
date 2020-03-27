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
    var startY = $('.navbar').height() * 1.5; //The point where the navbar changes in px
  
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


/* View All Projects button */

$('#btnViewAllProjects').on('click', function() {

  if($(this).text() === 'View All Projects') {
    $('#hiddenProject1').fadeIn();
    $('#hiddenProject2').fadeIn();
    $(this).text('Close Projects')
  } else {
    $('#hiddenProject1').fadeOut();
    $('#hiddenProject2').fadeOut();
    $(this).text('View All Projects');
  }

});