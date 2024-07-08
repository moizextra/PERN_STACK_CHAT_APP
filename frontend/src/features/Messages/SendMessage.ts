import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Message {
     
}

export interface currentChatMessages {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

const initialState: currentChatMessages = {
  messages: [],
  isLoading: false,
  error: null,
};

export const getMessages:any = createAsyncThunk(
  'chats/getMessages',
  async (id:string) => {
    const axiosOptions = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await axios.get(`http://localhost:3000/api/messages/${id}`, axiosOptions);
      return response.data; // This should be the data you want to store in the state
    } catch (error) {
      throw error; // This will be handled by the rejected case
    }
  }
);

const currentChatMessages = createSlice({
  name: 'currentChatMessages',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMessages.fulfilled, (state, action: PayloadAction<Message[]>) => {
        state.messages = action.payload;
        state.isLoading = false;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch chats';
      });
  },
});

export const { clearError } = currentChatMessages.actions;
export default currentChatMessages.reducer;
