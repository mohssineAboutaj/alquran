function spaAjax(page){
  var XHR;
  var output = document.getElementById('pageContent');
  if (window.XMLHttpRequest) {
    XHR = new XMLHttpRequest();
  } else {
    XHR = new ActiveXObject("Microsoft.XMLHTTP");
  }

  XHR.onreadystatechange = function(){
    if (this.readyState > 0 && this.readyState < 4) {
      output.innerHTML = '<h3 style="margin: 50px auto;text-align: center;">جاري التحميل <img src="img/ajax-loader.gif" alt="ajax-loader" /></h3>';
    } else if (this.status != 200) {
      output.innerHTML = '<h3 style="margin: 50px auto;text-align: center;">هماك خطا في الاتصال بالخادم ' + this.status + ' </h3>';
    } else {
      if (this.readyState == 4 && this.status == 200) {
        output.innerHTML = XHR.responseText;
        document.title += ' / ' + page.slice(0, -5);
        var script = document.createElement('script');
        script.src = "js/audio.js";

        if (page.slice(0, -5) == 'tilawat') {
          document.body.appendChild(script);
        }
      }
    }
  }

  XHR.open('GET', 'html/'+page, true);
  XHR.send();
}