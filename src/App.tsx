import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import List from "./page/List";
import Test from "./page/Test";
import TestResult from "./page/TestResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<List />} />
        <Route path="/:testParam" element={<Test />} />
        <Route
          path="/:testParam/result/:resultParam"
          element={<TestResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
