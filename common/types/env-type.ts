import { Union } from './common-type'

export const envType = {
  development: 'development',
  production: 'production',
} as const

export type EnvType = Union<typeof envType>
