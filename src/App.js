import './App.css';
import Header from './components/Header'
import Menus from './components/home/Menus'

import {Box} from '@mui/material'

function App() {
  return (
    <Box sx = {{ backgroundColor: "#eeeeee"}}>
      <Header/>
      <Menus/>
    </Box>
  );
}

export default App;
