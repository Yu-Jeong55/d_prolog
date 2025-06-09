import { useSearchParams } from 'react-router-dom';

import Steps from 'components/process/steps/Steps';
import PaperTemplate from 'pages/templates/paper';
import TestTemplate from 'pages/templates/test';
import InterviewTemplate from 'pages/templates/interview';
import MemoTemplate from 'pages/templates/memo';

function ProcessContent({ processData }) {
  const [searchParams] = useSearchParams();
  const template = searchParams.get('template');

  const renderTemplate = () => {
    switch (template) {
      case 'paper':
        return <PaperTemplate processData={processData} />;
      case 'test':
        return <TestTemplate processData={processData} />;
      case 'interview':
        return <InterviewTemplate processData={processData} />;
      case 'memo':
        return <MemoTemplate processData={processData} />;
      default:
        return null;
    }
  };

  return (
    <div className="process-content">
      <Steps />
      <div className="template-container">{renderTemplate()}</div>
    </div>
  );
}

export default ProcessContent;
