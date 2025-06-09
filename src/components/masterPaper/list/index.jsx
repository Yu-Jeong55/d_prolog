import './index.scss';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

function MasterPaperList() {
  const [searchKeyword, setSearchKeyword] = useState('');

  // 더미 데이터
  const dummyData = [
    {
      id: 1,
      company: 'LG전자',
      tags: ['LG전자', '23-상'],
      questions: [
        {
          q: 'LG전자에 지원한 동기와 목표를 기술해주세요.',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          q: '자기소개 해보세요.',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
    {
      id: 2,
      company: '구글',
      tags: ['구글', '23-상'],
      questions: [
        {
          q: '구글에 지원한 동기와 목표를 기술해주세요.',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
  ];

  const [papers, setPapers] = useState(dummyData);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    if (!keyword.trim()) {
      setPapers(dummyData);
      return;
    }

    const filtered = dummyData.filter((paper) => {
      const matchCompany = paper.company.toLowerCase().includes(keyword.toLowerCase());
      const matchTags = paper.tags.some((tag) => tag.toLowerCase().includes(keyword.toLowerCase()));
      const matchQuestions = paper.questions.some(
        (q) =>
          q.q.toLowerCase().includes(keyword.toLowerCase()) ||
          q.a.toLowerCase().includes(keyword.toLowerCase())
      );

      return matchCompany || matchTags || matchQuestions;
    });

    setPapers(filtered);
  };

  return (
    <div className="master-paper-list">
      <div className="search-bar">
        <IoSearchOutline className="search-icon" />
        <input
          type="text"
          placeholder="키워드를 입력해보세요."
          value={searchKeyword}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="papers">
        {papers.map((paper) => (
          <div key={paper.id} className="paper-item">
            <div className="paper-header">
              <h2>{paper.company}</h2>
              <div className="tags">
                {paper.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {paper.questions.map((question, index) => (
              <div key={index} className="question-item">
                <div className="master-list-question">Q. {question.q}</div>
                <div className="master-list-answer">A. {question.a}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MasterPaperList;
