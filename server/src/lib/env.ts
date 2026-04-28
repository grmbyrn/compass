import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    GEMINI_API_KEY: z.string().min(1),
    PORT: z.coerce.number().default(5000),
    DATABASE_URL: z.string().min(1),
    ALLOWED_ORIGIN: z.string().default('http://localhost:5173'),
    RATE_LIMIT_PER_HOUR: z.coerce.number().default(10),
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