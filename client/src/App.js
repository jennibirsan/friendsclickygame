import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
  };


  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friends => {
      friends.count = 0;
    });
    alert(`Game Over! You Lost, Loser.\nScore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((item, i) => {
      if (item.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

<Wrapper>
        <Jumbotron> 
        <Title>Friends Clicky Game
          <br></br>
          Don't click the same card twice!
        </Title>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        </Jumbotron>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
