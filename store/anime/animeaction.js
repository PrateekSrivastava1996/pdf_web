import axios from "../../utils/axios";
import {
  TOPAIRTHEE,
  LOADING,
  TOPAIRTEN,
  RECENTTENJAP,
  RECENTALLJAP,
  RECENTTENDUB,
  RECENTALLDUB,
  RECENTTENCH,
  RECENTALLCH,
  MOVIESALL,
  MOVIESTEN,
  POPULARTEN,
  PAPULARALL,
  ANIMEDETAIL,
  WATCHANIME,
  SEARCHANIME,
  SEARCHLODER,
  GENERCE
} from "./animeConstant";
import Swal from "sweetalert2";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const topAirAction = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/top-airing`);
    const slicedArray = res?.data?.slice(0, 3);
    dispatch({
      type: TOPAIRTHEE,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const topAirCouusel = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/top-airing`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: TOPAIRTEN,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const topAirActionPagewise = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/top-airing/${page}`);
    dispatch({
      type: TOPAIR,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentJapTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=1&page=1`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: RECENTTENJAP,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentJapAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=1&page=${page}`);
    dispatch({
      type: RECENTALLJAP,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentDubTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=2&page=1`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: RECENTTENDUB,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentDubAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=2&page=${page}`);
    dispatch({
      type: RECENTALLDUB,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const recentChTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=3&page=1`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: RECENTTENCH,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentChAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=3&page=${page}`);
    dispatch({
      type: RECENTALLCH,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const moviesTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/anime-movies/?page=1`);
    const slicedArray = res?.data?.slice(0, 6);
    dispatch({
      type: MOVIESTEN,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const moviesAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/anime-movies/?page=${page}`);
    dispatch({
      type: MOVIESALL,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const popularTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/popular/?page=1`);
    const slicedArray = res?.data?.slice(0, 6);
    dispatch({
      type: POPULARTEN,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const popularAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/popular/?page=${page}`);
    dispatch({
      type: PAPULARALL,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const animeDeatail = (animeId) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/anime-details/${animeId}`);
    dispatch({
      type: ANIMEDETAIL,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const watchAnime = (episodeId) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/vidcdn/watch/${episodeId}`);
    dispatch({
      type: WATCHANIME,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchAnime = (text) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/search?keyw=${text}`);
    dispatch({
      type: SEARCHANIME,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchLoader = (text) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCHLODER,
    });
  } catch (error) {
    console.log(error);
  }
};


export const genereSearch = (name) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/genre/${name}`);
    dispatch({
      type: GENERCE,
      paylode: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};