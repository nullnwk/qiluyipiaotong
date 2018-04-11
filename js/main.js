(function ($) {
	/*首页开始*/
	window.onload = function () {
		var mySwiper = new Swiper('#content_index .swiper-container', {
			pagination: '.pagination',
			loop: true,
			autoplay: 4000
		})
		// console.log($('#content_index #hotThings #hotRecommend li a .poster_i').width())
		$('#content_index #hotThings #hotRecommend li a .poster_i').height($('#content_index #hotThings #hotRecommend li a .poster_i').width() * 1.322);
		$(window).resize(function () {
			$('#content_index #hotThings #hotRecommend li a .poster_i').height($('#content_index #hotThings #hotRecommend li a .poster_i').width() * 1.322);
		});

		$('#content_index .classify .middle img.pull-left').height($('#content_index .classify .middle img.pull-left').width() * 1.322);
		$(window).resize(function () {
			$('#content_index .classify .middle img.pull-left').height($('#content_index .classify .middle img.pull-left').width() * 1.322);
		});

		$('#content_showInfo #list .type1Box li img.poster').height($('#content_showInfo #list .type1Box li img.poster').width() * 1.322);
		$(window).resize(function () {
			$('#content_showInfo #list .type1Box li img.poster').height($('#content_showInfo #list .type1Box li img.poster').width() * 1.322);
		});

	}

	/*首页结束*/

	/*演出信息页开始*/

	//筛选条件选中
	$(document).on('click', '#content_showInfo #filter .left .section li a:not(.more)', function () {
		var thisParentId = $(this).parents('div.section').attr('id');
		var thisText = $(this).text();
		var htmlTpl = thisText + '<i class="close_i pos_abs size12 col_red">×</i>'
		if ($('#content_showInfo #selected').hasClass('hide')) {
			$('#content_showInfo #selected').removeClass('hide');
		}
		$(this).parents('ul').find('a').removeClass('active')
		$(this).addClass('active');
		if (thisParentId === 'city') {
			$('#content_showInfo #selected li a.city').parent().removeClass('hide')
			$('#content_showInfo #selected li a.city').html(htmlTpl)
		} else if (thisParentId === 'repertory') {
			$('#content_showInfo #selected li a.repertory').parent().removeClass('hide')
			$('#content_showInfo #selected li a.repertory').html(htmlTpl)
		} else if (thisParentId === 'theatre') {
			$('#content_showInfo #selected li a.theatre').parent().removeClass('hide')
			$('#content_showInfo #selected li a.theatre').html(htmlTpl)
		} else if (thisParentId === 'dateInfo') {
			$('#content_showInfo #selected li a.dateInfo').parent().removeClass('hide')
			$('#content_showInfo #selected li a.dateInfo').html(htmlTpl)
		}
	});

	//剧目筛选条件点击
	$(document).on('click', '#content_showInfo #filter .left .section#repertory ul.fisrt-ul li a', function () {
		var data = '<li class="pull-left"><a class="size13 size11-xs active" href="javascript:;">全部</a></li><li class="pull-left"><a class="size13 size11-xs" href="javascript:;">话剧</a></li><li class="pull-left"><a class="size13 size11-xs" href="javascript:;">歌剧</a></li><li class="pull-left"><a class="size13 size11-xs" href="javascript:;">ssss</a></li><li class="pull-left"><a class="size13 size11-xs" href="javascript:;">ssss</a></li><li class="pull-left"><a class="size13 size11-xs" href="javascript:;">ssss</a></li><li class="pull-left"><a class="size13 size11-xs" href="javascript:;">ssss</a></li><li class="pull-left"><a class="size13 size11-xs" href="javascript:;">ssss</a></li>';
		$(this).parents('#repertory').find('ul.secondUl').html(data)
	})

	//按时间阶段筛选
	$(document).on('click', '#content_showInfo #filter .submit_btn', function () {
		var htmlTpl = '按时间阶段<i class="close_i pos_abs size12 col_red">×</i>'
		$('#content_showInfo #selected li a.dateInfo').html(htmlTpl)
	})

	//取消已选选项
	$(document).on('click', '#content_showInfo #filter #selected .close_i', function () {
		var parentLi = $(this).parents('li');
		var parentA = $(this).parents('a');
		if (parentA.hasClass('city')) {
			$('#content_showInfo #city .active').removeClass('active');
			$('#content_showInfo #city li a').eq(0).addClass('active')
		} else if (parentA.hasClass('repertory')) {
			$('#content_showInfo #repertory .active').removeClass('active');
			$('#content_showInfo #repertory li a').eq(0).addClass('active')
		} else if (parentA.hasClass('theatre')) {
			$('#content_showInfo #theatre .active').removeClass('active');
			$('#content_showInfo #theatre li a').eq(0).addClass('active')
		} else if (parentA.hasClass('dateInfo')) {
			$('#content_showInfo #dateInfo .active').removeClass('active');
			$('#content_showInfo #dateInfo li a').eq(0).addClass('active')
		}
		parentLi.addClass('hide');
		console.log($('#content_showInfo #filter #selected ul li').length)
		if ($('#content_showInfo #filter #selected ul li.hide').length === 4) {
			$('#content_showInfo #filter #selected').addClass('hide')
		}
	})

	//排列方式
	$(document).on('click', '#content_showInfo .classify_i', function () {
		if ($(this).hasClass('classify_i_1')) {
			$('#content_showInfo .type1Box').removeClass('hide');
			$('#content_showInfo .type2Box').addClass('hide');
			$('#content_showInfo .classify_i').removeClass('bg_fa');
			$(this).addClass('bg_fa').removeClass('bg_ff')
		} else if ($(this).hasClass('classify_i_2')) {
			$('#content_showInfo .type1Box').addClass('hide');
			$('#content_showInfo .type2Box').removeClass('hide');
			$('#content_showInfo .classify_i').removeClass('bg_fa');
			$(this).addClass('bg_fa').removeClass('bg_ff')
		}
	})

	/*演出信息页结束*/

	/*演出详情页开始*/
	$(document).on('click', '#content_showDetail .option', function (e) {
		$(this).parent().find('.option').removeClass('selected')
		$(this).addClass('selected')
	});
	/*演出详情页结束*/

	/*提交订单页开始*/
	$(document).on('click', '#content_order .option', function (e) {
		$(this).parent('div.overflow').find('.option').removeClass('selected')
		$(this).addClass('selected')
	});

	$(document).on('click', '#content_order .spectator .top .option', function (e) {
		var thisIndex = $(this).index();
		$('#content_order .spectator .bottom').addClass('hide');
		$('#content_order .spectator .bottom').eq(thisIndex).removeClass('hide')
	});

	$(document).on('click', '#content_order .youhui_top li', function (e) {
		var thisIndex = $(this).index();
		$('#content_order .youhui_ul').addClass('hide');
		$('#content_order .youhui_top li').removeClass('active');
		$(this).addClass('active');
		$('#content_order .youhui_ul').eq(thisIndex).removeClass('hide')
	});

	$(document).on('click', '#content_order .invoiceDetail .top .option', function (e) {
		var thisIndex = $(this).index();
		$('#content_order .invoiceDetail .top .option').removeClass('selected');
		$(this).addClass('selected');
		$('#content_order .invoiceDetail .bottom').addClass('hide');
		$('#content_order .invoiceDetail .bottom').eq(thisIndex).removeClass('hide')
	});

	$(document).on('click', '#content_order .youhui_ul li', function (e) {
		$('#content_order .radiu_i').removeClass('active');
		$(this).find('.radiu_i').addClass('active')
	})

	/*提交订单页结束*/

	/*支付页开始*/
	//筛选条件选中
	$(document).on('click', '#content_pay .pointer.pos_rel', function () {
		$('#content_pay .pointer.pos_rel').removeClass('selected')
		$(this).addClass('selected')
	});
	/*支付页结束*/


	// 我的艺票通左侧菜单开始
	$.each($(".box-left ol>li"), function (index, item) {
		$(item).on("mouseover", function () {
			$(item).addClass("active_bg").siblings().removeClass("active_bg");
			$("#leftClick").removeClass("active_bg");

		}).on("mouseout", function () {
			$(item).removeClass("active_bg");
			$("#leftClick").addClass("active_bg");
		})
	});
	// 我的艺票通左侧菜单结束


	// 三级联动开始
	$("#province").ProvinceCity();
	//三级联动结束 

	// 打印  复制  字体大小
	// 打印
	function printpage() {
		window.print();
	}
	// 复制
	$("#copy").on("click", function () {
		// 创建元素用于复制
		var aux = document.createElement("input");
		// 获取复制内容
		var content = document.getElementById("msize_s");
		// console.log(content.children);
		$.each(content.children, function (index, item) {
			// console.log(item.innerText);
			// 设置元素内容
			aux.setAttribute("value", item.innerText);
			// 将元素插入页面进行调用
			document.body.appendChild(aux);
			// 复制内容
			aux.select();
			document.execCommand("Copy");
			console.log(document.execCommand("Copy"));
		})

	})

	// 字体大小
	$(".btn31").on("click", function () {
		$("#msize_s p").css("fontSize", "22px")
	})
	$(".btn32").on("click", function () {
		$("#msize_s p").css("fontSize", "18px")
	})
	$(".btn33").on("click", function () {
		$("#msize_s p").css("fontSize", "16px")
	})
})(jQuery);
