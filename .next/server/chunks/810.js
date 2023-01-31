"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 1810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$_": () => (/* reexport */ Foorter_Footer),
  "FX": () => (/* reexport */ innnerPage),
  "wp": () => (/* reexport */ Navbar_Navbar),
  "Be": () => (/* reexport */ WtachPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./components/Common/MainPage/MainBtnPage.js
var MainBtnPage = __webpack_require__(4780);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./store/anime/animeaction.js + 1 modules
var animeaction = __webpack_require__(6639);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/dist/server/base-http/node.js
var node = __webpack_require__(2308);
;// CONCATENATED MODULE: ./components/Common/Navbar/Navbar.js










const renderTitle = (title, count)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            justifyContent: "space-between"
        },
        children: [
            title,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.UserOutlined, {}),
                    " ",
                    count
                ]
            })
        ]
    });
const optionsss = [
    {
        label: renderTitle("Libraries", 100)
    },
    {
        label: renderTitle("Solutions", 100)
    },
    {
        label: renderTitle("Articles", 100)
    }, 
];
const Navbar = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const selector = (0,external_react_redux_.useSelector)((pre)=>pre.anime);
    const router = (0,router_.useRouter)();
    const { 0: dataOption , 1: setDataOption  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        dispatch((0,animeaction/* searchAnime */.cd)(""));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (selector.searchanime?.length > 0) {
            let datava = selector.searchanime?.map((e)=>{
                return {
                    label: renderTitle(e.animeTitle, e.status)
                };
            });
            setDataOption(datava);
        } else {
            const options = [
                {
                    label: renderTitle("No data Found", 0)
                }, 
            ];
            setDataOption(options);
        }
    }, [
        selector
    ]);
    const handleOnchage = (e)=>{
        dispatch((0,animeaction/* searchAnime */.cd)(e.target.value));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-slate-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    class: "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 bg-slate-700",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "container flex flex-wrap justify-between items-center mx-auto ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                class: "flex items-center ",
                                onClick: ()=>{
                                    router.push("/");
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    class: "self-center text-white text-2xl font-semibold whitespace-nowrap cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/myanime-logo.png",
                                        alt: "Picture of the author",
                                        width: 215,
                                        height: 55
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                class: "w-auto md:block md:w-auto",
                                id: "navbar-default bg-slate-700",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.AutoComplete, {
                                    class: "focus:outline-none",
                                    popupClassName: "certain-category-search-dropdown",
                                    dropdownMatchSelectWidth: 100,
                                    style: {
                                        width: 350
                                    },
                                    options: dataOption,
                                    onSelect: (value, option)=>console.log(option),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.Search, {
                                        size: "large",
                                        placeholder: "Search...",
                                        onChange: (e)=>{
                                            handleOnchage(e);
                                        }
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MainBtnPage/* default */.Z, {})
            ]
        })
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Common/Foorter/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            class: "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 bg-slate-700",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    class: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                    children: [
                        "\xa9 2022",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://flowbite.com/",
                            class: "hover:underline",
                            children: "Flowbite™"
                        }),
                        ". All Rights Reserved."
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    class: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                class: "mr-4 hover:underline md:mr-6 ",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                class: "mr-4 hover:underline md:mr-6",
                                children: "Privacy Policy"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                class: "mr-4 hover:underline md:mr-6",
                                children: "Licensing"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                class: "hover:underline",
                                children: "Contact"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Foorter_Footer = (Footer);

// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1223);
;// CONCATENATED MODULE: ./components/Common/innerEpisode/innnerPage.js







