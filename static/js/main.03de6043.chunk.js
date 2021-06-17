(this["webpackJsonpalkemy-react-challenge"]=this["webpackJsonpalkemy-react-challenge"]||[]).push([[0],{114:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(81),r=a.n(o),i=(a(92),a(82)),c=a(2),l=a(3),h=a(6),d=a(7),u=(a(93),a(219)),j=a(217),m=a(218),b=(a(94),a(222)),p=a(220),g=a(221),f=a(33),x=a.n(f),O=a(1),w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(j.a,{xs:!0,md:!0,lg:!0,className:"align-items-center mt-1",children:[Object(O.jsx)(m.a,{xs:5,md:6,lg:5,children:this.props.statName}),Object(O.jsx)(m.a,{children:Object(O.jsx)(b.a,{now:this.props.statValue})})]})}}]),a}(n.Component),v=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).sortStats=function(){var e={Intelligence:n.state.statList[0],Strength:n.state.statList[1],Speed:n.state.statList[2],Durability:n.state.statList[3],Power:n.state.statList[4],Combat:n.state.statList[5]},t=[];for(var a in e)t.push([a,e[a]]);return t.sort((function(e,t){return e[1]-t[1]})),[(t=t.reverse())[0]]},n.componentDidUpdate=function(){console.log("Team Updated")},n.componentWillUnmount=function(){console.log("Team card removed")},n.state={statList:n.props.statList},n}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){console.log("Prop updated"),this.setState({statList:e.statList})}},{key:"componentDidMount",value:function(e,t){console.log("Team did Mount"),this.setState({statList:this.props.statList})}},{key:"render",value:function(){return Object(O.jsx)(p.a,{className:"bg-dark text-white",children:Object(O.jsxs)(p.a.Body,{children:[Object(O.jsx)(p.a.Title,{children:"Hero Name"}),Object(O.jsxs)(p.a.Text,{children:[this.sortStats().map((function(e){return Object(O.jsxs)(j.a,{xs:!0,md:!0,lg:!0,className:"align-items-center mt-1",children:[Object(O.jsx)(m.a,{xs:5,md:6,lg:5,children:e[0]}),Object(O.jsx)(m.a,{children:e[1]})]})})),Object(O.jsxs)(j.a,{xs:!0,md:!0,lg:!0,className:"align-items-center mt-1",children:[Object(O.jsx)(m.a,{xs:5,md:6,lg:5,children:"Height"}),Object(O.jsx)(m.a,{children:this.state.statList[6]/this.state.statList[8]})]}),Object(O.jsxs)(j.a,{xs:!0,md:!0,lg:!0,className:"align-items-center mt-1",children:[Object(O.jsx)(m.a,{xs:5,md:6,lg:5,children:"Weight"}),Object(O.jsx)(m.a,{children:this.state.statList[7]/this.state.statList[8]})]})]})]})})}}]),a}(n.Component),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log("Card created"),(n=t.call(this,e)).componentDidUpdate=function(){console.log("Hero Updated")},n.componentWillUnmount=function(){console.log("Hero card removed")},n.getInfo=function(e){x.a.get("https://superheroapi.com/api.php/10226669230223430/"+e).then((function(e){n.updateData(e.data)}))},n.updateData=function(e){n.setState((function(){return{id:e.id,alignment:e.biography.alignment,name:e.name,image:e.image.url,intelligence:e.powerstats.intelligence,strength:e.powerstats.strength,speed:e.powerstats.speed,durability:e.powerstats.durability,power:e.powerstats.power,combat:e.powerstats.combat,fullname:e.biography[0],alias:e.biography.aliases[0],workplace:e.work.base,height:e.appearance.height[1],weight:e.appearance.weight[1],eyecolor:e.appearance[4],haircolor:e.appearance[5],count:"1"}})),n.statList=[n.state.intelligence,n.state.strength,n.state.speed,n.state.durability,n.state.power,n.state.combat,n.state.weight,n.state.height,n.state.count],n.props.parentCallback(n.statList,!0)},n.sortStats=function(){var e={Intelligence:n.state.intelligence,Strength:n.state.strength,Speed:n.state.speed,Durability:n.state.durability,Power:n.state.power,Combat:n.state.combat},t=[];for(var a in e)t.push([a,e[a]]);return t.sort((function(e,t){return e[1]-t[1]})),t=t.reverse()},n.showDetails=function(){n.getInfo(String(Math.floor(731*Math.random())+1))},n.state={showCard:!0,showDetails:!1,id:n.props.heroId,alignment:"",name:"",image:"",intelligence:"",strength:"",speed:"",durability:"",power:"",combat:"",fullname:"",alias:"",workplace:"",height:"",weight:"",eyecolor:"",haircolor:"",count:"1"},n.statList=[0,0,0,0,0,0,0,0,0],n}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({showCard:e.showCard}),this.getInfo(e.heroId)}},{key:"componentDidMount",value:function(e,t){console.log("Hero did Mount"),this.getInfo(this.state.id)}},{key:"render",value:function(){var e=this;return Object(O.jsx)(u.a,{fluid:!0,className:"cardContainer mt-3 mb-3",children:Object(O.jsx)(p.a,{className:"bg-dark text-white",children:Object(O.jsxs)(p.a.Body,{children:[Object(O.jsx)(p.a.Title,{children:this.state.name}),Object(O.jsx)(p.a.Img,{variant:"top",src:this.state.image,className:"cardImage"}),this.props.showInfo?Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a.Text,{children:this.sortStats().map((function(e){return Object(O.jsx)(w,{statName:e[0],statValue:e[1]})}))}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(m.a,{className:"d-flex justify-content-end",children:Object(O.jsx)(g.a,{onClick:function(){return e.showDetails()},variant:"primary",children:"Details"})}),Object(O.jsx)(m.a,{className:"d-flex justify-content-end",children:Object(O.jsx)(g.a,{onClick:function(){return e.props.showCard(e.props.heroGrid)},variant:"primary",children:"Remove"})})]})]}):Object(O.jsx)(j.a,{className:"mt-2",children:Object(O.jsx)(m.a,{className:"d-flex justify-content-end",children:Object(O.jsx)(g.a,{onClick:function(){return e.props.showCard(e.props.heroGrid)},variant:"primary",children:"Add to team"})})})]})})})}}]),a}(n.Component),H=(a(114),a(24)),k=a(48),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).processList=function(e){var t=[];void 0!==t&&(t=e.map((function(e){return e.id}))),n.setState({heroList:t})},n.handleCallback=function(e,t){e=e.map((function(e){return"null"===(e=e.replace(/\s[a-z]+|,/gi,""))?0:e}))},n.handleShowFlag=function(e){},n.componentDidUpdate=function(){console.log("SearchHero Updated")},n.state={heroName:"",heroList:[]},n.updateFlag=!0,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(e,t){console.log("SearchHero did Mount")}},{key:"shouldComponentUpdate",value:function(){return!!this.updateFlag}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(u.a,{className:"SearchContainer",children:[Object(O.jsx)(H.d,{initialValues:{name:""},validationSchema:y,onSubmit:function(t,a){var n=a.setSubmitting,s=setTimeout((function(){n(!1),clearTimeout(s)}),1e3);x.a.get("https://superheroapi.com/api.php/10226669230223430/search/"+t.name).then((function(t){e.processList(t.data.results)})).catch((function(e){return console.log(e)}))},children:function(e){var t=e.touched,a=e.errors,n=e.isSubmitting,s=e.handleChange;return Object(O.jsxs)(H.c,{children:[Object(O.jsx)(j.a,{className:"mb-2",children:Object(O.jsx)("label",{htmlFor:"name",children:"Add a hero to your Super Team!"})}),Object(O.jsxs)(j.a,{className:"justify-content-end",children:[Object(O.jsxs)(m.a,{xs:9,md:10,lg:11,className:"form-group",children:[Object(O.jsx)(H.b,{type:"text",name:"name",placeholder:"Enter a hero's name",onChange:s,className:"form-control ".concat(t.name&&a.name?"is-invalid":"")}),Object(O.jsx)(H.a,{component:"Row",name:"name",className:"invalid-feedback fs-6"})]}),Object(O.jsx)(m.a,{xs:3,md:2,lg:1,className:"align-items-top",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary btn-block ",disabled:n,children:n?"Loading...":"Search"})})]})]})}}),Object(O.jsx)(j.a,{xs:1,md:3,lg:4,className:"SearchResultGrid",children:this.state.heroList.map((function(t){return Object(O.jsx)(m.a,{children:Object(O.jsx)(C,{heroId:t,heroGrid:"GoodHero1",showInfo:!1,showCard:e.handleShowFlag,parentCallback:e.handleCallback})})}))})]})}}]),a}(n.Component),y=k.a().shape({name:k.b().min(3,"Search must be 3 characters at minimum").required("Hero's name is required")}),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log("App created"),(n=t.call(this,e)).handleCallback=function(e,t){e=e.map((function(e){return"null"===(e=e.replace(/\s[a-z]+|,/gi,""))?0:e})),n.statsData=t?n.statsData.map((function(t,a){return Number(t)+Number(e[a])})):n.statsData.map((function(t,a){return Number(t)-Number(e[a])}))},n.handleShowFlag=function(e){var t="show"+e;n.setState(Object(i.a)({},t,!n.state[t]))},n.componentDidUpdate=function(){n.statsData=[0,0,0,0,0,0,0,0,0],console.log("App Updated")},n.state={goodHero1:String(Math.floor(731*Math.random())+1),goodHero2:String(Math.floor(731*Math.random())+1),goodHero3:String(Math.floor(731*Math.random())+1),evilHero1:String(Math.floor(731*Math.random())+1),evilHero2:String(Math.floor(731*Math.random())+1),evilHero3:String(Math.floor(731*Math.random())+1),showGoodHero1:!0,showGoodHero2:!0,showGoodHero3:!0,showEvilHero1:!0,showEvilHero2:!0,showEvilHero3:!0,statsData:[0,0,0,0,0,0,0,0,0],heroName:""},n.statsData=[0,0,0,0,0,0,0,0,0],n.updateFlag=!0,n.heroName="",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(e,t){console.log("App did Mount")}},{key:"shouldComponentUpdate",value:function(){return!!this.updateFlag}},{key:"render",value:function(){return Object(O.jsxs)(u.a,{fluid:!0,className:"MainContainer",children:[Object(O.jsx)(u.a,{className:"NavContainer",children:Object(O.jsx)(j.a,{children:Object(O.jsx)(m.a,{children:"Super Team Builder!"})})}),Object(O.jsx)(u.a,{className:"FormContainer"}),Object(O.jsxs)(u.a,{className:"TeamContainer",children:[Object(O.jsx)(j.a,{xs:1,className:"TeamInfo",children:Object(O.jsx)(m.a,{children:6===this.statsData[8]?Object(O.jsx)(v,{statList:this.statsData}):"Team incomplete"})}),Object(O.jsxs)(j.a,{xs:1,md:2,lg:3,className:"TeamGrid",children:[Object(O.jsx)(m.a,{children:this.state.showGoodHero1?Object(O.jsx)(C,{heroId:this.state.goodHero1,heroGrid:"GoodHero1",showInfo:!0,showCard:this.handleShowFlag,parentCallback:this.handleCallback}):Object(O.jsx)("h1",{children:"Hidden"})}),Object(O.jsx)(m.a,{children:this.state.showGoodHero2?Object(O.jsx)(C,{heroId:this.state.goodHero2,heroGrid:"GoodHero2",showInfo:!0,showCard:this.handleShowFlag,parentCallback:this.handleCallback}):Object(O.jsx)("h1",{children:"Hidden"})}),Object(O.jsx)(m.a,{children:this.state.showGoodHero3?Object(O.jsx)(C,{heroId:this.state.goodHero3,heroGrid:"GoodHero3",showInfo:!0,showCard:this.handleShowFlag,parentCallback:this.handleCallback}):Object(O.jsx)("h1",{children:"Hidden"})}),Object(O.jsx)(m.a,{children:this.state.showEvilHero1?Object(O.jsx)(C,{heroId:this.state.evilHero1,heroGrid:"EvilHero1",showInfo:!0,showCard:this.handleShowFlag,parentCallback:this.handleCallback}):Object(O.jsx)("h1",{children:"Hidden"})}),Object(O.jsx)(m.a,{children:this.state.showEvilHero2?Object(O.jsx)(C,{heroId:this.state.evilHero2,heroGrid:"EvilHero2",showInfo:!0,showCard:this.handleShowFlag,parentCallback:this.handleCallback}):Object(O.jsx)("h1",{children:"Hidden"})}),Object(O.jsx)(m.a,{children:this.state.showEvilHero3?Object(O.jsx)(C,{heroId:this.state.evilHero3,heroGrid:"EvilHero3",showInfo:!0,showCard:this.handleShowFlag,parentCallback:this.handleCallback}):Object(O.jsx)("h1",{children:"Hidden"})})]})]}),Object(O.jsx)(S,{})]})}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,223)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),o(e),r(e)}))};a(215);r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),I()},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[216,1,2]]]);
//# sourceMappingURL=main.03de6043.chunk.js.map