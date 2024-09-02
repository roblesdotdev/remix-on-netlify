import { netlifyPlugin } from '@netlify/remix-adapter/plugin'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    build: {
      cssMinify: mode === 'production',
      sourcemap: true,
    },
    plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
    define: {
      'process.env': env,
    },
  })
}
