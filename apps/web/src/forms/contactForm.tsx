import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ikeaContactFormSchema = z.object({
  location: z.string(),
  category: z.string(),
  title: z.string(),
  message: z.string(),
})

export type FormTypeContact = z.infer<typeof ikeaContactFormSchema>

export const useFormContact = () =>
  useForm<FormTypeContact>({
    resolver: zodResolver(ikeaContactFormSchema),
  })
