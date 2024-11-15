import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Footer />
      <Aside />
    </Container>
  );
}

export default App;
