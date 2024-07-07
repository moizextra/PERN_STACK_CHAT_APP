import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export interface SideBarChatsProps{
  data:{
    id:string,
    fullName:string,
    profilePic:string
  }
  isLoading:boolean
    error:string | null
}

const initialState: SideBarChatsProps = {
    data:{
        id:'',
        fullName:'',
        profilePic:''
    },
    isLoading:false,
    error:null
  }

export const getChats: any = createAsyncThunk(
    'chats/getChats',
    async ()=>{
        try{
                const response = axios.get("http://localhost:3000/api/messages/conversations");
                    console.log(response)
        }catch(error){
            console.log(error)
        }
    }
)


const SideChats = createSlice({
    name: 'User',
    initialState,
    reducers: {
      clearError: (state) => {
        state.error = null
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getChats.pending, (state) => {
          state.isLoading = true
          state.error = null
        })
        .addCase(getChats.fulfilled, (state, action: PayloadAction<SideBarChatsProps['data']>) => {
         console.log(action.payload)
        })
        .addCase(getChats.rejected, (state, action) => {
          console.log(action.payload)  
        })
        
    },
  })
  
  export const { clearError } = SideChats.actions
  export default SideChats.reducer