(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(7),c=a.n(l),r=(a(14),a(1)),o=a(2),i=a(4),d=a(3),u=a(5),h=(a(15),a(16),a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={checked:"false"},a.checkedTask=function(){"false"===a.state.checked?a.setState({checked:"done"}):a.setState({checked:"false"}),console.log(a.state.checked)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("li",null,s.a.createElement("span",{onClick:this.checkedTask},"\u25cc"),s.a.createElement("span",{className:this.state.checked}," ",this.props.todo.text,"  "),s.a.createElement("del",{onClick:function(t){e.props.deleteTask(e.props.index),e.setState({checked:"false"})}},s.a.createElement("span",{id:"remove"}," \u232b "))))}}]),t}(n.Component)),m=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={addForm:{text:""},list:[]},a.updateForm=function(e){var t=Object.assign({},a.state.addForm);t[e.target.name]=e.target.value,a.setState({addForm:t})},a.submitTask=function(e){console.log("submit"),e.preventDefault();var t=a.state.list.slice(0);t.push(a.state.addForm),a.setState({list:t,addForm:{text:""}})},a.clearlist=function(e){a.setState({list:[]})},a.deleteTask=function(e){var t=a.state.list.slice(0);t.splice(e,1),a.setState({list:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("link",{rel:"stylesheet",href:"button.css"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Indie+Flower|Kalam",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Caveat|Sacramento|Shadows+Into+Light",rel:"stylesheet"}),s.a.createElement("form",{onSubmit:this.submitTask},s.a.createElement("input",{type:"text",placeholder:"New Task\u2712\ufe0f",name:"text",onChange:this.updateForm,value:this.state.addForm.text})),s.a.createElement("div",{className:"paper"},function(){var t=Math.round(e.state.list.length/3),a=e.state.list.length%3,n=[];e.state.list.length<3&&(t=1);for(var l=0;l<e.state.list.length;l+=t)l===e.state.list.length-1&&a>0&&e.state.list.length>3?n[0]&&(n[0]=n[0].concat(e.state.list.slice(l,l+t+a))):n.push(e.state.list.slice(l,l+t));return n.map(function(t,a){return s.a.createElement("div",{className:"part"+(a+1)},t.map(function(t){return s.a.createElement(h,{todo:t,index:a,deleteTask:e.deleteTask})}))})}()),s.a.createElement("div",{id:"contentWrapper"},s.a.createElement("div",{id:"content"},s.a.createElement("span",{id:"button",onClick:this.clearlist},"clear all"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.ea15e26a.chunk.js.map