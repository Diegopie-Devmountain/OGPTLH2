import { useLoaderData } from 'react-router-dom';
import Placeholder from './Placeholder';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const outletData = useOutletContext()
  console.log(outletData);
  return <h2>Home</h2>;
}

function About() {
  const outletData = useOutletContext()
  console.log(outletData);
  return <h2>About</h2>;
}

function UserProfile(props) {
  const outletData = useOutletContext()
  console.log(outletData);
  
  // const { name, hobby, funFact } = useLoaderData();

  const loaderUserData = useLoaderData();
  console.log(loaderUserData);

  useEffect(() => {
    outletData.setExample(`User ${loaderUserData.name}`);
  }, [])

  return (
    <div>
      {/* <Placeholder /> */}
      <h2>{loaderUserData.name}</h2>
      <p>Hobby: {loaderUserData.hobby}</p>
      <p>Fun Fact: {loaderUserData.funFact}</p>
      <p>Fun Fact: {loaderUserData.funFact}</p>
      <p>Fun Fact: {props.something}</p>
      <p>Fun Fact: {props.age}</p>


      {/* <h2>Name: {name}</h2>
      <h3>Hobby: {hobby}</h3>
      <h3>Fun Fact: {funFact}</h3> */}
    </div>
  );
}


export { Home, About, UserProfile }