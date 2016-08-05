# loads
按顺序异步加载js、css文件


loads(['css!http://192.168.1.103:8020/css/lib.css','js!http://192.168.1.103:8020/js/lib/zm.js'],function(){
	console.log('加载完成')
})
