jQuery(".load-list-btn").on("click",function(){
    var showval =jQuery(".readmoretoggle").attr("data-show");
    if(showval == 4){
    jQuery(".readmoretoggle").attr("data-show","8")
      }else if(showval == 8){
    jQuery(".readmoretoggle").attr("data-show","12")
      }
    jQuery(".readmoretoggle ul:nth-child(1) li:nth-child(n+"+showval+")").css("display","flex");
});
