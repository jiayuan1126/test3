require.config({
	baseUrl: 'js/',
	paths: {
		'jquery': 'lib/jquery-3.0.0.min',
		'pImg': 'lib/pImg',
		'swiper': 'lib/swiper-3.3.1.min',
		'page1': 'page1',
		'page2': 'page2',
		'page3': 'page3',
		'page4': 'page4',
		'page5': 'page5',
		'page6': 'page6',
		'formSubmit': 'formSubmit'
	}
})
require(['jquery', 'pImg', 'swiper', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'formSubmit'], function($, pImg, Swiper, page1, page2, page3, page4, page5, page6, formSubmit) {
	$('body').css('height',$(window).height());
	$('body').css('width',$(window).width());
	var pageHandle = [page1, page2, page3, page4, page5, page6];
	pageHandle.data = {};
	var mySwiper = new Swiper('#pages', {
		direction: 'vertical',
		speed: 700,
		onSlideChangeEnd: function(_swiper){
             var index = _swiper.activeIndex,
                module = pageHandle[index];
            module && module['init'](_swiper, pageHandle);
       },
       onInit:function(_swiper){
       	pageHandle[0]['init'](_swiper,pageHandle);
       }

	})

})