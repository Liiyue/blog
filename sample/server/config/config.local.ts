'use strict';
const path = require("path");
const fs = require("fs");
const Automount = require('@foxman/plugin-automount');
const MockControl = require('@foxman/plugin-mock-control');
const RouteDisplay = require('@foxman/plugin-route-display');
const { mockPort } = require('./const.ts');

import { DefaultConfig } from './config.default';

export default () => {
    const config: DefaultConfig = {};

    config.proxies = {
        target: {
            upstream: {
                server: [
                    process.env.proxyUrl || `http://127.0.0.1:${mockPort}`
                ],
                check: {
                    // 是否启用健康检查
                    enable: false
                }
            }
        }
    };

    config.mock = {
        port: mockPort,
        plugins: {
            'auto-mount': new Automount({
                asyncDataMatch(filePath) { // filePath 为工程内扫描到的文件路径
                    const pathes = filePath.split('/');
                    pathes.shift();
                    return ['/', pathes.join('/')].join('');
                },
                methodGetter(filePath) {
                    const pathes = filePath.split('/');
                    return pathes[0];
                }
            }),
            'mock-control': new MockControl({}),
            'route-display': new RouteDisplay(),
        }
    };

    config.art = {
        compileDebug: true,
        cache: false,
        minimize: false
    };

  return config;
};

