import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState()

  useEffect(()=>{
      fetch(" http://localhost:4000/questions")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setQuestions(data)
      })
  }, [])

  function postData(data){
    let options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        accept:"applicxation/json"      },
      body:JSON.stringify(data)
    }
    fetch("http://localhost:4000/questions", options)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(e=>console.log(e))

    let newData = [...questions, data]
    console.log(newData)
    setQuestions(newData)
  }

  function postDelete(id){
    console.log(id)
    let options={
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        accept:"applicxation/json"      }
    }
    fetch(`http://localhost:4000/questions/${id}`, options)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(e=>console.log(e))

    let newData = questions.filter(question=> question.id !== id)
    console.log(newData)
    setQuestions(newData)
  }




  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm sendFormData={postData}/> : <QuestionList myQuestions={questions} handleDataDeleted={postDelete}/>}
    </main>
  );
}

export default App;
