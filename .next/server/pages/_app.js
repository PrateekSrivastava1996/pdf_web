(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./store/test/testConstant.js
const TEST = "TEST";

;// CONCATENATED MODULE: ./store/test/testReducer.js

const initialState = {
    token: "",
    error: "",
    Nav: "",
    loading: false
};
const userReducer = (state = initialState, action)=>{
    const { type , payload  } = action;
    switch(type){
        case TEST:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

// EXTERNAL MODULE: ./store/anime/animeConstant.js
var animeConstant = __webpack_require__(5254);
;// CONCATENATED MODULE: ./store/anime/animeReducer.js

const animeReducer_initialState = {
    loading: false,
    AirThree: [],
    airTheeLoading: true,
    TopAir: [],
    TopAirTen: [],
    japten: [],
    japall: [],
    dubten: [],
    duball: [],
    chten: [],
    chall: [],
    movieten: [],
    movieall: [],
    popularten: [],
    popularall: [],
    animedetail: [],
    watchanime: [],
    searchanime: [],
    searchLoader: false,
    genre: []
};
const AnimeReducer = (state = animeReducer_initialState, action)=>{
    const { type , payload  } = action;
    switch(type){
        case animeConstant/* LOADING */.br:
            return {
                ...state,
                loading: true
            };
        case animeConstant/* TOPAIRLOADING */.ap:
            return {
                ...state,
                airTheeLoading: true
            };
        case animeConstant/* TOPAIRTHEE */.cu:
            return {
                ...state,
                airTheeLoading: false,
                AirThree: payload
            };
        case animeConstant/* TOPAIR */.tQ:
            return {
                ...state,
                loading: false,
                TopAir: payload
            };
        case animeConstant/* TOPAIRTEN */.Tu:
            return {
                ...state,
                loading: false,
                TopAirTen: payload
            };
        case animeConstant/* RECENTTENJAP */.Go:
            return {
                ...state,
                loading: false,
                japten: payload
            };
        case animeConstant/* RECENTALLJAP */.Y0:
            return {
                ...state,
                loading: false,
                japall: payload
            };
        case animeConstant/* RECENTTENDUB */.vX:
            return {
                ...state,
                loading: false,
                dubten: payload
            };
        case animeConstant/* RECENTALLDUB */.RU:
            return {
                ...state,
                loading: false,
                duball: payload
            };
        case animeConstant/* RECENTTENCH */.SI:
            return {
                ...state,
                loading: false,
                chten: payload
            };
        case animeConstant/* RECENTALLCH */.lE:
            return {
                ...state,
                loading: false,
                chall: payload
            };
        case animeConstant/* SEARCHLODER */._j:
            return {
                ...state,
                loading: false,
                searchLoader: false
            };
        case animeConstant/* SEARCHANIME */.Mw:
            return {
                ...state,
                loading: false,
                searchanime: payload,
                searchLoader: false
            };
        case animeConstant/* WATCHANIME */.jD:
            return {
                ...state,
                loading: false,
                watchanime: payload
            };
        case animeConstant/* ANIMEDETAIL */.W7:
            return {
                ...state,
                loading: false,
                animedetail: payload
            };
        case animeConstant/* PAPULARALL */.bx:
            return {
                ...state,
                loading: false,
                popularall: payload
            };
        case animeConstant/* POPULARTEN */.Jq:
            return {
                ...state,
                loading: false,
                popularten: payload
            };
        case animeConstant/* MOVIESALL */.zR:
            return {
                ...state,
                loading: false,
                movieall: payload
            };
        case animeConstant/* MOVIESTEN */.cU:
            return {
                ...state,
                loading: false,
                movieten: payload
            };
        case animeConstant/* GENERCE */._:
            return {
                ...state,
                loading: false,
                genre: payload
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/store.js






const reducer = (0,external_redux_namespaceObject.combineReducers)({
    user: userReducer,
    anime: AnimeReducer
});
// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
        if (false) {} else {
            console.log("You are on the server");
        // 👉️ can't use localStorage
        }
    } catch (e) {
        console.warn(e);
    }
}
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        if (false) {} else {
            console.log("You are on the server");
            return [];
        }
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}
// middleware
const middleware = [
    (external_redux_thunk_default())
];
// creating store
const store = (0,external_redux_namespaceObject.createStore)(reducer, // loadFromLocalStorage(),
(0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
//store.subscribe(() => saveToLocalStorage(store.getState()));
// assigning store to next wrapper
const makeStore = ()=>store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./utils/theme.js



const GlobalStyles = external_styled_components_namespaceObject.createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing:border-box;
  }
`;
const theme = {
    colors: {
        primary: "#003399",
        secondary: "#FF2121",
        accent: "#FFE5E5",
        lightGray: "#dadada",
        black: "#000",
        white: "#fff"
    },
    fontSizes: {
        h1: "3.6rem",
        h2: "3rem",
        h3: "2.4rem",
        h4: "1.48rem",
        h5: "1.4rem",
        h6: "1rem",
        body: "1rem",
        btn: "1.1rem",
        cta: "1.1rem"
    },
    fontWeights: {
        w9: "900",
        w8: "800",
        w7: "700",
        w6: "600",
        w5: "500",
        w4: "400",
        w3: "300"
    }
};
const Theme = ({ children  })=>/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(GlobalStyles, {}),
            /*#__PURE__*/ _jsx(ThemeProvider, {
                theme: theme,
                children: children
            })
        ]
    });
/* harmony default export */ const utils_theme = ((/* unused pure expression or super */ null && (Theme)));

// EXTERNAL MODULE: ./components/Common/index.js + 4 modules
var Common = __webpack_require__(1810);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
;// CONCATENATED MODULE: ./pages/_app.js









//import { Navbar, Footer } from "@components/Common";
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Common/* Navbar */.wp, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Common/* Footer */.$_, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2155:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/api-utils/index.js");

/***/ }),

/***/ 730:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 6699:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/base-http/index.js");

/***/ }),

/***/ 2779:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/request-meta.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1223:
/***/ ((module) => {

"use strict";
module.exports = require("react-loader-spinner");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,460,408,810], () => (__webpack_exec__(9002)));
module.exports = __webpack_exports__;

})();