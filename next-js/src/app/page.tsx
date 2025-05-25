"use client";
import {ZPwaInstallDialog, ZPwaInstallInstruc}  from 'z-pwa-install-dialog';


function Home() {

  const handleDownload = () => {
    alert("Downloading PWA...");
  }; 
 
  const handleClose = () => { 
    alert("Closing Dialog...");
  };



  return (
    <>
      <h1>Hello this is a demo for the pwa install dialog package</h1>
      <div className="home">
      <h1>Welcome to the PWA Install Demo</h1>
      <ZPwaInstallInstruc/>


      {/* <ZPwaInstallDialog/> */}


      <ZPwaInstallDialog>
        {/* must be a dom element not text! */}
        <div>hhh</div>
      </ZPwaInstallDialog>

    <ZPwaInstallDialog >
    hello world
    </ZPwaInstallDialog>

    
    </div>
    </>
  )
}




export default Home
