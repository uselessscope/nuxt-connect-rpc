import { defineNuxtPlugin } from 'nuxt/app'
import { createConnectRPC } from './core/create-connect-rpc'

/**
 * Import the Connect RPC configuration function from the root folder.
 * @module
 */
import connectRPCConfig from '#nuxt-connect-rpc'

/**
 * Nuxt plugin to initialize Connect RPC with the provided configuration.
 * @function
 * @returns {object} The plugin object containing the Connect RPC instance.
 * @throws {TypeError} Throws an error if the Connect RPC configuration is not a function.
 */
export default defineNuxtPlugin(() => {
  return {
    provide: {
      connectRPCTransport: createConnectRPC(connectRPCConfig),
    },
  }
})
