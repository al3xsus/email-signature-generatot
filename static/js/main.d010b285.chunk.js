(this["webpackJsonpemail-signature-generator"]=this["webpackJsonpemail-signature-generator"]||[]).push([[0],{64:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),i=n.n(o),l=(n(64),n(26)),r=n(16),s=n(36),j=n(106),d=n(117),h=n(112),p=n(111),b=n(107),u=n(110),m=n(74),g=n(114),x=n(113),O=n(116),f=n.p+"static/media/Logo.dbdbf18d.png",y=n.p+"static/media/twitter.27034a4f.png",v=n.p+"static/media/linkedin.20b49136.png",N=n.p+"static/media/facebook.b28fe430.png",k=n.p+"static/media/behance.fab394ae.png",w=n(4),C=function(e){return Object(w.jsx)("table",{cellPadding:0,cellSpacing:0,className:"signature",children:Object(w.jsxs)("tbody",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{rowSpan:5,children:Object(w.jsx)("img",{className:"main-image",src:"no-photo"===e.photo?f:e.photo,alt:""})}),Object(w.jsx)("td",{rowSpan:5,children:Object(w.jsx)("div",{className:"vertical-line"})}),Object(w.jsx)("td",{children:e.fullName})]}),Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:3,children:e.position})}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:3,children:["Telephone: ",e.phone]})}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:3,children:["Skype: ",e.skype]})}),Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:3,children:Object(w.jsxs)("div",{className:"social-logos-frame",children:[Object(w.jsx)("a",{href:"https://twitter.com/",children:Object(w.jsx)("img",{src:y,alt:""})}),Object(w.jsx)("a",{href:"https://www.linkedin.com/",children:Object(w.jsx)("img",{src:v,alt:""})}),Object(w.jsx)("a",{href:"https://www.facebook.com/",children:Object(w.jsx)("img",{src:N,alt:""})}),Object(w.jsx)("a",{href:"https://www.behance.net/",children:Object(w.jsx)("img",{src:k,alt:""})})]})})})]})})},S=n(108),P=n(109),F=n(115),T=n(104);function I(e){return Object(w.jsxs)(F.a,{position:"relative",display:"inline-flex",children:[Object(w.jsx)(T.a,Object(r.a)({variant:"determinate"},e)),Object(w.jsx)(F.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(w.jsx)(m.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}n(70);var q=Object(j.a)((function(e){return Object(d.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1)},"& .label-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary},centeredImage:{display:"block",marginLeft:"auto",marginRight:"auto",width:"150px",height:"150px"},centeredText:{textAlign:"center"},warningIconStyle:{textAlign:"center",color:"#FFDC00",verticalAlign:"middle"}})})),A={fullName:"",position:"",skype:"",phone:"",photo:"",withPhoto:!1,copied:!1};var L=function(){var e=q(),t=c.a.useState(A),n=Object(s.a)(t,2),a=n[0],o=n[1],i=function(e){"withPhoto"===e.target.name?o((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(l.a)({},e.target.name,e.target.checked))})):o((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},j=function(){var e=document.querySelector(".signature"),t=document.createRange();e&&t.selectNode(e);var n=window.getSelection();n&&(n.removeAllRanges(),n.addRange(t));try{var a=document.execCommand("copy");console.log(a?"Success":"Fail"),o((function(e){return Object(r.a)(Object(r.a)({},e),{},{copied:!0})}))}catch(c){console.log("Fail")}},d=1e3;return Object(w.jsxs)(u.a,{children:[Object(w.jsx)("img",{className:e.centeredImage,src:f,alt:"logo"}),Object(w.jsx)(m.a,{variant:"h2",gutterBottom:!0,className:e.centeredText,children:"Signature generator"}),Object(w.jsx)(m.a,{variant:"subtitle1",gutterBottom:!0,className:e.centeredText,children:"Very original design, pls do not steal"}),Object(w.jsxs)(p.a,{container:!0,spacing:3,children:[Object(w.jsx)(p.a,{item:!0,xs:6,children:Object(w.jsx)(h.a,{className:e.paper,children:Object(w.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(w.jsx)(g.a,{fullWidth:!0,required:!0,label:"Full Name",value:a.fullName,name:"fullName",onChange:i,autoFocus:!0}),Object(w.jsx)(g.a,{fullWidth:!0,required:!0,label:"Position",value:a.position,name:"position",onChange:i}),Object(w.jsx)(g.a,{fullWidth:!0,required:!0,label:"Skype",value:a.skype,name:"skype",onChange:i}),Object(w.jsx)(g.a,{fullWidth:!0,required:!0,label:"Telephone",value:a.phone,name:"phone",onChange:i}),Object(w.jsx)(x.a,{control:Object(w.jsx)(O.a,{checked:a.withPhoto,onChange:i,name:"withPhoto",color:"primary"}),label:a.withPhoto?"Photo":"No photo"}),a.withPhoto&&Object(w.jsx)(g.a,{error:a.photo.length>d,fullWidth:!0,required:!0,label:"Link to image",value:a.photo,name:"photo",onChange:i,helperText:a.photo.length>d&&"It's not an image url, but, probably, image in base64 form. Please, choose appropriate data."}),Object(w.jsx)("br",{}),Object(w.jsx)(b.a,{disabled:JSON.stringify(a)===JSON.stringify(A),onClick:function(){o(A)},color:"secondary",children:"Clear"})]})})}),Object(w.jsx)(p.a,{item:!0,xs:6,children:Object(w.jsx)(h.a,{className:e.paper,children:function(){var t=100;if(a.withPhoto){if(a.fullName&&a.phone&&a.position&&a.skype&&a.photo)return Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(C,{fullName:a.fullName,position:a.position,skype:a.skype,phone:a.phone,photo:a.photo}),Object(w.jsx)("br",{}),Object(w.jsx)(b.a,{disabled:a.photo.length>d,onClick:j,endIcon:a.copied?Object(w.jsx)(S.a,{}):Object(w.jsx)(P.a,{}),children:a.copied?"Copied":"Copy to clipboard"})]});Object.entries(a).forEach((function(e){var n=Object(s.a)(e,2),a=n[0],c=n[1];["fullName","phone","position","skype","photo"].includes(a)&&0===c.length&&(t-=20)}))}else{if(a.fullName&&a.phone&&a.position&&a.skype)return Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(C,{fullName:a.fullName,position:a.position,skype:a.skype,phone:a.phone,photo:"no-photo"}),Object(w.jsx)("br",{}),Object(w.jsx)(b.a,{onClick:j,endIcon:a.copied?Object(w.jsx)(S.a,{}):Object(w.jsx)(P.a,{}),children:a.copied?"Copied":"Copy to clipboard"})]});Object.entries(a).forEach((function(e){var n=Object(s.a)(e,2),a=n[0],c=n[1];["fullName","phone","position","skype"].includes(a)&&0===c.length&&(t-=25)}))}return t>0?Object(w.jsx)("div",{className:e.centeredText,children:Object(w.jsx)(I,{variant:"determinate",value:t})}):Object(w.jsx)("div",{children:"Please, input your data"})}()})})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root")),W()}},[[72,1,2]]]);
//# sourceMappingURL=main.d010b285.chunk.js.map