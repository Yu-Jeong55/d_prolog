import './index.scss';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CiSquarePlus } from 'react-icons/ci';
import { templateDatas } from 'data/ProcessData';

function TestTemplate({ processData }) {
  const [searchParams] = useSearchParams();
  const tId = searchParams.get('t_id');
  const pId = searchParams.get('p_id');

  if (!processData) {
    return null;
  }

  const [testList, setTestList] = useState(
    pId && tId === '2' ? templateDatas[0].test[0].content || [] : []
  );
  const [tags, setTags] = useState(templateDatas[0].test[0].tags || ['DFS', 'BFS', '시뮬레이션']);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState('');

  const handleTestTypeChange = (id, value) => {
    setTestList(testList.map((test) => (test.id === id ? { ...test, type: value } : test)));
  };

  const handleDifficultyChange = (id, rating) => {
    setTestList(testList.map((test) => (test.id === id ? { ...test, difficulty: rating } : test)));
  };

  const handleMemoChange = (id, value) => {
    setTestList(testList.map((test) => (test.id === id ? { ...test, memo: value } : test)));
  };

  const handleCheckboxChange = (id) => {
    setTestList(
      testList.map((test) => (test.id === id ? { ...test, isSelected: !test.isSelected } : test))
    );
  };

  const addNewTest = () => {
    const newId = Math.max(...testList.map((test) => test.id), 0) + 1;
    setTestList([
      ...testList,
      {
        q_id: newId,
        type: '',
        level: 0,
        note: '',
        solved: false,
      },
    ]);
  };

  const handleAddTag = () => {
    setIsAddingTag(true);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' && newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
      setIsAddingTag(false);
    } else if (e.key === 'Escape') {
      setNewTag('');
      setIsAddingTag(false);
    }
  };

  const handleDeleteTag = (indexToDelete) => {
    setTags(tags.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="test-template">
      <div className="test-header-section">
        <div className="title-section">
          <h2>{processData.company}를 준비할 알고리즘 유형을 기록해보세요.</h2>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag" onClick={() => handleDeleteTag(index)}>
                {tag}
              </span>
            ))}
            {isAddingTag ? (
              <input
                type="text"
                className="tag-input"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleTagInputKeyDown}
                onBlur={() => setIsAddingTag(false)}
                autoFocus
                placeholder="태그 입력"
              />
            ) : (
              <span className="tag-add" onClick={handleAddTag}>
                +
              </span>
            )}
          </div>
        </div>
        <div className="count-section">
          <span className="selected-count">{testList.length}</span>
          <span className="count">문제 중</span>
          <span className="selected-count">{testList.filter((test) => test.solved).length}</span>
          <span className="count">제출</span>
        </div>
      </div>

      {testList.length > 0 && (
        <div className="test-header">
          <div className="checkbox-column">SOLVED</div>
          <div className="type-column">유형</div>
          <div className="difficulty-column">난이도</div>
          <div className="memo-column">비고</div>
        </div>
      )}
      {testList.map((test) => (
        <div className="test-item" key={test.q_id}>
          <div className="checkbox-column">
            <input
              type="checkbox"
              checked={test.solved}
              onChange={() => handleCheckboxChange(test.q_id)}
            />
          </div>
          <div className="type-column">
            <input
              type="text"
              value={test.type}
              onChange={(e) => handleTestTypeChange(test.q_id, e.target.value)}
              placeholder="시험 유형"
            />
          </div>
          <div className="difficulty-column">
            {[1, 2, 3, 4, 5].map((rating) => (
              <FaStar
                key={rating}
                className={`star ${rating <= test.level ? 'active' : ''}`}
                onClick={() => handleDifficultyChange(test.q_id, rating)}
              />
            ))}
          </div>
          <div className="memo-column">
            <input
              type="text"
              value={test.note}
              onChange={(e) => handleMemoChange(test.q_id, e.target.value)}
              placeholder="메모"
            />
          </div>
        </div>
      ))}
      <div className="add-button" onClick={addNewTest}>
        <CiSquarePlus size={24} />
        시험 추가하기
      </div>
    </div>
  );
}

export default TestTemplate;
