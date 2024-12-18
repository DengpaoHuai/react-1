import { createContext, useContext, useState } from "react";

type ReactSnackBarContextType = {
  show: (message: string, title: string, duration?: number) => void;
};

const ReactSnackBarContext = createContext<ReactSnackBarContextType>(
  {} as ReactSnackBarContextType
);

type ReactSnackBarProviderProps = {
  children: React.ReactNode;
};

const useSnackBar = () => useContext(ReactSnackBarContext);

const ReactSnackBarProvider = ({ children }: ReactSnackBarProviderProps) => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const show = (message: string, title: string, duration: number = 5000) => {
    setMessage(message);
    setTitle(title);
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, duration);
  };
  return (
    <ReactSnackBarContext.Provider
      value={{
        show,
      }}
    >
      {children}
      {display && (
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            position: "fixed",
            bottom: "10px",
            left: "10px",
            width: "300px",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            zIndex: 9999,
          }}
        >
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      )}
    </ReactSnackBarContext.Provider>
  );
};

export { ReactSnackBarProvider, ReactSnackBarContext, useSnackBar };
