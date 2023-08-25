import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  let [questions, setQuestions] = useState()

  // fetch data
  const getData=async ()=>{
    const response= await fetch("http://localhost:4000/questions")
    const data=await response.json()
    return data
  }
  // post data
  
  // fetch data
  const postFormData=async (questionData)=>{
    let options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        accept:"application/json"
      },
      body:JSON.stringify(questionData)

    }
    const response= await fetch("http://localhost:4000/questions", options)
    const data=await response.json()
    return data
  }


  // use effect
  useEffect(()=>{
    getData()
    .then(myData=>{
      console.log(myData)
      // setQuestions(myData)
    }).catch(e=>console.log(e))
  }, [])

  // function addDataToList(data){
  //   let ourPostData=postFormData(data)
  //   console.log(ourPostData)
  //   let ourNewData=[...questions, ourPostData]
  //   setQuestions(ourNewData)
  // }



  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  /> : <QuestionList />}
    </main>
  );
}

export default App;
