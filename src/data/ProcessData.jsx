export const defaultProcessData = {
  company: '',
  step: '',
  end_date: '',
  tag: [],
  paper: [],
  test: [],
  interview: [],
  essay: [],
};

export const defaultTemplateData = {
  templateType: 1,
  templateName: '',
  codingTestList: [],
  memoList: [],
  toggleList: [],
  qnaList: [],
};

export const templateDatas = [
  {
    p_id: 1,
    company: '삼성전자',
    type: 'paper',
    end_date: '2025-03-18',
    paper: [
      {
        t_id: 1,
        type: 'paper',
        content: [
          {
            q_id: 1,
            question: '지원하게 된 동기를 작성해주세요.',
            answer: '열심히 하겠습니다.',
          },
          { q_id: 2, question: '직무 강점을 작성해주세요.', answer: '다 잘 할 수 있습니다.' },
        ],
      },
    ],
    test: [
      {
        t_id: 1,
        type: 'test',
        content: [
          { q_id: 1, solved: true, type: 'BFS', level: 2, note: '쉬운 문제였습니다.' },
          { q_id: 2, solved: false, type: 'DFS', level: 3, note: '어려운 문제였습니다.' },
        ],
      },
    ],
    interview: [
      {
        t_id: 1,
        type: 'interview',
        content: [
          { q_id: 1, question: '주로 사용하는 언어는 무엇인가요?', answer: 'Python입니다.' },
          { q_id: 2, question: '장점은 무엇인가요?', answer: '열심히 합니다.' },
        ],
      },
    ],
    memo: [
      {
        t_id: 1,
        type: 'memo',
        content: [{ m_id: 1, memo: '스터디 모임 참여' }],
      },
    ],
  },
];
