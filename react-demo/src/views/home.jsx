import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <h1>Home</h1>
        <Link to="/fetch">Fetch</Link>
        <br />
        <Link to="/prop">Prop</Link>
        <br />
        <Link to="/conevent">Conevent</Link>
        <br />
        <Link to="/useContext">UseContext</Link>
        <br />
        <Link to="/form">Form</Link>
        <br />
        <Link to="/styled">Styled</Link>
    </div>
  );
}