import "./App.css";
import Hero from "./components/hero";
import Container from "@mui/material/Container";
import AppHeader from "./components/nav";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Container maxWidth="lg">
        <Hero></Hero>
      </Container>
    </div>
  );
}

export default App;
