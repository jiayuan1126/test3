define(['jquery'],function($) {
	var $form = {
		isWeixin:function(){
			var ua = window.navigator.userAgent.toLowerCase(); 
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
				return true; 
			}else{ 
				return false; 
			} 
		},
		checkPhoneRule:function(string){
			var pattern = /^1[34578]\d{9}$/;
		    if (pattern.test(string)) {
		        return true;
		    }
		    return false;
		},
		getProvince:function(projectId,provinceElement){
			var provincetmp = $(provinceElement);
			$.get('http://top.yidianzixun.com/tool/getProvince?projectId='+projectId,function(provinceData){
				var province = provinceData.data;
				for(var i=0;i<province.length;i++){
		            provincetmp.append('<option value="'+province[i].province+'">'+province[i].province+'</option>')
		        }
			});
		},
		getCity:function(projectId,provinceElement,cityElement,jxsElement){
			var tmp_value = $(provinceElement+" option:selected").val() ;
		    if(!tmp_value){
		        return ;
		    }
		    var citytmp = $(cityElement);
		    var jxstmp = $(jxsElement);
		    citytmp.empty() ;
		    citytmp.append('<option value="">请选择城市</option>') ;
		    jxstmp.empty() ;
		    jxstmp.append('<option value="">请选择经销商</option>') ;
			var url = "http://top.yidianzixun.com/tool/getPrefectureviCity?projectId="+projectId+"&province=";
			$.get(url+tmp_value,function(cityData){
				var city = cityData.data;
				for(var i=0;i<city.length;i++){
		            citytmp.append('<option value="'+city[i].prefectureCity+'">'+city[i].prefectureCity+'</option>') ;
		        }
			});
		},
		getDealerName:function(projectId,cityElement,jxsElement){
			var tmp_value = $(cityElement+" option:selected").text() ;
		    if(!tmp_value){
		        return ;
		    }
		    var url = "http://top.yidianzixun.com/tool/getDealerName?projectId="+projectId+"&prefectureCity=";
		    var jxstmp = $(jxs);
		    jxstmp.empty() ;
		    jxstmp.append('<option value="">请选择经销商</option>') ;
		    $.get(url+tmp_value,function(dealerData){
				console.log(dealerData);
				var dealer = dealerData.data;
				for(var i=0;i<dealer.length;i++){
		            jxstmp.append('<option value="'+dealer[i].dealerName+'">'+dealer[i].dealerName+'</option>') ;
		        }
			});
		},
		selectJXS:function(projectId,provinceElement,cityElement,jxsElement){
			var that = this;
			that.getProvince(projectId,provinceElement);
			$(provinceElement).change(function(){
	        		that.getCity(projectId,provinceElement,cityElement,jxsElement);
		    });
		    $(cityElement).change(function(){
		        that.getDealerName(projectId,cityElement,jxsElement);
		    });
		}
	}
	return $form;
});