import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Blogcard from './component'; //default export can be named any else for named export the corresponding import statement is
//import {firstmodule} from './component';
//or - import {firstmodule as thisisthefirst} from './component';
import classes from './App.module.css';


//written in jsx


//this is a function based component
//function App() {

//converting to class based component- here every javascript class extends the react component class
class App extends React.Component{
  //state parameter from component class comes with setstate function which is used to set the state of the 
  // component (ui)
  state={
    clickcondition : true
  }
  /*
    const name = 'SethulakshmiSanthosh';
    const why = 'It\'s your loss if you don\'t know me!!';
  
    //trying to create functios in jsx now!
  const age= '19'; 
  
  import { createRoot } from 'react-dom/client';
  
  const HelloMessage = (name) => <div> 'Hello ' + name </div>
  
  const root = createRoot(document.getElementById('container'));
  root.render(<HelloMessage name="Taylor" />);
    
  
    //to create a placeholder constant for input
    const placeholder='Enter anythig new!';
  
    //to create a input inside a constant ; input creates an input textbox in the browser
    const input =<input placeholder={placeholder} autoComplete></input> ;
  
    //creating an array
    const Array = [0,1,2,3,4,5,6,7,8,9];
  
    //creating object
    const Object={
      firstobj :"This is the first object",
      secondobj :"This is the second object" 
    }
    //cannot put an for loop or an if else statement inside the curly braces
    //instead can put map eg. Array.map() or ' stat1 cond stat2 ? true: false '
  
  
  const styles ={
    margin: '30px',
    borderRadius: '30px',
    boxShadow : '15px 10px 20px 10px #C0C0C0',
    padding: '50px',
    boxSizing: 'border-box'
  }
  */


  /* TO CREATE JSX ELEMENTS DYNAMICALLY
        example-
        first create an array of objects */
  

  //since we've converted to class based component we no longer have to declare as 'const' on var and all these 
  //variables are considered as class components and all these variables are used by using this keyword
  //const objArr = [
  objArr =[
    {
      id: 1,
      obj1: 'obj1',
      obj2: 'obj2'
    },
    {
      id: 2,
      obj1: 'obj1',
      obj2: 'obj2'
    },
    {
      id: 3,
      obj1: 'obj1',
      obj2: 'obj2'
    }]

  /*now we map function*/
  onlikebyttonclick=(pos)=>alert("like button clicked at" + pos)
  mapconst = this.objArr.map((item, pos) => {
    /* inspect browser page after the following code and see the console if it is accepted*/
    //console.log(item);
    return (
      //a self closing tab represents the component imported from another .js file as shown below with a
      // key that uniquely identifies each element corresponding to ap function to the object array previously
      // created, here several props are also added to which data is allocated corresponding to each instance
      // of object of the array elements
      <Blogcard key={pos} idnum={item.id} objOne={item.obj1} objTwo={item.obj2} 
      Onlikebutonclicked={()=>this.onlikebyttonclick(pos)}/>
      //    <div className='styles' key={item.id}>
      //      <h3>{item.obj1}</h3>
      //      <p>{item.obj2}</p>
      //    </div>
    )
  }
  )

  /*Now all the elemnts created dynamically is saved in mapconst which will be produced
  in the return function of this app.js
  
  Then comes the need to have a separate key which uniquely identifies
  each and every dynamically created element from the map by the following-
  #passing a position costant assigned to key as an argument in the map function and passing it as an 
  attribute to the instance of the created jsx component(here div)
  or
  #adding a constant value of id which is unique for every objects in the objArr 
  
  NOTE: THE ID CREATED SEPARATELY OR POS CONSTANT MUST BE SPECIFIES TO KEY ATTRIBUTE IN THE COMPONENT*/
  onclick=()=>{
   // let updatedstatevalue= !this.state.clickcondition;
   // this.setState({clickcondition :updatedstatevalue});
   //or another way to do the above statement would be 
    this.setState((prevState,prevProps)=>{
      return {clickcondition : !prevState.clickcondition}
    })


   //setstaemethod updates the state and calls render method
  }

  
  //since a class cannot have an arbitarary return statement we use a method called render which is called 
  // everytime the component is created or updated i.e. rendered on screen
  render(){
  return (
    <div className={classes.App}>

      {/*
      <h2>Hey I'm {name}... again {name+ ' '+ name}</h2>
      <h3>{why} </h3>
      <h4>{getsomefunc(name, age)}</h4>
      {input}
      <p>{Array[1]}</p>
      {Object.firstobj}
      {Array.map(getsomefunc)}
      <p>{2<3?'True':'False'}</p>
      */}

      {/* Here an object of style is added on to theparticular required div
      Also the camelcase is followed in case of object 
      <div style={
        {margin: '30px',
        borderRadius: '30px',
        boxShadow : '15px 10px 20px 10px #C0C0C0',
        padding: '50px',
        boxSizing: 'border-box'
      }
      }>

      <div style={styles}>
     */}
      {/* Here the div is given a class name to which the styles applied in the
      css file matches to */}

      <button onClick={this.onclick}>{this.state.clickcondition? 'Hide List' : 'Show List'}</button>
      <br></br>
      {
      this.state.clickcondition ?  this.mapconst : null 
      }
    </div>
  );
 }
}

export default App;
