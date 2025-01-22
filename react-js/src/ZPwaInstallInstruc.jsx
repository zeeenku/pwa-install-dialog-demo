import React from 'react';
import {instrucs, osInstruc} from "./instructions.js";
// Functional component in JSX (JavaScript) version
const ZPwaInstallInstruc = ({ className = "" }) => {



  const getConfig = () => {

    const os = "ios";
    const browser = "firefox";
    const device = "";
    let res = "";

    // detect sys in failure use device
    if(Object.keys(osInstruc).includes(os)){
      res = osInstruc[os];
    }
    else{
      if(device == "mobile"){
        res = osInstruc["android"];
      }
      else {
      //if(device == "desktop"){
        res = osInstruc["mac/windows/linux"];
      }
    }

    // detect browser for more specific instructions
    Object.keys(instrucs).forEach(el=>{
      if(el.includes(browser)){
        Object.keys(instrucs[el]).forEach((ell)=>{
          if(ell.includes(os)){
            res = instrucs[el][ell];
          }
        })
      }
    })
    
    
    return res;

    // return [
    //   "Tap the three-dot menu (top-right).",
    //   "Select 'Add to Home screen'.",
    //   "If not available, contact browser support for help."
    // ];
  };

  const installInstr = getConfig();

  return (
    <div className={`${className} z-pwa-install-instructions`}>
      <ul>
        {installInstr.map((el, idx) => (
          <li key={idx} dangerouslySetInnerHTML={ { __html: el} }></li>
        ))}
      </ul>
    </div>
  );
};

export default ZPwaInstallInstruc;
