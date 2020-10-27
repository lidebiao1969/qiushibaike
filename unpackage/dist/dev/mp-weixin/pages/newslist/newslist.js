(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/newslist/newslist"],{

/***/ 50:
/*!***************************************************************************!*\
  !*** E:/wamp/www/my/仿糗事百科/main.js?{"page":"pages%2Fnewslist%2Fnewslist"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _newslist = _interopRequireDefault(__webpack_require__(/*! ./pages/newslist/newslist.vue */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_newslist.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 51:
/*!********************************************************!*\
  !*** E:/wamp/www/my/仿糗事百科/pages/newslist/newslist.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newslist.vue?vue&type=template&id=76ae34b4&scoped=true& */ 52);
/* harmony import */ var _newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newslist.vue?vue&type=script&lang=js& */ 54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _newslist_vue_vue_type_style_index_0_id_76ae34b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newslist.vue?vue&type=style&index=0&id=76ae34b4&scoped=true&lang=css& */ 56);
/* harmony import */ var _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "76ae34b4",
  null,
  false,
  _newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/newslist/newslist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/*!***************************************************************************************************!*\
  !*** E:/wamp/www/my/仿糗事百科/pages/newslist/newslist.vue?vue&type=template&id=76ae34b4&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newslist.vue?vue&type=template&id=76ae34b4&scoped=true& */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_template_id_76ae34b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 53:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/wamp/www/my/仿糗事百科/pages/newslist/newslist.vue?vue&type=template&id=76ae34b4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  newsNavTabBar: function() {
    return __webpack_require__.e(/*! import() | components/news-nav-tab-bar/news-nav-tab-bar */ "components/news-nav-tab-bar/news-nav-tab-bar").then(__webpack_require__.bind(null, /*! @/components/news-nav-tab-bar/news-nav-tab-bar.vue */ 112))
  },
  commonList: function() {
    return __webpack_require__.e(/*! import() | components/common-list/common-list */ "components/common-list/common-list").then(__webpack_require__.bind(null, /*! @/components/common-list/common-list.vue */ 119))
  },
  loadMore: function() {
    return __webpack_require__.e(/*! import() | components/load-more/load-more */ "components/load-more/load-more").then(__webpack_require__.bind(null, /*! @/components/load-more/load-more.vue */ 86))
  },
  hotClassify: function() {
    return __webpack_require__.e(/*! import() | components/hot-classify/hot-classify */ "components/hot-classify/hot-classify").then(__webpack_require__.bind(null, /*! @/components/hot-classify/hot-classify.vue */ 126))
  },
  topicUpdate: function() {
    return __webpack_require__.e(/*! import() | components/topic-update/topic-update */ "components/topic-update/topic-update").then(__webpack_require__.bind(null, /*! @/components/topic-update/topic-update.vue */ 133))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 54:
/*!*********************************************************************************!*\
  !*** E:/wamp/www/my/仿糗事百科/pages/newslist/newslist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newslist.vue?vue&type=script&lang=js& */ 55);
