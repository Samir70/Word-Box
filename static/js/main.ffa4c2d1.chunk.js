(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),i=(n(69),n(13)),s=n(14),c=n(36),d=n(31),u=n(38),h=n(109),m=(n(15),function(e){for(var t=[],n=0;n<e.knownWords.nouns.length;n++){var a=e.knownWords.nouns[n].foreign;t.push(a)}for(var o=[],l=0;l<e.knownWords.verbs.length;l++){var i=e.knownWords.verbs[l].infinitive;o.push(i);var s=e.knownWords.verbs[l].presentForeign;o=o.concat(s)}for(var c=[],d=0;d<e.knownWords.adjectives.length;d++){var u=e.knownWords.adjectives[d].foreign.female,m=e.knownWords.adjectives[d].foreign.male,g=e.knownWords.adjectives[d].foreign.neuter;c.push(u,m,g)}var p=[];p.push(e.knownWords.defArticle.foreign.male.toLowerCase()),p.push(e.knownWords.defArticle.foreign.female.toLowerCase()),p.push(e.knownWords.defArticle.foreign.neuter.toLowerCase());var f=[],v=(f=f.concat(t,o,c,p)).map(function(e,t){return e.charAt(0).toUpperCase()+e.slice(1)}),w=f.map(function(e,t){return e.toUpperCase()}),y={display:"inline-block",fontSize:"20px",margin:"0 auto",marginBottom:"100px",marginTop:"20px",marginLeft:5,marginRight:5},E={color:"green"},T={color:"red"},x=e.text.match(/\w+|\s+|[^\s\w]+/g).map(function(e,t){return e.match(/\w+/g)?f.includes(e)||v.includes(e)||w.includes(e)?r.a.createElement("span",{key:e+t,style:E},e):r.a.createElement("span",{key:e+t,style:T},e):e});return r.a.createElement("div",null,r.a.createElement("h2",{style:{fontSize:30,textAlign:"center",paddingTop:20,width:"100%"}},e.title),r.a.createElement("div",{id:"grabbedText",style:{fontSize:20,marginBottom:"20px",margin:"auto",display:"block",width:"100%",padding:"20px"}},x),r.a.createElement(h.a,{style:y,onClick:e.editText},"Edit"),r.a.createElement(h.a,{style:y,onClick:e.deleteText},"Delete"))}),g=n(45),p=n.n(g),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).addNewText=function(){n.props.updateMode("paste"),n.props.clearStateTextInfo()},n.componentWillReceiveProps=function(e){n.setState({currentTitle:e.title,userTextInput:e.text})},n.deleteText=function(){n.props.deleteText()},n.editSavedText=function(){n.props.updateMode("edit-saved")},n.goToStudyMode=function(){n.props.updateMode("study")},n.handleChangeText=function(e){n.setState({userTextInput:e.target.value})},n.handleChangeTitle=function(e){n.setState({currentTitle:e.target.value})},n.hideSaveAlert=function(){n.setState({showSaveAlert:!1})},n.saveEditedText=function(){n.props.saveEditedText(n.state.currentTitle,n.state.userTextInput),n.setState({showSaveAlert:!0}),n.props.updateMode("read")},n.saveText=function(){var e,t=n.refs.myTextArea.value;if(n.props.updateText(t),""!==n.refs.myTitleArea.value)e=n.refs.myTitleArea.value,n.props.updateTitle(e);else{var a=n.refs.myTextArea.value.split(" ");if(a.length<6){for(var r=a.slice(0,a.length),o="",l=0;l<a.length;l++)o=o+r[l]+" ";o=o.slice(0,-1),e=o+="...",n.props.updateTitle(e)}else{r=a.slice(0,6),o="";for(var i=0;i<6;i++)o=o+r[i]+" ";o=o.slice(0,-1),e=o+="...",n.props.updateTitle(e)}}var s=new Date,c=s.toTimeString();c=c.split(" ")[0];var d=s.getDate(),u=s.getMonth()+1;d<10&&(d="0"+d),u<10&&(u="0"+u);var h=c+" "+(d+"/"+u+"/"+s.getFullYear().toString().substr(-2));n.props.saveText(h,e,t),n.setState({showSaveAlert:!0}),n.props.updateMode("read")},n.handleClose=function(){n.setState({showSaveAlert:!1})},n.updateTitle=function(e){n.props.updateTitle(e)},n.state={mode:n.props.mode,currentTitle:"",userTextInput:"",showSaveAlert:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={fontSize:20,marginBottom:"20px",margin:"auto",display:"block",width:"60%"},t={display:"block"},n={border:"2px solid black",fontSize:20,marginBottom:"20px",marginTop:"100px",margin:"auto",padding:20,display:"block",width:"60%",textAlign:"left"},a={display:"inline-block",fontSize:"20px",margin:"0 auto",marginBottom:"100px",marginTop:"20px",marginLeft:5,marginRight:5};return"paste"===this.props.mode?r.a.createElement("div",{id:"main-area",style:t,className:"form-group"},r.a.createElement("input",{className:"form-control",ref:"myTitleArea",placeholder:"Enter title...",style:e,onChange:this.handleChangeTitle,value:this.state.currentTitle}),r.a.createElement("textarea",{className:"form-control",id:"textArea",ref:"myTextArea",rows:"20",cols:"80",placeholder:"Paste your text here...",value:this.state.userTextInput,style:e,onChange:this.handleChangeText}),r.a.createElement(h.a,{variant:"primary",onClick:this.saveText,style:a},"Save")):"read"===this.props.mode&&!1===this.state.showSaveAlert?r.a.createElement("div",null,r.a.createElement("h2",null,this.props.title),r.a.createElement("div",{style:n},this.props.text),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.editSavedText},"Edit"),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.goToStudyMode},"Study"),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.addNewText},"Add new text"),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.deleteText},"Delete")):"read"===this.props.mode&&!0===this.state.showSaveAlert?r.a.createElement("div",null,r.a.createElement("h2",null,this.props.title),r.a.createElement("div",{style:n},this.props.text),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.editSavedText},"Edit"),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.goToStudyMode},"Study"),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.addNewText},"Add new text"),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.deleteText},"Delete"),r.a.createElement(p.a,{style:{position:"fixed",bottom:"5px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#28a745",fontSize:15},onClose:this.handleClose,delay:3e3,autohide:!0},r.a.createElement(p.a.Body,null,"Your text has been saved!"))):"edit-saved"===this.props.mode?r.a.createElement("div",{style:t},r.a.createElement("input",{style:e,value:this.state.currentTitle,onChange:this.handleChangeTitle}),r.a.createElement("textarea",{rows:"20",cols:"80",value:this.state.userTextInput,onChange:this.handleChangeText,style:e}),r.a.createElement(h.a,{variant:"primary",style:a,onClick:this.saveEditedText},"Save")):"study"===this.props.mode?r.a.createElement("div",null,r.a.createElement("div",{style:n},r.a.createElement(m,{title:this.props.title,text:this.props.text,knownWords:this.props.knownWords,editText:this.editSavedText,deleteText:this.deleteText}))):void 0}}]),t}(r.a.Component),v=function(e){var t={listStyleType:"none"},n={fontSize:"30px"},a={paddingBottom:"25px"};if(""!==e.savedTexts)var o=e.savedTexts.map(function(o,l){return r.a.createElement("div",{key:o.timeAndDate,style:a},r.a.createElement("ul",{style:t},r.a.createElement("li",null,o.timeAndDate),r.a.createElement("li",null,r.a.createElement("a",{style:n,href:"#/",onClick:e.goToReader,id:o.title},o.title))))});return r.a.createElement("div",{style:{marginBottom:"50px"}},r.a.createElement("h2",{style:{paddingTop:"50px",paddingBottom:"25px"}},"Your texts: "),r.a.createElement("div",null,o))},w=(n(84),n(110)),y=n(115),E=function(e){if(e.selection.includes("Nouns"))var t="success";else t="secondary";if(e.selection.includes("Verbs"))var n="success";else n="secondary";if(e.selection.includes("Adjectives"))var a="success";else a="secondary";return r.a.createElement("div",null,r.a.createElement("h2",null,"Types of words"),r.a.createElement("p",null,"Select which types of words you would like to include in the word list"),r.a.createElement(w.a,{vertical:!0},r.a.createElement(h.a,{variant:t,onClick:function(){return e.click("Nouns")}},"Nouns"),r.a.createElement(h.a,{variant:n,onClick:function(){return e.click("Verbs")}},"Verbs"),r.a.createElement(h.a,{variant:a,onClick:function(){return e.click("Adjectives")}},"Adjectives")),r.a.createElement("p",null,"Pronouns are not included. But, if you a click a verb, you will see them listed there"),r.a.createElement("p",null),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Control,{type:"text",placeholder:"Search for a word",onChange:e.changeSearch})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Check,{type:"checkbox",label:"Must be at start of word",onChange:e.changeCheckBox}))))},T=n(111),x=n(112),S=n(59),k=function(e){var t=["the"];if(e.types.includes("Nouns"))for(var n in e.words.nouns)t.push(e.words.nouns[n].english);if(e.types.includes("Verbs"))for(n in e.words.verbs)t.push(e.words.verbs[n].english);if(e.types.includes("Adjectives"))for(n in e.words.adjectives)t.push(e.words.adjectives[n].english);if(0===(t=t.filter(function(t){return e.searchFromStart?0===t.toLowerCase().indexOf(e.searchFor.toLowerCase()):t.toLowerCase().includes(e.searchFor.toLowerCase())}).sort().map(function(t){return r.a.createElement(h.a,{key:t,variant:"link",onClick:function(){return e.wordClick(t)}},t)})).length)var a="https://en.bab.la/dictionary/english-czech/"+e.searchFor,o=r.a.createElement("p",null,"Try a ",r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"dictionary"));return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(x.a,null,r.a.createElement(S.a,null,r.a.createElement(E,{selection:e.types,click:e.changeTypes,changeSearch:e.changeSearch,changeCheckBox:e.changeCheckBox})),r.a.createElement(S.a,null,r.a.createElement("h2",null,"Words I know"),r.a.createElement("div",{id:"wordList"},r.a.createElement("p",null,t)),o,r.a.createElement("p",null,"Click on a word to see its ",e.words.foreignLang," translation"),r.a.createElement("p",null,"Or I can test your ability to translate simple random sentences on the test page. ",r.a.createElement("br",null),"(Click the tab above)")))))},b=(n(85),function(e){if("fromEng"===e.transMode)var t=e.testQ.english,n=e.testQ.foreign,a="Provide the "+e.language+" translation";else t=e.testQ.foreign,n=e.testQ.english,a="Provide the English translation";var o=n.toLowerCase().split(" "),l=""===e.userAns?r.a.createElement("span",null,"I'll mark your answer here"):e.userAns.split(" ").map(function(e,t){return e.toLowerCase()===o[t]?r.a.createElement("span",{className:"goodWord",key:t},e+" "):r.a.createElement("span",{className:"badWord",key:t},e+" ")});return r.a.createElement("div",{id:"testpage"},r.a.createElement("h2",null,"Translate the following"),r.a.createElement("p",{id:"question"},t),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Control,{type:"text",placeholder:a,value:e.userAns,onChange:e.changeAns})),r.a.createElement(h.a,{variant:"primary",onClick:e.switchModeClick},"Translate the other way")),r.a.createElement("p",null),r.a.createElement("div",{id:"answer"},l),r.a.createElement("p",null,"If your translation matches what I'm thinking of, then your words will be green. If a word is red, then that is not what I am thinking of. ",r.a.createElement("br",null),"If you get the complete sentence, I will reward you with a new question!"))}),C=function(e){return Math.floor(Math.random()*e)},A=function(e){return e.replace(/^\w/,function(e){return e.toUpperCase()})},W=function(e){return e[C(e.length)]},j=function(e){var t,n,a,r=W(e.nouns),o=W(e.verbs),l=W(e.adjectives);switch(C(2)){case 0:return t=e.defArticle,a=l,{english:"The "+(n=r).english+" is "+a.english,foreign:A(t.foreign[n.gender])+" "+n.foreign+" je "+a.foreign[n.gender]};case 1:return function(e,t){var n=C(8),a=[0,1,2,2,2,3,4,5][n];return{english:A(e.english[n])+" "+t.present[a],foreign:A(e.foreign[n])+" "+t.presentForeign[a]}}(e.pronouns,o);default:return{english:"I don't have a sentence for this",foreign:"Ja blazen"}}},M=n(113),I=n(116),F=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"infinitive: ",e.infinitive),r.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"tense"),r.a.createElement("th",null,"Ja"),r.a.createElement("th",null,"Ty"),r.a.createElement("th",null,"On/Ona/Ono"),r.a.createElement("th",null,"My"),r.a.createElement("th",null,"Vy"),r.a.createElement("th",null,"Oni"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Present"),r.a.createElement("td",null,e.presentForeign[0]),r.a.createElement("td",null,e.presentForeign[1]),r.a.createElement("td",null,e.presentForeign[2]),r.a.createElement("td",null,e.presentForeign[3]),r.a.createElement("td",null,e.presentForeign[4]),r.a.createElement("td",null,e.presentForeign[5])))))},O=function(e){var t=e.foreign+" ("+e.gender[0]+")";return r.a.createElement("h3",null,t)},L=function(e){var t=e.foreign.male?e.foreign.male:"---",n=e.foreign.female?e.foreign.female:"---",a=e.foreign.neuter?e.foreign.neuter:"---";return r.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Male"),r.a.createElement("th",null,"Female"),r.a.createElement("th",null,"Neuter"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a))))},N=(r.a.createElement(I.a,{show:!1}),function(e){var t=function(e,t){var n=t.nouns.concat(t.verbs,t.adjectives,t.defArticle).filter(function(t){return t.english===e});return 1===n.length?n[0]:n.length>1?{english:e,wordType:"occurs more than once in list"}:{english:"??"+e+"??",wordType:"I can't find that word"}}(e.word,e.wList),n=function(e){switch(e.wordType){case"definite article":case"adjective":return L(e);case"noun":return O(e);case"verb":return F(e);case"occurs more than once in list":return"I don't know what to show you!";case"I can't find that word":return"How did this word get on the known word list?";default:return"This is a type of word I've never seen before!"}}(t);return r.a.createElement(I.a,{show:e.show,onHide:e.onHide,centered:!0},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,t.english," -- ",t.wordType)),r.a.createElement(I.a.Body,null,r.a.createElement("p",null,e.wList.foreignLang+" uses:"),n),r.a.createElement(I.a.Footer,null,r.a.createElement(h.a,{variant:"secondary",onClick:e.onHide},"Close"),r.a.createElement(h.a,{variant:"primary",disabled:!0},"Save Changes")))}),z=function(){function e(t){Object(i.a)(this,e),this.wordType="noun",this.english=t}return Object(s.a)(e,[{key:"foreign",set:function(e){this._foreign=e},get:function(){return this._foreign}},{key:"gender",set:function(e){this._gender=e},get:function(){return this._gender}}]),e}(),B=function(){function e(t){Object(i.a)(this,e),this.wordType="verb",this.english=t}return Object(s.a)(e,[{key:"infinitive",set:function(e){this._infinitive=e},get:function(){return this._infinitive}},{key:"present",set:function(e){6===e.length&&(this._present=Array.from(e))},get:function(){return this._present}},{key:"presentForeign",set:function(e){6===e.length&&(this._presentForeign=Array.from(e))},get:function(){return this._presentForeign}}]),e}(),_=function(){function e(t){Object(i.a)(this,e),this.wordType="adjective",this.english=t}return Object(s.a)(e,[{key:"foreign",set:function(e){this._foreign={male:e[0],female:e[1],neuter:e[2]}},get:function(){return this._foreign}}]),e}(),J=new z("beer");J.foreign="pivo",J.gender="neuter";var R=new z("wine");R.foreign="vino",R.gender="neuter";var D=new z("dog");D.foreign="pes",D.gender="male";var H=new z("table");H.foreign="stul",H.gender="male";var P=new z("banana");P.foreign="banan",P.gender="male";var K=new z("tree");K.foreign="strom",K.gender="male";var V=new z("bed");V.foreign="postel",V.gender="female";var Q=new z("woman");Q.foreign="zena",Q.gender="female";var Y=new z("man");Y.foreign="muz",Y.gender="male";var G=new z("car");G.foreign="auto",G.gender="neuter";var U=new z("gift");U.foreign="darek",U.gender="male";var q=new z("hospital");q.foreign="nemocnice",q.gender="female";var X=new z("night");X.foreign="noc",X.gender="female";var $=new z("dandelion");$.foreign="pampeliska",$.gender="female";var Z=new B("to be");Z.infinitive="byt",Z.present=["am","are","is","are","are","are"],Z.presentForeign=["jsem","jsi","je","jsme","jste","jsou"];var ee=new B("to do");ee.infinitive="delat",ee.present=["do","do","does","do","do","do"],ee.presentForeign=["delam","delas","dela","delame","delate","delaji"];var te=new _("young");te.foreign=["mlady","mlada","mlade"];var ne=new _("old");ne.foreign=["stary","stara","stare"];var ae=new _("small");ae.foreign=["maly","mala","male"];var re=new _("large");re.foreign=["velky","velka","velke"];var oe=new _("blue");oe.foreign=["modry","modra","modre"];var le=new _("green");le.foreign=["zeleny","zelena","zelene"];var ie=new _("beautiful");ie.foreign=["krasny","krasna","krasne"];var se=new _("healthy");se.foreign=["zdravy","zdrava","zdrave"];var ce=new _("strong");ce.foreign=["silny","silna","silne"];var de=new _("cold");de.foreign=["studeny","studena","studene"];var ue=new _("hot");ue.foreign=["horky","horka","horke"];var he={foreignLang:"Czech",defArticle:{english:"the",foreign:{male:"ten",female:"ta",neuter:"to"},wordType:"definite article"},pronouns:{english:["I","you","he","she","it","we","you","they"],foreign:["ja","ty","on","ona","ono","my","vy","oni"]},nouns:[J,R,D,H,P,Q,Y,K,V,G,U,q,X,$],verbs:[Z,ee],adjectives:[te,ne,ae,re,oe,le,ie,se,ce,de,ue]},me=(n(100),n(117)),ge=n(114),pe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={knownWords:he,typesToShow:["Nouns","Verbs","Adjectives"],translationMode:"fromEng",userAnswer:"",sentences:j(he),tabToShow:"testPage",savedTexts:"",text:"",title:"",readerMode:"paste",wordToSearchFor:"",searchFromStart:!1,showWordModal:!1,modalWord:"the"},n.changeToShow=function(e){var t=Array.from(n.state.typesToShow);t.includes(e)?t=t.filter(function(t){return t!==e}):t.push(e),n.setState({typesToShow:t})},n.switchModeHandler=function(){if("fromEng"===n.state.translationMode)var e="toEng";else e="fromEng";n.setState({translationMode:e})},n.ChangeAnswerHandler=function(e){if("fromEng"===n.state.translationMode)var t=n.state.sentences.foreign;else t=n.state.sentences.english;e.target.value.toLowerCase()===t.toLowerCase()?n.setState({sentences:j(n.state.knownWords),userAnswer:""}):n.setState({userAnswer:e.target.value})},n.changeSearchWord=function(e){n.setState({wordToSearchFor:e.target.value})},n.wordClicked=function(e){return n.setState({modalWord:e,showWordModal:!0})},n.modalClose=function(){return n.setState({showWordModal:!1})},n.saveText=function(e,t,a){var r={timeAndDate:e,title:t,text:a};n.saveToLocalStorage(r)},n.changeStartChecked=function(e){n.setState({searchFromStart:!n.state.searchFromStart})},n.clearStateTextInfo=function(){n.setState({title:"",text:""})},n.componentWillMount=function(){if(null!=localStorage.getItem("savedTexts")){var e=JSON.parse(localStorage.getItem("savedTexts"));n.setState({savedTexts:e})}else n.setState({savedTexts:""})},n.deleteText=function(){for(var e=n.state.title,t=JSON.parse(localStorage.getItem("savedTexts")),a=0;a<t.length;a++)t[a].title===e&&t.splice(a,1),localStorage.setItem("savedTexts",JSON.stringify(t)),n.componentWillMount(),n.clearStateTextInfo(),n.setState({readerMode:"paste",tabToShow:"TextCatalogue"})},n.goToReader=function(e){var t=e.target.id,a=n.state.savedTexts.filter(function(e){return e.title===t})[0].text;n.setState({tabToShow:"Reader",readerMode:"read",text:a,title:t}),e.preventDefault()},n.saveEditedText=function(e,t){for(var a=JSON.parse(localStorage.getItem("savedTexts")),r=0;r<a.length;r++)if(a[r].title===n.state.title){a[r].title=e,a[r].text=t,localStorage.setItem("savedTexts",JSON.stringify(a)),n.componentWillMount(),n.updateTitle(a[r].title),n.updateText(a[r].text);break}},n.saveText=function(e,t,a){var r={timeAndDate:e,title:t,text:a};n.saveToLocalStorage(r)},n.saveToLocalStorage=function(e){var t;null!=localStorage.getItem("savedTexts")?(t=JSON.parse(localStorage.getItem("savedTexts"))).push(e):(t=[]).push(e),localStorage.setItem("savedTexts",JSON.stringify(t)),n.componentWillMount()},n.updateReaderMode=function(e){n.setState({readerMode:e})},n.updateText=function(e){n.setState({text:e})},n.updateTitle=function(e){n.setState({title:e})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-header"},"Word Box"),r.a.createElement(me.a,{activeKey:this.state.tabToShow,onSelect:function(t){return e.setState({tabToShow:t})},variant:"pills",fill:!0},r.a.createElement(ge.a,{eventKey:"Reader",title:"Analyse text"},r.a.createElement(f,{knownWords:this.state.knownWords,saveText:this.saveText,mode:this.state.readerMode,updateMode:this.updateReaderMode,updateText:this.updateText,updateTitle:this.updateTitle,text:this.state.text,title:this.state.title,saveEditedText:this.saveEditedText,clearStateTextInfo:this.clearStateTextInfo,deleteText:this.deleteText})),r.a.createElement(ge.a,{eventKey:"TextCatalogue",title:"Saved Texts"},r.a.createElement(v,{savedTexts:this.state.savedTexts,goToReader:this.goToReader})),r.a.createElement(ge.a,{eventKey:"WordList",title:"Known Words"},r.a.createElement(k,{words:this.state.knownWords,types:this.state.typesToShow,changeTypes:this.changeToShow,searchFor:this.state.wordToSearchFor,changeSearch:this.changeSearchWord,searchFromStart:this.state.searchFromStart,changeCheckBox:this.changeStartChecked,wordClick:this.wordClicked})),r.a.createElement(ge.a,{eventKey:"testPage",title:"Test Your knowledge"},r.a.createElement(b,{language:this.state.knownWords.foreignLang,transMode:this.state.translationMode,switchModeClick:this.switchModeHandler,userAns:this.state.userAnswer,testQ:this.state.sentences,changeAns:this.ChangeAnswerHandler}))),r.a.createElement(N,{show:this.state.showWordModal,onHide:this.modalClose,word:this.state.modalWord,wList:this.state.knownWords}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,n){e.exports=n(107)},69:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.ffa4c2d1.chunk.js.map