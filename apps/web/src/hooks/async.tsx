import { useCallback, useEffect, useState } from 'react'
import { catchError, debounceTime, EMPTY, Subject, tap } from 'rxjs'

type AsyncFn<T, U> = (args: U) => Promise<T>

type UseAsyncReturnType<T, U> = [state: State<T>, callAsyncFn: (arg: U) => void]

type State<T> = {
  loading: boolean
  error: any
  success: boolean
  data: T | null
}

export const useAsync = <T, U>(
  asyncFn: AsyncFn<T, U>,
  manageErr?: (err: any) => String,
): UseAsyncReturnType<T, U> => {
  const [state, setState] = useState<State<T>>({
    loading: false,
    error: null,
    success: false,
    data: null,
  })

  const callAsyncFn = useCallback(
    async (args: U) => {
      setState({
        loading: true,
        error: null,
        success: false,
        data: null,
      })

      try {
        const data = await asyncFn(args)
        setState({
          loading: false,
          error: null,
          success: true,
          data,
        })
      } catch (err) {
        const errorString = manageErr
          ? manageErr(err)
          : 'Request failed. Please try again.'
        setState({
          loading: false,
          error: errorString,
          success: false,
          data: null,
        })
      }
    },
    [asyncFn, manageErr],
  )

  return [state, callAsyncFn]
}

export const useDebounce = (delay: number = 1000) => {
  const [debouncedSet$] = useState(() => new Subject<() => void>())
  useEffect(() => {
    const subscription = debouncedSet$
      .pipe(
        debounceTime(delay),
        tap((func) => func()),
        catchError(() => EMPTY),
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [delay, debouncedSet$])

  return debouncedSet$
}

export const useDebouncedValue = <T,>(value: T, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const debouncedSet$ = useDebounce(delay)

  useEffect(() => {
    debouncedSet$.next(() => setDebouncedValue(value))
  }, [debouncedSet$, value])

  return debouncedValue
}
