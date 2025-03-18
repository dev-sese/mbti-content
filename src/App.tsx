import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import List from "./page/List";
import Test from "./page/Test";
import TestResult from "./page/TestResult";
import Layout from "./Layout";
import Privacy from "./page/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<List />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/:testParam" element={<Test />} />
          <Route
            path="/:testParam/result/:resultParam"
            element={<TestResult />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
