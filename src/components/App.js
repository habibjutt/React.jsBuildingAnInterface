import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddApointments';
import SearchAppointment from './SearchAppointments';
import ListAppointments from './ListAppointments';
import { without } from 'lodash';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      "myAppointments": [],
      "lastIndex": 0,
      formDisplay: false,
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm  = this.toggleForm.bind(this);
  }

  deleteAppointment (apt) {
    let tempAts = this.state.myAppointments;
    tempAts = without(tempAts, apt);
    this.setState( 
      {
        myAppointments: tempAts
      }
    )
  }

  toggleForm () {
    this.setState(
      {
        formDisplay: !this.state.formDisplay
      }
    )
  }

  componentDidMount () {
    fetch('./data.json')
    .then(response => response.json())
    .then( result => {
      const apts = result.map(item => {
        item.aptId = this.state.lastIndex;
        this.setState(
          {
            lastIndex: this.state.lastIndex + 1
          }
        )
        return item;
      });

      this.setState(
        {
          myAppointments: apts
        }
      )
    })
  }

  render () {

    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments formDisplay={this.state.formDisplay} toggleForm={this.toggleForm} />
              <SearchAppointment />
              <ListAppointments appointments = {this.state.myAppointments} deleteAppointment={this.deleteAppointment} />
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
