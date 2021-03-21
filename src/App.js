import { useState } from "react";
import Question1Page from "./pages/Question1Page";
import Question2Page from "./pages/Question2Page";

function App() {
  const [question, setQuestion] = useState(0);
  const renderQuestion = () => {
    switch (question) {
      case 1:
        return <Question1Page />;
      case 2:
        return <Question2Page />;
      default:
        return (
          <>
            <button onClick={() => setQuestion(1)}>Question 1</button>
            <button onClick={() => setQuestion(2)}>Question 2</button>
          </>
        );
    }
  };
  return <div>{renderQuestion()}</div>;
}

export default App;
