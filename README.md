# loads
最精巧封装，按顺序同步或异步加载js、css文件

```js
loads(['css!http://172.31.0.115:8020/css/index.css','js!http://172.31.0.115:8020/js/index.js'],function(){
    console.log('加载完成')
},'async'); // 设置最后一个参数为'async',加载资源为异步加载，缺省值为同步加载
```
