import type { Client, Transport, HandlerContext } from '@connectrpc/connect'
import type { ConnectTransportOptions } from '@connectrpc/connect-web'

export interface NuxtConnectRPCModuleOptions {
  enableLogger: boolean
  enableAutoImport: boolean
  configPath: string
}

export type NuxtConnectRPCTransport = Transport

export type NuxtConnectRPCService = HandlerContext['service']

export type NuxtConnectRPCClient<T extends NuxtConnectRPCService> = Client<T>

export type NuxtConnectRPCTransportOptions = ConnectTransportOptions

export interface NuxtConnectRPCDefaults extends NuxtConnectRPCTransportOptions {
  https?: boolean
  host?: string
  port?: number
  prefix?: string
}

export interface NuxtConnectRPCConfigOptions {
  defaults?: NuxtConnectRPCDefaults
}
