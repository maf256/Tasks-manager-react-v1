import './componets/Header'
import Header from './componets/Header';
import styled from 'styled-components'
import Tasks from './componets/Tasks';

function App() {
  return (
    <Maincontainer>
      <Header></Header>
      <Tasks />
    </Maincontainer>
  );
}

export default App;

const Maincontainer = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
`