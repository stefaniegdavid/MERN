import React, {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [firstNameError, setFirstNameError] = useState("");
    // const [lastNameError, setLastNameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [confirmPasswordError, setConfirmPasswordError] = useState("");

    let [listOfUsers, setListOfUsers] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        let userObj = {firstName, lastName, email, password, confirmPassword};
        setListOfUsers([...listOfUsers, userObj]);
        console.log("Welcome", userObj);
    };


    return (
        <div>
            <h1>More Forms</h1>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} className='form-control' />
                    {firstName.length>0 && firstName.length<2 ? <p>First name must be at least 2 characters</p> : ""}
                </div>
                <div className='form-group'>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} className='form-control'/>
                    {lastName.length>0 && lastName.length<2 ? <p>Last name must be at least 2 characters</p> : ""}
                </div>
                <div className='form-group'>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className='form-control'/>
                    {email.length>0 && email.length<2 ? <p>Email must be at least 2 characters</p> : ""}
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} className='form-control'/>
                    {password.length>0 && password.length<8 ? <p>Password must be at least 8 chracters</p> : ""}
                </div>
                <div className='form-group'>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} className='form-control'/>
                </div>
                <input type="submit" value="Add User" className='btn btn-outline-dark mt-3'/>
            </form>
            <div className='user-list'>
                {
                    listOfUsers.map((user, index) => {
                        return (
                            <div key={index}>
                                <h2>Your Form Data</h2>
                                <h5>First Name: {user.firstName}</h5>
                                <h5>Last Name: {user.lastName}</h5>
                                <h5>Email: {user.email}</h5>
                                <h5>Password: {user.password}</h5>
                                <h5>Confirm Password: {user.confirmPassword}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );    
}

export default Form


