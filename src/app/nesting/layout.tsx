import SubNav from '@/components/SubNav'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SubNav />
      {children}
    </>
  )
}
