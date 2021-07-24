import { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'


const UserList = () => {

    const [listOfUser, setlistOfUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setlistOfUser(res.data))
    }, [])
    return (
        <div>
            <h1 > List of users  </h1> 
                  
                {listOfUser.map((user) => <h4 key={user.id} style={{margin: "50px 500px", padding: 10, border:"1px dashed black"}} >{user.name} </h4>)}
          
        </div>
    )
}

export default UserList


