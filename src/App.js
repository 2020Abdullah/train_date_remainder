import { Container } from 'react-bootstrap';
import './App.css';
import DateCount from './components/DateCount';
import DateList from './components/DateList';
import DateAction from './components/DateAction';
import { Person } from './data';
import { useEffect, useState } from 'react';

function App() {

  const [PersonData, setPersonData] = useState(Person);

  const OnDelete = () => {
      setPersonData([]);
  }

  const OnViewData = () => {
      setPersonData(Person);
  }

  useEffect(() => {
    setPersonData([]);
  }, []);

  return (
    <div className="App">
       <Container className="py-5">
          <DateCount person={PersonData} />
          <DateList person={PersonData} />
          <DateAction deleteAction={OnDelete} ViewData={OnViewData} />
       </Container>
    </div>
  );
}

export default App;