/* harmony import */ var _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/wamp/www/my/仿糗事百科/pages/newslist/newslist.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      swiperHeight: 600,
      isguanzi: true,
      tabIndex: 0,
      topic: {
        swiper: [
        { src: "../../static/zzf/z1.png" },
        { src: "../../static/zzf/z2.png" },
        { src: "../../static/zzf/z3.png" }],

        motive: [
        {
          titlepic: "../../static/zzf/z1.png",
          title: "标题",
          context: "13:36:15.149 开始差量编译...13:",
          totalnum: 30,
          todaynum: 5 },
        {
          titlepic: "../../static/zzf/z2.png",
          title: "标题",
          context: "13:36:15.149 开始差量编译...",
          totalnum: 30,
          todaynum: 5 },
        {
          titlepic: "../../static/zzf/z3.png",
          title: "标题",
          context: "13:36:15.149 开始差量编译",
          totalnum: 30,
          todaynum: 5 }],


        nav: [
        { name: "二次元" },
        { name: "城 市" },
        { name: "喜 爱" },
        { name: "娱 乐" },
        { name: "游 戏" },
        { name: "情 感" }] },


      navbars: [
      { name: '关注', id: 'guanzi' },
      { name: '话题', id: 'topic' }],

      guanzhu: {
        loadtext: "上拉加载更多",
        list: [
        //图文
        {
          userpic: "../../static/HEAD/song.jpg",
          username: '哈哈',
          sex: 0, //0 男 1 女
          age: 25,
          isguanzi: false,
          title: '我是标题',
          titlepic: '../../static/HEAD/song.jpg',
          video: false,
          share: false,
          path: '深圳 龙岗',
          sharenum: 20,
          commentnum: 5,
          goodnum: 123 },


        //文字
        {
          userpic: "../../static/HEAD/song.jpg",
          username: '哈哈',
          sex: 1, //0 男 1 女
          age: 26,
          isguanzi: false,
          title: '我是文字标题',
          titlepic: '',
          video: false,
          share: false,
          path: '深圳 龙岗',
          sharenum: 20,
          commentnum: 5,
          goodnum: 123 },


        //视频
        {
          userpic: "../../static/HEAD/song.jpg",
          username: '哈哈',
          sex: 1, //0 男 1 女
          age: 27,
          isguanzi: false,
          title: '我是视频标题',
          titlepic: '../../static/HEAD/song.jpg',
          video: {
            looknum: '20w',
            long: '2:47' },

          share: false,
          path: '深圳 龙岗',
          sharenum: 20,
          commentnum: 5,
          goodnum: 123 },


        //分享
        {
          userpic: "../../static/HEAD/song.jpg",
          username: '哈哈',
          sex: 0, //0 男 1 女
          age: 28,
          isguanzi: false,
          title: '我是分享标题',
          titlepic: '',
          video: false,
          share: {
            title: '我是分享标题',
            titlepic: '../../static/HEAD/song.jpg' },

          path: '深圳 龙岗',
          sharenum: 20,
          commentnum: 5,
          goodnum: 123 }] } };






  },
  onLoad: function onLoad() {var _this = this;



    uni.getSystemInfo({
      success: function success(res) {
        var height = res.windowHeight - uni.upx2px(100);
        //console.log("height : "+height)
        _this.swiperHeight = height;
      } });

  },
  methods: {
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    },
    ontabchange: function ontabchange(e) {
      var index = e.target.current || e.detail.current;
      this.tabIndex = index;
      //	console.log("tabIndex : " +index)
    },
    loadmore: function loadmore() {var _this2 = this;
      //console.log('index :'+index);

      if (this.guanzhu.loadtext != '上拉加载更多') {return;}
      this.guanzhu.loadtext = '加载中';
      uni.showToast({
        icon: 'none',
        title: "加载中" });

      setTimeout(function () {
        var obj = _this2.guanzhu.list[1];
        _this2.guanzhu.list.push(obj);
        _this2.guanzhu.loadtext = '上拉加载更多';
      }, 2000);

    }
    //占位	
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 56:
/*!*****************************************************************************************************************!*\
  !*** E:/wamp/www/my/仿糗事百科/pages/newslist/newslist.vue?vue&type=style&index=0&id=76ae34b4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_style_index_0_id_76ae34b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../html+css+jss/HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newslist.vue?vue&type=style&index=0&id=76ae34b4&scoped=true&lang=css& */ 57);
/* harmony import */ var _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_style_index_0_id_76ae34b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_style_index_0_id_76ae34b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_style_index_0_id_76ae34b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_style_index_0_id_76ae34b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_html_css_jss_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newslist_vue_vue_type_style_index_0_id_76ae34b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/wamp/www/my/仿糗事百科/pages/newslist/newslist.vue?vue&type=style&index=0&id=76ae34b4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[50,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/newslist/newslist.js.map