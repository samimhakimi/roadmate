import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from './components/Services';


function App() {
  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", padding: "20px" }}>
      <Services />


        <h2>Welcome to My Website</h2>
        <p>This is a responsive navbar demo.</p>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
