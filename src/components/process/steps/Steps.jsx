import './Steps.scss';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { CiSquarePlus } from 'react-icons/ci';

const StepTab = styled.li`
  width: 80px;
  padding: 8px 0;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.$isActive ? '#4d4c7d' : 'transparent')};
  color: ${(props) => (props.$isActive ? '#4d4c7d' : '#666')};
  transition: all 0.3s ease;
  background-color: #f5f5f5;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  &:hover {
    color: #4d4c7d;
  }
`;

const StepSelect = styled.select`
  width: 80px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #4d4c7d;
  }
`;

const AddStepButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 8px 0;
  cursor: pointer;
  color: #4d4c7d;
  font-size: 14px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    margin-right: 4px;
  }
`;

function Steps() {
  const navigate = useNavigate();
  const location = useLocation();
  const processData = location.state;
  const [searchParams] = useSearchParams();
  const currentId = searchParams.get('t_id');

  const [steps, setSteps] = useState([
    { id: 1, name: '서류' },
    { id: 2, name: '테스트' },
    { id: 3, name: '면접' },
    { id: 4, name: '메모' },
  ]);

  const [isAddingStep, setIsAddingStep] = useState(false);
  const availableSteps = ['서류', '테스트', '면접', '메모'];

  const handleAddStep = (event) => {
    const newStepName = event.target.value;
    if (newStepName) {
      const newId = Math.max(...steps.map((step) => step.id), 0) + 1;
      const newStep = { id: newId, name: newStepName };
      setSteps((prevSteps) => [...prevSteps, newStep]);
      setIsAddingStep(false);

      const path =
        newStepName === '서류'
          ? 'paper'
          : newStepName === '테스트'
            ? 'test'
            : newStepName === '면접'
              ? 'interview'
              : 'memo';
      navigate(`/process?template=${path}&t_id=${newId}`, { state: processData });
    }
  };

  const handleStepClick = (step) => {
    const path =
      step.name === '서류'
        ? 'paper'
        : step.name === '테스트'
          ? 'test'
          : step.name === '면접'
            ? 'interview'
            : 'memo';
    navigate(`/process?template=${path}&t_id=${step.id}`, {
      state: processData,
    });
  };

  return (
    <div className="step-wrapper">
      <ul className="step-tabs">
        {steps.map((step) => (
          <StepTab
            key={step.id}
            $isActive={parseInt(currentId) === step.id}
            onClick={() => handleStepClick(step, step.id)}
          >
            {step.name}
          </StepTab>
        ))}
        {!isAddingStep ? (
          <AddStepButton onClick={() => setIsAddingStep(true)}>
            <CiSquarePlus size={20} />
            Add
          </AddStepButton>
        ) : (
          <StepSelect
            autoFocus
            onChange={handleAddStep}
            onBlur={() => setIsAddingStep(false)}
            value=""
          >
            <option value="" disabled>
              Select
            </option>
            {availableSteps.map((step) => (
              <option key={step} value={step}>
                {step}
              </option>
            ))}
          </StepSelect>
        )}
      </ul>
    </div>
  );
}

export default Steps;
