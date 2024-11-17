import { useNuxtApp } from 'nuxt/app'
import { createClient } from '@connectrpc/connect'
import type {
  NuxtConnectRPCClient,
  NuxtConnectRPCService,
  NuxtConnectRPCTransport,
} from '../../types'

/**
 * A custom hook to create a Connect RPC client for a given service.
 *
 * @template T - The type of the NuxtConnectRPCService.
 * @param {T} service - The service instance for which the RPC client is to be created.
 * @returns {NuxtConnectRPCClient<T>} The created RPC client for the specified service.
 * @throws {Error} Throws an error if the Connect RPC Transport instance is not found.
 */
export const useConnectRPCClient = <T extends NuxtConnectRPCService>(
  service: T,
): NuxtConnectRPCClient<T> => {
  const { $connectRPCTransport } = useNuxtApp()

  if ($connectRPCTransport) {
    return createClient(
      service,
      $connectRPCTransport as NuxtConnectRPCTransport,
    )
  }

  throw new Error('Connect RPC Transport instance not found.')
}
