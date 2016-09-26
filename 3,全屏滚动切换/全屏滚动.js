(function scrollF(selector) {
	// alert(selector == '.scrollF');//true
	// 获取每屏幕的高度
	var $height = $(window).height();
	var $width = $(window).width();
	var n = 0;
	var b = 0;
	// 为内容设置居中；
	$(selector + ' .page').height($height).css('lineHeight', $height + 'px');
	// 设置右边点的left;
	$(selector + ' .tab').css('left', ($width - 40) + 'px');
	//窗体缩放时进行元素位置处理；
	$(window).resize(function() {
			$height = $(window).height();
			$width = $(window).width();
			$(selector + ' .page').height($height).css('lineHeight', $height + 'px');
			// 设置右边点的left;
			$(selector + ' .tab').css('left', ($width - 40) + 'px');
		})
		// 循环遍历设置背景
	$.each($(selector + ' .page'), function(i) {
		$(this).css('background', i % 2 == 0 ? 'green' : 'red');
	});
	var b = true;
	// 封装滚动函数；
	function scroll(n) {
		var h = -n * $height;

		if (b) {
			b = false;
			$(selector).animate({
				top: h + 'px'
			}, function() {
				b = true;
			});
		}
	};
	// 将滚动条分别添加到滚轮事件和点击事件
	$.each($(selector + ' .tab li'), function(i) {
		$(selector + ' .tab li').eq(i).click(function() {
			scroll($(this).index());
			$(this).addClass('on').siblings().removeClass('on');
		})
	});
	/**************绑定滚动事件***********/
	// DOMMouseScroll可以加在任意的dom节点上，并冒泡到window;
	// 兼容ff；
	if (document.addEventListener) {
		document.addEventListener('DOMMouseScroll', ff);
		document.addEventListener('mousewheel', wheel);
	} else {
		document.onmousewheel = wheel
	}
	// 火狐
	function ff(event) {
		if (b) {
			if (event.detail > 0) {
				n++;
				n < $('.page').length ? scroll(n) : n = $('.page').length - 1;
			} else if (event.detail < 0) {
				n--;
				n >= 0 ? scroll(n) : n = 0
			}
			$(selector + ' .tab li').eq(n).addClass('on').siblings().removeClass('on')
		}

	}
	// ie和谷歌
	function wheel(event) {
		if (b) {
			var evt = window.event || event.target;
			if (evt.wheelDelta < 0) {
				n++;
				n < $('.page').length ? scroll(n) : n = $('.page').length - 1;
			} else if (evt.wheelDelta > 0) {
				n--;
				n >= 0 ? scroll(n) : n = 0
			}
			$(selector + ' .tab li').eq(n).addClass('on').siblings().removeClass('on')
		}
	}
})('.scrollF');