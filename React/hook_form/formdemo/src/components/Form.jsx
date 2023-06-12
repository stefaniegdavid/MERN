import React, { useState } from 'react'

const Form = () => {
    //State variables first name, last name, email, password, confirm password
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let [listOfUsers, setListOfUsers] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted", firstName, lastName, email, password, confirmPassword);
        let userObj = {firstName, lastName, email, password, confirmPassword}
        setListOfUsers([...listOfUsers, userObj]);

    }

    return (
        <div>
            <h1>Hook Form</h1>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} className='form-control'/>
                </div>
                <input type="submit" value="Add User" className='btn btn-outline-dark mt-3'/>
            </form>
            <hr />
            <div className='user-list'>
                {
                    listOfUsers.map((user, index) => {
                        return (
                            <div key={index}>
                                <h3>Your Form Data</h3>
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
    )
}

export default Form