import './index.scss';
import { useState } from 'react';
import { CiSquarePlus } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { templateDatas } from 'data/ProcessData';

function PaperTemplate() {
  const [searchParams] = useSearchParams();
  const tId = searchParams.get('t_id');
  const pId = searchParams.get('p_id');

  const [paperList, setPaperList] = useState(
    pId && tId === '1' ? templateDatas[0].paper[0].content || [] : []
  );

  const handleQuestionChange = (id, value) => {
    setPaperList(
      paperList.map((paper) => (paper.q_id === id ? { ...paper, question: value } : paper))
    );
  };

  const handleAnswerChange = (id, value) => {
    setPaperList(
      paperList.map((paper) => (paper.q_id === id ? { ...paper, answer: value } : paper))
    );
  };

  const addNewQnA = () => {
    const newId = Math.max(...paperList.map((paper) => paper.q_id), 0) + 1;
    setPaperList([
      ...paperList,
      {
        q_id: newId,
        question: '',
        answer: '',
      },
    ]);
  };

  const deleteQnA = (id) => {
    setPaperList(paperList.filter((paper) => paper.q_id !== id));
  };

  return (
    <div className="paper-template">
      {paperList.length > 0 &&
        paperList.map((paper) => (
          <div className="paper-question-wrapper" key={paper.q_id}>
            <div className="paper-question">
              <label>Q.</label>
              <input
                type="text"
                placeholder="예상 질문을 입력해보세요."
                value={paper.question}
                onChange={(e) => handleQuestionChange(paper.q_id, e.target.value)}
              />
              <AiOutlineDelete onClick={() => deleteQnA(paper.q_id)} />
            </div>

            <div className="paper-answer">
              <label>A.</label>
              <textarea
                value={paper.answer}
                onChange={(e) => handleAnswerChange(paper.q_id, e.target.value)}
                placeholder="답변을 입력해보세요."
              />
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

export default PaperTemplate;
