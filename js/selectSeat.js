(function($) {
  window.onload = function() {
    var seatHtml = '<li class="p_tb15 overflow bor_b_e3"><div class="col-xs-2 text-center p0"><img src="../img/seat_now.png"alt=""><div class="col_red size12 mt5">380</div></div><div class="col-xs-9 p0"><div class="p_lr10"><div class="mb5">座号：10排1号</div><div class="mb5">看台：山东剧院</div><div class="mb5">楼层：一楼看台</div></div></div><div class="pull-right pointer del"><img src="../img/trashbin2.png"alt=""></div></li>';
    $(document).on('click', '#content_selectSeat #seatBox a:not(.none):not(.soldOut)', function() {
      if (!$(this).hasClass('selected')) {
        $(this).addClass('selected');
        if ($('#selectedBox').hasClass('hide')) {
          console.log(134)
          $('#selectedBox').removeClass('hide')
        }
        $('#selected ul').append(seatHtml)
        console.log(1)
      } else {
        $(this).removeClass('selected');
        $('#selectedBox ul li').eq(0).remove();
        if ($('#selectedBox ul li').length === 0) {
          $('#selectedBox').addClass('hide')
        }
      }
    })
    $(document).on('click', '#content_selectSeat .del', function() {
      $(this).parent('li').remove();
      $('#content_selectSeat #seatBox a.selected').eq(0).removeClass('selected')
      if ($('#selectedBox ul li').length === 0) {
        $('#selectedBox').addClass('hide')
      }
    })
  }
})(jQuery);
