import { useLoaderData } from '@remix-run/react'

export function loader() {
  return {
    ENV: process.env,
  }
}

export default function Index() {
  const { ENV } = useLoaderData<typeof loader>()
  return (
    <div className="py-8">
      <h1 className="text-xl">Working...</h1>
      <pre>{JSON.stringify(ENV, null, 2)}</pre>
    </div>
  )
}
