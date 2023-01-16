import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const LoginSingUp = () => {
  const [showForm, setShowForm] = useState(true)

  const changeView = () => {
    setShowForm(!showForm)
  }

  if (showForm === false) {
    return <SignUp changeView={changeView} />
  } else {
    return <Login changeView={changeView} />
  }
}

export default LoginSingUp
