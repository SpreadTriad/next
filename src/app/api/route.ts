import connect from '@/lib/mongodb'
import Thing from '@/model/Thing'
import { NextResponse } from 'next/server'

export type DeleteBody = { id: string }
export type PatchBody = { id: string; text: string }
export type PostBody = { text: string }

const add = (body: PostBody) => Thing.create(body)

const deleteById = ({ id }: DeleteBody) => Thing.findByIdAndDelete(id).exec()

const getAll = async () => {
  const result = await Thing.find({}).exec()

  return NextResponse.json(result ?? [])
}

const update = ({ id, text }: PatchBody) =>
  Thing.findByIdAndUpdate(id, {
    text,
  })

export const DELETE = async (request: Request) => {
  const body = (await request.json()) as DeleteBody

  await connect()

  await deleteById(body)

  return getAll()
}

export const GET = async () => {
  await connect()

  return getAll()
}

export const PATCH = async (request: Request) => {
  const body = (await request.json()) as PatchBody

  await connect()

  await update(body)

  return getAll()
}

export const POST = async (request: Request) => {
  const body = (await request.json()) as PostBody

  await connect()

  await add(body)

  return getAll()
}
