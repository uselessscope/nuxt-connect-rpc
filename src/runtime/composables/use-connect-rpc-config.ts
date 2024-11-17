import type { NuxtConnectRPCConfigOptions } from '../../types'

/**
 * Hook for configuring Connect RPC settings.
 *
 * @param {NuxtConnectRPCConfigOptions} options - The Connect RPC configuration options.
 * @returns {NuxtConnectRPCConfigOptions} Returns the provided configuration options.
 */
export const useConnectRPCConfig = (options: NuxtConnectRPCConfigOptions) => {
  if (!options) {
    throw new Error('Connect RPC configuration options must be provided.')
  }

  return options
}
