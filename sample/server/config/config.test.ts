import { DefaultConfig } from './config.default';
const { mockPort } = require('./const.ts');

export default (appInfo) => {
  const config: DefaultConfig = {};
  const { isProxy, isMockPre, isAddressing } = process.env;

  let zkHosts = 'kaola-test-dubbozk01.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk02.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk03.v1.kaola.jdb.vpc:2181';

  config.dubbo = {
    zkHosts
  }

  config.addressing = {
    zkHosts: 'kaola-test6.v1.kaola.jdb.vpc:2181,kaola-test7.v1.kaola.jdb.vpc:2181,kaola-test8.v1.kaola.jdb.vpc:2181', // zk地址对于固定环境是固定的
    webServers: {
      target: {
        application: 'kaola-shop-front',
        env: appInfo.kaolaEnv,
        checkHealth: false
      }
    }
  }

  config.proxies = {
    target: {
      headers: {
        host: (isProxy == '1' || isAddressing == '1') ? `http://127.0.0.1:${mockPort}` : void 0,
      },
      upstream: {
        server: process.env.proxyUrl ? [process.env.proxyUrl] : [],
        check: {
          // 是否启用健康检查
          enable: false
        }
      }
    }
  }

  return config;
};
