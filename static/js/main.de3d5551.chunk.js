(this.webpackJsonpnotes_keeper=this.webpackJsonpnotes_keeper||[]).push([[0],{30:function(e,t,a){e.exports=a(51)},35:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(28),i=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(20),c=a(3),l=a(13),u=a(14),p=a(16),m=a(15),d=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Hello World from Login")}}]),a}(r.a.Component),h=(a(35),a(25)),f=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={email:null,password:null,confirm_password:null,signUpError:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return this.formValid=function(){return e.state.password===e.state.confirm_password},this.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"confirm_password":e.setState({confirm_password:a.target.value})}},this.submitSignUp=function(t){t.preventDefault(),e.formValid()?h.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={email:t.user.email,title:[],notes:[]};h.firestore().collection("users").doc(e.state.email).set(a).then((function(){e.props.history.push("/dashboard")}),(function(t){e.setState({signUpError:"Failed to add User"})}))}),(function(t){e.setState({signUpError:"Failed to add User"})})):e.setState({signUpError:"Password Mismatch!!"})},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login"},r.a.createElement("h2",null,"Sign Up!"),r.a.createElement("form",{onSubmit:function(t){return e.submitSignUp(t)},id:"signUp"},r.a.createElement("input",{type:"email",onChange:function(t){return e.userTyping("email",t)},id:"email",placeholder:"Enter Your Email..."}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.userTyping("password",t)},placeholder:"Enter Your Password..."}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(t){return e.userTyping("confirm_password",t)},id:"confirm_password",placeholder:"Confirm Password... "}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"sbtn"},r.a.createElement(s.b,{to:"/login",style:{textDecoration:"none",color:"#0067B8",fontSize:"15px"}},"Already have an account?"),r.a.createElement("button",{id:"sign"},"Sign Up"))),this.state.signUpError?r.a.createElement("h2",{id:"err"},this.state.signUpError):null))}}]),a}(r.a.Component),g=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Hello World from Dashboard")}}]),a}(r.a.Component),b=r.a.createElement(s.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(c.a,{path:"/login",component:d}),r.a.createElement(c.a,{path:"/signup",component:f}),r.a.createElement(c.a,{path:"/dashboard",component:g}))),E=a(25);a(50);E.initializeApp({apiKey:"AIzaSyAQOuMxht8RaP_721mPf4NyGpgKeAgTCkM",authDomain:"notes-keeper-7a765.firebaseapp.com",databaseURL:"https://notes-keeper-7a765.firebaseio.com",projectId:"notes-keeper-7a765",storageBucket:"notes-keeper-7a765.appspot.com",messagingSenderId:"613764324701",appId:"1:613764324701:web:949fb09c5cdd53287cdcb4",measurementId:"G-WW4QN51M71"}),E.analytics(),i.a.render(b,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.de3d5551.chunk.js.map