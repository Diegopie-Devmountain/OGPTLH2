import ClickCounter from './ClickCounter.jsx';
import RedButton from './RedButton.jsx';

export default function App() {
  return (
    <>
      <div>
        <ClickCounter initialCount={0} />
        <ClickCounter initialCount={10} />
      </div>
      <div className="redButtonContainer">
        <RedButton message="I'm a button" />
        <RedButton message="I'm another button" />
      </div>
    </>
  );
}
