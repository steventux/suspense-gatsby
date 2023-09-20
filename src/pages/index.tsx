import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Title from '../components/title'
import SuspenseTable from '../components/suspenseTable'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Title text="Suspense" description="Keep track of your settings" />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <SuspenseTable />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Suspense</title>
