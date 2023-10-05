type Params = { params: { slug: string } }

type Props = Params

export default ({ params: { slug } }: Props) => {
  return <h1>{slug}</h1>
}
