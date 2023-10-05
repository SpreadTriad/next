import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

type Props = {
  buttonLabel: string
  initialValue?: string
  onSubmit: (value: string) => void
}

export default ({ buttonLabel, initialValue, onSubmit }: Props) => {
  const [value, setValue] = useState(initialValue ?? '')

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(value)
    },
    [onSubmit, value],
  )

  return (
    <form
      className="p-5 border-2"
      onSubmit={submitHandler}
    >
      <input
        onChange={changeHandler}
        type="text"
        value={value}
      />
      <button type="submit">{buttonLabel}</button>
    </form>
  )
}
