$(".sidiq-dotted").each(function(){
  console.log("Sukses")
  var col = parseInt($(this).attr("sid-col"));
  var row = parseInt($(this).attr("sid-row"));
  console.log(col)
  
  if(col > 0 && row > 0){
    var colcss = "";
    $(this).append('<div class="dot-wrp"></div');
    
    for(var i = 0; i < col; i++){
      colcss += "auto "
    }
    var t_item= col * row;
      for(var k = 0; k < t_item; k++){
        $(this).find(".dot-wrp").append('<div class="lg-lol"></div>');
      } 
    $(this).find(".dot-wrp").css("grid-template-columns",colcss)
  }else{
    console.log("gk")
  }
  var size= $(this).attr("size-diq") + "px";
  $(this).find(".lg-lol").css("font-size", size)
})
$(".lg-lol").each(function(){
  for (var i = 0; i < 9; i++){
    $(this).append('<i class="fas fa-circle"></i>')
  }
})
$(".navbar-toggler").click(function(){
  var cond = $(this).attr("aria-expanded");
  if(cond == "true"){
    $(".sidiq-icon-mn").removeClass('sidiq-start');
    $(".sidiq-icon-mn").addClass('sidiq-end');
  }else{
    $(".sidiq-icon-mn").removeClass('sidiq-end');
    $(".sidiq-icon-mn").addClass('sidiq-start');
  }
})