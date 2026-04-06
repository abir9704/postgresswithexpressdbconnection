const { createSlice } = require("@reduxjs/toolkit");


const artistslice = createSlice({
    name:'artistredux',
    initialState: {
        artistarr:[]
    },
    reducers:{
        setartists:(state,action)=>{
            state.artistarr=action.payload;
        }
    }
})

export const {setartists} = artistslice.actions
export default artistslice.reducer;