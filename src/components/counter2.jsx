import React, { Component } from 'react';
import axios from 'axios';
class Counter2 extends Component {
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
        axios.request({
            method: 'POST',
            mode: 'cors',
            data:{
                name: this.state.name,
                surname: this.state.surname,
            },
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            url: 'http://54.172.125.255:5000/test_post'
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err);
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
 
export default Counter2;