import {  Footer, Eduskill, Benefit, Marketing, Bootcamp, Contact } from "./index";

const App = () => {
  return (
    <div className="font-Inter">
        <Eduskill />
        {/* <Benefit /> */}
        <Marketing />
        <Bootcamp />
        <Contact />
        <Footer />
    </div>
  );
};

export default App;
