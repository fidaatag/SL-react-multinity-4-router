 import './App.css';
import Welcome, {
		Welcome2, 
		Welcome3, 
		Welcome4, 
		Welcome5
	} from './Welcome';

function App() {
  return (
    <div className="App">
    	<Welcome />
    	<Welcome2 />
    	<Welcome3 />
		<Welcome4 text="Welcome Pakai Text" /> 
		<Welcome5 children="Welcome Pakai Children" />
		<Welcome5>Welcome Langsung</Welcome5>
    </div>
  );
}

export default App;
