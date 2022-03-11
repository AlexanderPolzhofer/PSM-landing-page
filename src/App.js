import { AppContainer } from './components/app-styles/App.styles';

function App() {
  return (
    <AppContainer>
      <img src={process.env.PUBLIC_URL + '/images/psm_dashboard_overlay.png'} alt='dashboard-overlay' width='50%' height='50%' />
    </AppContainer>
  );
}

export default App;
