/**
 * Created by Administrator on 2017/1/5.
 */
$(function(){
    $('.service-left').hover(()=>{
        $('.service-left').addClass('service-show-in');
    },()=>{
        $('.service-left').removeClass('service-show-in');
    });
    $('.service-show').hover(()=>{
        $('.service-show').addClass('service-show-in');
    },()=>{
        $('.service-show').removeClass('service-show-in');
    });
    $('.service-left li:eq(3) a').click(()=>{
        $('.service-left').fadeOut(400);
        $('.service-show').fadeIn(1000);
    });
    $('.service-show a').click(()=>{
        $('.service-left').fadeIn(1000);
        $('.service-show').fadeOut(400);
    })
});