import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopSemester from "./pages/DesktopSemester";
import DesktopLogin from "./pages/DesktopLogin";
import DesktopUploadResources from "./pages/DesktopUploadResources";
import DesktopProfile from "./pages/DesktopProfile";
import DesktopNewReminder from "./pages/DesktopNewReminder";
import DesktopResources from "./pages/DesktopResources";
import DesktopGrades from "./pages/DesktopGrades";
import DesktopParticipation from "./pages/DesktopParticipation";
import DesktopClass from "./pages/DesktopClass";
import DesktopModal from "./pages/DesktopModal";
import DesktopRegister from "./pages/DesktopRegister";

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
      case "/desktoplogin":
        title = "";
        metaDescription = "";
        break;
      case "/desktopupload-resources":
        title = "";
        metaDescription = "";
        break;
      case "/desktopprofile":
        title = "";
        metaDescription = "";
        break;
      case "/desktopnew-reminder":
        title = "";
        metaDescription = "";
        break;
      case "/desktopresources":
        title = "";
        metaDescription = "";
        break;
      case "/desktopgrades":
        title = "";
        metaDescription = "";
        break;
      case "/desktopparticipation":
        title = "";
        metaDescription = "";
        break;
      case "/desktopclass":
        title = "";
        metaDescription = "";
        break;
      case "/desktopmodal":
        title = "";
        metaDescription = "";
        break;
      case "/desktopregister":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopSemester />} />
      <Route path="/desktoplogin" element={<DesktopLogin />} />
      <Route
        path="/desktopupload-resources"
        element={<DesktopUploadResources />}
      />
      <Route path="/desktopprofile" element={<DesktopProfile />} />
      <Route path="/desktopnew-reminder" element={<DesktopNewReminder />} />
      <Route path="/desktopresources" element={<DesktopResources />} />
      <Route path="/desktopgrades" element={<DesktopGrades />} />
      <Route path="/desktopparticipation" element={<DesktopParticipation />} />
      <Route path="/desktopclass" element={<DesktopClass />} />
      <Route path="/desktopmodal" element={<DesktopModal />} />
      <Route path="/desktopregister" element={<DesktopRegister />} />
    </Routes>
  );
}
export default App;
