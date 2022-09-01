import React, { Component } from 'react';

class Counter extends Component {
    state = {
        name: '',
        surname: ''
    }  

    handleName(n){
        const name = n.target.value;
        this.setState({name});
    }
    handleSurname(n){
        const Surname = n.target.value;
        this.setState({Surname});
    }
    render() { 
        return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
        }}>
            <div>
                
                <h1 className='m-2'>Login</h1> 
                <div>
                    <input className='m-2' type="text" onChange={n=>this.handleName(n)}/>
                </div>
                <div>
                    <input className='m-2' type="text" onChange={n=>this.handleSurname()}/>
                </div>
                <div>
                    <button className='m-2 btn-lg'>Submit</button>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Counter;