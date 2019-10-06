import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyNav, ArticleCard} from './components';

class App extends React.Component {
  state = {
    articles: null
  }
  getArticles = () => {
    fetch('/scrape').then(response => response.json()).then(response => this.setState({articles: response}))
  }

  render() {
    return (
      // gamePlay = {((e) => this.handleClick(e, id))}
      <div className="App">
        <MyNav
        getArticles = {((e) => this.getArticles(e))}
        ></MyNav>
  
        {this.state.articles ? (
          this.state.articles.map(({ title, summary, href}, index) =>
          <ArticleCard
          key={index}
          title={title}
          summary = {summary}
          href = {href}>
          </ArticleCard>
        )
        ) : (
          <h3>No articles to display.</h3>
        )}
  
  
      </div>
    );
  }
}

export default App;
