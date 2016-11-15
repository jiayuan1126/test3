define(['jquery'], function($){
	
	
	var main = {
		hasInit:false,
		init: function(swiper,routerObj){
			var that=this;
			that.swiper=swiper;
			that.routerObj=routerObj;
			if(!that.hasInit){
				that._init();
				that.hasInit= true;
			}
		},
		_init: function(){
			var that=this;
			var page1Swiper = new Swiper('#page1', {
                    effect : 'coverflow',
                    slidesPerView: 3,
                    centeredSlides: true,
                    coverflow: {
                        rotate: 0,
                        stretch: -24,
                        depth: 120,
                        modifier: 1,
                        slideShadows: true
                    }
			})
		}
	}
	return main;

})