import {
  AppContainer,
  Heading,
  TextElement,
  TagLineContent,
  InputAndImageSection
} from './components/app-styles/App.styles';
import InputForm from './components/input-form/InputForm';

function App() {
  return (
    <AppContainer>
      <InputAndImageSection>
        <TextElement>
          <Heading>
            <h1>Paketshop Manager</h1>
          </Heading>
          <InputForm />
        </TextElement>
        <img src={process.env.PUBLIC_URL + '/images/psm_dashboard_overlay.png'} alt='dashboard-overlay' width='50%' height='50%' />
      </InputAndImageSection>

      <TagLineContent>
        <h2>Lorem Ipsum</h2>
        <h3>Aliqua ullamco ipsum nisi et. Non incididunt eu consequat exercitation magna do. Nostrud sunt excepteur tempor laboris ex elit ipsum. Duis proident est irure qui nisi ad pariatur in cillum dolore dolore. Ullamco eiusmod deserunt dolore incididunt. Do ullamco laboris dolore incididunt ex mollit.

          Reprehenderit laboris et minim ipsum labore est ad sunt dolore cupidatat ad sit. Non et et veniam eiusmod consequat culpa aliquip voluptate amet enim commodo esse. Exercitation deserunt dolor tempor magna excepteur do enim eu nulla consequat ex enim adipisicing mollit.

          Mollit occaecat sunt dolore qui est occaecat ad Lorem magna aute. Mollit nostrud ex amet nisi ut fugiat tempor ullamco commodo in veniam ad nostrud quis. Nostrud est non ad reprehenderit velit. Qui ut velit id et laborum culpa sunt non ea laboris. Velit exercitation ullamco consequat elit Lorem tempor commodo ullamco eu nulla ullamco.</h3>
      </TagLineContent>
    </AppContainer>

  );
}

export default App;
