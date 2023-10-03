import React, { Component } from 'react';
import '../components/AddMember.css';

class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      phone: '',
      email: '',
      salary: '',
      joiningDate: '',
      position: '',
      team: '',
      division: '',
      district: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const dataToSubmit = {
      name: this.state.name,
      age: this.state.age,
      phone: this.state.phone,
      email: this.state.email,
      joiningdate: this.state.joiningDate,
      salary: this.state.salary,
      team: this.state.team,
      position: this.state.position,
      division: this.state.division,
      district: this.state.district
    };

    fetch('http://localhost:8000/api/employee/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(dataToSubmit) 
    })
      .then(response => {
        if (response.status === 201) {
          alert('Form data submitted successfully');
          this.setState({
            name: '',
            age: '',
            phone: '',
            email: '',
            salary: '',
            joiningDate: '',
            position: '',
            team: '',
            division: '',
            district: ''
          });
        } else {
          alert('Error submitting form data');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form data');
      });
  };

  render() {
    const formFields = [
      { label: 'Name', name: 'name', type: 'text' },
      { label: 'Age', name: 'age', type: 'number' },
      { label: 'Phone', name: 'phone', type: 'number' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Salary', name: 'salary', type: 'number' },
      { label: 'Joining Date', name: 'joiningDate', type: 'date' },
      { label: 'Team', name: 'team', type: 'select', options: ['Developer', 'Testing', 'R & D', 'Design', 'Support', 'Technical'] },
      { label: 'Position', name: 'position', type: 'select', options: ['Frontend Developer', 'Backend Developer', 'Tester', 'R & D', 'Intern'] },
      { label: 'Division', name: 'division', type: 'select', options: ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Mymensingh', 'Rangpur'] },
      { label: 'District', name: 'district', type: 'select', options: ['Gazipur', 'Narayanganj', 'Feni', 'Noakhali', 'Bogura', 'Pabna', 'Jessore', 'Satkhira', 'Bhola', 'Patuakhali', 'Moulvibazar', 'Habiganj', 'Dinajpur', 'Thakurgaon', 'Jamalpur', 'Netrokona'] }
    ];

    return (
      <div className="container">
        <h1 className="heading">Member Information</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="familyForm">
            <div className="row">
              {formFields.map((field, index) => (
                <div className="col-50" key={index}>
                  <div className="row">
                    <div className="col-25">
                      <label>{field.label}</label>
                    </div>
                    <div className="col-75">
                      {field.type === 'select' ? (
                        <select
                          className="form-select" name={field.name} value={this.state[field.name]} onChange={this.handleChange} >
                          {field.options.map(option => (
                            <option key={option} value={option}> {option} </option>
                          ))}
                        </select>
                      ) : (
                        <input type={field.type} name={field.name} value={this.state[field.name]} onChange={this.handleChange} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMember;