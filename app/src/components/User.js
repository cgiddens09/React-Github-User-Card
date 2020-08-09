import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    background-color: #b8fce3;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2%;
`

const User = props => {
    return (
        <Main>
            <img src={props.user.avatar_url} alt="Christina" />
            <h1>{props.user.name}</h1>
            <h3>GitHub User Name: {props.user.login}</h3>
            <p>Location: {props.user.location}</p>
        </Main>
    )
}

    

export default User;