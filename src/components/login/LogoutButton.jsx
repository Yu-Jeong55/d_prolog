import { useNavigate } from 'react-router-dom';
import Button from 'common/components/Button';

function LogoutButton() {
  const navigate = useNavigate();

  function HandleLogout() {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/');
  }

  return (
    <Button className={'navy'} onClick={HandleLogout}>
      {'Logout'}
    </Button>
  );
}

export default LogoutButton;
