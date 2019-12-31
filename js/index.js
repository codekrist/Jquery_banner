//切换图片 焦点
function changeImg(a) { //a代表图片的索引的一个数字
    $('.imgList li').eq(a).fadeIn().siblings().fadeOut();
    $('.focusList a').eq(a).addClass('cur').siblings().removeClass('cur')
}
// 每隔三秒切换图片/焦点
var step = 0 //声明变量
var timer = null //声明时间2变量
function aotuPlay() {
    timer = setInterval(function () {
        step++ //每三秒++
        if (step == 5) { //如果step等于5 step-0
            step = 0
        }
        changeImg(step)
    }, 3000)
}
aotuPlay()
//点击左按钮切换
$('.prev').click(function () {
    clearInterval(timer)
    step--;
    if (step == -1) { //判断最小值
        step = 4
    }
    changeImg(step)
    aotuPlay()
})
// 点击右按钮切换
$('.next').click(function () {
    clearInterval(timer)
    step++;
    if (step == 5) { //判断最大值
        step = 0
    }
    changeImg(step)
    aotuPlay()
})
// 焦点切换
$('.focusList a').click(function () {
    clearInterval(timer)
    step = $(this).index();//当前索引等于当前的图片
    changeImg(step)
    aotuPlay()
})
// 鼠标移入图片区域暂停播放 / 鼠标移出开启定时器
$('#banner').mouseover(function(){// 鼠标移入图片区域暂停播放鼠标移入图片区域暂停播放
    clearInterval(timer)
}).mouseout(function(){//鼠标移出开启定时器
    aotuPlay()
})

