import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
  };


  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friends => {
      friends.count = 0;
    });
    alert(`Game Over! You Lost, Loser.\nScore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  winGame = () => {
    alert(`YOU WIN!\nScore: 12`);
    this.setState({ highscore: 0, score: 0 });
  }

  clickCount = id => {
    this.state.friends.find((item, i) => {
      if (item.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          if (this.state.score === 11) {
            console.log("WINNNN")
            this.winGame();
          }
          else{
          this.setState({ score: this.state.score + 1, highscore: this.state.score + 1 > this.state.highscore ? this.state.score + 1 : this.state.highscore }, function () {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        }
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
        <NavBar>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        </NavBar>
        <br></br>
        <Jumbotron>
          <Title>Friends Memory Game
          <br></br>
            Don't click the same card twice!
        </Title>
      
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
