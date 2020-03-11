import React, { Component } from 'react';
import Album from './components/album';
import Loader from 'react-loader-spinner'

class App extends Component {

  state = {
    albums: [],
    loading: false
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }



  handleSubmit(event) {
    //alert('banda: ' + this.input.current.value) ;
    this.setState({ band_name: this.input.current.value });
    this.setState({ loading: true });

    if (this.input.current.value !== '') {
      fetch('http://localhost:8000/api/v1/albums?q=' + this.input.current.value)
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          this.setState({ albums: data })
          this.setState({ loading: false });
          //console.log(data);
        })
        .catch(console.log)
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name band:
          <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>       
        {this.state.loading ? <Loader type="Audio"
                          color="#00BFFF"
                          height={200}
                          width={200}
                          timeout={3000} //3 secs

        /> : <Album albums={this.state.albums} />}

      </div>
    );
  }
}


export default App;