
import '../App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Nav(props) {
    let emptyUser = {username: '', password: ''}
    let [createUser, setCreateUser] = useState({emptyUser})
    let [showLogin, setShowLogin] = useState(false)
    let [showCreate, setShowCreate] = useState(false)
    let [error, setError] = useState('')
    let [arrowState, setArrowState] = useState("material-symbols-outlined arrow")
    let [dropDownState, setDropDownState] = useState("dropdown-hidden")

    const changeArrow = () => {
      if (arrowState ==="material-symbols-outlined arrow") {
        setArrowState("material-symbols-outlined arrow-turned")
        setDropDownState("dropdown-list")
      } else {
        setArrowState("material-symbols-outlined arrow")
        setDropDownState("dropdown-hidden")
      }
      
    }



   //function to reveal account related modals using an if else statement to separate function by id of element 
    const revealAccountModal = (e) => {
        if (e.target.id === "login-button") {
            setShowLogin(true)
            setShowCreate(false)
            props.setGoState("hidden")
            setError("")
        } else {
            setShowCreate(true)
            setShowLogin(false)
            props.setGoState("hidden")
            setError("")
        }
    }
    
    //tracks change of form to create user state to submit for login or account creation, can use same function as forms cannot be open at the same time

    const handleChange = (event)=>{
        console.log(createUser)
        setCreateUser({ ...createUser, [event.target.name]: event.target.value})    
    }

    //creates the user in the database

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
          if (res.data==="There was an error") {
          setError("Username unavailable")
          e.target.reset()
          } else {
            props.setMyUser(res.data)
            e.target.reset()
            setError("")
            setShowCreate(false)
            props.setPageState('set-location')
          }
        })
      }


    //checks user info versus the database and logs in if password and account name matches
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
          if(res.data === "User not found") {
            setError(res.data)
            e.target.reset()
          } else if (res.data === "There was an error") {
            setError(res.data)
            e.target.reset()
          } else if (res.data === "Password does not match") {
            setError(res.data)
            e.target.reset()
          } else {
            props.setMyUser(res.data)
            e.target.reset()
            setError('');
            setShowLogin(false);
            props.setPageState('set-location')
          }
        })
      }

    return(
        <>
        <div className='nav-container'>
            {props.myUser.username ?
            <>
            <span className={arrowState} >
                    change_history
            </span>
            <p className='nav-item' data-toggle="dropdown" id="username" onClick={changeArrow}>{props.myUser.username}</p>

            <div className={dropDownState}>
            <p className='nav-item' type="button" id="logout" onClick={()=>{props.setMyUser({})}}>LOGOUT</p>
            </div>
            
            </>
            :
            <>
            <p className='nav-item' id="login-button" onClick={revealAccountModal}>LOG IN</p>
            <p className='nav-item' id="create-acc-button" onClick={revealAccountModal}>CREATE ACCOUNT</p>
            </>
            }

        </div>
        
        {showCreate ?
        <div className='create-account-modal'>
        <div className='create-account-container'>
            <p className='x' onClick={()=>{setShowCreate(false);props.setGoState("go")}}>x</p>
            <h1>CREATE ACCOUNT</h1>
            <form className='account-form' onSubmit={handleUserCreate}>
                <label htmlFor="username">Username:</label>
                <br />
                <input className="form-control" type="text" name="username" onChange={handleChange} />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input className="form-control" type="text" name="password" onChange={handleChange}/>
                <p className='error-field'>{error}</p>
                <div className='button-div'>
                  <input className='btn account-submit' type="submit" value="SUBMIT" />
                </div>
            </form>
        </div>
        </div>
        :
        null
        }

        {showLogin ? 
             <div className='create-account-modal'>
             <div className='create-account-container'>
                <p className='x' onClick={()=>{setShowLogin(false);props.setGoState("go")}}>x</p>
                <h1>LOGIN TO ACCOUNT</h1> 
                <form className='account-form' onSubmit={handleUserLogin}> 
                    <label htmlFor="username">Username:</label>
                    <br />
                    <input className="form-control" type="text" name="username" onChange={handleChange} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input className="form-control" type="text" name="password" onChange={handleChange}/>
                    <p className='error-field'>{error}</p>
                    <div className='button-div'>
                      <input className='btn account-submit' type="submit" value="SUBMIT" />
                    </div>
                </form>
            </div>
            </div>
        :
        null
        }

        </>
    )


}

export default Nav