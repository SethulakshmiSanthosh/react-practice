import React from 'react';
import classes from './App.module.css'//we import the module css file to apply its style into the div element
// mentioned in this file, here 'classes' is just an alias name which could be anyname


/* components can be of two types - functional and object-based
here this .js file is creating a functional component

we need to import react for all .js files

after finishing the code we need to export the item in the cretaed component .js file- export is of two types-
 default(in case of export of a single module from file, a file can only have one default export, can
 import module by any name) and named (when you want to export multiple modules from same file)
Here since only one is being export we switch to a default export */

//Here the prop represent the attribute added to the exported item of this .js file to another 
//These attributes are provided with dynamic data of the map function from the array object

{/*
export default function Blogcard(props) { //here 'export default' or 'export default modulename' at the eof
    return (
        //<div className='styles'> -incase we use css files imported into the App.js
        <div className={classes.styles}> 
        //here css module files are used where it makes every element created
      //with the same class name be differenciated as diiferent objects of the same javascript class which will
      //be reflected in the compiled css file and gives a local scope for the and not the global 

        
            <h3>{props.idnum}</h3>
            <p>{props.objOne}</p>
            <p>{props.objTwo}</p>
        </div>
    );
}
*/}
//export default Blogcard; //even though the module here is exported as Blogcard name in the importing .js 
//file instead of - import Blogcard from './component' - it can be - import _anyothername_ from './component'-
//since it is a default export we already know that only one module is exported from this file and hence it is
//clear that whatever the name be given in the importing file we litrally mean this same single module which is
//being imported

//export {firstmodule, secondmodule} 
//the above is the named export
//named export can also be done by the following method too
/*
export function Blogcard(props) {
    return (
        <div className='styles'>
            <h3>{props.idnum}</h3>
            <p>{props.objOne}</p>
            <p>{props.objTwo}</p>
        </div>
    );
}

export function 2ndfun()....

this is done so that there is no need for mentioning the export at the end of the .js file
*/

//converting to class based component ...the same becomes

class Blogcard extends React.Component {
    state={
        like_count : 0
    }

    on_click=() => {
        this.setState((prevState,prevProps)=>{
        return{
            like_count: prevState.like_count+1 
        }
    })
    }
    render() {
        return (
        <div className = { classes.styles } >
            <h3>{this.props.idnum}</h3> {/* for javascript expressions inside jsx we put inside { } */}
            <p>{this.props.objOne}</p>
            <p>{this.props.objTwo}</p>
            <p><span className={classes.likecount}> Likecount : {this.state.like_count} </span></p>
            <p><button onClick={this.on_click}>like</button></p>
             {/*/or to increment */}

                            {/* |as given below creating as anonymous function makes the onclick work for
                                one of the clicked and not show the alert corresponding to all blogcards */}
            <p><button onClick={this.props.Onlikebutonclicked}>Like button since prop
             from app.js</button></p>
        </div >
        )
}
}

export default Blogcard