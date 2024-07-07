import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/User/index"
import SideBarReducer from "./features/Chats/fetchchats"
export const store = configureStore({
  reducer: {
    user: userReducer,
    SidebarChats : SideBarReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch