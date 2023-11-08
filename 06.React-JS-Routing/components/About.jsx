import { Link,Outlet} from "react-router-dom";

export default function About() {
  return (
    <>
     <h1>New About Us Example!</h1>
      <nav>
        <Link to='us'>About Us</Link>
        <Link to='mission'>Mission</Link>
        <Link to='else'>Something Else</Link>
      </nav>
      <Outlet/>
    </>
  );
}