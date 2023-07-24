import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import LowLanding2 from './components/home/StartingLoad';
import Footer from './components/home/Footer';
import WatchList from './components/WatchList/WatchList';

function App() {

  const [foods, setFoods] = useState();
  const [food, setFood] = useState();
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/foods");

      setFoods(response.data);
      console.log("The api with id",response);
    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (foodId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/foods/${foodId}`);

        const singleFood = response.data;

        setFood(singleFood);

        setReviews(singleFood.reviews);
        console.log("The api with id",food);

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 3200);
    getMovies();

  }, []);
  // useEffect(() => {
  //   getMovies();

    
  //   const timer = setTimeout(() => {
  //     setCount('Timeout called!');
  //     setToggle(true);
  //   }, 200);
  //   return () => clearTimeout(timer);
  // },[])

  return (
    <div className="App">{ toggle ? 
    <>
      <Header/>
      {/* http://localhost:8080/api/v1/foods */}
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home foods={foods} />} ></Route>
            <Route path="/watchList" element={<WatchList />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:foodId" element ={<Reviews getMovieData = {getMovieData} food={food} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>
      {/* <Footer/> */}
    </>
    : <LowLanding2/> 
    }

    </div>
  );
}

export default App;
