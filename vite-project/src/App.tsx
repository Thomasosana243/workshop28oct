import Footer from './components/Footer'
import './App.css'

function App() 
{
  const   linkToIcons =
  {
    facebook : "/facebook.png",
    instagram : "/instagram.png",
  }

  return (
    <>
      <Footer linkToIcons={linkToIcons} />
    </>
  );
}

export default App
