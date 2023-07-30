import React from 'react'
import { useEffect , useState} from 'react'
function UserResults() {

const [users, setUsers] = useState()
const [loading, setLoading] = useState(true)

    useEffect(()=>{
fectchUsers()
},[])

const fectchUsers = async ()=>{
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
        headers:{
            Authorization: ` token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })

    const data = await response.json()
    setUsers(data)
    console.log(data)
     setLoading(false)
   console.log(users,"users")
}

if(!loading){
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 ms:grid-cols-2'>
        {users.map((user)=>(
            <h3>{user.login}</h3>
        ))}
        </div>
      )
} else{
   return <h3>Loading....</h3>
}
  
}

export default UserResults
