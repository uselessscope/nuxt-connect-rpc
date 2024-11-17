# Nuxt Connect RPC Module

Version: `1.0.0`

This module provides a convenient and flexible interface for sending requests and handling responses, while ensuring a high degree of customization and integration.

## Installation

Connect the module in `nuxt.config.js`

```ts
export default {
  modules: [
    '~/modules/connect-rpc/module',
  ],
  
  connectRPC: {
    /* options */
  }
}
```

Alternative option:

```ts
export default {
  modules: [
    [
      '~/modules/connect-rpc/module',
      {
          /* options */ 
      }
    ]
  ],
}
```
## Parameters

Parameters passed through `nuxt.config.js`:

```ts
export interface NuxtConnectRPCModuleOptions {
  enableLogger: boolean
  enableAutoImport: boolean
  configPath: string
}
```

Default parameter values:

```ts
const defaultOptions = {
  enableLogger: true,
  enableAutoImport: true,
  configPath: 'nuxt-connect-rpc.config.ts',
}
```

## Config

By default, the configuration file is named `nuxt-connect-rpc.config.js` and is located in the root directory of the project.

Passed rules:

```ts
export default useConnectRPCConfig({
  defaults: {
    /** */
  },
})

```

## Usage

To get an instance, use the `useConnectRPC` function:

```typescript
const connectRPC = useConnectRPC();
```

Example request:

```typescript
const connectRPC = useConnectRPC(yourService);

try {
  const { data } = await connectRPC.yourServiceMethod();
} catch (error) {
  console.error(error);
}
```
