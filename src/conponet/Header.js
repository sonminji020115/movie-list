import { useState } from "react";
import bannerPhoto from '../img/banner.jpg';
import logoPhoto from '../img/logo.png';
import icon01 from '../img/icon01.png';
import icon02 from '../img/icon02.png';
import icon03 from '../img/icon03.png';

const Header = ({setCategory}) => {

  const [selectedCate, setSelectedCate] = useState('all');

  const clickBtn = (cateName) => {
      setSelectedCate(cateName);
      setCategory(cateName);
  }

    return (
      <div className="Header">
        <div className='header_in'>
        <p className='bannerPhoto'><img src={bannerPhoto} /></p>
          <div className='loginList'>
            <ul>
              <li>로그인</li>
              <li>회원가입</li>
              <li>멤버십</li>
            </ul>
          </div>
          <div className='movieList'>
            <p className='logoPhoto'><img src={logoPhoto} /></p>
              <ul>
                <li>영화</li>
                <li>예매</li>
                <li>스토어</li>
                <li>이벤트</li>
                <li>혜택</li>
              </ul>
              <div className='iconList'>
                <p><img src={icon01} /></p>
                <p><img src={icon02} /></p>
                <p><img src={icon03} /></p>
              </div>
          </div>
        </div>
        <div className="category">
              <button 
                  onClick={() => clickBtn('all')}
                  className={selectedCate==='all' ? 'active' : ''}
              >
                  전체
              </button>
              <button 
                  onClick={() => clickBtn('2020')}
                  className={selectedCate==='2020' ? 'active' : ''}
              >
                  2020년
              </button>
              <button 
                  onClick={() => clickBtn('2021')}
                  className={selectedCate==='2021' ? 'active' : ''}
              >
                  2021년
              </button>
              <button 
                  onClick={() => clickBtn('2022')}
                  className={selectedCate==='2022' ? 'active' : ''}
              >
                  2022년
              </button>
              <button 
                  onClick={() => clickBtn('2023')}
                  className={selectedCate==='2023' ? 'active' : ''}
              >
                  2023년
              </button>
          </div>
      </div>
    );
  }

export default Header;