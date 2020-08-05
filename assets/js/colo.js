$(".font-color").each(function(){
  var i = $(this).text();
  $(this).css('color',i);
  $(this).parent().find('button').css('background-color',i)
})