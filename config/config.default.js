'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546505251052_7827';

  // add your config here
  config.middleware = [];

  config.security = {
    domainWhiteList: [ 'http://localhost:8899' ], // 没有配置的话，错误信息：404
    csrf: {
      enable: false, // 没有配置的话，错误信息：403 missing csrf token
    },
  };

  config.onerror = {
    // 在此处定义针对所有响应类型的错误处理方法
    // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
    all(err, ctx) {
      const { message, code } = err;

      if (code === 'CUSTOM_CODE') {
        ctx.body = JSON.stringify({ status: 'error', content: '', errorMsg: message });
        ctx.status = 200;
      } else {
        ctx.body = 'error';
        ctx.status = 500;
      }
    },
  };

  return config;
};
