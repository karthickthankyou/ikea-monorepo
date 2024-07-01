import React, { FormHTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form'

export type ErrorType = {
  fieldName: string
  message?: string
}

type FormProps = {
  errors: FieldErrors
} & FormHTMLAttributes<HTMLFormElement>

const getErrorsArray = (errors: FieldErrors) =>
  Object.entries(errors).map(([key, val]) => ({ key, message: val?.message }))

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => (
    <form
      ref={ref}
      className="flex flex-col w-full appearance-none placeholder-gray focus:ring-primary sm:text-sm"
      {...props}
    >
      {props.children}
      <div className="text-xs flex flex-col gap-2 text-red-800">
        {getErrorsArray(props?.errors).length
          ? getErrorsArray(props?.errors).map((err) => (
              <div key={err.key}>
                <>
                  {err.key}: {err.message}
                </>
              </div>
            ))
          : null}
      </div>
    </form>
  ),
)
Form.displayName = 'Form'
