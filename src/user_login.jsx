import React, {Component} from 'react'

class User_Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.username ? target.username : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //check for password authentication here
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" username={this.state.value} onChange={this.handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="text" password={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Go!" />
            </form>
        );
    }
}
export default User_Login