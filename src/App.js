import './App.css';
import { Navbar } from './components'
import { MainPage } from './pages'

const req = {
  marriage: 2,
  sex: 1,
  edu: 4,
  limit: 40,
  pay_amt: {
    sept: 13,
    oct: 131
  },
  bil : {
    sept: 13,
    oct: 131
  },
  pay_status : {
    sept: 13,
    oct: 131
  }
}


const App = () => {
  return (
    <div>
      <Navbar/>
      <MainPage/>
    </div>
  );
}

export default App;
