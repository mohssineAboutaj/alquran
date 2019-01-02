/* global: document, window, $ */
function ajaxSPA(url) {
  "use strict";
  var output = $('#pageContent');
  var loader = '<h3 style="margin: 50px auto;text-align: center;">جاري التحميل ...</h3>';
  var jsFiles = ["jquery.migrate-1.2.1.min.js","popper.min.js","bootstrap.min.js","jquery.nicescroll.min.js","typed.min.js","scrollTopMAF.js","wow.min.js","audio.js","custom.js"];
  var i;

  $.ajax({
    url: url,
    dataType: 'html',
    beforeSend: function(){
      output.html(loader);
    },
    success: function(data){
      output.html(data);
      for (i = 0;i < jsFiles.length; i = i+1) {
        $.getScript('./app/js/' + jsFiles[i]);
      }
    },
    error: function(err) {
      output.html('<h3 style="margin: 50px auto;text-align: center;">هناك خطا في الاتصال بالخادم ' + err + ' </h3>');
    }
  });
}
