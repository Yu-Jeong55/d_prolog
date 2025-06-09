import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from 'components/login/LogoutButton';
import Button from 'common/components/Button';

const Head = styled.div`
  display: flex;
  position: fixed;
  padding-left: 246px;
  height: 60px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 30px;
  border-bottom: 1px solid rgb(245, 245, 245);
  background-color: white;
  z-index: 10;
`;

const Greetings = styled.div`
  padding-right: 20px;
`;

export default function Headbar() {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  const [nickname, setNickname] = useState(() => {
    const info = JSON.parse(sessionStorage.getItem('info'));
    return info?.nickname || '';
  });
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleStorageChange = () => {
      const info = JSON.parse(sessionStorage.getItem('info'));
      if (info) {
        setNickname(info.nickname);
        forceUpdate({});
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // 주기적으로 sessionStorage 체크
  useEffect(() => {
    const interval = setInterval(() => {
      const info = JSON.parse(sessionStorage.getItem('info'));
      if (info) {
        setNickname(info.nickname);
        forceUpdate({});
      }
    }, 1000); // 1초마다 체크

    return () => clearInterval(interval);
  }, []);

  return (
    <Head>
      {isLoggedIn ? (
        <>
          <Greetings>{`${nickname}님 안녕하세요 !`}</Greetings>
          <LogoutButton />
        </>
      ) : (
        <Button className={'navy'} onClick={() => navigate(`/login`)}>
          {'Login or SignUp'}
        </Button>
      )}
    </Head>
  );
}
