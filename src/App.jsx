import './App.css';
import 'assets/fonts.css';
import { RecoilRoot } from 'recoil';
import TotalPage from 'pages/TotalPage';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <RecoilRoot>
        <TotalPage />
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
