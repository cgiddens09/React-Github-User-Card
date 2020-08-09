
import React from 'react';
import styled from 'styled-components';


const Follow = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    background-color: #66ffc7;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2%;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
`

const Followers = props => {
    return(
        <div>
            {props.followers.map(person => (
                <Follow>
                    <h2>Followers: </h2>
                    <Image src={person.avatar_url} alt="" />
                    <p>GitHub User Name: {person.login}</p>

                </Follow>
            ))}
        </div>
    );
}


export default Followers;
