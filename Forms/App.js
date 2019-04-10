import React from 'react'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
         firstName:'',
         lastName: '',
         age:'',
         gender:'',
         location:'',
         veg:false,
         nonVeg:false,
         glutenFree:false
        }
        this.handleChange = this.handleChange.bind(this);
    } 
        handleChange(event){
            const {name,value,type,checked} = event.target;
            type === "checkbox" ? this.setState({[name]:checked})
                 : this.setState({[name]:value})
        }
        render(){
            let a,b,c;
            return (
                <main>
                <form>
                    <input type = 'text'
                        name='firstName'
                        placeholder='First Name'
                        value = {this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input type = 'text'
                        name='lastName'
                        placeholder='Last Name'
                        value = {this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input type = 'text'
                        name='age'
                        placeholder='Age'
                        value = {this.state.age}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <label>
                    Male
                    <input type = 'radio'
                        name='gender'
                        value='Male'
                        checked = {this.state.gender==='Male'}
                        onChange={this.handleChange}
                    />
                    </label>
                    
                    <label>
                    Female
                    <input type = 'radio'
                        name='gender'
                        value='Female'
                        checked = {this.state.gender==='Female'}
                        onChange={this.handleChange}
                    />
                    </label>
                    <br />
                    <br />
                    Location
                    <select name='location'
                        value={this.state.location}
                        onChange={this.handleChange}
                    >
                    <option value=''>Please Select</option>
                    <option value="India">New Delhi</option>
                    <option value="Boston">Boston</option>
                    <option value="London">London</option>
                    <option value="Tokyp">Tokyo</option>
                    </select>
                    <br />
                    <br />
                    <label>
                    Vegetarian
                    <input type = 'checkbox'
                        name='veg'
                        checked = {this.state.veg}
                        onChange ={this.handleChange}
                    />
                    </label>
                    <label>
                    Non Vegetarian
                    <input type = 'checkbox'
                        name='nonVeg'
                        checked = {this.state.nonVeg}
                        onChange={this.handleChange}
                    />
                    </label>
                    <label>
                    Gluten Free
                    <input type = 'checkbox'
                        name='glutenFree'
                        checked = {this.state.glutenFree}
                        onChange={this.handleChange}
                    />
                    </label>
                    
                </form>
                <h1>Passenger Details:</h1>
                <h3> Passenger Name: {this.state.firstName} {this.state.lastName}</h3>
                <h3> Passenger Age: {this.state.age} </h3>
                <h3> Passenger sex: {this.state.gender}</h3>
                <h3> Travelling to: {this.state.location}</h3>
                <h3> Meal prefernece: {this.state.veg?a='Veg':this.state.nonVeg?b='Non Veg':this.state.glutenFree?c='Gluten Free':''}</h3>
                </main>
                    
            )
        }
    }

export default App