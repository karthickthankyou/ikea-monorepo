import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QueryProductsArgs } from '@ikea/generated/types'

export type SearchSlice = {
  queryArgs: QueryProductsArgs
}

export const searchInitialState: SearchSlice = {
  queryArgs: {
    skip: 0,
    take: 12,
  },
}

const search = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setFilterQueryArgs: (
      state,
      action: PayloadAction<SearchSlice['queryArgs']>,
    ) => {
      state.queryArgs.where = action.payload.where
      state.queryArgs.orderBy = action.payload.orderBy
      state.queryArgs.skip = 0
    },

    setProductsSkip: (
      state,
      action: PayloadAction<SearchSlice['queryArgs']['skip']>,
    ) => {
      const skip = action.payload && action.payload < 0 ? 0 : action.payload
      state.queryArgs.skip = skip
    },
    setProductsTake: (
      state,
      action: PayloadAction<SearchSlice['queryArgs']['take']>,
    ) => {
      state.queryArgs.take = action.payload
    },
  },
})

export const { setFilterQueryArgs, setProductsSkip, setProductsTake } =
  search.actions

export const searchReducer = search.reducer
