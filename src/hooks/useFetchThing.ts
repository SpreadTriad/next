import { DeleteBody, PatchBody, PostBody } from '@/app/api/route'
import { ThingType } from '@/model/Thing'
import { useCallback } from 'react'

const fetcher = <BodyType>(body?: BodyType, method?: RequestInit['method']) =>
  fetch('/api', {
    method,
    body: body ? JSON.stringify(body) : undefined,
  }).then((result) => result.json() as Promise<ThingType[]>)

export const useFetchThing = () => {
  return {
    get: useCallback(() => fetcher(), []),
    patch: useCallback((body: PatchBody) => fetcher(body, 'PATCH'), []),
    post: useCallback((body: PostBody) => fetcher(body, 'POST'), []),
    remove: useCallback((body: DeleteBody) => fetcher(body, 'DELETE'), []),
  }
}
