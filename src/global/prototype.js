import axios from 'axios';

const Prototype = function() {};

Prototype.install = function(Vue, options) {
  // 全局挂载 $http
  Vue.prototype.$http = axios;
};

export default Prototype;
