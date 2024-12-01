;$(function(){

	  $(".sp_time a").click(function(){
  
		  //获取para的字体大小
		  var thisEle = $("#zoom p,#zoom,#zoom font,#zoom span,#zoom div").css("font-size");
		  //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
		  var textFontSize = parseFloat(thisEle , 10);
		  //javascript自带方法
		  var unit = thisEle.slice(-2); //获取单位
		  var cName = $(this).attr("class");
		  if(cName.indexOf('big') != -1){
				  textFontSize = 30;
			  $(this).addClass('on').siblings().removeClass('on')
		  }else if(cName.indexOf('small') != -1){
				  textFontSize = 16;
			  $(this).addClass('on').siblings().removeClass('on')
		  }
		  else if(cName.indexOf('default') != -1){
				  location.reload();
			  $(this).addClass('on').siblings().removeClass('on')
		  }
		  //设置para的字体大小
		  $("#zoom p,#zoom,#zoom font,#zoom span,#zoom div").css("font-size",  textFontSize + unit );
	  });
  
	  $(".sp_time .default").click(function(){
		  $("#zoom p,#zoom,#zoom font,#zoom span,#zoom div").css("font-size","20px");
	  });
  

  })
  