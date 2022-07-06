import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Generator from "./components/pages/Generator";
import Payment from "./components/pages/Payment";

const Routing = (props: any) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {props.children}
    </Router>
  );
};

export default Routing;