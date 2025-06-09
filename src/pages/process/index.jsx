import './index.scss';
import { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import SaveModal from 'components/modals/save/index';
import ProcessHeader from 'components/process/header/index';
import ProcessContent from 'components/process/content/index';

function ProcessPage() {
  const location = useLocation();
  const processData = location.state;
  const [isSaveOpen, setIsSaveOpen] = useState(false);

  if (!processData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="process-page">
      <ProcessHeader processData={processData} setIsSaveOpen={setIsSaveOpen} />
      <ProcessContent processData={processData} />
      <SaveModal isSaveOpen={isSaveOpen} setIsSaveOpen={setIsSaveOpen} />
    </div>
  );
}

export default ProcessPage;
