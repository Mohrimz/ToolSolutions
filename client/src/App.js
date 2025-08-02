import React from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Product";
import ImageSlider from "./components/ImageSlider"
import WelcomeSection from "./components/WelcomeSection";
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
       <Header />
      
      <ImageSlider />
      <WelcomeSection />
      <Products />
      
      
      <Products/>
      <Footer />
   
    </div>
  );
}

export default App;   