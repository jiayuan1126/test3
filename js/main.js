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
	var handle = [page1, page2, page3, page4, page5, page6];
	handle.data = {};
	var mySwiper = new Swiper('#pages', {
		direction: 'vertical',
		speed: 700

	})

})