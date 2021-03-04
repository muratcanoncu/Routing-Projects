import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import Card from "./Components/cards";
import MainCard from "./Components/mainCard";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsList: [],
      mainDisplay: [],
      mainIndex: 0,
    };
  }
  componentDidMount() {
    // axios
    //   .get(
    //     "https://newsapi.org/v2/top-headlines?country=de&apiKey=78961d7c864d4c77a95f173e437d7af1"
    //   )
    //   .then((response) => {
    //     this.setState({
    //       newsList: response.data.articles,
    //     });
    //   });

    //!---------------------------------------------------------

    fetch(
      "https://newsapi.org/v2/top-headlines?country=de&apiKey=78961d7c864d4c77a95f173e437d7af1"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          newsList: response.articles,
          mainDisplay: response.articles[0],
          mainIndex: 0,
        });
      });
    console.log("Component Did Mount is Done");
  }
  //! selecting an article and push it inside to main Card
  bigDisplayHandler = (buttonIndex) => {
    const selectedNews = this.state.newsList.filter((news, index) => {
      return index == buttonIndex;
    });
    this.setState({
      newsList: this.state.newsList,
      mainDisplay: selectedNews[0],
      mainIndex: buttonIndex,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `Before update state => current state index: ${prevState.mainIndex} coming: ${this.state.mainIndex}`
    );
    console.log("Component Did Update is Started");
    console.log(`index: ${this.state.mainIndex}`);
    console.log("Component Did Update is Done");
  }

  render() {
    return (
      <div className="d-flex mx-auto">
        <MainCard
          image={this.state.mainDisplay.urlToImage}
          title={this.state.mainDisplay.title}
          content={this.state.mainDisplay.content}
          link={this.state.mainDisplay.url}
          resource={this.state.mainDisplay.author}
        ></MainCard>
        <div className="d-flex flex-wrap">
          {this.state.newsList.map((news, index) => {
            return (
              <Card
                key={index}
                image={news.urlToImage}
                title={news.title}
                content={news.content}
                myIndex={index}
                resource={news.source.name}
                selector={this.bigDisplayHandler}
              ></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
