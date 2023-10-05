import { Model, Schema, model, models } from 'mongoose'

export type HomeModel = {
  intro: {
    title: string
    text: string
  }
  content: {
    article: {
      title: string
      text: string
    }
    list: string[]
  }
}

export const homeSchema = new Schema(
  {
    intro: {
      title: String,
      text: String,
    },
    content: {
      article: {
        title: String,
        text: String,
      },
      list: [String],
    },
  },
  { collection: 'Home' },
)

export default (models.Home || model('Home', homeSchema)) as Model<HomeModel>
