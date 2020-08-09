import React from 'react';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`


class App extends React.Component {
   state = {
      user: {},
      followers: []
    }

    componentDidMount(){
      axios.get('https://api.github.com/users/cgiddens09')
      .then(res=>{
          console.log(res.data, "user res.data");
          this.setState({
              user: res.data
          });
      })
      .catch(err => console.log(err));

      axios.get('https://api.github.com/users/cgiddens09/followers')
          .then(res=>{
              console.log(res.data, "followers res.data");
              this.setState({
                  followers: res.data
              })
          })
    }

    render() {
      // console.log(this.state.user);
      // console.log(this.state.followers);
      return (
        <Card>
          <h1>Github User Cards</h1>
          <User user={this.state.user} />
          <Followers 
            followers={this.state.followers}
            key={this.state.followers}
          />
        </Card>
      )


    }
  


}

export default App;


