import React from 'react'
import "./styles.css";
import About from './Components/About'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'


const siteProps = {
  name: "Gideon Ngetich",
  title: "Aws Cloud Practitioner  & Software Developer",
  email: "gngetich@example.com",
  gitHub: "gngetich",
  instagram: "gngetich",
  linkedIn: "Gideon Ngetich",
  medium: "",
  twitter: "gngetich",
  youTube: "UCJFp8uSYCjXOMnkUyb3CQ3Q",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

function App() {
  

  return (
    <>
    <div className="maim">
      <Header />
      <Home name={siteProps.name} title={siteProps.title}/>
      <About  />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
      
    </>
  )
}

export default App
