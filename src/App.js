import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Register from "./pages/login/register";
import Home from "./pages/home";
import Notes from "./pages/notes/notes";
import Dsa from "./pages/notes/dsa";
import Frontend from "./pages/notes/frontend";
import Backend from "./pages/notes/backend";
import Python from "./pages/notes/notes";
import Goals from "./pages/goals/goals";
import Profile from "./pages/profile/profile";
import Askavet from "./pages/profile/askAvet";
import PracticeDSA from "./pages/practiceQuestions/practice-questions-dsa";
import TutorialDSA from "./pages/videoTutorials/tutorialDSA";
import InterviewDSA from "./pages/interViewQuestions/interviewQuestionDSA";
import ArrayDSA from "./pages/questions/array";
import StringDSA from "./pages/questions/string";
import LinkedlistDSA from "./pages/questions/linkedList";
import Chat from "./components/Chat/Chat";
import ConsultationText from "./pages/consultation/consultationText";
import ConsultationVideo from "./pages/consultation/consultationVideo";
import YourAnalysis from "./pages/profile/analytics";
import PrivateComponents from "./components/PrivateComponent";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateComponents />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/dsa" element={<Dsa />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/python" element={<Python />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/askAvet" element={<Askavet />} />
          <Route path="/dsa/practice-questions" element={<PracticeDSA />} />
          <Route path="/dsa/tutorials" element={<TutorialDSA />} />
          <Route path="/dsa/interview-questions" element={<InterviewDSA />} />
          <Route path="/dsa/practice-questions/arrays" element={<ArrayDSA />} />
          <Route path="/dsa/practice-questions/linkedList" element={<LinkedlistDSA />} />
          <Route  path="/dsa/practice-questions/strings"  element={<StringDSA />}/>
          <Route path="/chat" element={<Chat />} />
          <Route path="/Consultation-text" element={<ConsultationText />} />
          <Route path="/Consultation-video" element={<ConsultationVideo />} />
          <Route path="/your-analytics" element={<YourAnalysis />} />
        </Route>
        {/* Not Private Components */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
