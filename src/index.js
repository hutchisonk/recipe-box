import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/skeleton.css';
import './css/style.css';

// import $ from 'jquery';

import App from './App.js';

render((
  <Router>
    <Route exact path="/" component={App} />
  </Router> ),
document.getElementById('main'));
//
// $(".recipe_card").hover(function(){
//   // $(this).css("border", "1px solid #555");
//
//   console.log(this.childNodes[0]);
//   //show ingredients you're hovering over. maybe turn this into a click later
//   //eventually also show an edit/remove button
//   $("."+this.childNodes[0].classList[0]+" .ingredient").css("display", "block");
//
//   //change menu coloring on hover. probably keep something like this on hover if we change ^ to click
//   $("h2."+this.childNodes[0].classList[0]).css({"color":"#FD949E"});//, "height": "3em"});
// }, function(){
//   $(".ingredient").css("display", "none");
//   $(this).css("border-bottom", "none");
//
//   // $("").css("color","#000");
// })
