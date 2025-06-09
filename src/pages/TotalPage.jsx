import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import MasterPaper from './MasterPaper';
import MyInfo from './MyInfo';
import MainPage from './MainPage';
import Sidebar from 'components/sidebar/Sidebar';
import Headbar from 'components/sidebar/Headbar';
import Login from './Login';
import WebRtc from './WebRtc';
import ProcessPage from './process';
import PaperTemplate from './templates/paper';
import TestTemplate from './templates/test';
import InterviewTemplate from './templates/interview';
import MemoTemplate from './templates/memo';
import NewMasterPaper from 'components/masterPaper/new';

// 로그인 분기
import NeedLogin from 'components/login/NeedLogin';

const AppContainer = styled.div``;

const TotalPageContent = styled.div`
  height: 100%;
  padding-top: 60px;
  padding-left: 246px;
`;

export default function Result() {
  return (
    <BrowserRouter basename="/d_prolog">
      <AppContainer>
        <Sidebar />
        <Headbar />
        <TotalPageContent>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/analysis"
              element={
                <NeedLogin>
                  <Dashboard />
                </NeedLogin>
              }
            />
            <Route
              path="/masterpaper"
              element={
                <NeedLogin>
                  <MasterPaper />
                </NeedLogin>
              }
            />
            <Route path="/masterpaper/new" element={<NewMasterPaper />} />
            <Route
              path="/myinfo"
              element={
                <NeedLogin>
                  <MyInfo />
                </NeedLogin>
              }
            />
            <Route path="/chatting" element={<WebRtc />} />
            <Route path="/login" element={<Login />} />
            <Route path="/webrtc" element={<WebRtc />} />

            <Route path="/process" element={<ProcessPage />}>
              <Route path="paper" element={<PaperTemplate />} />
              <Route path="test" element={<TestTemplate />} />
              <Route path="interview" element={<InterviewTemplate />} />
              <Route path="memo" element={<MemoTemplate />} />
            </Route>
          </Routes>
        </TotalPageContent>
      </AppContainer>
    </BrowserRouter>
  );
}
