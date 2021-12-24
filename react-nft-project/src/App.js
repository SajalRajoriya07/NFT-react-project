import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

function App() {
  return (
    <div className='app'>
    <Header/>
    <CollectionCard 
    id={0} 
    name={'SAJAL bawa'} 
    traits={[{'value':7}]}
    image='' 
     />
    </div>
  );
}

export default App;
