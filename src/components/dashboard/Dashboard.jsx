import './Dashboard.scss';
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';

function ProgressBarBox() {
  const data = [
    { step: 'paper', company: '삼성전자' },
    { step: 'paper', company: '네이버' },
    { step: 'test', company: '카카오' },
    { step: 'test', company: '구글' },
    { step: 'interview', company: '아마존' },
    { step: 'pass', company: '애플' },
    { step: 'fail', company: '테슬라' },
    { step: 'fail', company: '인텔' },
  ];

  if (data === undefined) {
    return null;
  } else {
    const length = data.length;

    let paperLen = 0;
    let testLen = 0;
    let interviewLen = 0;
    let passLen = 0;
    let failLen = 0;

    for (let i = 0; i < length; i++) {
      const element = data[i];
      if (element.step === 'paper' || element.step === 'assay') {
        paperLen += 1;
      } else if (element.step === 'test') {
        testLen += 1;
      } else if (element.step === 'interview') {
        interviewLen += 1;
      } else if (element.step === 'pass') {
        passLen += 1;
      } else if (element.step === 'fail') {
        failLen += 1;
      }
    }

    const newLen = length - (passLen + failLen);

    let paperPerc = Math.round((paperLen / newLen) * 100);
    let testPerc = Math.round((testLen / newLen) * 100);
    let interviewPerc = Math.round((interviewLen / newLen) * 100);
    let resultPerc = Math.round((passLen / (passLen + failLen)) * 100);

    const essay = {
      percent: paperPerc, // is require
      colorSlice: '#4D4C7D',
      colorCircle: '#f4f4f4',
      fontColor: '#000000',
      fontSize: '18px',
      fontWeight: 600,
      size: 200,
      stroke: 10,
      strokeBottom: 10,
      speed: 60,
      cut: 0,
      rotation: -90,
      fill: 'none',
      unit: '%',
      animationOff: false,
      inverse: false,
      round: true,
      number: true,
    };

    const test = {
      percent: testPerc, // is require
      colorSlice: '#4D4C7D',
      colorCircle: '#f4f4f4',
      fontColor: '#000000',
      fontSize: '18px',
      fontWeight: 600,
      size: 200,
      stroke: 10,
      strokeBottom: 10,
      speed: 60,
      cut: 0,
      rotation: -90,
      fill: 'none',
      unit: '%',
      animationOff: false,
      inverse: false,
      round: true,
      number: true,
    };
    const interview = {
      percent: interviewPerc, // is require
      colorSlice: '#4D4C7D',
      colorCircle: '#f4f4f4',
      fontColor: '#000000',
      fontSize: '18px',
      fontWeight: 600,
      size: 200,
      stroke: 10,
      strokeBottom: 10,
      speed: 60,
      cut: 0,
      rotation: -90,
      fill: 'none',
      unit: '%',
      animationOff: false,
      inverse: false,
      round: true,
      number: true,
    };

    const result = {
      // store에서 배열을 가져와서 count세기
      percent: resultPerc, // is require
      colorSlice: '#F99417',
      colorCircle: '#f4f4f4',
      fontColor: '#000000',
      fontSize: '18px',
      fontWeight: 600,
      size: 200,
      stroke: 10,
      strokeBottom: 10,
      speed: 60,
      cut: 0,
      rotation: -90,
      fill: 'none',
      unit: '%',
      animationOff: false,
      inverse: false,
      round: true,
      number: true,
    };

    return (
      <div className="progressbars">
        <div className="progressbar">
          <p>Essay</p>
          <CircularProgressBar {...essay} />
        </div>
        <div className="progressbar">
          <p>Test</p>
          <CircularProgressBar {...test} />
        </div>
        <div className="progressbar">
          <p>Interview</p>
          <CircularProgressBar {...interview} />
        </div>
        <div className="progressbar">
          <p>Pass rate</p>
          <CircularProgressBar {...result} />
        </div>
      </div>
    );
  }
}

export default ProgressBarBox;
