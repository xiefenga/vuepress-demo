"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const vuepress_1 = require("vuepress");
const sitePage = {
    title: '个人笔记',
    lang: 'zh-CN',
    description: '',
};
exports.default = (0, vuepress_1.defineUserConfig)({
    ...sitePage,
    theme: (0, vuepress_1.defaultTheme)(),
    bundler: (0, vuepress_1.viteBundler)(),
    dest: (0, node_path_1.resolve)(__dirname, 'dist'),
    public: (0, node_path_1.resolve)(__dirname, 'public'),
    temp: (0, node_path_1.resolve)(__dirname, '.vuepress/.temp'),
    cache: (0, node_path_1.resolve)(__dirname, '.vuepress/.cache'),
});
