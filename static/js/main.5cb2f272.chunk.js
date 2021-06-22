(this["webpackJsonpalkemy-react-challenge"]=this["webpackJsonpalkemy-react-challenge"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},116:function(e,t,a){},235:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),i=a.n(r),o=(a(110),a(25)),c=a(3),l=a(4),d=a(8),h=a(9),m=(a(111),a(241)),j=a(239),u=a(240),b=a(245),g=a(242),p=(a(112),a(246)),x=a(244),f=a(243),O=a(1),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(j.a,{className:"align-items-center mt-1",children:[Object(O.jsx)(u.a,{xs:5,md:6,lg:6,children:this.props.statName}),Object(O.jsx)(u.a,{children:Object(O.jsx)(p.a,{now:this.props.statValue})})]})}}]),a}(n.Component),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)(x.a,{className:"bg-dark text-white",children:0!==this.props.teamInfo.length?Object(O.jsxs)(x.a.Body,{children:[Object(O.jsx)(x.a.Title,{children:Object(O.jsxs)("h2",{children:[this.props.teamInfo[0][0]," Team"]})}),Object(O.jsxs)(x.a.Text,{children:[Object(O.jsxs)(j.a,{className:"align-items-center mt-1",children:[Object(O.jsxs)(u.a,{xs:5,md:6,lg:4,children:["Accumulated ",this.props.teamInfo[0][0]," Stat"]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(p.a,{now:this.props.teamInfo[0][1]})})]}),Object(O.jsxs)(j.a,{xs:!0,md:!0,lg:!0,className:"align-items-center mt-1",children:[Object(O.jsxs)(u.a,{xs:6,md:6,lg:4,children:["Average ",this.props.teamInfo[1][0]]}),Object(O.jsxs)(u.a,{xs:6,md:6,lg:2,children:[Math.floor(this.props.teamInfo[1][1])," Kg."]}),Object(O.jsxs)(u.a,{xs:6,md:6,lg:4,children:["Average ",this.props.teamInfo[2][0]]}),Object(O.jsxs)(u.a,{xs:6,md:6,lg:2,children:[Math.floor(this.props.teamInfo[2][1])," cm."]})]})]})]}):Object(O.jsx)(x.a.Body,{children:Object(O.jsx)(x.a.Title,{children:"Add heroes to your Super Team!"})})})}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateData=function(e){n.id=e.id,n.alignment=e.biography.alignment,n.name=e.name,n.image=e.image.url,n.intelligence=e.powerstats.intelligence,n.strength=e.powerstats.strength,n.speed=e.powerstats.speed,n.durability=e.powerstats.durability,n.power=e.powerstats.power,n.combat=e.powerstats.combat,n.fullname=e.biography[0],n.alias=e.biography.aliases[0],n.workplace=e.work.base,n.height=e.appearance.height[1],n.weight=e.appearance.weight[1],n.eyecolor=e.appearance["eye-color"],n.haircolor=e.appearance["hair-color"],n.count="1"},n.sortStats=function(){var e={Intelligence:n.intelligence,Strength:n.strength,Speed:n.speed,Durability:n.durability,Power:n.power,Combat:n.combat},t=[];for(var a in e)t.push([a,e[a]]);return t.sort((function(e,t){return e[1]-t[1]})),t=t.reverse()},n.renderDetails=function(){var e={Weight:n.weight,Height:n.height,Name:n.name,Alias:n.alias,"Eyes color":n.eyecolor,"Hair color":n.haircolor,Base:n.workplace};e.Base.includes(",")&&(e.Base=e.Base.substr(0,e.Base.indexOf(",")));var t=[];for(var a in e)t.push([a,e[a]]);return t},n.updateData(e.heroInfo),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.updateData(this.props.heroInfo),Object(O.jsx)(m.a,{fluid:!0,className:"cardContainer mt-3 mb-3 px-0",children:Object(O.jsx)(x.a,{className:"bg-dark text-white",children:Object(O.jsxs)(x.a.Body,{className:"",children:[Object(O.jsx)(x.a.Title,{children:this.name}),Object(O.jsx)(x.a.Img,{variant:"top",src:this.image,className:"cardImage"}),this.props.showRemoveButton?Object(O.jsxs)("div",{children:[Object(O.jsx)(x.a.Text,{children:this.sortStats().map((function(e){return Object(O.jsx)(v,{statName:e[0],statValue:e[1]})}))}),Object(O.jsxs)(f.a,{className:"bg-dark text-white",children:[Object(O.jsxs)(j.a,{className:"mb-3",children:[Object(O.jsx)(u.a,{className:"d-flex justify-content-end",children:Object(O.jsx)(f.a.Toggle,{as:g.a,eventKey:"0",children:"Details"})}),Object(O.jsx)(u.a,{className:"d-flex justify-content-end",children:Object(O.jsx)(g.a,{onClick:function(){return e.props.removeFromTeam(e.props.heroID)},variant:"primary",children:"Remove"})})]}),Object(O.jsx)(f.a.Collapse,{eventKey:"0",children:Object(O.jsx)(x.a.Text,{children:this.renderDetails().map((function(e){return Object(O.jsxs)(j.a,{children:[Object(O.jsx)(u.a,{xs:5,md:5,lg:5,children:e[0]}),Object(O.jsx)(u.a,{children:e[1]})]})}))})})]})]}):Object(O.jsx)(j.a,{className:"mt-2",children:Object(O.jsx)(u.a,{className:"d-flex justify-content-end",children:Object(O.jsx)(g.a,{onClick:function(){e.props.addFromSearch(e.props.heroInfo)},variant:"primary",children:"Add to team"})})})]})})})}}]),a}(n.Component),w=(a(116),a(30)),y=a.n(w),S=a(13),C=a(26),I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleAddFromSearch=function(t){e.props.addToTeam(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(m.a,{className:"SearchContainer mt-2",children:[Object(O.jsx)(S.d,{initialValues:{name:""},validationSchema:T,onSubmit:function(t,a){var n=a.setSubmitting,s=setTimeout((function(){n(!1),clearTimeout(s)}),1e3);y.a.get("https://superheroapi.com/api.php/10226669230223430/search/"+t.name).then((function(t){e.props.searchList(t.data.results)})).catch((function(e){return console.log(e)}))},children:function(e){var t=e.touched,a=e.errors,n=e.isSubmitting,s=e.handleChange;return Object(O.jsxs)(S.c,{children:[Object(O.jsx)(j.a,{className:"mb-2",children:Object(O.jsx)("label",{htmlFor:"name",children:"Add up to 6 heroes!"})}),Object(O.jsxs)(j.a,{className:"justify-content-end",children:[Object(O.jsxs)(u.a,{xs:8,md:10,lg:9,className:"form-group",children:[Object(O.jsx)(S.b,{type:"text",name:"name",placeholder:"Enter a hero's name",onChange:s,className:"form-control ".concat(t.name&&a.name?"is-invalid":"")}),Object(O.jsx)(S.a,{component:"Row",name:"name",className:"invalid-feedback fs-6"})]}),Object(O.jsx)(u.a,{xs:4,md:2,lg:3,className:"align-items-start",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary btn-block align-self-start",disabled:n,children:n?"Loading...":"Search"})})]})]})}}),Object(O.jsx)(j.a,{xs:1,md:1,lg:2,className:"SearchResultGrid",children:this.props.heroList.map((function(t){return Object(O.jsx)(u.a,{children:Object(O.jsx)(N,{heroInfo:t,heroID:t.id,showRemoveButton:!1,addFromSearch:e.handleAddFromSearch})})}))})]})}}]),a}(n.Component),T=C.a().shape({name:C.b().min(3,"Search must be 3 characters at minimum").required("Hero's name is required")}),J=(a(235),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleLoginError=function(e,t){e?n.setState({loginFailed:!0}):n.setState({loginFailed:!1})},n.state={loginFailed:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsx)(m.a,{className:"FormContainer",children:Object(O.jsx)(S.d,{initialValues:{email:"",password:""},validationSchema:H,onSubmit:function(t,a){var n=a.setSubmitting,s=setTimeout((function(){n(!1),clearTimeout(s)}),1e3);y.a.post("http://challenge-react.alkemy.org/",{email:t.email,password:t.password}).then((function(t){localStorage.token=t.data.token,e.handleLoginError(!1,"Logged In!"),e.props.logIn(!0)}),(function(t){console.log(t),e.handleLoginError(!0,t.response.data.error),e.props.logIn(!1)}))},children:function(t){var a=t.touched,n=t.errors,s=t.isSubmitting,r=t.handleChange;return Object(O.jsxs)(S.c,{children:[Object(O.jsx)(j.a,{className:"mb-2",children:Object(O.jsx)("label",{htmlFor:"name",children:"Log in!"})}),Object(O.jsxs)(j.a,{className:"text-center",children:[Object(O.jsxs)(u.a,{xs:12,md:5,lg:6,className:"form-group",children:[Object(O.jsx)(S.b,{type:"email",name:"email",placeholder:"Enter email",onChange:r,className:"form-control ".concat(a.email&&n.email?"is-invalid":"")}),Object(O.jsx)(S.a,{component:"Row",name:"email",className:"invalid-feedback fs-6"})]}),Object(O.jsxs)(u.a,{xs:12,md:5,lg:5,className:"form-group",children:[Object(O.jsx)(S.b,{type:"password",name:"password",placeholder:"Enter password",onChange:r,className:"form-control ".concat(a.password&&n.password?"is-invalid":"")}),Object(O.jsx)(S.a,{component:"Row",name:"password",className:"invalid-feedback fs-6"})]}),Object(O.jsx)(u.a,{xs:12,md:2,lg:1,className:"text-center",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary btn-block align-self-center",disabled:s,children:s?"Loading...":"Submit"})})]}),e.state.loginFailed?Object(O.jsx)(b.a,{variant:"danger",className:"mt-3",children:"Login Failed"}):Object(O.jsx)(O.Fragment,{})]})}})})}}]),a}(n.Component)),H=C.a().shape({email:C.b().email("Invalid email address format").required("Email is required"),password:C.b().min(3,"Password must be 3 characters at minimum").required("Password is required")});function k(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),s=a[0],r=a[1];return s?Object(O.jsx)(b.a,{variant:e.variant,onClose:function(){return r(!1)},dismissible:!0,children:e.text}):Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{className:"d-flex justify-content-end mb-2",children:Object(O.jsx)(g.a,{onClick:function(){return r(!0)},variant:e.variant,children:"Show Warning"})})})}var F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getInfo=function(e){y.a.get("https://superheroapi.com/api.php/10226669230223430/"+e).then((function(e){n.jsoninfo=e.data}))},n.handleSearchList=function(e){for(var t in n.searchJsonList=[],e)n.searchJsonList.push(e[t]);n.setState((function(){return{searchJsonList:n.searchJsonList}}))},n.handleAddToTeam=function(e){for(var t in n.repeatedHero=!1,n.setState({repeatedHero:!1}),n.gridJsonList)if(n.gridJsonList[t].id===e.id)return console.log("Hero already in team"),n.repeatedHero=!0,n.setState({repeatedHero:!0}),0;3===n.goodHeroCount&&console.log("Too many good Heroes!"),3===n.evilHeroCount&&console.log("Too many evil Heroes!"),n.goodHeroCount<3&&"good"===e.biography.alignment?(n.goodHeroCount=n.goodHeroCount+1,n.gridJsonList.push(e)):n.evilHeroCount<3&&"bad"===e.biography.alignment&&(n.evilHeroCount=n.evilHeroCount+1,n.gridJsonList.push(e)),n.teamInfoList=n.addTeamInfo(n.gridJsonList),n.setState((function(){return{gridJsonList:n.gridJsonList}}))},n.handleRemoveFromTeam=function(e){var t=[];for(var a in n.gridJsonList=n.state.gridJsonList,n.gridJsonList)n.gridJsonList[a].id!==e?t.push(n.gridJsonList[a]):"good"===n.gridJsonList[a].biography.alignment?n.goodHeroCount=n.goodHeroCount-1:"bad"===n.gridJsonList[a].biography.alignment&&(n.evilHeroCount=n.evilHeroCount-1);n.gridJsonList=t,0===n.gridJsonList.length?n.teamInfoList=[]:n.teamInfoList=n.addTeamInfo(n.gridJsonList),n.setState((function(){return{gridJsonList:n.gridJsonList}}))},n.addTeamInfo=function(e){for(var t in n.statList=[0,0,0,0,0,0,[],[]],n.gridJsonList)n.statList[0]+=Number(e[t].powerstats.intelligence),n.statList[1]+=Number(e[t].powerstats.strength),n.statList[2]+=Number(e[t].powerstats.speed),n.statList[3]+=Number(e[t].powerstats.durability),n.statList[4]+=Number(e[t].powerstats.power),n.statList[5]+=Number(e[t].powerstats.combat),n.statList[6].push(e[t].appearance.height[1]),n.statList[7].push(e[t].appearance.weight[1]);n.highestStat=n.sortStats(n.statList),n.highestStat=[n.highestStat[0],n.highestStat[1]/e.length];var a=0,s=0;return n.height=n.castToNumber(n.statList[6]),n.weight=n.castToNumber(n.statList[7]),n.height.map((function(e){return a+=e})),n.weight.map((function(e){return s+=e})),a/=n.statList[6].length,s/=n.statList[7].length,n.height=["Height",a],n.weight=["Weight",s],[n.highestStat,n.weight,n.height]},n.sortStats=function(e){var t={Intelligence:e[0],Strength:e[1],Speed:e[2],Durability:e[3],Power:e[4],Combat:e[5]},a=[];for(var n in t)a.push([n,t[n]]);return a.sort((function(e,t){return e[1]-t[1]})),(a=a.reverse())[0]},n.castToNumber=function(e){return e=e.map((function(e){var t=e.replace(/\s[a-z]+|,/gi,"");return"null"===t?0:t.includes("tons")?1e3*Number(t):Number(t)}))},n.handleLogIn=function(e){e?n.setState({loggedIn:!0}):n.setState({loggedIn:!1})},n.state={searchJsonList:[],gridJsonList:[],loggedIn:!0,repeatedHero:!1},n.searchJsonList=[],n.gridJsonList=[],n.updateFlag=!0,n.jsoninfo={},n.goodHeroCount=0,n.evilHeroCount=0,n.statList=[0,0,0,0,0,0,[],[]],n.statsData=[0,0,0,0,0,0,[],[]],n.highestStat=0,n.height=0,n.weight=0,n.teamInfoList=[],n.repeatedHero=!1,n}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(){return!!this.updateFlag}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(m.a,{fluid:!0,className:"MainContainer",children:[Object(O.jsx)(m.a,{className:"NavSection",children:Object(O.jsx)(j.a,{children:Object(O.jsx)(u.a,{className:"text-center",children:Object(O.jsx)("h1",{children:"Super Team Builder!"})})})}),!0!==this.state.loggedIn?Object(O.jsx)(m.a,{className:"LoginSection",children:Object(O.jsx)(J,{logIn:this.handleLogIn})}):Object(O.jsxs)(j.a,{children:[Object(O.jsx)(u.a,{xs:12,md:!0,lg:8,className:"TeamSection",children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(j.a,{xs:1,className:"TeamInfo sticky-top",children:Object(O.jsx)(u.a,{children:Object(O.jsx)(L,{teamInfo:this.teamInfoList})})}),Object(O.jsxs)(m.a,{className:"WarningContainer",children:[3===this.goodHeroCount?Object(O.jsx)(k,{variant:"warning",text:["Can't add more than ",Object(O.jsx)("b",{children:"3 good heroes!"})]}):Object(O.jsx)(O.Fragment,{}),3===this.evilHeroCount?Object(O.jsx)(k,{variant:"warning",text:["Can't add more than ",Object(O.jsx)("b",{children:"3 evil heroes!"})]}):Object(O.jsx)(O.Fragment,{}),!0===this.repeatedHero?Object(O.jsx)(k,{variant:"danger",text:["Hero ",Object(O.jsx)("b",{children:"already"})," in the Team!"]}):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsx)(j.a,{xs:1,md:1,lg:2,className:"TeamGrid",children:this.gridJsonList.map((function(t){return Object(O.jsx)(u.a,{children:Object(O.jsx)(N,{heroInfo:t,heroID:t.id,showRemoveButton:!0,removeFromTeam:e.handleRemoveFromTeam})})}))})]})}),Object(O.jsx)(u.a,{xs:12,md:!0,lg:4,className:"SearchSection",children:Object(O.jsx)(I,{heroList:this.state.searchJsonList,searchList:this.handleSearchList,addToTeam:this.handleAddToTeam})})]})]})}}]),a}(n.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,247)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};a(236);i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),B()}},[[237,1,2]]]);
//# sourceMappingURL=main.5cb2f272.chunk.js.map