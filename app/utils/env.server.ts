import { z } from 'zod'

export const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test'] as const),
  SESSION_SECRET: z.string().min(1),
  DATABASE_URL: z.string().min(1),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export function initEnv(context: any = process.env) {
  const parsed = envSchema.safeParse(context)

  if (parsed.success === false) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors,
    )

    throw new Error('Invalid environment variables')
  }
}
