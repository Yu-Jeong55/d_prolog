import './index.scss';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CiSquarePlus } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiSolidDownArrow } from 'react-icons/bi';
import { templateDatas } from 'data/ProcessData';

function InterviewTemplate() {
  const [searchParams] = useSearchParams();
  const tId = searchParams.get('t_id');
  const pId = searchParams.get('p_id');

  const [expandedItems, setExpandedItems] = useState({});
  const [interviewList, setInterviewList] = useState(
    pId && tId === '3' ? templateDatas[0].interview[0].content || [] : []
  );

  const handleQuestionChange = (id, value) => {
    setInterviewList(
      interviewList.map((interview) =>
        interview.q_id === id ? { ...interview, question: value } : interview
      )
    );
  };

  const handleAnswerChange = (id, value) => {
    setInterviewList(
      interviewList.map((interview) =>
        interview.q_id === id ? { ...interview, answer: value } : interview
      )
    );
  };

  const addNewQnA = () => {
    const newId = Math.max(...interviewList.map((interview) => interview.q_id), 0) + 1;
    setInterviewList([
      ...interviewList,
      {
        q_id: newId,
        question: '',
        answer: '',
      },
    ]);
    setExpandedItems((prev) => ({ ...prev, [newId]: true }));
  };

  const toggleAnswer = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const deleteQnA = (id) => {
    setInterviewList(interviewList.filter((interview) => interview.q_id !== id));
    setExpandedItems((prev) => {
      const newExpandedItems = { ...prev };
      delete newExpandedItems[id];
      return newExpandedItems;
    });
  };

  return (
    <div className="interview-template">
      {interviewList.length > 0 &&
        interviewList.map((interview) => (
          <div className="interview-question-wrapper" key={interview.q_id}>
            <div className="interview-question">
              <div className="question-header">
                <BiSolidDownArrow
                  className={`toggle-icon ${expandedItems[interview.q_id] ? 'expanded' : ''}`}
                  onClick={() => toggleAnswer(interview.q_id)}
                />
                <label>Q.</label>
                <input
                  type="text"
                  placeholder="예상 질문을 입력해보세요."
                  value={interview.question}
                  onChange={(e) => handleQuestionChange(interview.q_id, e.target.value)}
                />
                <AiOutlineDelete
                  size={22}
                  className="delete-icon"
                  onClick={() => deleteQnA(interview.q_id)}
                />
              </div>
              <div
                className={`interview-answer ${expandedItems[interview.q_id] ? 'expanded' : ''}`}
              >
                <label>A.</label>
                <textarea
                  value={interview.answer}
                  onChange={(e) => handleAnswerChange(interview.q_id, e.target.value)}
                  placeholder="답변을 입력해보세요."
                />
              </div>
            </div>
          </div>
        ))}
      <div className="add-button" onClick={addNewQnA}>
        <CiSquarePlus size={24} />
        질문 추가하기
      </div>
    </div>
  );
}

export default InterviewTemplate;
