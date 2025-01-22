import React, { useState } from 'react';
import DialogButton from "./DialogButton"
import ZPwaInstallInstruc from "./ZPwaInstallInstruc";
// Button component

const Dialog = ({ title = 'Download App Now', onDownloadPwa, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>

    <div>
        {React.isValidElement(children) ? (
        React.cloneElement(children, { onClick: openDialog })
        ) : (
        <DialogButton onClick={openDialog}>
            Install App
        </DialogButton>
        )}
    </div>

      {/* Dialog */}
    {isOpen && (
        <div className="z-pwa-dialog-overlay">
        <div className="z-pwa-dialog-content">
            <div className="z-pwa-dialog-header">
            <h3>{title}</h3>
            <button  onClick={closeDialog} 
            className="z-pwa-dialog-button-info z-pwa-icon-button">
                &times;
            </button>
            </div>
            <div className="z-pwa-dialog-body">
            <ZPwaInstallInstruc/>
            </div>
            <div className="z-pwa-dialog-footer">
            <DialogButton onClick={closeDialog} variant="info" className="button button-info">
                Close
            </DialogButton>
            <DialogButton
                onClick={() => {
                if (onDownloadPwa) onDownloadPwa();
                closeDialog();
                }}
                variant="primary"
            >
                Done!
            </DialogButton>
            </div>
        </div>
        </div>
    )}
    </>
);
};

export default Dialog;
