     function resize(originSize,type){
       	  type=type||"x";
       	  if(type=="x"){
       	  	 var widths=document.documentElement.clientWidth;
       	  	 var scale=widths/originSize*100+"px";
       	  	 document.getElementsByTagName("html")[0].style.fontSize=scale;
       	  }else if(type=="y"){
       	  	var heights=document.documentElement.clientHeight;
       	  	scale=heights/originSize*100+"px";
       	  	document.getElementsByTagName("html")[0].style.fontSize=scale;
       	  }
       }