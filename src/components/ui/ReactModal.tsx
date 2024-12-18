import { create } from "zustand";

type ModalState = {
  display: boolean;
  message: string;
  title: string;
  setTitle: (title: string) => void;
  setMessage: (message: string) => void;
  setDisplay: (display: boolean) => void;
  //show: (message: string, title: string, duration?: number) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  display: false,
  message: "",
  title: "",
  setTitle: (title: string) => set({ title }),
  setMessage: (message: string) => set({ message }),
  setDisplay: (display: boolean) => set({ display }),
  /* show: (message: string, title: string, duration: number = 5000) => {
    set({ message, title, display: true });
    setTimeout(() => {
      set({ display: false });
    }, duration);
  },*/
}));

useModalStore.subscribe((state: ModalState, prevState: ModalState) => {
  console.log("state", state);
  console.log("prevState", prevState);
  if (state.display) {
    setTimeout(() => {
      useModalStore.setState({ display: false });
    }, 5000);
  }
});

export const useModal = () => {
  const { setTitle, setDisplay, setMessage } = useModalStore();

  const show = (message: string, title: string, duration: number = 5000) => {
    setMessage(message);
    setTitle(title);
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, duration);
  };

  return { show };
};

type ReactSnackBarProviderProps = {
  children: React.ReactNode;
};

const ReactModalProvider = ({ children }: ReactSnackBarProviderProps) => {
  const { display, message, title } = useModalStore();

  return (
    <>
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
    </>
  );
};

export { ReactModalProvider };
