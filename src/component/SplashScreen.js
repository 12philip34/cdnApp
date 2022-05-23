import { useEffect } from "react";
import '../CSS/SplashScreen.css';
import logo from '../images/logos.png';

const SplashScreen = ({ nextFacet }) => {

  useEffect(() => {
    setTimeout(() => {
      return nextFacet('isRegister')
    }, 3000)
  },)

  return(
    <div className="background">
      <img src={logo} alt="logo.png" />
      <h1>
        Who want to be a BILLIONIER!!
      </h1>
    </div>
  )
}

export default SplashScreen;