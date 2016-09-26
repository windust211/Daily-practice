$(function (){

			var percentX = $('.big img').width() / $('.small img').width();
			var percentY = $('.big img').height() / $('.small img').width();
			$('.small').mouseenter(function (){
				$('.big').show()
			}).mouseleave(function(){
				$('.big').hide();
			})
			// 阻止默认事件
			$('img').mousemove(function (){
				return false;
			})
			// 
			$('.layer').mousedown(function (e){
				var x = $('.layer').offset().left;
				var y = $('.layer').offset().top;
				var l = e.pageX - x;
				var t = e.pageY - y;
				$(document).mousemove(function (e){
					toMove(e,l,t)
				});
				$(document).mouseup(function (){
					$(document).off();
				})

			})
			function toMove(ev,l,t){
					var ev = ev || event;
					var x1 = ev.pageX;
					var y1 = ev.pageY;
					var maxL =  $('.small img').width()- $('.layer').width();
					var maxT = $('.small img').height()- $('.layer').height()
					$('.layer').css('left',x1-l+'px');
					$('.layer').css('top',y1 - t+'px');
					if($('.layer').offset().left > maxL){
						$('.layer').css('left',maxL+'px')
					}else if($('.layer').offset().left < 0){
						$('.layer').css('left','0')
					}
					
					if($('.layer').offset().top < 0){
						$('.layer').css('top','0')
					}else if($('.layer').offset().top > maxT){
						$('.layer').css('top',maxT+'px')
					}

					var x2 = $('.layer').offset().left;
					var y2 = $('.layer').offset().top;
					$('.big img').css('left',-x2*percentX+'px');
					$('.big img').css('top',-y2*percentY+'px')
				}
})

	