import defu from 'defu'
import { createConnectTransport } from '@connectrpc/connect-web'
import type { NuxtConnectRPCConfigOptions, NuxtConnectRPCDefaults, NuxtConnectRPCTransport } from '../../types'

const defaultOptions: NuxtConnectRPCDefaults = {
  baseUrl: '',

  /** */
  defaultTimeoutMs: 25000,
}

/**
 * Creates an Connect RPC instance with the provided configuration options.
 *
 * @param {NuxtConnectRPCConfigOptions} options - The configuration options for the Connect RPC instance.
 * @returns {NuxtConnectRPCTransport} The created Connect RPC instance.
 *
 * @throws {Error} Throws an error if the options are invalid.
 */
export const createConnectRPC = (options: NuxtConnectRPCConfigOptions): NuxtConnectRPCTransport => {
  const instanceOptions = defu(defaultOptions, options)

  if (!instanceOptions.baseUrl) {
    /**
     * Determines the protocol to use (http or https).
     * @type {string}
     */
    const protocol = instanceOptions.https || process.env.HTTPS ? 'https' : 'http'

    /**
     * Determines the host to use for the base URL.
     * @type {string}
     */
    const host = instanceOptions.host || process.env.HOST || 'localhost'

    /**
     * Determines the port to use for the base URL.
     * @type {number}
     */
    const port = instanceOptions.port || process.env.PORT || '3000'

    /**
     * Determines the prefix to use for the base URL.
     * @type {string}
     */
    const prefix = instanceOptions.prefix || '/'

    instanceOptions.baseUrl = `${protocol}://${host}:${port}${prefix}`
  }

  const instance = createConnectTransport(instanceOptions)

  return instance
}
