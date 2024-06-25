import './App.css';
import React from "react";

class App extends React.Component {
  state = {vrijednost: ""};

  promjenaTexta = event => {
    console.log("event vrijednost: " + event.target.value);
    this.setState({vrijednost: event.target.value});
  };

  pohranaForme = event => {
    event.preventDefault();
    const {vrijednost} = this.state;
    
    alert("U state je vrijednost: " + vrijednost);
  };

  render() {
    return (
      <form onSubmit={this.pohranaForme}>
        <label>Unesi tekst:</label>
        <input type='text' onChange={this.promjenaTexta}></input>
        <input type='submit' value='Unesi'></input>
      </form>
    );
  }
}

export default App;