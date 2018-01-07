// Created by xiazeyu.

/**
 * @description The manager of configeration.
 */


'use strict';

import _ from 'lodash';

/**
 * The container of current configs
 * @type {Object}
 */

let currConfig = {};
/**
 * Default settings for defaulter
 * @type {Object}
 */

const defaultConfig = {
  model: {
    jsonPath: '', // string
    hHeadPos: 0.5, // horizontalHeadPos
    vHeadPos: 0.618, // verticalHeadPos
    myDefine: [],
  },
  display: {
    AA: 2, // antialiasing Grade 抗锯齿等级
    widght: 150,
    height: 300,
    scale: 1,
    position: 'right',
    hOffset: 0, // horizontalOffset
    vOffset: -20, // verticalOffset
  },
  mobile: {
    show: true,
    scale: 0.5,
    motion: false,
  },
  name: {
    canvas: 'live2dcanvas',
    div: 'live2d-widget',
  },
  react: {
    opacityDefault: 0.7,
    opacityOnHover: 0.2,
    myFunc: (e) => {console.log('(undefined) ┑(￣Д ￣)┍');}, // e means the event
  },
  dev: {
    log: false,
    mouseLog: false,
    mouseFunc: (x, y) => {console.log(`MouseFunc: ${x},${x}`);}, // only works when debug.mouseLog is on
  },
  _: true,
}

/**
 * Apply users function, make the full settings
 * @param  {Object} userConfig User's custom config
 */

function configApplyer(userConfig){

  if (_.has(userConfig, '_')){
    import(/* webpackMode: "lazy" */ './configValidater').then(f => {
      f.configValidater(userConfig);
    }).catch(err => {
      console.error(err);
    });
  }

  currConfig = _.defaultsDeep(userConfig, defaultConfig);

}

export {
  configApplyer,
  currConfig as config,
}