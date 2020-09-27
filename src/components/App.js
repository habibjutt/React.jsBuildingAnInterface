import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddApointments';
import SearchAppointment from './SearchAppointments';
import ListAppointments from './ListAppointments';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      "Name": "Habib"
    }
  }

  render () {
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {this.state.Name}
              <AddAppointments />
              <SearchAppointment />
              <ListAppointments />
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
