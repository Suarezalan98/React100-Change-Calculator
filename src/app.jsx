import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      totalChange: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  calculate() {
    const totalChange = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    let difference = totalChange * 100
    this.setState({totalChange})

    const twenties = Math.floor(difference / 2000);
    const tens = Math.floor((difference % 2000) / 1000);
    const fives = Math.floor(((difference % 2000) % 1000) / 500);
    const ones = Math.floor((((difference % 2000) % 1000) % 500) / 100);
    const quarters = Math.floor(((((difference % 2000) % 1000) % 500) % 100) / 25);
    const dimes = Math.floor((((((difference % 2000) % 1000) % 500) % 100) % 25) / 10);
    const nickels = Math.floor(((((((difference % 2000) % 1000) % 500) % 100) % 25) % 10) / 5);
    const pennies = Math.floor((((((((difference % 2000) % 1000) % 500) % 100) % 25) % 10) % 5) / 1);
    
    this.setState({
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
    })
  };

  render() {
    return (
      <div className='container-fluid'>
        <h1 style={{color: 'white'}}>Change Calculator</h1>
        <hr/>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card text-left'>
              <div className='card-header' style={{fontWeight: 'bold'}}>Enter Information Here!</div>
              <div className='card-body form-group'>
                <label style={{fontWeight: 'bold'}} htmlFor='due'>How much is due?
                  <input type='number' name='amountDue' step='0.01' className='form-control' id='due' value={this.state.amountDue} onChange={this.handleChange}></input>
                </label>
              </div>
              <div className='card-body form-group'>
                <label style={{fontWeight: 'bold'}} htmlFor='received'>How much was received
                  <input name='amountReceived' type='number' step='0.01' className='form-control' id='received' value={this.state.amountReceived} onChange={this.handleChange}></input>
                </label>
              </div>
              <div className='card-footer form-group'>
                <button type='button' className='btn-info' onClick={this.calculate}>Calulate</button>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='card'>
              <div className='card-header text-center'>
                <h2 className='alert alert-success'>The total change due is ${this.state.totalChange}</h2>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{fontWeight: 'bold' }}>Twenties</p>
                      <p style={{fontWeight: 'bold'}}>{this.state.twenties}</p>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{fontWeight: 'bold' }}>Tens</p>
                      <p style={{fontWeight: 'bold'}}>{this.state.tens}</p>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{fontWeight: 'bold' }}>Fives</p>
                      <p style={{fontWeight: 'bold'}}>{this.state.fives}</p>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{fontWeight: 'bold' }}>Ones</p>
                      <p style={{fontWeight: 'bold'}}>{this.state.ones}</p>
                    </div>
                  </div>
                </div>
                <br/>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{fontWeight: 'bold' }}>Quarters</p>
                      <p style={{fontWeight: 'bold'}}>{this.state.quarters}</p>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{fontWeight: 'bold' }}>Dimes</p>
                      <p style={{fontWeight: 'bold'}}>{this.state.dimes}</p>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{ fontWeight: 'bold' }}>Nickels</p>
                      <p style={{fontWeight: 'bold'}}>{this.state.nickels}</p>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className="col-sm-12 mx-auto border rounded-sm text-center">
                      <br/>
                      <p style={{fontWeight: 'bold' }}>Pennies</p>
                      <p style ={{fontWeight: 'bold'}}>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
