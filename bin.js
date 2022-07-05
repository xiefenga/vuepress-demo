#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const vuepress_1 = require("vuepress");
const config_1 = __importDefault(require("./config"));
const PKG = module.require('./package.json');
const loadConfig = (path) => {
    console.log('cwd:', process.cwd());
    try {
        return module.require(
        // resolve(__dirname, './demo-config')
        path);
    }
    catch (error) {
        console.log('load config file faild');
        process.exit();
    }
};
const onBuild = async (path) => {
    const { sourceDir } = loadConfig(path);
    const buildCommand = (0, vuepress_1.createBuild)(config_1.default);
    await buildCommand(sourceDir);
};
const onDev = async (path) => {
    const { sourceDir } = loadConfig(path);
    const devCommand = (0, vuepress_1.createDev)(config_1.default);
    await devCommand(sourceDir);
};
commander_1.program
    .version(PKG.version, '-v');
commander_1.program
    .command('build <path>')
    .action(onBuild)
    .description('build the source file');
commander_1.program
    .command('dev <path>')
    .action(onDev)
    .description('run dev server to debug');
commander_1.program.parse();
