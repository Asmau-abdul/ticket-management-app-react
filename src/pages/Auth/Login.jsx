import { useState } from 'react';
import '../../styles/Login.scss'
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const currentUser = []

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('hi there') 
        return;
        try {
            fetch('http://localhost:3000/users')
            .then((res) => {
                if(!res.ok){
                    throw Error('no data found')
                }
                return res.json()
            })
            .then((resData) => {
                resData.forEach((data) => {
                    if(email == data.email && password == data.password){
                        console.log('Correct login')
                        window.localStorage.setItem('currentUser', JSON.stringify(data))
                        navigate('/dashboard')
                    }else{
                        console.log('Incorrect login')
                    }
                })
            } )
        } catch (error) {
            
        }
        
        
    }

    return ( 
        <>
            {/* <div className="logo">
                <h1>EventSnap</h1>
            </div> */}
            <div className='container'>
                <div className='main'>
                    <div className='loginWelcome'>
                        <h1>Welcome Back</h1>
                        <p>Login to manage your events</p>
                    </div>
                    <form action="" onSubmit={submitHandler}>
                        <div className="loginDetail">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="loginDetail">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="loginDetail">
                            <button>Login</button>
                        </div>
                    </form>
                    <p>Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
                </div>
            </div>
        </>
     );
}
 
export default Login;