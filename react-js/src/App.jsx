import './App.css'
import Dialog from './Dialog'; // Import the dialog component



function App() {

  const handleDownload = () => {
    alert("Downloading PWA...");
    // Your download logic here
  };



  return (
    <>

      <h1>Hello this is a demo for the pwa install dialog package</h1>
      <div className="App">
      <h1>Welcome to the PWA Install Demo</h1>


      <Dialog onDownloadPwa={handleDownload}>
        <button className="dialog-trigger">Install App</button>
      </Dialog>
    </div>
    </>
  )
}




export default App
