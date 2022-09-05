import React, { Component } from 'react';
import axios from 'axios';

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
    handleSubmit(){
        axios.get("http://localhost:5000/").then((response)=>{
            console.log(response);
        })
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
                    <button className='m-2 btn-lg' onClick={()=>this.handleSubmit()}>Submit</button>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Counter;