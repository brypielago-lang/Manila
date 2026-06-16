/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Admissions } from "./pages/Admissions";
import { Enrollment } from "./pages/Enrollment";
import { About } from "./pages/About";
import { Scholarships } from "./pages/Scholarships";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="enrollment/*" element={<Enrollment />} />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
