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