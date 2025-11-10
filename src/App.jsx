//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Main_page from './components/hp';
import Info_page from './components/ifno';
import NotFind from './components/notfind';
import Sources from './components/sources';
import './assets/styles/main.scss';
import './assets/styles/media/general-media.scss';

function Main_Redirect(){
  window.location.replace("/main_page/en")
}

function App() {

  return (
    <Routes>
      <Route path='/main_page/:language' element={<Main_page />} />
      <Route path='/info_page' element={<Info_page />} />
      <Route path='/sources' element={<Sources />}/>
      <Route path='/' element={<Main_Redirect />}/>
      <Route path="*" element={<NotFind />} />
    </Routes>
  )
}

export default App
