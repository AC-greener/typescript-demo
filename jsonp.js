
function jsonp({url, params, callback}) {
  return new Promise ((resolve, reject) => {
    let script = document.createElement ('script');
    window[callback] = function (data) { //声明这个全局函数，script标签拿到数据时会自动执行这个函数
      resolve (data);
      document.body.remove (script);
    };
    params = {...params, callback};
    let arr = [];
    for (let key in params) {
      arr.push (`${key}=${params[key]}`);
    }

    script.src = `${url}?${arr.join ('&')}`;
    document.body.appendChild (script);
  });
}
 jsonp ({
  url: 'http://www.baidu.com',
  params: {name: 'zhansgan'},
  callback: 'getUserMessage',
}).then (data => {
  console.log (data);
});
