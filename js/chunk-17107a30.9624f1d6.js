(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17107a30"],{"07d7":function(t,e,s){},"0bd2":function(t,e,s){"use strict";var n=s("b45e"),i=s.n(n);i.a},2527:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"singerlist"},[s("ul",t._l(t.singerList,(function(e){return s("li",{key:e.singer_id,on:{click:function(s){return t.selectSinger(e)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.singer_pic,expression:"item.singer_pic"}]}),s("div",{staticClass:"info"},[s("p",{staticClass:"name"},[s("span",{staticClass:"singer_name"},[t._v(t._s(e.singer_name))]),s("span",{staticClass:"favorite",on:{click:function(s){return s.stopPropagation(),t.toggleFavorite(e)}}},[t._v(t._s(t.getFavoriteText(e))+" ")])]),e.songNum?s("p",{staticClass:"num"},[0!=e.albumNum?s("span",[t._v("单曲:"+t._s(e.songNum))]):t._e(),0!=e.albumNum?s("span",[t._v("专辑:"+t._s(e.albumNum))]):t._e(),0!=e.albumNum?s("span",[t._v("MV:"+t._s(e.mvNum))]):t._e()]):t._e()])])})),0)])},i=[],a=s("510f"),r={mixins:[a["d"]],name:"singerlist",props:{singerList:{type:Array,required:!0}},methods:{selectSinger:function(t){this.$store.commit("setSinger",t),this.$store.commit("setValue","歌手"),this.$router.push({path:"/singer/mid="+t.singer_mid})}}},c=r,l=(s("0bd2"),s("2877")),o=Object(l["a"])(c,n,i,!1,null,"6289e85e",null);e["a"]=o.exports},3739:function(t,e,s){"use strict";var n=s("8d78"),i=s.n(n);i.a},"41ed":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"no_result"},[s("img",{attrs:{src:"https://m.xiongmaocar.com/imgs/pc/searchNotImg.png"}})])}],a={props:{title:{type:String,default:""}}},r=a,c=(s("3739"),s("2877")),l=Object(c["a"])(r,n,i,!1,null,"5955bbee",null);e["a"]=l.exports},"60ad":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"up"}},[s("div",{staticClass:"mineLove"},[s("div",{staticClass:"back",on:{click:function(e){return t.back()}}},[s("i",{staticClass:"icon-back"}),s("span",{staticClass:"title"},[t._v(t._s(t.title))])]),s("scroll",{ref:"scroll",staticClass:"singer-scroll",attrs:{list:t.loveSinger}},[s("SingerList",{attrs:{singerList:t.loveSinger}})],1),s("no-result",{directives:[{name:"show",rawName:"v-show",value:0==t.loveSinger.length,expression:"loveSinger.length == 0"}],staticClass:"noResult"})],1)])},i=[],a=s("5530"),r=s("2f62"),c=s("3ce5"),l=s("41ed"),o=s("2527"),u=s("510f"),m={mixins:[u["b"]],components:{SingerList:o["a"],Scroll:c["a"],NoResult:l["a"]},computed:Object(a["a"])({},Object(r["b"])({loveSinger:"loveSinger"})),data:function(){return{title:"歌手"}},methods:{handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.scroll.$el.style.bottom=e,this.$refs.scroll.refresh()},back:function(){this.$router.back()}}},g=m,v=(s("789a"),s("2877")),f=Object(v["a"])(g,n,i,!1,null,"5fd4c5d0",null);e["default"]=f.exports},"789a":function(t,e,s){"use strict";var n=s("07d7"),i=s.n(n);i.a},"8d78":function(t,e,s){},b45e:function(t,e,s){}}]);
//# sourceMappingURL=chunk-17107a30.9624f1d6.js.map