/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/websites",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./src/components/WebsiteCard/WebsiteCard.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./src/components/WebsiteCard/WebsiteCard.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".WebsiteCard_postCard__WHExg {\\n  position: relative;\\n  color: inherit;\\n  text-align: left;\\n  text-decoration: none;\\n}\\n.WebsiteCard_postCard__WHExg > a {\\n  display: block;\\n  color: inherit;\\n  text-decoration: none;\\n}\\n.WebsiteCard_postCard__WHExg > a:hover h3 {\\n  color: #0070f3;\\n  text-decoration: underline;\\n}\\n\\n.WebsiteCard_containerImage___OYWh {\\n  position: relative;\\n  width: 100%;\\n}\\n.WebsiteCard_containerImage___OYWh:hover .WebsiteCard_overlay__HTxEm {\\n  opacity: 1;\\n}\\n\\n.WebsiteCard_overlay__HTxEm {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  height: 100%;\\n  width: 100%;\\n  opacity: 0;\\n  transition: 0.5s ease;\\n  background-color: rgba(46, 53, 61, 0.81);\\n}\\n\\n.WebsiteCard_postCardSticky__QZLYr {\\n  border: solid 0.02em #cfd7de;\\n  border-radius: 1em;\\n}\\n.WebsiteCard_postCardSticky__QZLYr svg {\\n  position: absolute;\\n  top: 1.2em;\\n  right: 1em;\\n  font-size: 1.15em;\\n  color: #93a3b5;\\n}\\n\\n.WebsiteCard_postCardTitle__humJN {\\n  margin: 0 0 1em 0;\\n  font-size: 1.5em;\\n}\\n\\n.WebsiteCard_postCardContent__Lqck6 {\\n  font-size: 1.25em;\\n  margin: 0;\\n}\\n.WebsiteCard_postCardContent__Lqck6 p:first-child {\\n  margin-top: 0;\\n}\\n.WebsiteCard_postCardContent__Lqck6 p:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.WebsiteCard_postCardMetadata__Um6vN {\\n  margin: -0.8em -0.8em 0.4em;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/WebsiteCard/WebsiteCard.module.scss\",\"webpack://src/styles/settings/_colors.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AADF;AAGE;EACE,cAAA;EACA,cAAA;EACA,qBAAA;AADJ;AAIM;EACE,cCCS;EDAT,0BAAA;AAFR;;AAQA;EACE,kBAAA;EACA,WAAA;AALF;AAQI;EACE,UAAA;AANN;;AAUA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,qBAAA;EACA,wCAAA;AAPF;;AAUA;EACE,4BAAA;EACA,kBAAA;AAPF;AASE;EACE,kBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,cCnDa;AD4CjB;;AAWA;EACE,iBAAA;EACA,gBAAA;AARF;;AAWA;EACE,iBAAA;EACA,SAAA;AARF;AAWI;EACE,aAAA;AATN;AAYI;EACE,gBAAA;AAVN;;AAeA;EACE,2BAAA;AAZF\",\"sourcesContent\":[\"@import \\\"styles/settings/__settings\\\";\\n\\n.postCard {\\n  position: relative;\\n  color: inherit;\\n  text-align: left;\\n  text-decoration: none;\\n\\n  & > a {\\n    display: block;\\n    color: inherit;\\n    text-decoration: none;\\n\\n    &:hover {\\n      h3 {\\n        color: $color-primary;\\n        text-decoration: underline;\\n      }\\n    }\\n  }\\n}\\n\\n.containerImage {\\n  position: relative;\\n  width: 100%;\\n\\n  &:hover {\\n    .overlay {\\n      opacity: 1;\\n    }\\n  }\\n}\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  height: 100%;\\n  width: 100%;\\n  opacity: 0;\\n  transition: .5s ease;\\n  background-color: rgba(46,53,61,.81);\\n}\\n\\n.postCardSticky {\\n  border: solid 0.02em $color-gray-100;\\n  border-radius: 1em;\\n\\n  svg {\\n    position: absolute;\\n    top: 1.2em;\\n    right: 1em;\\n    font-size: 1.15em;\\n    color: $color-gray-300;\\n  }\\n}\\n\\n.postCardTitle {\\n  margin: 0 0 1em 0;\\n  font-size: 1.5em;\\n}\\n\\n.postCardContent {\\n  font-size: 1.25em;\\n  margin: 0;\\n\\n  p {\\n    &:first-child {\\n      margin-top: 0;\\n    }\\n\\n    &:last-child {\\n      margin-bottom: 0;\\n    }\\n  }\\n}\\n\\n.postCardMetadata {\\n  margin: -0.8em -0.8em 0.4em;\\n}\\n\",\"$color-gray-50: #eef0f3;\\n$color-gray-100: #cfd7de;\\n$color-gray-200: #b1bdca;\\n$color-gray-300: #93a3b5;\\n$color-gray-400: #7589a0;\\n$color-gray-500: #5c7086;\\n$color-gray-600: #475768;\\n$color-gray-700: #333e4a;\\n$color-gray-800: #1e242b;\\n$color-gray-900: #090b0d;\\n\\n$color-blue-50: #f3f8ff;\\n$color-blue-100: #c0ddff;\\n$color-blue-200: #8dc1ff;\\n$color-blue-300: #5aa6ff;\\n$color-blue-400: #278bff;\\n$color-blue-500: #0070f3;\\n$color-blue-600: #0059c0;\\n$color-blue-700: #00418d;\\n$color-blue-800: #002a5a;\\n$color-blue-900: #001227;\\n\\n$color-primary: $color-blue-500;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"postCard\": \"WebsiteCard_postCard__WHExg\",\n\t\"containerImage\": \"WebsiteCard_containerImage___OYWh\",\n\t\"overlay\": \"WebsiteCard_overlay__HTxEm\",\n\t\"postCardSticky\": \"WebsiteCard_postCardSticky__QZLYr\",\n\t\"postCardTitle\": \"WebsiteCard_postCardTitle__humJN\",\n\t\"postCardContent\": \"WebsiteCard_postCardContent__Lqck6\",\n\t\"postCardMetadata\": \"WebsiteCard_postCardMetadata__Um6vN\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3NyYy9jb21wb25lbnRzL1dlYnNpdGVDYXJkL1dlYnNpdGVDYXJkLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSx3RUFBd0UsdUJBQXVCLG1CQUFtQixxQkFBcUIsMEJBQTBCLEdBQUcsb0NBQW9DLG1CQUFtQixtQkFBbUIsMEJBQTBCLEdBQUcsNkNBQTZDLG1CQUFtQiwrQkFBK0IsR0FBRyx3Q0FBd0MsdUJBQXVCLGdCQUFnQixHQUFHLHdFQUF3RSxlQUFlLEdBQUcsaUNBQWlDLHVCQUF1QixXQUFXLGNBQWMsWUFBWSxhQUFhLGlCQUFpQixnQkFBZ0IsZUFBZSwwQkFBMEIsNkNBQTZDLEdBQUcsd0NBQXdDLGlDQUFpQyx1QkFBdUIsR0FBRywwQ0FBMEMsdUJBQXVCLGVBQWUsZUFBZSxzQkFBc0IsbUJBQW1CLEdBQUcsdUNBQXVDLHNCQUFzQixxQkFBcUIsR0FBRyx5Q0FBeUMsc0JBQXNCLGNBQWMsR0FBRyxxREFBcUQsa0JBQWtCLEdBQUcsb0RBQW9ELHFCQUFxQixHQUFHLDBDQUEwQyxnQ0FBZ0MsR0FBRyxPQUFPLGdLQUFnSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFFBQVEsS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxnRUFBZ0UsZUFBZSx1QkFBdUIsbUJBQW1CLHFCQUFxQiwwQkFBMEIsYUFBYSxxQkFBcUIscUJBQXFCLDRCQUE0QixpQkFBaUIsWUFBWSxnQ0FBZ0MscUNBQXFDLFNBQVMsT0FBTyxLQUFLLEdBQUcscUJBQXFCLHVCQUF1QixnQkFBZ0IsZUFBZSxnQkFBZ0IsbUJBQW1CLE9BQU8sS0FBSyxHQUFHLFlBQVksdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsaUJBQWlCLGdCQUFnQixlQUFlLHlCQUF5Qix5Q0FBeUMsR0FBRyxxQkFBcUIseUNBQXlDLHVCQUF1QixXQUFXLHlCQUF5QixpQkFBaUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIsS0FBSyxHQUFHLG9CQUFvQixzQkFBc0IscUJBQXFCLEdBQUcsc0JBQXNCLHNCQUFzQixjQUFjLFNBQVMscUJBQXFCLHNCQUFzQixPQUFPLHNCQUFzQix5QkFBeUIsT0FBTyxLQUFLLEdBQUcsdUJBQXVCLGdDQUFnQyxHQUFHLDZCQUE2QiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiw0QkFBNEIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsb0NBQW9DLHFCQUFxQjtBQUNoekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XZWJzaXRlQ2FyZC9XZWJzaXRlQ2FyZC5tb2R1bGUuc2Nzcz83OTJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuV2Vic2l0ZUNhcmRfcG9zdENhcmRfX1dIRXhnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLldlYnNpdGVDYXJkX3Bvc3RDYXJkX19XSEV4ZyA+IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLldlYnNpdGVDYXJkX3Bvc3RDYXJkX19XSEV4ZyA+IGE6aG92ZXIgaDMge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLldlYnNpdGVDYXJkX2NvbnRhaW5lckltYWdlX19fT1lXaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLldlYnNpdGVDYXJkX2NvbnRhaW5lckltYWdlX19fT1lXaDpob3ZlciAuV2Vic2l0ZUNhcmRfb3ZlcmxheV9fSFR4RW0ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLldlYnNpdGVDYXJkX292ZXJsYXlfX0hUeEVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDUzLCA2MSwgMC44MSk7XFxufVxcblxcbi5XZWJzaXRlQ2FyZF9wb3N0Q2FyZFN0aWNreV9fUVpMWXIge1xcbiAgYm9yZGVyOiBzb2xpZCAwLjAyZW0gI2NmZDdkZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLldlYnNpdGVDYXJkX3Bvc3RDYXJkU3RpY2t5X19RWkxZciBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjJlbTtcXG4gIHJpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IDEuMTVlbTtcXG4gIGNvbG9yOiAjOTNhM2I1O1xcbn1cXG5cXG4uV2Vic2l0ZUNhcmRfcG9zdENhcmRUaXRsZV9faHVtSk4ge1xcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uV2Vic2l0ZUNhcmRfcG9zdENhcmRDb250ZW50X19McWNrNiB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuLldlYnNpdGVDYXJkX3Bvc3RDYXJkQ29udGVudF9fTHFjazYgcDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uV2Vic2l0ZUNhcmRfcG9zdENhcmRDb250ZW50X19McWNrNiBwOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLldlYnNpdGVDYXJkX3Bvc3RDYXJkTWV0YWRhdGFfX1VtNnZOIHtcXG4gIG1hcmdpbjogLTAuOGVtIC0wLjhlbSAwLjRlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL1dlYnNpdGVDYXJkL1dlYnNpdGVDYXJkLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9zZXR0aW5ncy9fY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBREY7QUFHRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFESjtBQUlNO0VBQ0UsY0NDUztFREFULDBCQUFBO0FBRlI7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFMRjtBQVFJO0VBQ0UsVUFBQTtBQU5OOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtBQVBGOztBQVVBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ25EYTtBRDRDakI7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFSRjtBQVdJO0VBQ0UsYUFBQTtBQVROO0FBWUk7RUFDRSxnQkFBQTtBQVZOOztBQWVBO0VBQ0UsMkJBQUE7QUFaRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJzdHlsZXMvc2V0dGluZ3MvX19zZXR0aW5nc1xcXCI7XFxuXFxuLnBvc3RDYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG4gICYgPiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGgzIHtcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVySW1hZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgLm92ZXJsYXkge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ2LDUzLDYxLC44MSk7XFxufVxcblxcbi5wb3N0Q2FyZFN0aWNreSB7XFxuICBib3JkZXI6IHNvbGlkIDAuMDJlbSAkY29sb3ItZ3JheS0xMDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuXFxuICBzdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMS4yZW07XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICBjb2xvcjogJGNvbG9yLWdyYXktMzAwO1xcbiAgfVxcbn1cXG5cXG4ucG9zdENhcmRUaXRsZSB7XFxuICBtYXJnaW46IDAgMCAxZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5wb3N0Q2FyZENvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBtYXJnaW46IDA7XFxuXFxuICBwIHtcXG4gICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnBvc3RDYXJkTWV0YWRhdGEge1xcbiAgbWFyZ2luOiAtMC44ZW0gLTAuOGVtIDAuNGVtO1xcbn1cXG5cIixcIiRjb2xvci1ncmF5LTUwOiAjZWVmMGYzO1xcbiRjb2xvci1ncmF5LTEwMDogI2NmZDdkZTtcXG4kY29sb3ItZ3JheS0yMDA6ICNiMWJkY2E7XFxuJGNvbG9yLWdyYXktMzAwOiAjOTNhM2I1O1xcbiRjb2xvci1ncmF5LTQwMDogIzc1ODlhMDtcXG4kY29sb3ItZ3JheS01MDA6ICM1YzcwODY7XFxuJGNvbG9yLWdyYXktNjAwOiAjNDc1NzY4O1xcbiRjb2xvci1ncmF5LTcwMDogIzMzM2U0YTtcXG4kY29sb3ItZ3JheS04MDA6ICMxZTI0MmI7XFxuJGNvbG9yLWdyYXktOTAwOiAjMDkwYjBkO1xcblxcbiRjb2xvci1ibHVlLTUwOiAjZjNmOGZmO1xcbiRjb2xvci1ibHVlLTEwMDogI2MwZGRmZjtcXG4kY29sb3ItYmx1ZS0yMDA6ICM4ZGMxZmY7XFxuJGNvbG9yLWJsdWUtMzAwOiAjNWFhNmZmO1xcbiRjb2xvci1ibHVlLTQwMDogIzI3OGJmZjtcXG4kY29sb3ItYmx1ZS01MDA6ICMwMDcwZjM7XFxuJGNvbG9yLWJsdWUtNjAwOiAjMDA1OWMwO1xcbiRjb2xvci1ibHVlLTcwMDogIzAwNDE4ZDtcXG4kY29sb3ItYmx1ZS04MDA6ICMwMDJhNWE7XFxuJGNvbG9yLWJsdWUtOTAwOiAjMDAxMjI3O1xcblxcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZS01MDA7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicG9zdENhcmRcIjogXCJXZWJzaXRlQ2FyZF9wb3N0Q2FyZF9fV0hFeGdcIixcblx0XCJjb250YWluZXJJbWFnZVwiOiBcIldlYnNpdGVDYXJkX2NvbnRhaW5lckltYWdlX19fT1lXaFwiLFxuXHRcIm92ZXJsYXlcIjogXCJXZWJzaXRlQ2FyZF9vdmVybGF5X19IVHhFbVwiLFxuXHRcInBvc3RDYXJkU3RpY2t5XCI6IFwiV2Vic2l0ZUNhcmRfcG9zdENhcmRTdGlja3lfX1FaTFlyXCIsXG5cdFwicG9zdENhcmRUaXRsZVwiOiBcIldlYnNpdGVDYXJkX3Bvc3RDYXJkVGl0bGVfX2h1bUpOXCIsXG5cdFwicG9zdENhcmRDb250ZW50XCI6IFwiV2Vic2l0ZUNhcmRfcG9zdENhcmRDb250ZW50X19McWNrNlwiLFxuXHRcInBvc3RDYXJkTWV0YWRhdGFcIjogXCJXZWJzaXRlQ2FyZF9wb3N0Q2FyZE1ldGFkYXRhX19VbTZ2TlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./src/components/WebsiteCard/WebsiteCard.module.scss\n"));

/***/ })

});