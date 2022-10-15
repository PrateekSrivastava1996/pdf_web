import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const ReactHlsPlayer = dynamic(() => import("react-hls-player"), {
  ssr: false,
});
import { useSelector, useDispatch } from "react-redux";
import { animeDeatail, watchAnime } from "../../../store/anime/animeaction";

const Post = () => {
  const router = useRouter();
  const selector = useSelector((pre) => pre.anime);
  const dispatch = useDispatch();
  const { id } = router.query;
  const hlsUrl =
    "https://wwwx16.gogocdn.stream/videos/hls/ty7ydfH7jfRdg6VgUh9A5g/1665827418/25615/027e9529af2b06fe7b4f47e507a787eb/ep.220.1662455466.m3u8";
  const [episodeList, setEpisodeList] = useState([]);
  const [episodeData, setEpisodeData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState({
    name: "",
    episode: "",
    linkone: "",
    typeOne: "",
    linktwo: "",
    typeTwo: "",
  });

  const [currentLink, setCurrentlink] = useState({
    type: "",
    link: "",
    num: "",
    show: false,
  });

  useEffect(() => {
    if (id) {
      dispatch(animeDeatail(id));
    }
  }, [id]);

  useEffect(() => {
    if (Object.keys(selector.animedetail).length > 0) {
      setEpisodeData(selector.animedetail);
      if (selector?.animedetail?.episodesList?.length > 0) {
        let arrEpisode = selector?.animedetail?.episodesList?.reverse();
        setEpisodeList(arrEpisode);
        dispatch(watchAnime(arrEpisode[0].episodeId));
      }
    }
  }, [selector.animedetail]);

  useEffect(() => {
    if (Object.keys(selector.watchanime).length > 0) {
      const { sources, sources_bk } = selector.watchanime;
      setCurrentEpisode({
        ...currentEpisode,
        linkone: sources[0].file,
        typeOne: sources[0].type,
        linktwo: sources_bk[0].file,
        typeTwo: sources_bk[0].type,
      });

      setCurrentlink({
        ...currentLink,
        link: sources[0].file,
        type: sources[0].type,
        num: "one",
        show: true,
      });
    } else {
      setCurrentlink({
        ...currentLink,
        show: false,
      });
    }
  }, [selector.watchanime]);

  const handleButtonEpisode = (data) => {
    dispatch(watchAnime(data.episodeId));
    setCurrentEpisode({
      ...currentEpisode,
      name: episodeData.animeTitle,
      episode: data.episodeNum,
    });
  };

  const handleSelect = (type) => {
    if (type == "one") {
      setCurrentlink({
        ...currentLink,
        link: currentEpisode.linkone,
        type: currentEpisode.typeOne,
        num: "one",
        show: true,
      });
    } else {
      setCurrentlink({
        ...currentLink,
        link: currentEpisode.linktwo,
        type: currentEpisode.typeTwo,
        num: "two",
        show: true,
      });
    }
  };

  return (
    <>
      <div className="  border-yellow-500 w-full border-2 bg-slate-700">
        <div className="flex flex-row w-full justify-center px-[30px]">
          <span className="flex flex-col items-center bg-white cursor-pointer	 rounded-lg border shadow-md md:flex-row mt-[10px] mb-[10px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={episodeData.animeImg}
              alt=""
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
              <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {episodeData.animeTitle}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Other Name -</span>{" "}
                {episodeData.otherNames}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Released Date -</span>
                {"        "}
                {episodeData.releasedDate}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Status -</span> {"        "}
                {episodeData.status}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Totel Episode -</span> {"        "}
                {episodeData.totalEpisodes}
              </p>
            </div>
          </span>
        </div>

        {currentLink.show && (
          <div className="mb-[20px] mt-[20px]">
            <div className="flex flex-row w-full justify-between justify-around	 mb-[20px]">
              <div>
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Anime Name - {currentEpisode.name}
                </label>{" "}
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Episode List - {currentEpisode.episode}
                </label>
              </div>
              <div>
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Select a Server
                </label>
                <select
                  value={currentLink.num}
                  id="countries"
                  onChange={(e) => handleSelect(e.target.values)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="one">Server One</option>
                  <option value="two">Server Two</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row w-full justify-center">
              <ReactHlsPlayer
                src={currentLink.link}
                autoPlay={false}
                controls={true}
                width="86%"
                height="auto"
              />
            </div>
          </div>
        )}

        <div>
          <nav className="bg-yellow-500  rounded-lg">
            <h1 className="text-lg text-white  px-[20px] py-[10px]">
              Episode List
            </h1>
          </nav>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pl-[20px] pr-[20px]	w w-full justify-center">
            {episodeList?.map((w) => {
              return (
                <button
                  onClick={() => handleButtonEpisode(w)}
                  type="button"
                  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  {w.episodeNum}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
