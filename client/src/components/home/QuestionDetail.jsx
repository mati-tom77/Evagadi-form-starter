import React from 'react'


import { CgProfile } from "react-icons/cg";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


import './question.css'

function QuestionDetail({question}) {
  const navigate = useNavigate()
  const handleclick = ()=>{
    navigate(`/SingleQuestion/${question.questions_id}`)
  }
  return (
    <div className='header_question'>
      <div className='question_user'>
        <CgProfile className='profile'/>
        <div className='username'>{question?.username}</div>
      </div>

      <div className='question_title' onClick={handleclick}>
      <div className='question_conten'>{question?.description}</div>
      <div className='question_arrow '>
        < FaGreaterThan/>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail