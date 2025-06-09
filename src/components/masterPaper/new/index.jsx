import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputTag from 'common/components/InputTag';

function NewMasterPaper() {
  const navigate = useNavigate();
  const [inputCount, setInputCount] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: '',
      answer: '',
    },
  ]);

  const handleQuestionChange = (id, value) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, question: value } : q)));
  };

  const handleAnswerChange = (id, e) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, answer: e.target.value } : q)));
    setInputCount(e.target.value.length);
  };

  const addNewQuestion = () => {
    const newId = Math.max(...questions.map((q) => q.id), 0) + 1;
    setQuestions([
      ...questions,
      {
        id: newId,
        question: '',
        answer: '',
      },
    ]);
  };

  return (
    <div className="master-paper">
      <div className="header">
        <input
          type="text"
          className="title-input"
          placeholder="자기소개서의 이름을 작성해주세요."
        />
        <div className="button-group">
          <button className="cancel-button" onClick={() => navigate(-1)}>
            목록으로
          </button>
          <button className="save-button">저장하기</button>
        </div>
      </div>
      <InputTag />
      <br />

      <div className="master-content">
        {questions.map((q) => (
          <div key={q.id} className="question-section">
            <div className="question-wrapper">
              <label>Q.</label>
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(q.id, e.target.value)}
                placeholder="자기소개서 항목을 작성해주세요."
              />
            </div>
            <div className="answer-wrapper">
              <label>A.</label>
              <div className="textarea-container">
                <textarea
                  value={q.answer}
                  maxlength="1000"
                  onChange={(e) => handleAnswerChange(q.id, e)}
                  placeholder="자기소개서 답변을 작성해주세요."
                />
                <span className="char-count">{inputCount} / 1000 자</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-button" onClick={addNewQuestion}>
        +
      </div>
    </div>
  );
}

export default NewMasterPaper;
