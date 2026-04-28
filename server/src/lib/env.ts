import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    GEMINI_API_KEY: z.string().min(1),
    PORT: z.string().default('5000').transform(val => val === '' ? 5000 : Number(val)).pipe(z.number().min(1)),
    DATABASE_URL: z.string().min(1),
    ALLOWED_ORIGIN: z.string().default('http://localhost:5173'),
    RATE_LIMIT_PER_HOUR: z.string().default('10').transform(val => val === '' ? 10 : Number(val)).pipe(z.number().min(1)),
    CLERK_SECRET_KEY: z.string().min(1)
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success){
    const missing = parsed.error.issues
        .map(issue => issue.path.join('.'))
        .join(', ')
    throw new Error(`Missing or invalid environment variables: ${missing}`)
}

export const env = parsed.data