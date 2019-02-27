import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { getEnv, adapters} from '@kapp/disconf-toolkit';
import * as path from 'path';
import * as helper from '../app/helper';
const { nodePort } = require('./const.ts');

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
    sourceUrl: string;
}

interface KappAppInfo extends EggAppInfo {
    serverEnv;
    region: string;
    baseDir: string;
    kaolaEnv;
}

export default (appInfo: KappAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig> & BizConfig;

    // app special config
    config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1528688881895_6143';

    // add your config here
    config.middleware = [];

    config.siteFile = {
        '/favicon.ico': 'https://haitao.nos.netease.com/25ab9d19-4fba-4ef7-8907-e8ff22a64fe4.ico'
    };

    config.cluster = {
        listen: {
            port: Number(process.env.nodePort) || nodePort
        }
    };

    config.security = {
        csrf: {
            enable: false
        }
    };

    config.static = {
        prefix: '/',
        dir: [
            path.join(appInfo.baseDir, 'app/dist')
        ]
    };

    config.view = {
        defaultViewEngine: 'art',
        root: [
            path.join(appInfo.baseDir, 'app/dist'),
            path.join(appInfo.baseDir, 'app/view')

        ].join(',')
    };

    config.art = {
        imports: helper,
        writeResp: true,
        debug: false,
        htmlMinifierOptions: {
            collapseWhitespace: true,
            minifyCSS: false,
            minifyJS: false,
            // 运行时自动合并：rules.map(rule => rule.test)
            ignoreCustomFragments: []
        }
    };


    const disconfEnv = getEnv(appInfo);

    config.proxies = {
        tomcat: {
            // 统一设置代理时的 headers
            // 类似于 proxy_set_header Host 'goods.kaola.com'
            // 不填会使用当前 node 应用获取到的 Host 值
            headers: {
                host: 'mall.kaola.com'
            },
            // 类似 Nginx Upstream 概念，用来管理代理的服务端
            upstream: {
                // 配置代理的服务端
                server: [
                    // 可直接传入 Host，如 ["goods.kaola.com"]
                    // 'https://m.kaola.com'
                ],
                // 健康检查
                check: {
                    // 是否启用健康检查
                    enable: false,
                    // 健康检查的路径
                    path: '/health/status',
                    // 健康检查间隔
                    interval: '5s'
                },
                // 负载均衡的类型
                // 可选值 ['Random', 'RoundRobin']
                loadBalancerType: 'Random'
            }
        }
    }
    
    config.disconf = {
        application: 'kaola-mall-wap-fed',
        groups: [
            {
                type: 'normal',
                name: 'trace_config',
                env: disconfEnv.normal,
                adapter: adapters.trace({
                    percent: `kaola#${appInfo.name}_sample_rate`
                })
            }, {
                type: 'normal',
                name: 'node_grayscale_config',
                env: disconfEnv.normal,
                adapter: adapters.grayscale({
                    name: `${appInfo.name.replace(/^kaola\-/, '').replace(/\-fed/, '')}_gc`
                    // 填写 UCC 上 `node_grayscale_config` 配置项内的 key，如 tradecenter_gc 或者 mykaola_gc
                })
            }, {
                type: 'rate-limiter',
                application: appInfo.name,
                env: disconfEnv.normal,
                adapter: adapters.rateLimiter()
            }, {
                 // 使用 disconf 动态分组 `node_zkhosts` 来管理 `dubbo` 配置
                type: 'normal',
                name: 'node_zkhosts',
                env: disconfEnv.normal,
                adapter: adapters.zkHosts('dubbo')
            }
        ]
    }

    config.addressing = {
        zkHosts: void 0, // zk地址对于固定环境是固定的
        catchErrorOnStarting: false,
        timeout: 5000,
        webServers: {
            target: {
                application: 'kaola-shop-front',
                env: appInfo.kaolaEnv
            }
        }
    }

    config.dubbo = {
        groups: {
            default: appInfo.serverEnv,
            group2: 'performance'
        }
    }

    return config;
};
