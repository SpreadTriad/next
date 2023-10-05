import { connect } from 'mongoose'

const uri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/NEXT_DB"'

if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

export default () => connect(uri)
