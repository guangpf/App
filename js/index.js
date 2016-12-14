$(function(){
	resize(750);
	/*导航*/
    $(".tittle a").css({
    	width:"auto",
    	margin:0
    }).each(function(index,obj){
    	$(obj).click(function(){
    	var index=$(this).index();
		$(obj).removeClass("a-active").eq(index).addClass("a-active");
    	})
    })
	/*评论*/
	$(".write").click(function(){
		$(".mask").css("display","block");
	})
	/*回复*/
	$(".icon-pinglunhuifu").click(function(){
		$(".mask1").css({
			display:"block"
		})
	})
	/*点赞*/
	var num=0;
	$(".icon-dianzan").click(function(){
		 num++;
		$(this).css({
			color:"orange"
		}).next("span").css({
			color:"orange"
		}).html(num)
	})
	/*订阅*/
	$(".ding").click(function(){
		$(this).css({
			background:"#fff",
			color:"#119aeb",
			border:"0.03rem solid #119aeb"
		}).find("span").html("").next("span").html("查看")
	})
	
	
})
