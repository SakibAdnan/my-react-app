import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var meta = ["Text One", "Text Tow", " Text Three"];
  const product = [
    {name: 'PhotoShop', price:'200'},
    {name: 'Illastator', price:'100'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <br/>
        <Bio name="Sakib" profession="Web Developer" meta={meta[0]}></Bio>
        <Bio name="Rakib" profession="WordPress Developer" meta={meta[1]}></Bio>
        <Bio name="Shumon" profession="E-commerce Developer" meta={meta[2]}></Bio>
        <Product product={product[0]}></Product>
        <br/>
        <Product product={product[1]}></Product>

      </header>
    </div>
  );
}

function Bio(props){
  var style = {
     color: 'red',
     marginTop: '10px',
     marginBottom: '10px',
     padding:'50px'
  }
  return (
    <div style={{border:'2px solid red', marginBottom:'10px'}}>
      
      <h3 style={style}>Name: {props.name}</h3>
      <h4 style={style}>Position: {props.profession}</h4>
      <h5>Meta: {props.meta} </h5>
    </div>
  );
}

function Product(props){
  const boxStyle = {
    background:'#ddd',
    color:'red',
    padding:'20px',
    width:'300px'
  }
  const {name, price} = props.product;
  return(
    <div>
      <h3>{name}</h3>
      <h3>${price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  return(
    <div>
      <h2>counter: {count}</h2>
      <button onClick={increase}> Increase</button>
      <br/>
    </div>
  )
}
export default App;
