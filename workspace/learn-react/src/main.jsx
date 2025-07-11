// main.jsx : 애플리케이션의 진입점을 나타내는 파일

import React from 'react'

// ReactDOM : React 애플리케이션을 렌더링하고, 프로젝트의 루트 컴포넌트 지정
import ReactDOM from 'react-dom/client'

// 애플리케이션의 루트 컴포넌트 import
import App from './App.jsx'

// 전역 CSS 스타일을 import하여 애플리케이션에 적용
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode : 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구
  // 프로덕션 빌드에 영향을 주지 않음
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)