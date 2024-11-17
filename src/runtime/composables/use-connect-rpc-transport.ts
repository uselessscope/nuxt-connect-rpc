import { useNuxtApp } from 'nuxt/app'
import type { NuxtConnectRPCTransport } from '../../types'

/**
 * Retrieves the Connect RPC Transport instance from the Nuxt app.
 *
 * @template T - The type of the Connect RPC instance to return. Defaults to NuxtConnectRPCInstance.
 * @returns {T} The Connect RPC instance.
 * @throws {Error} Throws an error if the Connect RPC instance is not found.
 *
 * @example
 * const connectRPC = useConnectRPC();
 */
export const useConnectRPCTransport = <T = NuxtConnectRPCTransport>(): T => {
  const { $connectRPCTransport } = useNuxtApp()

  if ($connectRPCTransport) {
    return $connectRPCTransport as T
  }

  throw new Error('Connect RPC Transport instance not found.')
}
