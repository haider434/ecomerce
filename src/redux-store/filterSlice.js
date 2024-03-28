import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
 
  name: 'filters', // This should match what you use in useSelector
  initialState: {
    search: '',
    category: 'All',
    color: 'All',
    price: 'All',
    recommended: null,
  },

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPrice: (state, action) => {
      // Check if the payload is 'All', if so, reset price to 'All'
      if (action.payload === 'All') {
        state.price = 'All';
      } else {
        // Otherwise, update price to an object with min and max properties
        state.price = action.payload;
      }
    },
    setRecommended: (state, action) => {
      state.recommended = action.payload;
    },
  },
});

export const {setSearch, setColor, setCategory, setPrice, setRecommended  } = filterSlice.actions;

export default filterSlice.reducer;