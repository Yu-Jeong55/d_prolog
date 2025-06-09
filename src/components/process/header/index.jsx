import './index.scss';

import DDay from 'components/process/header/dday';
import Button from 'common/components/Button';
import InputTag from 'common/components/InputTag';

export default function ProcessHeader({ processData, setIsSaveOpen }) {
  if (!processData) {
    return null;
  }

  return (
    <div className="totalBox">
      <div className="box1">
        <div className="company">{processData.company}</div>
        <InputTag />
      </div>
      <div className="box2">
        <div className="deadline">
          <DDay deadline={processData.deadline} />
        </div>
        <Button className={'navy saveButton'} onClick={() => setIsSaveOpen(true)}>
          {'저장하기'}
        </Button>
      </div>
    </div>
  );
}
