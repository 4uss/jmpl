import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Navigation, DlaFirmy, DlaCiebie, DlaczegoJa, Alert, Footer, Kontakt, TopImage, BackTop } from "./components/frontend";

function App() {
  return (
    <Router>
      <Alert />
      <TopImage />
      <Navigation />
      <BackTop />
      <DlaFirmy />
      <DlaCiebie />
      <DlaczegoJa />
      <Kontakt />
      <Footer />
    </Router>
  );
}

export default App;
