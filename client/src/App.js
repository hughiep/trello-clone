import history from './history';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes history={history}/>
    </div>
  );
}

export default App;
