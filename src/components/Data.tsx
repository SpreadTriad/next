import connect from '@/lib/mongodb'
import Home from '@/model/Home'

export default async () => {
  const connection = await connect()

  if (!connection) {
    return (
      <h2 className="subtitle">
        You are NOT connected to MongoDB.Check the <code> README.md </code> for instructions.
      </h2>
    )
  }

  const home = await Home.find({}).exec()

  const {
    intro,
    content: { article, list },
  } = home[0]

  return (
    <div>
      <header>
        <h1>{intro.title}</h1>
        <p>{intro.text}</p>
      </header>
      <article>
        <h2>{article.title}</h2>
        <p>{article.text}</p>
      </article>
      <ul>
        {list.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  )
}
