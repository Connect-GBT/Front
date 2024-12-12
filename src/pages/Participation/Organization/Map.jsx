import React, { useEffect, useState } from 'react';
import { Container } from '../../../components/Layout';
import { Header } from '../../../components/Header';
import { Contents } from '../../../components/Layout';
import Navbar from '../../../components/NavBar';
import { useNavigate } from 'react-router-dom';

function MapTest() {
  const [infowindow, setInfowindow] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/adaptmain');
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation({ lat, lng });
          
          if (map) {
            const moveLatLng = new window.kakao.maps.LatLng(lat, lng);
            map.setCenter(moveLatLng);
            
            // 기존 마커와 인포윈도우 제거
            if (marker) marker.setMap(null);
            if (infowindow) infowindow.close();

            // 새 마커 생성
            const newMarker = new window.kakao.maps.Marker({
              position: moveLatLng,
              map: map
            });
            setMarker(newMarker);

            // 커스텀 스타일의 인포윈도우 생성
            const iwContent = `
              <div style="
                padding: 10px;
                background: white;
                border-radius: 8px;
                font-family: NanumSquareRound;
                font-size: 14px;
                font-weight: 500;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
              ">
                현재 위치
              </div>
            `;
            
            const newInfowindow = new window.kakao.maps.InfoWindow({
              content: iwContent,
              removable: true
            });
            
            newInfowindow.open(map, newMarker);
            setInfowindow(newInfowindow);
          }
        },
        (error) => {
          console.error('위치 가져오기 실패:', error);
          switch(error.code) {
            case error.PERMISSION_DENIED:
              alert('위치 정보 접근 권한이 거부되었습니다.');
              break;
            case error.POSITION_UNAVAILABLE:
              alert('위치 정보를 사용할 수 없습니다.');
              break;
            case error.TIMEOUT:
              alert('위치 정보 요청 시간이 초과되었습니다.');
              break;
            default:
              alert('위치 정보를 가져올 수 없습니다.');
          }
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000
        }
      );
    } else {
      alert('이 브라우저에서는 위치 정보를 지원하지 않습니다.');
    }
  };

  useEffect(() => {
    const loadKakaoMap = () => {
      // 이미 로드된 경우
      if (window.kakao && window.kakao.maps) {
        displayMap();
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}`;

      document.head.appendChild(script);

      script.onload = () => {
        // SDK 로드 후 지도 API 초기화
        window.kakao.maps.load(() => {
          displayMap();
        });
      };
    };

    const displayMap = () => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
      };
      const newMap = new window.kakao.maps.Map(container, options);
      setMap(newMap);

      // 지도 컨트롤 추가
      const zoomControl = new window.kakao.maps.ZoomControl();
      newMap.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      
      // 지도타입 컨트롤 추가
      const mapTypeControl = new window.kakao.maps.MapTypeControl();
      newMap.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

      // 현재 위치 가져오기
      getCurrentLocation();
    };

    loadKakaoMap();

    return () => {
      const mapScript = document.querySelector('script[src*="dapi.kakao.com"]');
      if (mapScript) {
        document.head.removeChild(mapScript);
      }
    };
  }, []);

  return (
    <Container>
      <Header title="외부 프로그램 기관" onBackClick={handleBackClick}/>
      <div style={{ position: 'relative' }}>
        <div id="map" style={{ width: '100%', height: '650px' }}/>
        <button 
          onClick={getCurrentLocation}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            padding: '12px 16px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 2,
            cursor: 'pointer',
            fontFamily: 'NanumSquareRound',
            fontSize: '14px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          현재 위치
        </button>
      </div>
      <Navbar/>
    </Container>
  );
}

export default MapTest;