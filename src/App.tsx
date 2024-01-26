import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { LogIn } from './components/LogIn/LogIn';
import { NewWorkspace } from './components/NewWorkspace/NewWorkspace';
import { StartQuiz } from './components/StartQuiz/StartQuiz';
import { ChooseCrate } from './components/ChooseCrate/ChooseCrate';
import { QuestionStart } from './components/QuestionStart/QuestionStart';
import { QuestionResult } from './components/QuestionResult/QuestionResult';
import { Answer } from './components/Answer/Answer';
import { CreateQuiz } from './components/CreateQuiz/CreateQuiz';
import { Builder } from './components/Builder/Builder';
import { AddQuestion } from './components/AddQuestion/AddQuestion';
import { SS } from './components/SS/SS';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-workspace" element={<NewWorkspace />} />
        <Route path="/start-quiz" element={<StartQuiz />} />
        <Route path="/create-quiz" element={<ChooseCrate />} />
        <Route path="/question-start" element={<QuestionStart />} />
        <Route path="/question-result" element={<QuestionResult />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/detail-create-quiz" element={<CreateQuiz />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/add-question" element={<AddQuestion />} />
        <Route path="/success" element={<SS />} />
      </Routes>
    </Router>
  );
});
