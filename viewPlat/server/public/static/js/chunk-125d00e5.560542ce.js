(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-125d00e5"],{"30a7":function(e,t,a){"use strict";a("76a6")},"331d":function(e,t,a){"use strict";a("d44a")},3350:function(e,t,a){},"76a6":function(e,t,a){},"811d":function(e,t,a){},"9d10":function(e,t,a){"use strict";a("811d")},ace3:function(e,t,a){"use strict";a("3350")},bf8b:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("previewWrapper",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{pageId:e.pageId},on:{closePreview:e.closePreview}},[a("p",{staticClass:"page-title paddingL30"},[e._v("页面预览")]),e.loading?e._e():a("div",{staticClass:"preview-info-wrapper"},[a("el-form",{attrs:{"label-width":"90px","label-position":"left"}},[a("el-form-item",{attrs:{label:"页面二维码:"}},[a("QrcodeVue",{attrs:{value:e.pageLink,size:120,level:"H"}})],1),a("el-form-item",{attrs:{label:"页面链接:"}},[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.doCopy}},[e._v("复制链接")])],1),a("div",{staticClass:"share-wx-config-wrapper"},[e._v(e._s(e.$config.baseURL+"/quark/view/"+e.pageId))])]),a("el-form-item",{attrs:{label:"页面信息:"}})],1),a("div",{staticClass:"page-info"},[a("div",{staticClass:"page-cover"},[a("img",{attrs:{src:e.shareData.coverImage||e.defaultCoverImage,alt:""}})]),a("div",{staticClass:"page-title-des paddingT10"},[a("div",{staticClass:"info-form-wrapper"},[e._v("\n          "+e._s(e.shareData.title)+"\n        ")]),a("div",{staticClass:"info-form-wrapper ellipsis"},[e._v("\n          "+e._s(e.shareData.description)+"\n        ")])])]),a("div",{staticClass:"clearfix paddingT30 text-center"},[a("a",{attrs:{href:e.pageLink,target:"_blank"}},[a("el-button",{attrs:{type:"primary"}},[e._v("新标签打开链接")])],1)])],1)])},s=[],n=a("a1a8"),r=a("98ad"),o={components:{previewWrapper:n["a"],QrcodeVue:r["a"]},props:{pageId:String},data:function(){return{loading:!0,defaultCoverImage:a("5c58"),pageData:{}}},created:function(){this.getData()},computed:{pageLink:function(){return this.$config.baseURL+"/quark/view/"+this.pageId},shareData:function(){return this.pageData.shareConfig?this.pageData.shareConfig.shareWx?{coverImage:this.pageData.shareConfig.coverImage,title:this.pageData.shareConfig.title,description:this.pageData.shareConfig.description}:{coverImage:this.pageData.coverImage,title:this.pageData.title,description:this.pageData.description}:{}}},methods:{closePreview:function(){this.$emit("closePreview",!1)},getData:function(){var e=this;this.loading=!0,this.$API.getPageDetail({pageId:this.pageId}).then((function(t){e.loading=!1,e.pageData=t.body})).catch((function(){e.loading=!1}))},doCopy:function(){var e=this;this.$copyText(this.pageLink).then((function(){e.$message.success("已复制")}))}}},l=o,c=(a("331d"),a("2c07")),p=Object(c["a"])(l,i,s,!1,null,"39e756f6",null);t["a"]=p.exports},c5c7:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"components-default-style"},[i("div",[i("img",{staticClass:"default-style-img",style:{width:e.width,height:e.height},attrs:{src:a("c5f4"),alt:""}}),i("p",{staticClass:"gray"},[e._v("暂无数据")])])])},s=[],n={name:"notFundData",props:{width:{type:String,default:"128px"},height:{type:String,default:"86px"}}},r=n,o=(a("9d10"),a("2c07")),l=Object(o["a"])(r,i,s,!1,null,"341973f6",null);t["a"]=l.exports},c5f4:function(e,t,a){e.exports=a.p+"static/img/nodata.8468dc19.png"},d44a:function(e,t,a){},d860:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix my-page-list"},[a("div",{staticClass:"page-search-wrapper bg-white"},[a("el-tabs",{on:{"tab-click":e.handlePageModeClick},model:{value:e.searchParams.pageMode,callback:function(t){e.$set(e.searchParams,"pageMode",t)},expression:"searchParams.pageMode"}},e._l(e.pageModeList,(function(t,i){return a("el-tab-pane",{key:i,attrs:{name:t.value,disabled:t.disabled}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("span",{staticClass:"nav-tabs-label"},[e._v(e._s(t.label))])])])})),1)],1),a("div",{staticClass:"scroll-wrapper page-list-wrapper"},[e.pageList.length?a("el-scrollbar",{staticStyle:{height:"100%"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"page-content"},[a("div",{staticClass:"page-item-wrapper"},e._l(e.pageList,(function(t,i){return a("div",{key:i,staticClass:"page-item"},[a("thumbnailPanel",{attrs:{pageData:t,btnList:["edit","useTemplate","publishTemplate","delete"],showPublishState:!1},on:{refresh:e.getPageList,showPreview:e.showPreviewFn}})],1)})),0)])]):a("notFundData")],1),e.showPreview?a("previewPage",{attrs:{pageId:e.previewId},on:{closePreview:function(t){e.showPreview=!1}}}):e._e()],1)},s=[],n=(a("cc57"),a("c5c7")),r=a("2f88"),o=a("bf8b"),l={components:{notFundData:n["a"],thumbnailPanel:r["a"],previewPage:o["a"]},data:function(){return{loading:!1,pageList:[],pageModeList:[],searchParams:{pageMode:"h5"},previewId:"",showPreview:!1}},created:function(){this.pageModeList=this.$config.pageModeList,this.previewId=this.$route.query.previewId||"",this.previewId&&(this.showPreview=!0),this.getPageList()},methods:{handlePageModeClick:function(e){this.searchParams.pageMode=e.name,this.getPageList()},getPageList:function(){var e=this;this.$API.getMyTemplates(this.searchParams).then((function(t){e.pageList=t.body||[]}))},showPreviewFn:function(e){this.previewId=e,this.showPreview=!0}}},c=l,p=(a("ace3"),a("30a7"),a("2c07")),d=Object(p["a"])(c,i,s,!1,null,"48a3b697",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-125d00e5.560542ce.js.map