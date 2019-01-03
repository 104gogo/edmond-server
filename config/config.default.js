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
  }

  return config;
};
