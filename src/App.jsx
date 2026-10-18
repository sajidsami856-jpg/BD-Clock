import ClockHeading from './components/clockHeading';
import './App.css';
import ClockSlogan from './components/clockSlogan';
import CurrentTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <div>
        <ClockHeading/>
        <ClockSlogan/>
        <CurrentTime/>
      </div>
    </center>
  );
    
}

export default App;
