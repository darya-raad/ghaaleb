$(document).ready(function(){
  $(".search a").click(function(){        
    $("#myInput").toggle();                         
  });
  $(".menu_icon").click(function(){        
    $(".sub_menu").slideToggle(500);                         
  });
  $(".first_level ul").lightSlider({
    item:1,
    loop:true,
    slideMove:1,
    speed:600,
    pager:true,
    rtl:true,
    prevHtml: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="37" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="red" d="M5 3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5zm9.707 13.293l-1.414 1.414L7.586 12l5.707-5.707l1.414 1.414L10.414 12l4.293 4.293z"/></svg>',
    nextHtml: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="37" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="red" d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm6.293 2.707l1.414-1.414L16.414 12l-5.707 5.707l-1.414-1.414L13.586 12L9.293 7.707z"/></svg>',
  });
  $('.tabs li:first-child').addClass('active');
  $('.tab_content').hide();
  $('.tab_content:first-child').show();
  
  $('.tabs li').click(function(){
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  // $(".second_level ul").scroll()
});


