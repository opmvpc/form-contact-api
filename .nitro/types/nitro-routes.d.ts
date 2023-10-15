// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/contact': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/api/contact').default>>>>
    }
    '/api/messages': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/api/messages').default>>>>
    }
    '/': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/index').default>>>>
    }
  }
}
export {}