import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  topAirActionPagewise,
  recentJapAll,
  recentDubAll,
  recentChAll,
  moviesAll,
  popularAll,
} from "../../../store/anime/animeaction";
import { Pagination } from "antd";
import { Audio } from "react-loader-spinner";
import { useRouter } from "next/router";

const SectionPage = ({ id, type }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const selector = useSelector((pre) => pre.anime);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totelPage, setTotelPage] = useState(1);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (type == "japsub") {
      dispatch(recentJapAll(page));
    }
    if (type == "dub") {
      dispatch(recentDubAll(page));
    }
    if (type == "chsub") {
      dispatch(recentChAll(page));
    }
    if (type == "movie") {
      dispatch(moviesAll(page));
    }
    if (type == "popular") {
      dispatch(popularAll(page));
    }
    if (type == "topair") {
      dispatch(topAirActionPagewise(page));
    }
  }, [type]);
  useEffect(() => {
    setloading(selector.loading);
    if (type == "japsub") {
      if (selector.japall?.length > 0) {
        setData(selector.japall);
        setTotelPage(300);
      } else {
        setData([]);
      }
    }
    if (type == "dub") {
      if (selector.duball?.length > 0) {
        setData(selector.duball);
        setTotelPage(130);
      } else {
        setData([]);
      }
    }
    if (type == "chsub") {
      if (selector.chall?.length > 0) {
        setData(selector.chall);
        setTotelPage(22);
      } else {
        setData([]);
      }
    }
    if (type == "movie") {
      if (selector.movieall?.length > 0) {
        setData(selector.movieall);
        setTotelPage(90);
      } else {
        setData([]);
      }
    }
    if (type == "popular") {
      if (selector.popularall?.length > 0) {
        setData(selector.popularall);
        setTotelPage(500);
      } else {
        setData([]);
      }
    }
    if (type == "topair") {
      if (selector.TopAir?.length > 0) {
        setData(selector.TopAir);
        setTotelPage(26);
      } else {
        setData([]);
      }
    }
  }, [selector]);
  const handleChangePage = (pageNo) => {
    setPage(pageNo);

    if (type == "japsub") {
      dispatch(recentJapAll(pageNo));
    }
    if (type == "dub") {
      dispatch(recentDubAll(pageNo));
    }
    if (type == "chsub") {
      dispatch(recentChAll(pageNo));
    }
    if (type == "movie") {
      dispatch(moviesAll(pageNo));
    }
    if (type == "popular") {
      dispatch(popularAll(pageNo));
    }
    if (type == "topair") {
      dispatch(topAirActionPagewise(pageNo));
    }
  };

  const handleClick = (animeid) => {
    router.push(`/watch/${animeid}`);
  };
  return (
    <>
      <div className="bg-white h-full  2xl:pt-[30px] xl:pt-[30px] lg:pt-[30px]  	  bg-slate-700 ">
        <div className="mx-auto max-w-2xl    lg:max-w-7xl 	 ">
          <h2 className="text-2xl flex w-full justify-center font-bold tracking-tight text-slate-100 w-full	lg:pt-[10px] xl:pt-[10px] 2xl:pt-[10px] pl-[13px] pb-[10px] bg-yellow-600 rounded-lg">
            {type == "japsub"
              ? "Japanese  Sub Anime"
              : type == "Dub Anime"
              ? ""
              : type == "chsub"
              ? "Chinese  Sub Anime"
              : type == "movie"
              ? "Anime Movies "
              : type == "popular"
              ? "Popular Anime"
              : "Top Anime "}
          </h2>

          {loading ? (
            <div className="flex w-full h-screen justify-center flex-row pt-[50%] xl:ml-[50%] 2xl:ml-[50%] lg:ml-[50%] 2xl:pb-[10px] xl:pb-[10px] lg:pb-[10px]">
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          ) : (
            <>
              <div className="mt-6 h-full grid grid-cols-2  ml-[25px] gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
                {data.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onClick={() => handleClick(product.animeId)}
                  >
                    <div className="min-h-200 aspect-w-1 aspect-h-1 w-[70%] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={product.animeImg}
                        alt={product.animeId}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full xl:h-full xl:w-full 2xl:h-full 2xl:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between w-[70%]">
                      <div>
                        <h3 className="text-sm text-gray-700 ">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.animeTitle}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.releasedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!loading && (
            <div class="flex justify-end	 mr-[10px] mt-[10px] mycsscheck">
              <Pagination
                current={page}
                defaultPageSize={20}
                pageSize={20}
                total={totelPage * 20}
                defaultCurrent={1}
                pageSizeOptions={[20]}
                showSizeChanger={false}
                onChange={handleChangePage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionPage;
