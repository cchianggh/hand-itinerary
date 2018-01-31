/*$(function(){
    $('#thedate').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0,
    numberOfMonths: 2
    });
});*/

$(function(){
  var today = new Date();
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  $('#end').datepicker();
  $('#start').datepicker({
    //minDate: 0, //從今天後日期才可選
    minDate: tomorrow, //從明天日期才可選
    onSelect: function (dat, inst) {
      $('#end').datepicker('option', 'minDate', dat);
    }
  });
});
$.datepicker.setDefaults({ dateFormat: 'yy-mm-dd' }); //全局設置日期格式
$(function(){
  var today = new Date();
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  $('#end1').datepicker();
  $('#start1').datepicker({
    //minDate: 0, //從今天後日期才可選
    minDate: tomorrow, //從明天日期才可選
    onSelect: function (dat, inst) {
      $('#end1').datepicker('option', 'minDate', dat);
    }
  });
});
//$.datepicker.setDefaults({ dateFormat: 'yy-mm-dd' }); //全局設置日期格式
$(function(){
  var today = new Date();
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  $('#end2').datepicker();
  $('#start2').datepicker({
    //minDate: 0, //從今天後日期才可選
    minDate: tomorrow, //從明天日期才可選
    onSelect: function (dat, inst) {
      $('#end2').datepicker('option', 'minDate', dat);
    }
  });
});
//$.datepicker.setDefaults({ dateFormat: 'yy-mm-dd' }); //全局設置日期格式
