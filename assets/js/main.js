// Scroll to play video

function scrollVideo() {
  var video = $('#main_video').get(0),
    videoLength = video.duration,
    scrollPosition = $(document).scrollTop();
  
  video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;
  if((scrollPosition + $(window).height()) > $('.video-section').height()){
	  $('#main_video').css('top',$('.video-section').height()-(scrollPosition + $(window).height()));
  }
}

$(window).scroll(function(e) {
  scrollVideo();
  if($(this).scrollTop() > $('header').height()){
	  $('header').addClass('sticky');
  }else {
	  $('header').removeClass('sticky');
  }
});