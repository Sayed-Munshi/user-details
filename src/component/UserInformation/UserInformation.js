import React from 'react';

const UserInformation = (props) => {
    const{image, name, phone, salary, email, website} = props.userInformation;
    const userStyle = {border: '1px solid gray', margin: '10px', padding: '10px'}
    const imageStyle = {border: '1px solid gray', margin: '10', height: "150px"}

        const handleAddUser = props.handleAddUser;
    return (
        <div style={userStyle}>
                <img style={imageStyle} src={image} alt="" />
                <h3>This is a: {name}</h3>
                <p>My phone Number is: {phone}</p>
                <h5>My salary is: $ {salary}</h5>
                <p><small>My Email is: {email}</small></p>
                <p><small>My website is: {website}</small></p>
                <button onClick={()=> handleAddUser(props.userInformation)}>Add Data</button>

        </div>
    );
};

export default UserInformation;