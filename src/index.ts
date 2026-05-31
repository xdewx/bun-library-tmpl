import packageJson from '../package.json'

import * as browser from './browser/index'
import * as dict from './dict/index'
import * as number from './number/index'

export function version() {
  console.warn(`${packageJson.name} version is ${packageJson.version}`)
  return packageJson.version
}

export {
  browser,
  dict,
  number,
}
