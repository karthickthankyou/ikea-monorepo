/* eslint-disable react/jsx-props-no-spreading */
import { Container } from '@ikea/components/atoms/Container/Container'
import { BlurredCirle } from '@ikea/components/molecules/BlurredCirle/BlurredCirle'
import { OverlapSpace } from '@ikea/components/molecules/OverlapSpace/OverlapSpace'

import { HtmlInput } from '@ikea/components/atoms/HtmlInput'
import { HtmlLabel } from '@ikea/components/atoms/HtmlLabel'

import { BackToHome } from '../Login/Login'
import { useFormRegister } from '@ikea/forms/register'
import { Button } from '@ikea/components/atoms/Button'
import Link from 'next/link'
import { register as registerUserFirebase, RegisterInfo } from '@ikea/util/auth'

import { useAsync } from '@ikea/hooks/async'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { notification$ } from '@ikea/subjects'

const CreateAccountForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRegister()

  const router = useRouter()

  const [{ data, error, loading }, registerUser] = useAsync(
    (userData: RegisterInfo) => registerUserFirebase(userData),
  )

  useEffect(() => {
    if (data?.user.uid) router.push('/')
  }, [data?.user.uid, router])
  useEffect(() => {
    if (error) {
      notification$.next({ message: 'Register failed' })
    }
  }, [error, router])

  return (
    <form
      onSubmit={handleSubmit((data) => {
        registerUser(data)
      })}
      className={`w-full mt-12 space-y-6 border border-white rounded-lg bg-white/30 backdrop-blur backdrop-filter ${className}`}
    >
      <HtmlLabel title="Email" error={errors.email?.message}>
        <HtmlInput placeholder="Enter the email." {...register('email')} />
      </HtmlLabel>
      <HtmlLabel title="Password" error={errors.password?.message}>
        <HtmlInput
          type="password"
          placeholder="********"
          {...register('password')}
        />
      </HtmlLabel>
      <HtmlLabel title="Display name" error={errors.displayName?.message}>
        <HtmlInput
          placeholder="Enter your name."
          {...register('displayName')}
        />
      </HtmlLabel>
      <Button loading={loading} type="submit" fullWidth>
        Create account
      </Button>
      <div className="mt-12 text-sm">
        Already have an IKEA account?
        <br />
        <Link href="/login" className="text-primary">
          Login{' '}
        </Link>
        now.
      </div>
    </form>
  )
}

export const Register = () => (
  <Container>
    <div className="sm:grid sm:grid-cols-2">
      <OverlapSpace className="relative overflow-hidden">
        <OverlapSpace.Child>
          <div className="flex flex-col items-center justify-center min-h-screen p-12 ">
            <div className="max-w-sm">
              <div className="text-4xl ">
                <span className="font-bold text-primary">Create</span> an IKEA
                Family Profile.
              </div>
              <div className="mt-4 text-sm text-primary-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                inventore, nihil beatae perspiciatis.
              </div>
            </div>

            <CreateAccountForm className="p-6 sm:hidden" />
            <div className="w-full max-w-sm">
              <BackToHome />
            </div>
          </div>
        </OverlapSpace.Child>
        <OverlapSpace.Child className="relative animate-spin-30 -z-10 ">
          <div className="absolute -translate-y-1/2 top-2/4 animate-move-right-60">
            <BlurredCirle className="fill-yellow/50 " radius={800} />
          </div>
          <div className="absolute translate-y-1/2 top-2/4 animate-move-right-48">
            <BlurredCirle className="fill-red/50 " radius={600} />
          </div>
          <div className="absolute translate-y-1/2 top-full bottom-full animate-move-right-36">
            <BlurredCirle className="fill-primary/50 " radius={400} />
          </div>
          <div className="absolute -translate-y-1/2 top-full animate-move-right-24">
            <BlurredCirle className="fill-green/50 " radius={200} />
          </div>

          <div className="absolute top-1/2 animate-move-right-12">
            <BlurredCirle className="fill-white/50 " radius={100} />
          </div>
          <div className="absolute top-2/3 animate-move-right-24">
            <BlurredCirle className="fill-white/50 " radius={60} />
          </div>
        </OverlapSpace.Child>
      </OverlapSpace>
      <div className="items-center justify-center hidden sm:flex">
        <CreateAccountForm className="max-w-md p-12" />
      </div>
    </div>
  </Container>
)
