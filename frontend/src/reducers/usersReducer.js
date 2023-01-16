import { createSlice } from '@reduxjs/toolkit'
import usersService from '../services/users'
import { dispatchNotification } from './notificationReducer'

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
    newUser(state, action) {
      console.log(state)
      state.push(action.payload)
      console.log(state)
    },
  },
})

export const allUsers = () => {
  return async (dispatch) => {
    const users = await usersService.getAll()
    dispatch(setUsers(users))
  }
}

export const createNewUser = (userObject) => {
  return async (dispatch) => {
    try {
      const newUserAdd = await usersService.newUser(userObject)
      dispatch(newUser(newUserAdd))
      dispatch(
        dispatchNotification(
          {
            notification: `${newUserAdd.username} created`,
            type: 'success',
          },
          5
        )
      )
    } catch (error) {
      dispatch(
        dispatchNotification(
          {
            notification: error.response.data.error,
            type: 'error',
          },
          5
        )
      )
    }
  }
}

export const { setUsers, newUser } = usersSlice.actions
export default usersSlice.reducer
