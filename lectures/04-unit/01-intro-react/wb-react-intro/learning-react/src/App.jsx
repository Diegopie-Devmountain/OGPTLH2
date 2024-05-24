import './App.css';
import RedButton from './components/RedButton.jsx';
import ClickCounter from './components/ClickCounter.jsx';

export default function App() {

  return (
    <>
     <RedButton message="New Message" color='blue'/>
      <ClickCounter />
    </>
  )
}
