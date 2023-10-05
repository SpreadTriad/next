import { Model, Schema, model, models } from 'mongoose'

export type ThingModel = {
  text: string
}

export type ThingType = ThingModel & { _id: string }

export const thingSchema = new Schema(
  {
    text: String,
  },
  { collection: 'Thing' },
)

export default (models.Thing ?? model('Thing', thingSchema)) as Model<ThingModel>
