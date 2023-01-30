
import Add from './components/Add';
import Sub from './components/Sub';
import User from './components/User';
import User_listing from './components/User_listing';

function App() {
  var user_data = {
    name: "Shubham",
    age: 20,
    city: "Dehradun"
  }
  return (
    <div>
{/*       <h1>Hello react</h1> 
      <h1>5*5</h1>  */}
     {/*  <Add />
      <Sub /> */}

      <User_listing/>
      {/* <Sub x={5} y={10}/>
      <User data={{name:"Aditya",age:27,city:"mumbai", avatar:"https://media.istockphoto.com/id/1008831236/photo/panoramic-view-of-marine-drive-at-dusk-mumbai-india.jpg?s=612x612&w=0&k=20&c=gZ_wmR5bWHCnbeGsXaXxPcv1XTmfGsYVcrzNzIr-aOY="}}/>
      <User data = {user_data}/> */}
    </div>
  );
}

export default App;
