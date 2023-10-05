import ConfirmDialogProvider from "components/ConfirmDialogProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesContainer from "routes";
import "styles/App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ConfirmDialogProvider>
          <RoutesContainer />
        </ConfirmDialogProvider>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
