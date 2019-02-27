const CDN_DOMAIN_MAP = {
  production: '//w.kl.126.net',
  beta: '//betajd-w.kl.126.net',
  test: ''
}

const OUTPUT_SUFFIX = '/dist';

const { NODE_ENV, MODE } = process.env;
const IS_PROD = NODE_ENV === 'production';
const CDN_DOMAIN = CDN_DOMAIN_MAP[MODE] || ''

// 在开发环境中获取局域网中的本机iP地址
const interfaces = require('os').networkInterfaces(); 
let interface = interfaces['en0'].find(alias => (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) )
const LOCAL_IP_ADDRESS = `http://${interface.address}:8080`

const CONSTANT = {
  CDN_DOMAIN,
  IS_PROD,
  NODE_ENV,
  OUTPUT_SUFFIX,
  LOCAL_IP_ADDRESS
};

module.exports = CONSTANT;
