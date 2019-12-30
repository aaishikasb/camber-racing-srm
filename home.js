//Preloader
$(document).ready(function() {
  //Preloader
  let preloaderFadeOutTime = 3000;
  function hidePreloader() {
    var preloader = jQuery(".spinner-wrapper");
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});
