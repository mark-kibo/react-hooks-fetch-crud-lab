import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({myQuestions, handleDataDeleted}) {
  console.log(myQuestions)
  let questionTag=myQuestions.map((myQuestion)=>{
    return <QuestionItem key={myQuestion.id}question={myQuestion} passDeleteId = {handleDataDeleted}/>
  })
  console.log(questionTag)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionTag}
        {/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
