import "../styles/globals.css";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import { Navbar ,Footer } from "../components/index";
import 'burger-menu/lib/index.css';

//import { Navbar, Footer } from "@components/Common";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="main_app_component">
      <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}

export default MyApp;
