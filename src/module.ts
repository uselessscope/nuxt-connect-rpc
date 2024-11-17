import { defineNuxtModule, addPlugin, addImportsDir, findPath, createResolver, useLogger } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { NuxtConnectRPCModuleOptions } from './types'

const MODULE_NAME = '@nuxt-core/connect-rpc'
const MODULE_VERSION = '1.0.0'
const MODULE_CONFIG_KEY = 'connectRPC'

const logger = useLogger('nuxt:connect-rpc')

export default defineNuxtModule<NuxtConnectRPCModuleOptions>({
  meta: {
    name: MODULE_NAME,
    version: MODULE_VERSION,
    configKey: MODULE_CONFIG_KEY,
    compatibility: {
      nuxt: '^3.0.0',
    },
  },

  defaults: {
    enableLogger: true,
    enableAutoImport: true,
    configPath: 'nuxt-connect-rpc.config.ts',
  },

  async setup(options: NuxtConnectRPCModuleOptions, nuxt: Nuxt) {
    /**
     * Finds the path to the configuration file.
     * @type {string | null}
     */

    const configPath = await findPath(options.configPath)

    if (!configPath) {
      if (options.enableLogger) {
        logger.error(`Module ${MODULE_NAME}. Configuration file ${options.configPath} was not created.`)
      }

      return
    }

    nuxt.options.alias['#nuxt-connect-rpc'] = configPath

    /**
     * Resolves the runtime path for the module.
     * @type {Function}
     */

    const { resolve } = createResolver(import.meta.url)

    const runtimePath = resolve('./runtime')

    /**
     * Resolves the path to the ConnectRPC plugin.
     * @type {string}
     */

    const connectRPCPlugin = resolve(runtimePath, './plugin.ts')

    addPlugin(connectRPCPlugin)

    /**
     * If auto-import is enabled, adds the composable directory.
     */

    if (options.enableAutoImport) {
      const composables = resolve(runtimePath, './composables')

      /**
       * Adds the imports directory for composables.
       */

      addImportsDir(composables)
    }

    if (options.enableLogger) {
      logger.info(`Module ${MODULE_NAME} added. Version: ${MODULE_VERSION}`)
    }
  },
})