const SectionPage = ({ id , type  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const selector = (0,external_react_redux_.useSelector)((pre)=>pre.anime);
    const { 0: data , 1: setData  } = (0,external_react_.useState)([]);
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: totelPage , 1: setTotelPage  } = (0,external_react_.useState)(1);
    const { 0: loading , 1: setloading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (type == "japsub") {
            dispatch((0,animeaction/* recentJapAll */.iN)(page));
        }
        if (type == "dub") {
            dispatch((0,animeaction/* recentDubAll */.$9)(page));
        }
        if (type == "chsub") {
            dispatch((0,animeaction/* recentChAll */.Zv)(page));
        }
        if (type == "movie") {
            dispatch((0,animeaction/* moviesAll */.jV)(page));
        }
        if (type == "popular") {
            dispatch((0,animeaction/* popularAll */["in"])(page));
        }
        if (type == "topair") {
            dispatch((0,animeaction/* topAirActionPagewise */.tv)(page));
        }
    }, [
        type
    ]);
    (0,external_react_.useEffect)(()=>{
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
    }, [
        selector
    ]);
    const handleChangePage = (pageNo)=>{
        setPage(pageNo);
        if (type == "japsub") {
            dispatch((0,animeaction/* recentJapAll */.iN)(pageNo));
        }
        if (type == "dub") {
            dispatch((0,animeaction/* recentDubAll */.$9)(pageNo));
        }
        if (type == "chsub") {
            dispatch((0,animeaction/* recentChAll */.Zv)(pageNo));
        }
        if (type == "movie") {
            dispatch((0,animeaction/* moviesAll */.jV)(pageNo));
        }
        if (type == "popular") {
            dispatch((0,animeaction/* popularAll */["in"])(pageNo));
        }
        if (type == "topair") {
            dispatch((0,animeaction/* topAirActionPagewise */.tv)(pageNo));
        }
    };
    const handleClick = (animeid)=>{
        router.push(`/watch/${animeid}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-white pt-[30px] border-yellow-500 rounded-lg border-2 bg-slate-700 ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-auto max-w-2xl lg:max-w-7xl ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl font-bold tracking-tight text-slate-100 w-full pt-[10px] pl-[13px] pb-[10px] bg-yellow-600 rounded-lg",
                        children: type == "japsub" ? "Japanese  Sub Anime" : type == "Dub Anime" ? "" : type == "chsub" ? "Chinese  Sub Anime" : type == "movie" ? "Anime Movies " : type == "popular" ? "Popular Anime" : "Top Anime "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-6 grid grid-cols-1 ml-[65px] gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5",
                        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex w-full justify-center flex-row ml-[50%]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_loader_spinner_.Audio, {
                                height: "80",
                                width: "80",
                                radius: "9",
                                color: "green",
                                ariaLabel: "loading",
                                wrapperStyle: true,
                                wrapperClass: true
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: data.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "group relative",
                                    onClick: ()=>handleClick(product.animeId),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "min-h-80 aspect-w-1 aspect-h-1 w-[70%] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: product.animeImg,
                                                alt: product.animeId,
                                                className: "h-full w-full object-cover object-center lg:h-full lg:w-full xl:h-full xl:w-full 2xl:h-full 2xl:w-full"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-4 flex justify-between w-[70%]",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "text-sm text-gray-700 ",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: product.href,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    "aria-hidden": "true",
                                                                    className: "absolute inset-0"
                                                                }),
                                                                product.animeTitle
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "mt-1 text-sm text-gray-500",
                                                        children: product.releasedDate
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, product.id))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "flex justify-end mr-[10px] mb-[20px] ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Pagination, {
                            current: page,
                            defaultPageSize: 20,
                            pageSize: 20,
                            total: totelPage * 20,
                            defaultCurrent: 1,
                            pageSizeOptions: [
                                20
                            ],
                            showSizeChanger: false,
                            onChange: handleChangePage
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const innnerPage = (SectionPage);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/Common/watchPage/WtachPage.js




const ReactHlsPlayer = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Common/watchPage/WtachPage.js -> " + "react-hls-player"
        ]
    },
    ssr: false
});


const Post = ()=>{
    const router = (0,router_.useRouter)();
    const selector = (0,external_react_redux_.useSelector)((pre)=>pre.anime);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { id  } = router.query;
    const hlsUrl = "https://wwwx16.gogocdn.stream/videos/hls/ty7ydfH7jfRdg6VgUh9A5g/1665827418/25615/027e9529af2b06fe7b4f47e507a787eb/ep.220.1662455466.m3u8";
    const { 0: episodeList , 1: setEpisodeList  } = (0,external_react_.useState)([]);
    const { 0: episodeData , 1: setEpisodeData  } = (0,external_react_.useState)({});
    const { 0: refresh , 1: setRefresh  } = (0,external_react_.useState)(false);
    const { 0: currentEpisode , 1: setCurrentEpisode  } = (0,external_react_.useState)({
        name: "",
        episode: "",
        linkone: "",
        typeOne: "",
        linktwo: "",
        typeTwo: ""
    });
    const { 0: currentLink , 1: setCurrentlink  } = (0,external_react_.useState)({
        type: "",
        link: "",
        num: "",
        show: false
    });
    (0,external_react_.useEffect)(()=>{
        if (id) {
            dispatch((0,animeaction/* animeDeatail */.A3)(id));
        }
    }, [
        id
    ]);
    (0,external_react_.useEffect)(()=>{
        if (Object.keys(selector.animedetail).length > 0) {
            setEpisodeData(selector.animedetail);
            if (selector?.animedetail?.episodesList?.length > 0) {
                let arrEpisode = selector?.animedetail?.episodesList?.reverse();
                setEpisodeList(arrEpisode);
                dispatch((0,animeaction/* watchAnime */.$L)(arrEpisode[0].episodeId));
            }
        }
    }, [
        selector.animedetail
    ]);
    (0,external_react_.useEffect)(()=>{
        if (Object.keys(selector.watchanime).length > 0) {
            const { sources , sources_bk  } = selector.watchanime;
            setCurrentEpisode({
                ...currentEpisode,
                linkone: sources[0].file,
                typeOne: sources[0].type,
                linktwo: sources_bk[0].file,
                typeTwo: sources_bk[0].type
            });
            setCurrentlink({
                ...currentLink,
                link: sources[0].file,
                type: sources[0].type,
                num: "one",
                show: true
            });
        } else {
            setCurrentlink({
                ...currentLink,
                show: false
            });
        }
    }, [
        selector.watchanime
    ]);
    const handleButtonEpisode = (data)=>{
        dispatch((0,animeaction/* watchAnime */.$L)(data.episodeId));
        setCurrentEpisode({
            ...currentEpisode,
            name: episodeData.animeTitle,
            episode: data.episodeNum
        });
    };
    const handleSelect = (type)=>{
        if (type == "one") {
            setCurrentlink({
                ...currentLink,
                link: currentEpisode.linkone,
                type: currentEpisode.typeOne,
                num: "one",
                show: true
            });
        } else {
            setCurrentlink({
                ...currentLink,
                link: currentEpisode.linktwo,
                type: currentEpisode.typeTwo,
                num: "two",
                show: true
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " border-yellow-500 w-full border-2 bg-slate-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-row w-full justify-center px-[30px]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "flex flex-col items-center bg-white cursor-pointer rounded-lg border shadow-md md:flex-row mt-[10px] mb-[10px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
                                src: episodeData.animeImg,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-between p-2 leading-normal",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: " text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                        children: episodeData.animeTitle
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "font-bold",
                                                children: "Other Name -"
                                            }),
                                            " ",
                                            episodeData.otherNames
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "font-bold",
                                                children: "Released Date -"
                                            }),
                                            "        ",
                                            episodeData.releasedDate
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "font-bold",
                                                children: "Status -"
                                            }),
                                            " ",
                                            "        ",
                                            episodeData.status
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "font-bold",
                                                children: "Totel Episode -"
                                            }),
                                            " ",
                                            "        ",
                                            episodeData.totalEpisodes
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                currentLink.show && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-[20px] mt-[20px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row w-full justify-between justify-around mb-[20px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            for: "countries",
                                            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",
                                            children: [
                                                "Anime Name - ",
                                                currentEpisode.name
                                            ]
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            for: "countries",
                                            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",
                                            children: [
                                                "Episode List - ",
                                                currentEpisode.episode
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            for: "countries",
                                            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",
                                            children: "Select a Server"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            value: currentLink.num,
                                            id: "countries",
                                            onChange: (e)=>handleSelect(e.target.values),
                                            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "one",
                                                    children: "Server One"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "two",
                                                    children: "Server Two"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-row w-full justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReactHlsPlayer, {
                                src: currentLink.link,
                                autoPlay: false,
                                controls: true,
                                width: "86%",
                                height: "auto"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "bg-yellow-500 rounded-lg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-lg text-white px-[20px] py-[10px]",
                                children: "Episode List"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pl-[20px] pr-[20px] w w-full justify-center",
                            children: episodeList?.map((w, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>handleButtonEpisode(w),
                                    type: "button",
                                    className: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
                                    children: w.episodeNum
                                }, i);
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const WtachPage = (Post);

;// CONCATENATED MODULE: ./components/Common/index.js






/***/ })

};
;