/*
 * @Author: yincheng.deng
 * @Date: 2020-11-17 16:44:41
 * @Description: file content
 */
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        nsis: {
          deleteAppDataOnUninstall: true
        }
      }
    }
  }
}
