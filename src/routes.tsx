import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Rick from "./pages/Rick";

const routes = [
  {
    name: "home",
    route: "/",
    component: <Home />,
  },
  {
    name: "about",
    route: "/about",
    component: <About />,
  },
  {
    name: "contact",
    route: "/contact",
    component: <Contact />,
  },
  {
    name: "rick",
    route: "/rick",
    component: <Rick />,
  },
];

export default routes;
