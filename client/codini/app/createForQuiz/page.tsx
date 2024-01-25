"use client"
import React, { useEffect, useState } from 'react'
import { useIdentity } from "../(auth)/IdentityContext";
import axios from 'axios';
function page() {
const [courses,setCourses]=useState([])
const [courseIndex,setCourseIndex]=useState(0)
const [numberOfQuestions,setNumberOfQuestions]=useState<number>(2)
const [questionObj,setquestionObj]=useState({1:"",2:""})
const [question,setQuestion]=useState("")

  const con=useIdentity()
  console.log("identity",con);
  console.log(con.user?.id,"jsdjks")
  const arr=Array.apply(null, {length: numberOfQuestions}).map(Number.call, Number)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch(`http://localhost:8000/courses/getAll/3`);
       
        const fetchedCourses = await coursesResponse.json();
   

        setCourses(fetchedCourses);
        console.log("here123",fetchedCourses);
               
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




  const handleAll = () => {
    const result=[]
 axios.post("http://localhost:8000/quiz/add", {
    teachers_idteachers:3,
     islocked:1,
    courses_idcourse:courseIndex
})
.then((res)=> {
  axios.post("http://localhost:8000/Ques/add",{
  quizz_idquizz: res.data.idquizz,
  question:question
})
.then((ress)=> {
  for (const keys in questionObj) {
     result.push({questions_idquestions:ress.data.idquestions,option:questionObj[keys]})
  }
  console.log(result,"mr result")
  axios.post("http://localhost:8000/Ans/add",result)})
  .then((response)=>{console.log('la reponse est correct')})
  .catch((err)=> {console.error(err,"tu es un animal")})
})
.catch((err)=>{console.error(err,"la question ne peut pas passer")})
.catch((err)=> {console.error(err,"quiz couldnt be send")})
  }

  const addNewKey = (key, value) => {
    setquestionObj((prevObj) => ({
      ...prevObj,
      [key]: value,
    }));
  };



  const updateKey = (g,e) => {
   
    setquestionObj((prevObj) => (
   
      {
      
      ...prevObj,
      [g]: e.target.value,
    }));
  };

  console.log(questionObj,question)
  return (
   <div className='container'>
 {  courseIndex && <div className="quiz-question-container" style={{top:"10cm" ,left:"16cm" , backgroundColor:'grey' , position:"absolute"}}>
      <div className="question">Write Your Question here</div>
      <input type="text" placeholder="Option 1" style={{width:'8cm'}} 
       onChange={(e)=> {setQuestion(e.target.value)}}
      />
      <h3>Write the Options here</h3>
      <div className="answers">
       
       {arr.map((question,i)=>(<input type="text" key={i} placeholder= {`option ${i}`} width={'87px'} 
        onChange={(e)=> { updateKey(i+1,e)}}
       />))}
       <div onClick={()=> {addNewKey(numberOfQuestions+1 ,"");setNumberOfQuestions(numberOfQuestions+1)}}>add question</div>
     
        

       
      </div>
      <button onClick={() =>{handleAll()}} >Add Quiz</button>
    </div>}

<div className="course-container" style={{ backgroundColor:'grey' , position:"absolute"}}>
<div className="message">pick a course </div>
<h3> here:</h3>
<ul className="cursor-pointer">
  {courses.map((course,i)=> (
     <li onClick={()=>{setCourseIndex(course.idcourse)}} className='one-course' key={i}>
     <p className='w-[200px]'>{course?.desc}</p>
    <img src={course?.image} alt=""  className='object-contain h-48 w-96'/>
     </li>
  ))}


</ul>
</div>  
</div>
  );
};


export default page