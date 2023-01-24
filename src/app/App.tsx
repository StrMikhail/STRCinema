import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carousel from './components/Carousel/Carousel';
import { IFilmList } from './interfaces/topFilms.interface';
import filmsService from './services/films.service';
import MainPage from './pages/MainPage/MainPage';

interface AppProps {
  filmsList: IFilmList
}

const App : React.FC = ()  => {
  const [data, setData] = useState([])
  useEffect(() => {
    getFilms()
  }, [])
  const getFilms = async () => {
    try {
      const data = await filmsService.getTop()
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
  // const getFilms = async () => {
  //   axios.defaults.headers.common = {
  //     "X-API-Key": '4850b2a4-cabb-4f14-95eb-172547a40b2d',
  //     'Content-Type': 'application/json'
  //   };
  //   try {
  //     const {data} = await axios.get(process.env.REACT_APP_PUBLIC_API + 'films/top', {
  //       params: {
  //         page: 2
  //       }
  //     })
  //     setData(data)
  //     console.log(data)
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }
  // if (data.length === 0) return <p>Loading</p>
  return (
          <Routes>
              <Route path="/" element={<MainPage />} />
          </Routes>
  );
}

export default App;
