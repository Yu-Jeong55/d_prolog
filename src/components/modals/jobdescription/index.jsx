import './index.scss';
import { isSameDay, parse } from 'date-fns';
import { useNavigate } from 'react-router-dom';

import { CiCalendar } from 'react-icons/ci';
import Button from 'common/components/Button';
import ModalComponent from 'common/components/modal/index';

function JobDescriptionModal({ JDOpen, setJDOpen, selectedJd, day }) {
  const navigate = useNavigate();

  function saveAddProcess() {
    const processData = {
      company: selectedJd.company.companyName,
      type: 'paper',
      deadline: selectedJd.jobGroups[0].dateKey.expirationDate,
    };
    
    navigate(`/process?template=paper&t_id=1`, {
      state: processData,
    });
  }

  return (
    <ModalComponent
      isOpen={JDOpen}
      onRequestClose={() => setJDOpen(false)}
      width={'800px'}
      height={'350px'}
      contentLabel="JD Modal"
    >
      <div className="jd-data">
        <div className="jd-title">
          <div className="jd-company-name">{selectedJd.company.companyName}</div>
          {selectedJd.jobGroups.map((jobGroup, index) => {
            const isStart = isSameDay(
              parse(jobGroup.dateKey.openingDate, 'yyyy-MM-dd HH:mm:ss', new Date()),
              day
            );
            const isExpiration = isSameDay(
              parse(jobGroup.dateKey.expirationDate, 'yyyy-MM-dd HH:mm:ss', new Date()),
              day
            );
            if (isStart || isExpiration) {
              return (
                <div className="jd-contents" key={index}>
                  <div className="jd-deadline">
                    <CiCalendar style={{ height: '20px', width: '20px' }} />
                    <div>
                      {jobGroup.dateKey.openingDate} ~ {jobGroup.dateKey.expirationDate}
                    </div>
                  </div>
                  {jobGroup.jobs.map((job) => {
                    if (!job || !job.title || !job.link) {
                      return null; // job이 빈 객체라면 아무것도 출력하지 않음
                    }
                    return (
                      <div key={job.title} className="jd-jobs">
                        <div className="jd-job-title">{job.title}</div>
                        <a href={job.link}>
                          <Button className={'navy'} width={'130.5px'} fontSize={'14px'}>
                            {'홈페이지 바로가기'}
                          </Button>
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="jd-buttons">
          <Button className={'navy'} onClick={saveAddProcess} width={'130.5px'}>
            {'프로세스 시작하기'}
          </Button>
          <Button onClick={() => setJDOpen(false)} width={'50px'}>
            {'취소'}
          </Button>
        </div>
      </div>
    </ModalComponent>
  );
}

export default JobDescriptionModal;
