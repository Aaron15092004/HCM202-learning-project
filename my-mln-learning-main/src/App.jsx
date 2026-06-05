import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import QuizLayout from "./layouts/QuizLayout";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import QuizResultsPage from "./pages/QuizResultsPage";
import FlipCardPage from "./pages/FlipCardPage";
import TuviPage from "./pages/Tuvipage";
import Courses from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ========== HOME ROUTES ========== */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* ========== QUIZ ROUTES ========== */}
        <Route element={<QuizLayout />}>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/results" element={<QuizResultsPage />} />
          {/* <Route path="/quiz/history" element={<QuizHistoryPage />} /> */}
        </Route>

        <Route path="/flip" element={<FlipCardPage />} />

        <Route path="/tuvi" element={<TuviPage />} />

        <Route path="/courses" element={<Courses />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
