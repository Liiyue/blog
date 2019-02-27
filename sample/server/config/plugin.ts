import { EggPlugin } from 'egg';
/**
* middleware 区
* 越后面的插件的 middleware 先执行
*/
export const network = {
   enable: true,
   package: '@kapp/network',
};

export const health = {
   enable: true,
   package: '@kapp/health'
};

export const rateLimiter = {
   enable: true,
   package: '@kapp/rate-limiter'
};

export const grayscale = {
   enable: true,
   package: '@kapp/grayscale'
};

export const trace = {
   enable: true,
   package: '@kapp/trace'
};

export const kagent = {
   enable: true,
   package: '@kapp/kagent'
};
/**
* middleware 区
*/

export const kafka = {
    enable: true,
    package: '@kapp/kafka'
};

export const disconf = {
    enable: true,
    package: '@kapp/disconf'
};

export const zookeeper = {
    enable: true,
    package: 'egg-zookeeper'
};

export const dubbo = {
    enable: true,
    package: '@kapp/dubbojs'
};

export const art = {
    enable: true,
    package: 'egg-view-art'
};

// config/plugin.js
export const proxy = {
   enable: true,
   package: '@kapp/proxy'
};

export const addressing = {
   enable: true,
   package: '@kapp/addressing'
};

export const mock = {
   enable: false,
   package: '@kaola/kapp-mock'
};