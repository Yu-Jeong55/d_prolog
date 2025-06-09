import './index.scss';

function CheckFilter({ display, setDisplay }) {
  const isLogin = sessionStorage.getItem('isLoggedIn') === 'true';

  const handleMyCheckbox = (e) => {
    if (!isLogin) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }
    setDisplay({ ...display, my: e.target.checked });
  };

  return (
    <div className="filter-box">
      <div className="filter-checkbox">
        <input type="checkbox" checked={display.my} onChange={handleMyCheckbox} />
        <label style={{ marginLeft: '10px' }}>내 일정</label>
      </div>
      <div className="filter-checkbox">
        <input
          type="checkbox"
          checked={display.all}
          onChange={(e) => setDisplay({ ...display, all: e.target.checked })}
        />
        <label style={{ marginLeft: '10px' }}>전체 공고</label>
      </div>
    </div>
  );
}

export default CheckFilter;
