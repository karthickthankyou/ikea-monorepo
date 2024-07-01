import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { registerFormSchema } from './register'

export const ResetPasswordFormSchema = registerFormSchema.pick({
  email: true,
})

export type FormTypeResetPassword = z.infer<typeof ResetPasswordFormSchema>

export const useFormResetPassword = () =>
  useForm<FormTypeResetPassword>({
    resolver: zodResolver(ResetPasswordFormSchema),
  })
