
import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Nav(props) {
    let emptyUser = {username: '', password: ''}
    let [createUser, setCreateUser] = useState({emptyUser})
    

    const handleChange = (event)=>{
        console.log(createUser)
        setCreateUser({ ...createUser, [event.target.name]: event.target.value})    
    }

    const handleUserCreate = (e) => {
        e.preventDefault();
        let userObj = {
          username: createUser.username,
          password: createUser.password
        }
        setCreateUser("")
        axios.post(
          'http://localhost:3000/users/newUser',
          userObj
        ).then((res)=>{
          console.log(res.data)
        })
      }

      const handleUserLogin = (e) => {
        e.preventDefault();
        let userObj = {
          username: createUser.username,
          password: createUser.password
        }
        setCreateUser("")
        axios.put(
          'http://localhost:3000/users/userLogin',
          userObj
        ).then((res)=>{
          console.log(res.data)
        })
      }

    return(
        <>
        <div className='nav-container'>
            
            <p className='nav-item'>LOG IN</p>
            <p className='nav-item'>CREATE ACCOUNT</p>

        </div>

        <form onSubmit={handleUserCreate}>
            <h1>CREATE ACCOUNT</h1>
        <label htmlFor="username">Username:</label>
            <br />
            <input type="text" name="username" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="picture">Password:</label>
            <br />
            <input type="text" name="password" onChange={handleChange}/>
            <br />
            <input type="submit" value="Submit" />
        </form>
        <form onSubmit={handleUserLogin}>
            <h1>LOGIN TO ACCOUNT</h1>
        <label htmlFor="username">Username:</label>
            <br />
            <input type="text" name="username" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="picture">Password:</label>
            <br />
            <input type="text" name="password" onChange={handleChange}/>
            <br />
            <input type="submit" value="Submit" />
        </form>

        </>
    )


}

export default Nav