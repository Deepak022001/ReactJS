import react from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World</h1>;
}
const Containers = document.getElementById('root');

const root = ReactDOM.createRoot(Containers);

root.render(<Hello />);
