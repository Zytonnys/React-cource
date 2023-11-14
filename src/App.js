
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { minecraftGetMobsAction } from './store/creators/minecraftCreators';

function App() {
 const selector = useSelector(s => s.minecraftReducer);
 const dispatcher = useDispatch();
 return<div className='App'>
<span>{selector.mobs}</span>
   <button onClick={()=> dispatcher(minecraftGetMobsAction(['creaper','zombie','skelet','steve']))
  }>get mobs

   </button>
 </div>
}

export default App;
