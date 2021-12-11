window.onScroll = function(){
  scrollfunction();
}


function scrollfunction(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("logo").style.fontSize = "25px";
  }else{
    document.getElementById("navbar").style.padding = "25px 0px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
