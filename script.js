$(document).ready(function(){
  $('header').html('<h1>Hello!</h1>');
});

$(function(){
  $('.picture-list:nth-child(1)').css({
    'background-color':'#0000ff',
    'height':'100px'
  });
});

$(function(){
  $('.picture-list:nth-child(2)').slideDown();
  });

$(function(){
  $('.picture-list:nth-child(3)').slideUp();
});

$(function(){
  $('.picture-list:nth-child(4)').show();
  $('.picture-list:nth-child(4)').css({
    'background-color':'#0000ff'
  });
});

$(function(){
  $('.picture-list:nth-child(5)').hide();
  $('.picture-list:nth-child(5)').show();
});

$(function(){
  $('.picture-list:nth-child(6)').mouseover(function(){
    $('.picture-list:nth-child(6)').css({'background-color':'#0000ff'});
  });
  $('.picture-list:nth-child(6)').mouseout(function(){
    $('.picture-list:nth-child(6)').css({'background-color':'yellow'});
  });
});

$(function(){
  $('.picture-list:nth-child(7)').mouseover(function(){
    $('.picture-list:nth-child(7)').addClass('picture-list-ex');
  });
  $('.picture-list:nth-child(7)').mouseout(function(){
    $('.picture-list:nth-child(7)').removeClass('picture-list-ex');
  });
});

$(function(){
  $('.picture-list:nth-child(8)').on('click',function(){
    $('.picture-list:nth-child(8)').addClass('picture-list-ex');
  });

  $('.picture-list:nth-child(8)').mouseout(function(){
    $('.picture-list:nth-child(8)').removeClass('picture-list-ex');
  });
});

$(function(){
  $('.picture-list').on('click',function(){
    $(this).slideUp();
  });
});

$(function(){
  $('button').on('click',function(){
    $('ul').children().css({'color':'#ff0000'});
  });
});