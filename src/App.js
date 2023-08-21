import logo from './logo.svg';
import './App.css';


// time 
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "August", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();

var greetings = ["Good Morning 🌥", "Good Afternoon ☀", "Good Evening 🌙"];


var hr2 = new Date().getHours()
console.log(hr2)


function checkGreeting () {
  if (hr2 == 0 & hr2 < 12){
  return greetings[0] 
} else if (hr2 >= 12 & hr2 <= 18) {
return greetings[1];
} else {
  return greetings[2]
}
}






function App() {
  return (
    <div className="App">
    <div className='time-all'>
      <div className='left-body'>
       <p style= {{padding: "0px, 0px", fontSize: "40px", height: "20px" }}> {hr}:{min} {ampm} </p> 
           
           <p>   {day}, {month} {date} {year}  </p> 
      </div>
   
      <div className='right-body'>
      <p style= {{padding: "0px, 0px", fontSize: "40px", height: "20px" }}>  London </p>
          <p>   United Kingdom </p> 
      </div>
      </div>
      <div className='greetings'> {checkGreeting()}</div>
      </div>
   
  );
}

export default App;
