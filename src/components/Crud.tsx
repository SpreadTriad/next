'use client'

import Form from '@/components/Form'
import { useFetchThing } from '@/hooks/useFetchThing'
import { ThingType } from '@/model/Thing'
import { MouseEvent, useCallback, useEffect, useState } from 'react'

export default () => {
  const [data, setData] = useState<ThingType[]>()

  const { get, patch, post, remove } = useFetchThing()

  const onClickDelete = useCallback(
    (e: MouseEvent<HTMLButtonElement>, id: string) => {
      e.preventDefault()
      remove({ id }).then(setData)
    },
    [remove],
  )

  const patchThing = useCallback((id: string) => (text: string) => patch({ id, text }).then(setData), [patch])

  const addThing = useCallback((value: string) => post({ text: value }).then(setData), [post])

  useEffect(() => {
    get().then(setData)
  }, [get])

  return (
    <div>
      <ul>
        {data?.map(({ text, _id }) => (
          <li key={_id}>
            <h2>{text}</h2>
            <Form
              buttonLabel="Patch"
              initialValue={text}
              onSubmit={patchThing(_id)}
            />
            <button
              type="button"
              onClick={(e) => onClickDelete(e, _id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Form
        buttonLabel="Add"
        onSubmit={addThing}
      />
    </div>
  )
}
