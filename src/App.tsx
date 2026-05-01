/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AssessmentProvider } from "./contexts/AssessmentContext";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Assessment } from "./pages/Assessment";
import { Results } from "./pages/Results";
import { Institutions } from "./pages/Institutions";

export default function App() {
  return (
    <Router>
      <AssessmentProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/results" element={<Results />} />
            <Route path="/institutions" element={<Institutions />} />
          </Routes>
        </Layout>
      </AssessmentProvider>
    </Router>
  );
}

