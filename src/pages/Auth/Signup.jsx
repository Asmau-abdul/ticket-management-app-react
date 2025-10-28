import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [isError, setIsError] = useState(false)
    
    const formData = {
        fullname : name,
        email : email,
        password : password,
        events : []
    }

    const submitHandler = (e) => {
        setIsError(false)
        e.preventDefault()
        if(name.trim() == ''){
            setIsError(true)
            return
        }else{
            setIsError(false)
        }
        if(password.trim() == ''){
            setIsError(true)
            return
        }
        if(confirmPassword != password){
            setIsError(true)
            return
        }

        console.log('hi there')
    }

    return ( 
        <>
                <div className='container'>
                    <div className='main'>
                        <div className='loginWelcome'>
                            <h1>Welcome</h1>
                            <p>Signup to manage your events</p>
                        </div>
                        <form action="" onSubmit={submitHandler}>
                            <div className="loginDetail">
                                <label htmlFor="name">Name</label>
                                <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} required/>
                                {isError && <p>Invalid Name</p>}
                            </div>
                            <div className="loginDetail">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="loginDetail">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                                {isError && <p>Invalid Password</p>}
                            </div>
                            <div className="loginDetail">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="confirmPassword" name="confirmPassword" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} required/>
                                {isError && <p>Incorrect</p>}
                            </div>
                            <div className="loginDetail">
                                <button>Sign Up</button>
                            </div>
                        </form>
                        <p>Alerady have an account? <Link to={'/login'}>Login</Link></p>
                    </div>
                </div>
        </>
     );
}
 
export default Signup;