// React Imports
import React, { Component } from 'react'
import './Dashboard.scss'

// Image Imports
import logo from './logo.svg';
import loading from './loading.gif'

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// My Cmponent Imports
// import Counter from './components/counter';
import JobList from './components/JobList';
import JobCreationForm from './components/JobCreationForm';
import Timer from './components/Timer';

// My Other Imports
import JobsAPI from './api/JobsAPI';
// import ResizeWindow from './components/ResizeWindow';
import LemEditsPic from './images/LemEdits.jpg'

class Dashboard extends Component {
  state = {
    jobs: [],
    isFormVisible: false,
    loading: false
  };

  componentDidMount = async() => {
    this.setState({ loading: true });
    const jobs = await JobsAPI.getJobs();
    this.setState({ jobs });
    this.setState({ loading: false });
  };

  toggleFormVisible = () => {
    this.setState({
      isFormVisible:!this.state.isFormVisible,
    })
  };
  
  render() {
    if (this.state.loading) {
      return(
        <div className='App-loading-page'>
          <header className="App-header">
            <img src={LemEditsPic} className="Banner" alt="LemEditsPic" />
          </header>
          <div>
            <img src={loading} className="loading-page--loader" alt="load" />
          </div>
        </div>
      )
    }

    return (
      <>
        <header className="App-header">
          <img src={LemEditsPic} className="Banner" alt="LemEditsPic" />
        </header>
        <header className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Nav">
            <div>About Me</div>
          </div>
        </header>
        <div className="App">
          <header className="App-header">
          </header>
          <br/>
          <Timer/>
          <Tabs defaultActiveKey="counter" id="uncontrolled-tab-example" >
            <Tab eventKey="shirtsList" title="Custom Shirts">
              <JobList className='App' jobs={this.state.jobs}/>
            </Tab>
            <Tab eventKey="jobCreationForm" title="Job Creation Form">
              <br/>
              <Button onClick={this.toggleFormVisible}>
                {this.state.isFormVisible ?
                  'Hide form' :
                  'Show form'
                }
              </Button>
              <div style={{ display: this.state.isFormVisible ? 'block' : 'none' }}>
                <JobCreationForm/>
              </div>
            </Tab>
          </Tabs> 
        </div>
      </>
    );
  }
}

export default Dashboard;
