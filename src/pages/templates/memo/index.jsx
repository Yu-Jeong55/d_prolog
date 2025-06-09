import './index.scss';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CiSquarePlus } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import { templateDatas } from 'data/ProcessData';

function MemoTemplate() {
  const [searchParams] = useSearchParams();
  const tId = searchParams.get('t_id');
  const pId = searchParams.get('p_id');

  const [memoList, setMemoList] = useState(
    pId && tId === '4' ? templateDatas[0].memo[0].content || [] : []
  );

  const handleMemoChange = (id, value) => {
    setMemoList(memoList.map((memo) => (memo.m_id === id ? { ...memo, memo: value } : memo)));
  };

  const addNewMemo = () => {
    const newId = Math.max(...memoList.map((memo) => memo.m_id), 0) + 1;
    setMemoList([
      ...memoList,
      {
        m_id: newId,
        memo: '',
      },
    ]);
  };

  const deleteMemo = (id) => {
    setMemoList(memoList.filter((memo) => memo.m_id !== id));
  };

  return (
    <div className="memo-template">
      <p>준비할 내용을 기록해보세요.</p>
      {memoList.length > 0 &&
        memoList.map((memo) => (
          <div className="memo-wrapper" key={memo.m_id}>
            <textarea
              value={memo.memo}
              onChange={(e) => handleMemoChange(memo.m_id, e.target.value)}
              placeholder="메모 할 내용을 작성해보세요."
            />
            <AiOutlineDelete onClick={() => deleteMemo(memo.m_id)} />
          </div>
        ))}
      <div className="add-button" onClick={addNewMemo}>
        <CiSquarePlus size={24} />
        메모 추가하기
      </div>
    </div>
  );
}

export default MemoTemplate;
