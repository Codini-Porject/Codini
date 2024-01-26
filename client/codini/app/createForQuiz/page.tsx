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
const [rightOption,setRightOption]=useState(0)
const [refId,setRefId] = useState(-1)



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
  question:question,
  rightOption:rightOption
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

  console.log((rightOption),'alalalala')


  return (
    <div className="container3">
    {courseIndex && (
   <div
   className="quiz-question-container"
   style={{
     top: '10cm',
     left: '16cm',
     backgroundColor: '#1f2937',
     position: 'absolute',
     padding: '20px',
     border: '2px solid #333',
     borderRadius: '8px',
   }}
 >
   <div style={{ marginBottom: '10px' }}>
     <div className="question">Write Your Question here</div>
     <input
       type="text"
       placeholder="Option 1"
       style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
       onChange={(e) => {
         setQuestion(e.target.value);
       }}
     />
     <h3>Write the Options here</h3>
     <div className="answers">
       {arr.map((question, i) => (
        <div  key={i}>
         <input
           type="text"
          
           placeholder={`Option ${i + 1}`}
           style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
           onChange={(e) => {
             updateKey(i + 1, e);
           }}
         />
         <div className="flex items-center me-4">
    <input checked={refId===i?true:false} onClick={()=> {setRefId(i) ; setRightOption(questionObj[i+1])}}  type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
</div>
         </div>
       ))}
       <div
         onClick={() => {
           addNewKey(numberOfQuestions + 1, '');
           setNumberOfQuestions(numberOfQuestions + 1);
         }}
         style={{
           cursor: 'pointer',
           padding: '8px',
           backgroundColor: '#007BFF',
           color: '#fff',
           borderRadius: '4px',
         }}
       >
         Add Question
       </div>
     </div>
   </div>
   <button
     onClick={() => {
       handleAll();
     }}
     style={{
       padding: '10px',
       backgroundColor: '#28a745',
       color: '#fff',
       borderRadius: '4px',
       cursor: 'pointer',
     }}
   >
     Add Quiz
   </button>
 </div>
    )}

    <div className="course-container" style={{ left:"1cm",backgroundColor: '#1f2937', position: 'absolute' }}>
      <div className="message" style={{color:"#fff"}}>pick a course </div>
      <h3 style={{color:"#fff"}}> here:</h3>
      <ul className="cursor-pointer" style={{padding:"5px"}}>
        {courses.map((course, i) => (
          <li onClick={() => { setCourseIndex(course.idcourse); }} className="one-course" style={{padding:"5px"}} key={i}>
            <p style={{color:"#fff" , marginLeft:"1cm"}} className="w-[300px]">{course?.desc}</p>
            <img src={course?.image} alt="" className="object-contain h-48 w-96" style={{padding:"5px"}}/>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}

export default page