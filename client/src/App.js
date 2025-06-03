import ListHeader from './components/ListHeader'
import { useEffect, useState } from 'react'

const App = () => {
  const userEmail = 'ania@test.com'
  const [ tasks, setTasks ] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/todos/${userEmail}`)
      const json = await response.json()
      console.log(json)
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])

  console.log(tasks)

  return (
    <div className="app">
      <ListHeader listName={'🏝️ Holiday tick list'} />
    </div>
  )
}

export default App
