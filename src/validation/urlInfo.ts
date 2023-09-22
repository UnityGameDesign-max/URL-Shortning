import { z } from 'zod';

export const urlInfoSchema = z.object({
    shortenedLink: z.string().email({ message: 'A URL is required' })
})