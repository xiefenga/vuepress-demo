#!/usr/bin/env node

import { resolve } from 'node:path'

import { program } from 'commander'
import { createBuild, createDev } from 'vuepress'

import vuepressConfig from './config'

const PKG = module.require('./package.json')

const loadConfig = (path: string) => {
  console.log('cwd:', process.cwd())
  try {
    return module.require(
      // resolve(__dirname, './demo-config')
      path
    )
  } catch (error) {
    console.log('load config file faild')
    process.exit()
  }
}

const onBuild = async (path: string) => {
  const { sourceDir } = loadConfig(path)
  const buildCommand = createBuild(vuepressConfig)
  await buildCommand(sourceDir)
}

const onDev = async (path: string) => {
  const { sourceDir } = loadConfig(path)
  const devCommand = createDev(vuepressConfig)
  await devCommand(sourceDir)
}

program
  .version(PKG.version, '-v')

program
  .command('build <path>')
  .action(onBuild)
  .description('build the source file')

program
  .command('dev <path>')
  .action(onDev)
  .description('run dev server to debug')

program.parse()

