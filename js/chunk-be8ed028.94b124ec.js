(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be8ed028"],{"0990":function(t,s,e){},"1f01":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},n=[],c=e("5530"),o=(e("96cf"),e("1da1")),a=e("ec7f"),l=e("2f62"),A=e("176e"),r={components:{musicList:a["a"]},data:function(){return{songs:[]}},methods:{chechAlbum:function(){this.album.albumMID||this.$router.back()},fetchAlbum:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var e,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.songs=[],s.next=3,Object(A["a"])({url:"/album/songs?albummid="+t.album.albumMID});case 3:e=s.sent,i=e.data,100==i.result?t.songs=i.data.list:console.log("获取失败");case 6:case"end":return s.stop()}}),s)})))()}},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])({album:"album"})),{},{title:function(){return this.album.title},bgImage:function(){return this.album.cover}}),mounted:function(){this.chechAlbum(),this.fetchAlbum()},watch:{album:function(){this.fetchAlbum()}}},u=r,m=(e("ff92"),e("2877")),h=Object(m["a"])(u,i,n,!1,null,"7b5491f8",null);s["default"]=h.exports},3694:function(t,s,e){"use strict";var i=e("6283"),n=e.n(i);n.a},"3f92":function(t,s,e){},"439f":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-item"},[e("div",{staticClass:"song-list"},[e("ul",t._l(t.songs,(function(s,i){return e("li",{key:s.id,on:{click:function(s){return t.selectItem(i)}}},[e("h2",[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("span",{staticClass:"icon-add",on:{click:function(e){return e.stopPropagation(),t.addSong(s)}}})]),e("p",t._l(s.singer,(function(s){return e("span",{key:s.id},[t._v(t._s(s.name))])})),0)])})),0)])])},n=[],c=(e("c740"),e("5530")),o=e("2f62"),a={props:{songs:{type:Array}},computed:Object(c["a"])({},Object(o["b"])({playList:"playList",sequenceList:"sequenceList"})),methods:{selectItem:function(t){this.$store.commit("setCurrentIndex",t),this.$store.commit("setPlayList",this.songs),this.$store.commit("setSequenceList",this.songs),this.$store.commit("setFullScreen",!0)},addSong:function(t){this.$store.commit("setSongItem",t)},isPlayList:function(t){var s=this.playList.findIndex((function(s){return s.mid==t.mid}));return s}}},l=a,A=(e("ad75"),e("2877")),r=Object(A["a"])(l,i,n,!1,null,"4b869b9d",null);s["a"]=r.exports},6283:function(t,s,e){},"69f0":function(t,s,e){"use strict";var i=e("9ed4"),n=e.n(i);n.a},"9ed4":function(t,s,e){},ad75:function(t,s,e){"use strict";var i=e("3f92"),n=e.n(i);n.a},b9d7:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"loading"},[i("img",{attrs:{width:"24",height:"24",src:e("cf1c")}}),i("p",{staticClass:"desc"},[t._v(t._s(t.title))])])},n=[],c={props:{title:{type:String,default:"正在载入中..."}}},o=c,a=(e("3694"),e("2877")),l=Object(a["a"])(o,i,n,!1,null,"38fe5b5a",null);s["a"]=l.exports},cf1c:function(t,s){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},ec7f:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"detail-header",style:t.opacityStyle},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}})]),e("scroll",{ref:"scroll",staticClass:"song-scroll",attrs:{list:t.songs,probeType:t.probeType,listenScroll:t.listenScroll},on:{scroll:t.scroll}},[e("div",[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"}),e("span",{staticClass:"title"},[t._v(t._s(t.title))])]),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle}),e("div",{staticClass:"song-list"},[e("div",{staticClass:"text"},[e("p",{on:{click:t.random}},[e("span",{staticClass:"icon-play"}),t._v("随机播放全部")]),e("p",{on:{click:t.toggleFavorite}},[e("span",[e("i",{class:t.getFavoriteIcon()})]),e("span",[t._v(t._s(this.$store.state.value))])])]),e("MusicItem",{attrs:{songs:t.songs}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:void 0==t.songs||0==t.songs.length,expression:"songs == undefined || songs.length ==0"}],staticClass:"loading-container"},[e("loading")],1)],1)},n=[],c=e("3ce5"),o=e("b9d7"),a=e("439f"),l=e("510f"),A={mixins:[l["b"],l["a"]],components:{Scroll:c["a"],loading:o["a"],MusicItem:a["a"]},props:["bgImage","title","songs"],data:function(){return{showTitle:!1,probeType:3,listenScroll:!0,scrollY:0,opacityStyle:{opacity:0}}},methods:{handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.scroll.$el.style.bottom=s,this.$refs.scroll.refresh()},back:function(){this.$router.back()},scroll:function(t){if(!(t.y>0))if(this.scrollY=Math.abs(t.y),this.scrollY>40){var s=this.scrollY/263;s=s>1?1:s,this.opacityStyle={opacity:s},this.showTitle=!0}else this.showTitle=!1},selectItem:function(t){this.$store.commit("setCurrentIndex",t),this.$store.commit("setPlayList",this.songs),this.$store.commit("setSequenceList",this.songs),this.$store.commit("setFullScreen",!0)},random:function(){var t=Math.floor(Math.random()*this.songs.length);this.$store.commit("setMode",2),this.$store.commit("setCurrentIndex",t),this.$store.commit("setPlayList",this.songs),this.$store.commit("setSequenceList",this.songs),this.$store.commit("setFullScreen",!0)}},computed:{bgStyle:function(){return"background-image:url(".concat(this.bgImage,");")}}},r=A,u=(e("69f0"),e("2877")),m=Object(u["a"])(r,i,n,!1,null,"7d2b6cac",null);s["a"]=m.exports},ff92:function(t,s,e){"use strict";var i=e("0990"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-be8ed028.94b124ec.js.map