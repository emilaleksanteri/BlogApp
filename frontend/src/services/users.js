import axios from 'axios'
const baseUrl = '/api/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const newUser = async (userObject) => {
  const newUser = await axios.post(baseUrl, userObject)
  return newUser.data
}

export default { getAll, newUser }
