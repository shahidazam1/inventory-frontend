import loadable from "@loadable/component";
import { AppBarLayout } from "layout/appBar";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

export const Home = loadable(() => import("pages/home"));
export const Inventory = loadable(() => import("pages/inventory"));

const RoutesContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppBarLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesContainer;
