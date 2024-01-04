import React, { useEffect, useState, createContext} from "react";
import CloseIcon from "../components/CloseIcon";

export const ModalContext = createContext();

const BodyComponentDefault = () => {
  return <div></div>;
};

const modalContextInitialState = {
  open: false,
  insideStyle: "",
  handleOpen: null,
  handleClose: null,
  title: "",
  TopRightComponent: BodyComponentDefault,
  BodyComponent: BodyComponentDefault,
  topRightComponentProps: {},
  bodyComponentProps: {},
};

const ModalContextComponent = ({ children }) => {

  function closeModal() {
    setModalContextState(v=>({...v,open:false}));
  }

  const [modalContextState, setModalContextState] = useState(
    modalContextInitialState
  );
  const modalContextStateSetter = (
    BodyComponent = BodyComponentDefault,
    bodyComponentProps = {},
    TopRightComponent = BodyComponentDefault,
    topRightComponentProps = {},
    open = false,
    handleOpen = null,
    handleClose = null,
    title = "",
    insideStyle = null,
    topLeftHandlerFunction = null
  ) => {
    return setModalContextState((prev) => ({
      ...prev,
      open,
      handleOpen,
      insideStyle,
      handleClose,
      title,
      TopRightComponent,
      topRightComponentProps,
      BodyComponent,
      bodyComponentProps,
    }));
  };

  const TopRightComponent = modalContextState.TopRightComponent;
  const BodyComponent = modalContextState.BodyComponent || BodyComponentDefault;

  useEffect(() => {
    if (modalContextState.open) {
      document.body.classList.add("no-scroll");
      document.body.addEventListener(
        "touchmove",
        (e) => e.preventDefault(),
        true
      );
    }

    // document.body.style.setPropety
    else {
      document.body.classList.remove("no-scroll");
      document.body.removeEventListener("touchmove", {}, true);
    }

    document.querySelector(".modalDialog").style.maxWidth = `${Math.floor(
      window.innerWidth * 0.8
    )}px`;
  }, [modalContextState.open]);
  return (
    <ModalContext.Provider value={modalContextStateSetter}>
      <>{children}</>
      <div className="modalContainer">
        <div
          className={`modal ${
            modalContextState.open ? "isOpenned" : "isClosed"
          }`}
        >
          <div className="modalDialogContainer">
            <div onClick={(e) => e.stopPropagation()} className="modalDialog">
              <div className="modalInside">
                <div className="modalHeader">
                  <h2 className="modalTitle">{modalContextState.title}</h2>
                  <div className="somethingAtTopLeft">
                    {modalContextState.TopRightComponent ? (
                      <TopRightComponent
                        {...modalContextState.topLeftCompoentProps}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="modalBody">
                  <BodyComponent {...modalContextState.bodyComponentProps} />
                </div>
                <div className="modalFooter"></div>
              </div>
              <span className="closeIcon" onClick={() => closeModal()}>
                <CloseIcon payloadFunction={closeModal} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
};

export default ModalContextComponent;
