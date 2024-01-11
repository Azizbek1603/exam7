"use client"
import './App.css'
import { fetchUsers } from './redux/features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()
  const handleLoadData = () => {
    dispatch(fetchUsers())
    console.log(data);
  }
  return (
    <>
      <button onClick={handleLoadData}>Fetch Users</button>
    </>
  )
}

export default App
