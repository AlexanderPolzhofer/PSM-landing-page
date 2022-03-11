import { AppContainer, Heading, TextElement } from './components/app-styles/App.styles';
import InputForm from './components/input-form/InputForm';

function App() {
  return (
    <AppContainer>
      <TextElement>
        <Heading>
          <h1>Paketshop Manager</h1>
        </Heading>
        <InputForm />
      </TextElement>
      <img src={process.env.PUBLIC_URL + '/images/psm_dashboard_overlay.png'} alt='dashboard-overlay' width='50%' height='50%' />
    </AppContainer>
  );
}

export default App;
