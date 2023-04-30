import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul className="Questions">
        {questions.map((question) => (
          <QuestionItem 
            key={question.id} 
            question={question} 
            onDelete={onDeleteQuestion} 
            onUpdate={onUpdateQuestion}
            />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

