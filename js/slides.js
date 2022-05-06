var num = 0;

window.onload =function() { changeImg(0); }
//图片切换函数
function changeImg(num) {
                    //eq(num) 根据num获取元素集合中下标为num的jQuery元素对象  让其淡入 ，除了它之外的元素淡出
    $(".slides li").eq(num).fadeIn().siblings().fadeOut();   
}

//点击左边按钮，图片向左边切换
$(function(){
$(".img-left").click(function () {
    num--;
    num = (num <= -1?5:num);
                changeImg(num);
})
})

//点击右边按钮，图片向右边切换
$(function(){
$(".img-right").click(function () {
    num++;
    num = (num >= 6?0:num);
    changeImg(num);
})
})

$(function(){
$('.img-left').hover(
function(){
$(this).fadeTo(100, 0.6);
},
function(){
$(this).fadeTo(100, 1.0);
}
);
});

$(function(){
$('.img-right').hover(
function(){
$(this).fadeTo(100, 0.6);
},
function(){
$(this).fadeTo(100, 1.0);
}
);
});
