import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepagecp from "./pages/Homepagecp";
import VolunteerP from "./pages/VolunteerP";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import CreateProject from "./pages/CreateProject";
import Frame2 from "./pages/Frame2";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import LogIn from "./pages/LogIn";
import Homepagev from "./pages/Homepagev";
import ForgotPassward from "./pages/ForgotPassward";
import ForgotPasswardStep from "./pages/ForgotPasswardStep";
import ResetPassward from "./pages/ResetPassward";
import ResetPassward1 from "./pages/ResetPassward1";
import Donate from "./pages/Donate";
import Checkout from "./pages/Checkout";
import Checkout1 from "./pages/Checkout1";
import DonationConfirmed from "./pages/DonationConfirmed";
import Homepagev1 from "./pages/Homepagev1";
import Projects from "./pages/Projects";
import Projects1 from "./pages/Projects1";
import Homepagecp1 from "./pages/Homepagecp1";
import Profile1 from "./pages/Profile1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/volunteerp":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/frame-660":
        title = "";
        metaDescription = "";
        break;
      case "/frame-662":
        title = "";
        metaDescription = "";
        break;
      case "/create-project":
        title = "";
        metaDescription = "";
        break;
      case "/frame-664":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/verify-email":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/homepagev":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-passward":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-passwardstep2":
        title = "";
        metaDescription = "";
        break;
      case "/reset-passward":
        title = "";
        metaDescription = "";
        break;
      case "/reset-passward1":
        title = "";
        metaDescription = "";
        break;
      case "/donate":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/checkout2":
        title = "";
        metaDescription = "";
        break;
      case "/donation-confirmed":
        title = "";
        metaDescription = "";
        break;
      case "/homepagev2":
        title = "";
        metaDescription = "";
        break;
      case "/projects":
        title = "";
        metaDescription = "";
        break;
      case "/projects1":
        title = "";
        metaDescription = "";
        break;
      case "/homepagecp2":
        title = "";
        metaDescription = "";
        break;
      case "/profile1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepagecp />} />
      <Route path="/volunteerp" element={<VolunteerP />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/frame-660" element={<Frame />} />
      <Route path="/frame-662" element={<Frame1 />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/frame-664" element={<Frame2 />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/homepagev" element={<Homepagev />} />
      <Route path="/forgot-passward" element={<ForgotPassward />} />
      <Route path="/forgot-passwardstep2" element={<ForgotPasswardStep />} />
      <Route path="/reset-passward" element={<ResetPassward />} />
      <Route path="/reset-passward1" element={<ResetPassward1 />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout2" element={<Checkout1 />} />
      <Route path="/donation-confirmed" element={<DonationConfirmed />} />
      <Route path="/homepagev2" element={<Homepagev1 />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects1" element={<Projects1 />} />
      <Route path="/homepagecp2" element={<Homepagecp1 />} />
      <Route path="/profile1" element={<Profile1 />} />
    </Routes>
  );
}
export default App;
