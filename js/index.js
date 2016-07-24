$(function(){
	var  $menu=$(".nav-left");
	var ch=$(window).height();
  var cw=$(window).width();
    var $xiala=$(".xiala");
    var uls=$(".banner-box");
    var $smbanner=$(".jb");
    var lis=$(".tupian");
    var min_lis=$(".min-tupian")
    
    var banner=$(".banner");
    var jia=$(".jias");
    console.log(jia)
    var xia=$(".xia");
    console.log(xia)
    $xiala[0].style.display="none";

	$menu.click(function(){
		if($xiala[0].style.display=="none"){
			$(this).addClass("active");
		$xiala.css({"display":"block","height":ch-44})
        banner.css({"display":"none"})
        $smbanner.css({"display":"none"})
	}else{
		$(this).removeClass("active");
		$xiala.css({"display":"none"});
		banner.css({"display":"block"})
    $smbanner.css({"display":"block"});
	}
    
  })

		


 var now=0;
 var next=0;
 function lunbo(lengths,widt){
     lengths[0].style.left=0
 t=setInterval(move,2000)
 function move(){
  // if(!flag){return};
  flag=false;
   next++;
  if(next==lengths.length){
    next=0
  }
  lengths.eq(next).css({left:widt})
  lengths.eq(now).animate({"left":-widt});
  lengths.eq(next).animate({"left":0},function(){
    // flag=true;
  });
 
  now=next;
 }  

banner.mouseover(function(){
  clearInterval(t);
})
banner.mouseout(function(){
  t=setInterval(move,2000)
})
 }
 lunbo(lis,cw);

  // lunbo(min_lis,cw);
 xia.css({"display":"none"});
 
 jia.click(function(){
  var index=$(this).index(".jias");
  console.log(index)
    if(xia[index].style.display=="none"){
      xia.eq(index).css({"display":"block"})
    }
    else{
     xia.eq(index).css({"display":"none"})
    }
  })
    
})