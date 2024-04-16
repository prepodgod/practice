import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    categoryId: 0,
    sort:

      { name: 'популярности', prop: 'rating', order: 'desc' },
    pageCount: 1,

  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setPageCount(state, action) {
      state.pageCount = action.payload
    }
  },


})

export const { setCategoryId, setSort, setPageCount } = filterSlice.actions

export default filterSlice.reducer
