window.loads = window.loads || function(_urls,callMyFun){
	var _ld = {
		js:function(_url,callback){
			var _scipt = document.createElement("script");
			_scipt.setAttribute("type", "text/javascript");
			_scipt.setAttribute("src", _url);
			document.getElementsByTagName("head")[0].appendChild(_scipt);
			if (navigator.userAgent.indexOf("IE") >= 0) {
				_scipt.onreadystatechange = function() {
					if (_scipt && (_scipt.readyState == "loaded" || _scipt.readyState == "complete")) {
						_scipt.onreadystatechange = null;
						callback ? callback() : '';
					}
				};
			} else {
				_scipt.onload = function() {
					_scipt.onload = null;
					callback ? callback() : '';
				};
			}
		},
		css:function(_url,callback){
			var _head = document.getElementsByTagName('head')[0],
				_link = document.createElement('link');
				_link.setAttribute("type", "text/css");
				_link.setAttribute("rel", "stylesheet");
				_link.setAttribute("href", _url);
				_head.appendChild(_link);
				
				_link.onload = function() {
					_head.onload = null;
					callback ? callback() : '';
				};
		}
	};
	var index = 0;
	if(_urls && _urls.length > 0){
		load(_urls[index]);
	}
	function load(_url){
		_ld[_url.indexOf('css!') == 0 ? "css":"js"]((function(_url){
			return _url.replace('css!','').replace('js!','');
		})(_url),function(){
			index++;
			if(index == _urls.length){
				callMyFun();
			}else{
				load(_urls[index]);
			}
		});
	}
}

//loads(['css!http://192.168.1.103:8020/css/lib.css','js!http://192.168.1.103:8020/js/lib/zm.js'],function(){
	//console.log('加载完成')
//})

