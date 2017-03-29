/**
 * Created by Peter on 2017/1/7.
 */
app.controller('designNew.main.ctrl',[function(){
    $(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
    $('#carousel').carousel({
        interval:2000
    })
}]);