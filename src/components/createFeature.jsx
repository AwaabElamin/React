import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export function CreateForm(){
    return(
        React.createElement('form',{},
        React.createElement('h1',{},"Login"),
        React.createElement('input',{type:'text',placeholder:'Name', value:''}),
        React.createElement('br',{}),
        React.createElement('br',{}),
        React.createElement('input',{type:'password', placeholder:'password', value:''}),
        React.createElement('br',{}),
        React.createElement('br',{}),
        React.createElement('button',{type:'submit'},"Login")
        )
    );
}
export function CreateFormJSX(){
    return(<form>
        <h2>Login JSX</h2>
        <input type="text" placeholder="Name"/><br/><br/>
        <input type="password" placeholder="password"/><br/><br/>
        <input type="submit" className="btn btn-primary" value="Login"/>
    </form>)
}
export function ChooseBetweenForm(choose){
    return choose === 'CreateForm'?CreateForm:CreateFormJSX;
}