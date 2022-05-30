import './App.css';
import Extra from './Extra'
import { useSelector, useDispatch } from 'react-redux'

import { plusecount } from './pluseslice'

import { incriment, decriment } from './counterSlice'


function App() {

  const dispatch = useDispatch();

  const count = useSelector((e) => e.counterstate)

  const pluse = useSelector((e) => e.pluse)


  return (
    <div className="App" style={{ marginTop: "200px" }}>

      <h1>{count}</h1>

      <button onClick={() => dispatch(incriment())}>Incriment 1</button>

      <button onClick={() => dispatch(decriment(2))}>decriment 2</button>

      <hr></hr>
      <h3>second slice</h3>
      <h1>{pluse}</h1>
      <button style={{ marginTop: "20px" }} onClick={() => dispatch(plusecount(10))}>Pluse 10</button>
      <hr></hr>
      <br /><br /><br /><br />
      <Extra />
    </div>
  );
}

export default App;

















// import './App.css';
// import Extra from './Extra'
// import { useSelector, useDispatch } from 'react-redux'

// import { plusecount } from './pluseslice'

// import { incriment, decriment } from './counterSlice'


// function App() {

//   const dispatch = useDispatch();

//   const count = useSelector((e) => e.counterstate)

//   const pluse = useSelector((e) => e.pluse)


//   return (
//     <div className="App" style={{ marginTop: "200px" }}>

//       <h1>{count}</h1>

//       <button onClick={() => dispatch(incriment())}>Incriment 1</button>

//       <button onClick={() => dispatch(decriment(2))}>decriment 2</button>

//       <hr></hr>
//       <h3>second slice</h3>
//       <h1>{pluse}</h1>
//       <button style={{ marginTop: "20px" }} onClick={() => dispatch(plusecount(10))}>Pluse 10</button>
//       <hr></hr>
//       <br /><br /><br /><br />
//       <Extra />
//     </div>
//   );
// }

// export default App;
