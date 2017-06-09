function totalDay(){
    var start = new Date("2016/9/17 00:00:00");
    var end = new Date();
    var result = end - start;
    var totalSecs = result/1000;
    var days=Math.floor(totalSecs/3600/24);
    var hours=Math.floor((totalSecs-days*24*3600)/3600);
    var mins=Math.floor((totalSecs-days*24*3600-hours*3600)/60);
    var secs=Math.floor((totalSecs-days*24*3600-hours*3600-mins*60));
    days = days < 10 ? "0"+days : days;
    hours = hours < 10 ? "0"+hours : hours;
    mins = mins < 10 ? "0"+mins : mins;
    secs = secs < 10 ? "0"+secs : secs;
    var html = `
			<span class="day">${days}  <b>Days</b></span>
			<span class="hour">${hours} <b>Hours</b></span>
			<span class="min">${mins} <b>Min</b></span>
			<span class="sec">${secs} <b>Sec</b></span>
	   `;
    $("#getting-started").html(html);
}
var timer = setInterval(totalDay,1000);

/*点击确定验证手机号*/
var myTel = "15834029762";
$("#confirm").click(function(e){
    e.preventDefault();
    var modal = $(".modal-container");
    var tel = $(this).parents(".form-horizontal").find("input").val();
    var reg = /^1[34578]\d{9}$/;
    if(!reg.test(tel)){
        modal.addClass("active");
        $(".myModal h1").html("你是不调皮了！要输入手机号呦");
    }else{
        if(tel == myTel){
            $(".preloaders").delay(1e3).fadeOut("slow");
            $('html, body').animate({scrollTop:0},100);
        }else {
            modal.addClass("active");
            $(".myModal h1").html("要输入我的手机号才行呀！");
        }
    }
});
/*点击重新输入关闭模态框*/
$(".myModal i").click(function(){
    $(".modal-container").removeClass("active");
});

/*视频幻灯片播放*/
$(".owl-carousel").owlCarousel({
    margin:100,
    nav:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:0
        },
        320:{
            items:1
        },
        500:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
