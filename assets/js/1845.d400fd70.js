/*! For license information please see 1845.d400fd70.js.LICENSE.txt */
    ${Object.keys(e).map((t=>{const r=e[t];return r&&`${t}:${r};`}))}
  `,md=(e,t)=>{const r=t?" !important":"";return uu`
    ${Object.keys(e).map((t=>{const n=e[t];return n&&`${t}:${n}${r};`}))}
    @supports (color: color(display-p3 1 1 1)) {
      ${Object.keys(e).map((t=>`${t}:${(e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return null==t?e:`color(display-p3 ${parseInt(t[1],16)/255} ${parseInt(t[2],16)/255} ${parseInt(t[3],16)/255})`})(e[t])}${r};`))}
    }
  `},vd={default:hd(dd),light:md(fd.light),dark:md(fd.dark),web95:md(fd.web95),retro:md(fd.retro),soft:md(fd.soft),midnight:md(fd.midnight),minimal:md(fd.minimal),rounded:md(fd.rounded),nouns:md(fd.nouns)},gd=hd(pd),yd=hd(ld.light),bd=hd(ld.dark),wd=hd(cd.light),_d=hd(cd.dark),Ad=uu`
  ${gd}
  ${yd}
  ${wd}
`,Ed=uu`
  ${gd}
  ${bd}
  ${_d}
`;let Cd="auto";const xd=xu(Ua.div)`
  ${vd.default}

  ${e=>{switch(e.$useTheme){case"web95":return Cd="light",vd.web95;case"retro":return Cd="light",vd.retro;case"soft":return Cd="light",vd.soft;case"midnight":return Cd="dark",vd.midnight;case"minimal":return Cd="light",vd.minimal;case"rounded":return Cd="light",vd.rounded;case"nouns":return Cd="light",vd.nouns;default:return"light"===e.$useMode?(Cd="light",vd.light):"dark"===e.$useMode?(Cd="dark",vd.dark):uu`
            @media (prefers-color-scheme: light) {
              ${vd.light}
            }
            @media (prefers-color-scheme: dark) {
              ${vd.dark}
            }
          `}}}

  ${e=>{switch(Cd){case"light":return Ad;case"dark":return Ed;default:return uu`
          ${Ad}
          @media (prefers-color-scheme: dark) {
            ${Ed}
          }
        `}}}


  ${e=>{var t;if(e.$customTheme&&e.$customTheme["--ck-accent-color"]&&["light","dark","auto","",void 0].includes(e.$useTheme)){const r=e.$customTheme["--ck-accent-color"],n=null!==(t=e.$customTheme["--ck-accent-text-color"])&&void 0!==t?t:"#ffffff";return{"--ck-accent-color":r,"--ck-accent-text-color":n,"--ck-secondary-button-background":r,"--ck-secondary-button-hover-background":r,"--ck-secondary-button-color":n,"--ck-button-primary-color":n,"--ck-focus-color":r}}if(e.$customTheme)return md(e.$customTheme,!0)}}

  all: initial;
  text-align: left;
  text-direction: ltr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 0.001px transparent;
  text-size-adjust: none;
  font-size: 16px;

  button {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0.001px transparent;
  }

  &,
  * {
    font-family: var(--ck-font-family);
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  /*
  @media (prefers-reduced-motion) {
    * {
      animation-duration: 60ms !important;
      transition-duration: 60ms !important;
    }
  }
  */
  img,
  svg {
    max-width: 100%;
  }
  strong {
    font-weight: 600;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--ck-focus-color);
  }
`,kd=e=>{e=Object.assign({selector:"__CONNECTKIT__"},e);const{selector:t,children:r}=e,n=(0,v.useRef)(null),[i,o]=(0,v.useState)(!1);return(0,v.useEffect)((()=>{const e="#"+t.replace(/^#/,"");if(n.current=document.querySelector(e),!n.current){const e=document.createElement("div");e.setAttribute("id",t),document.body.appendChild(e),n.current=e}o(!0)}),[t]),n.current&&i?(0,ku.createPortal)(r,n.current):null},Sd=e=>{var{background:t=!1}=e,r=ad(e,["background"]);return(0,m.jsx)("svg",Object.assign({},r,{"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:t?{background:"var(--ck-brand-walletConnect)"}:void 0},{children:(0,m.jsx)("path",{d:"M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z",fill:t?"white":"var(--ck-brand-walletConnect)"})}))},Od=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({},t,{"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(\n      180deg,\n      var(--ck-brand-imtoken-01) 0%,\n      var(--ck-brand-imtoken-02) 100%\n    )"}},{children:(0,m.jsx)("path",{d:"M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509",fill:"white"})}))},Dd=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({},t,{"aria-hidden":"true",width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundSize:"100% 100%",backgroundImage:'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=")'}}))},Bd=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(120.22deg, #2962EF 0%, #255CE5 100%)"}},{children:[(0,m.jsx)("path",{d:"M19.0864 22C17.5783 22 16.9973 23.8648 18.2628 24.6438L49.9199 43.732C50.709 44.2178 51.7614 44.0258 52.3048 43.2969L66.2236 25.024C67.17 23.7545 66.2138 22 64.5757 22H19.0864Z",fill:"white"}),(0,m.jsx)("path",{d:"M68.8425 66C70.3503 66 70.9466 64.1252 69.6814 63.3464L38.015 44.2605C37.2259 43.7748 36.1989 43.991 35.6558 44.7198L21.7099 62.9891C20.7639 64.2582 21.7499 66 23.3877 66H68.8425Z",fill:"white"})]}))};var Id=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({},t,{"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6505 3.64041C15.6501 3.64062 15.6497 3.64083 15.6493 3.64103L6.05165 8.43985L16.2501 13.5391L26.4484 8.43987L16.8508 3.64103C16.8504 3.64083 16.85 3.64063 16.8496 3.64043C16.6632 3.54806 16.458 3.5 16.25 3.5C16.042 3.5 15.8369 3.54806 15.6505 3.64041ZM28 10.4592L17.5001 15.7091L17.5 28.5205L27.248 23.6465L27.2508 23.6452C27.4757 23.5334 27.665 23.3611 27.7973 23.1477C27.9297 22.9342 27.9999 22.6881 28 22.4369V10.4592ZM15 28.527L15.0001 15.7091L4.50006 10.4591V22.4333C4.49831 22.6849 4.56687 22.9319 4.69807 23.1466C4.82896 23.3608 5.01696 23.5342 5.24095 23.6475C5.24148 23.6477 5.242 23.648 5.24253 23.6483L15 28.527ZM14.5207 31.0824L4.12104 25.8826L4.11759 25.8809C3.47681 25.558 2.93902 25.0625 2.56486 24.4502C2.19154 23.8394 1.99597 23.1365 2.00006 22.4207V10.0486C2.00044 9.33234 2.20062 8.62972 2.5781 8.021C2.95529 7.41274 3.49457 6.92167 4.13537 6.60291C4.13585 6.60267 4.13633 6.60243 4.13681 6.60219L14.534 1.40359L14.5368 1.40221C15.0692 1.13767 15.6556 1 16.25 1C16.8445 1 17.4309 1.13767 17.9633 1.40221L17.966 1.40358L28.3633 6.60219C28.3638 6.60245 28.3643 6.6027 28.3648 6.60295C29.0055 6.92171 29.5448 7.41276 29.922 8.021C30.2994 8.62973 30.4996 9.33168 30.5 10.0479V22.4376C30.4996 23.1538 30.2994 23.8565 29.922 24.4652C29.5448 25.0734 29.0056 25.5644 28.365 25.8831C28.3644 25.8834 28.3638 25.8837 28.3633 25.884L17.9664 31.0824C17.9663 31.0825 17.9665 31.0824 17.9664 31.0824C17.4316 31.3499 16.8415 31.4894 16.2435 31.4894C15.6455 31.4894 15.0554 31.3499 14.5207 31.0824C14.5205 31.0824 14.5208 31.0825 14.5207 31.0824Z",fill:"#CCCCCC"})}))},Md=e=>{var t=ad(e,[]);const r={position:"relative",display:"flex",gap:2},n={width:"50%",overflow:"hidden",borderRadius:"27.5%"};return(0,m.jsxs)("div",Object.assign({style:{position:"relative",display:"flex",flexDirection:"column",gap:2}},t,{children:[(0,m.jsxs)("div",Object.assign({style:r},{children:[(0,m.jsx)("div",Object.assign({style:n},{children:(0,m.jsx)(Sd,{background:!0})})),(0,m.jsx)("div",Object.assign({style:n},{children:(0,m.jsx)(Bd,{})}))]})),(0,m.jsxs)("div",Object.assign({style:r},{children:[(0,m.jsx)("div",Object.assign({style:n},{children:(0,m.jsx)(Dd,{})})),(0,m.jsx)("div",Object.assign({style:n},{children:(0,m.jsx)(Od,{})}))]}))]}))},Td=Sd,Fd=e=>{var{background:t=!1}=e,r=ad(e,["background"]);return(0,m.jsxs)("svg",Object.assign({},r,{"aria-hidden":"true",style:t?{background:"linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))",borderRadius:"27.5%"}:void 0,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z",fill:"var(--ck-brand-metamask-02)",stroke:"var(--ck-brand-metamask-02)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z",fill:"var(--ck-brand-metamask-06)",stroke:"var(--ck-brand-metamask-06)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z",fill:"var(--ck-brand-metamask-06)",stroke:"var(--ck-brand-metamask-06)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z",fill:"var(--ck-brand-metamask-09)",stroke:"var(--ck-brand-metamask-09)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z",fill:"var(--ck-brand-metamask-09)",stroke:"var(--ck-brand-metamask-09)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z",fill:"var(--ck-brand-metamask-07)",stroke:"var(--ck-brand-metamask-07)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z",fill:"var(--ck-brand-metamask-04)",stroke:"var(--ck-brand-metamask-04)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z",fill:"var(--ck-brand-metamask-05)",stroke:"var(--ck-brand-metamask-05)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z",fill:"var(--ck-brand-metamask-05)",stroke:"var(--ck-brand-metamask-05)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"})]}))},jd=e=>{var{background:t=!1}=e,r=ad(e,["background"]);return(0,m.jsxs)("svg",Object.assign({},r,{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"var(--ck-brand-coinbaseWallet)"}),t&&(0,m.jsx)("rect",{rx:"27%",width:"20",height:"20",fill:"var(--ck-brand-coinbaseWallet)"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z",fill:"white"})]}))},Pd=e=>{var{theme:t="light"}=e,r=ad(e,["theme"]);return(0,m.jsxs)("svg",Object.assign({},r,{"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("rect",{width:"44",height:"44",fill:"light"===t?"var(--ck-brand-trust-02)":"var(--ck-brand-trust-02b)"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.0246 11.8662C33.4096 11.8662 33.774 12.0243 34.0421 12.2925C34.3102 12.5675 34.4615 12.9387 34.4546 13.3168C34.3859 17.4143 34.2277 20.5493 33.9321 23.0312C33.6433 25.5131 33.2102 27.3556 32.5571 28.8475C32.1171 29.8443 31.574 30.6693 30.9346 31.3706C30.0752 32.2987 29.0921 32.9725 28.0196 33.6119C27.561 33.8861 27.0843 34.1568 26.5842 34.4408C25.5172 35.0468 24.3441 35.713 23.0146 36.6025C22.5333 36.9256 21.9077 36.9256 21.4265 36.6025C20.0766 35.7026 18.8879 35.0281 17.8112 34.4173C17.5718 34.2815 17.3379 34.1488 17.109 34.0175C15.8509 33.2887 14.7165 32.5943 13.7265 31.5906C13.0665 30.9306 12.4959 30.1262 12.0421 29.1706C11.4234 27.8918 11.004 26.345 10.6946 24.3443C10.2821 21.67 10.0759 18.1706 10.0002 13.3168C9.99336 12.9387 10.1377 12.5675 10.4059 12.2925C10.674 12.0243 11.0452 11.8662 11.4302 11.8662H12.0215C13.8433 11.8731 17.8652 11.6943 21.344 8.98559C21.8596 8.58683 22.5815 8.58683 23.0971 8.98559C26.5759 11.6943 30.5977 11.8731 32.4265 11.8662H33.0246ZM29.8277 27.9331C30.2746 27.0118 30.6459 25.74 30.9277 23.9112C31.2646 21.725 31.4709 18.755 31.5671 14.7125C29.4221 14.6506 25.7371 14.2381 22.224 11.8731C18.7109 14.2312 15.0259 14.6437 12.8877 14.7125C12.9633 18.0537 13.1146 20.6525 13.3552 22.6943C13.6302 25.0181 14.0221 26.5925 14.5102 27.6993C14.8333 28.435 15.1909 28.9643 15.6171 29.4318C16.1877 30.0575 16.9096 30.5731 17.8927 31.1643C18.3005 31.409 18.7502 31.6635 19.2396 31.9406C20.1116 32.4341 21.1099 32.9991 22.224 33.7081C23.3175 33.0107 24.3014 32.4515 25.1633 31.9616C25.4231 31.8139 25.6717 31.6725 25.909 31.5356C27.119 30.8412 28.0127 30.2637 28.6796 29.59C29.1265 29.1293 29.4909 28.6275 29.8277 27.9331Z",fill:"light"===t?"var(--ck-brand-trust-01)":"var(--ck-brand-trust-01b)"})]}))},Nd=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({},t,{"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("rect",{width:"32",height:"32",fill:"white"}),(0,m.jsx)("path",{d:"M18.3242 7.63647H13.6516C13.4955 7.63647 13.3704 7.76611 13.367 7.92726C13.2726 12.4568 10.9768 16.7559 7.02532 19.8009C6.89986 19.8976 6.87128 20.0792 6.963 20.21L9.69685 24.112C9.78986 24.2448 9.97107 24.2747 10.0986 24.1772C12.5694 22.2856 14.5567 20.0038 15.9879 17.4746C17.4191 20.0038 19.4065 22.2856 21.8773 24.1772C22.0047 24.2747 22.186 24.2448 22.2791 24.112L25.013 20.21C25.1045 20.0792 25.0759 19.8976 24.9506 19.8009C20.999 16.7559 18.7033 12.4568 18.609 7.92726C18.6056 7.76611 18.4803 7.63647 18.3242 7.63647Z",fill:"var(--ck-brand-argent)"})]}))},Rd=Od,Ld=Dd,Ud=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"}},{children:[(0,m.jsx)("mask",Object.assign({id:"mask0_2091_4394",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"13",y:"9",width:"62",height:"71"},{children:(0,m.jsx)("path",{d:"M44 9L13 26.75V62.25L44 80L75 62.25V26.75L44 9ZM31.7577 24.3492H56.1513L59.0935 36.684H28.9307L31.7577 24.3492ZM41.5613 61.2993L36.2955 66.161H31.8427L20.6924 46.9369L28.8701 40.9079L36.0953 45.4627V53.6578L41.5552 58.8504V61.2993H41.5613ZM37.9759 53.1584L38.7888 45.4326L36.1256 38.5432H51.9229L49.3204 45.4326L50.0787 53.1283L44 53.1584H37.9759ZM56.2059 66.1069H51.8076L46.5419 61.2993V58.8564L52.0018 53.6638V45.4627L59.1421 40.8537L67.2955 46.9369L56.2059 66.1069Z",fill:"#002D74"})})),(0,m.jsxs)("g",Object.assign({mask:"url(#mask0_2091_4394)"},{children:[(0,m.jsx)("rect",{y:"8",width:"44",height:"72",fill:"url(#paint0_linear_2091_4394)"}),(0,m.jsx)("rect",{x:"88",y:"80",width:"44",height:"72",transform:"rotate(-180 88 80)",fill:"url(#paint1_linear_2091_4394)"})]})),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_2091_4394",x1:"22",y1:"8",x2:"22",y2:"80",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#010935"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#142C70"})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint1_linear_2091_4394",x1:"110",y1:"80",x2:"110",y2:"152",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#010935"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#142C70"})]}))]})]}))},zd=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"}},{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.2106 16H16V29.4577H19.2182V19.2182L37.2106 19.1011V16ZM37.3568 33.4073V54.6179H50.8146V51.3997H40.575L40.458 33.4073H37.3568ZM16 72.1714H37.2106V69.0703L19.2182 68.9533V58.7137H16V72.1714ZM50.9609 16H72.1714V29.4577H68.9533V19.2182L50.9609 19.1011V16ZM72.1714 72.1714H50.9609V69.0703L68.9533 68.9533V58.7137H72.1714V72.1714Z",fill:"white"})}))},Vd=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("rect",{rx:"27%",width:"88",height:"88",fill:"white"}),(0,m.jsx)("path",{d:"M69.0892 28.2123L70.5781 24.5643L66.3594 20.1967C64.0763 17.9136 59.2123 19.2537 59.2123 19.2537L53.7031 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967L17.3722 24.5395L18.8612 28.1875L17 33.5974L23.204 57.2472C24.4945 62.3097 25.3631 64.2702 29.011 66.8511L40.352 74.5441C41.4439 75.2142 42.784 76.3805 44 76.3805C45.216 76.3805 46.5561 75.2142 47.648 74.5441L58.989 66.8511C62.6369 64.2702 63.5055 62.3097 64.796 57.2472L71 33.5974L69.0892 28.2123Z",fill:"url(#paint0_linear_2183_5890)"}),(0,m.jsx)("path",{d:"M57.6737 23.2739C57.6737 23.2739 64.796 31.8851 64.796 33.6967C64.796 35.5579 63.9026 36.0294 63.0092 36.9972L57.6737 42.705C57.1774 43.2013 56.1103 44.045 56.7307 45.5092C57.3511 46.9982 58.2197 48.8346 57.227 50.7206C56.2344 52.6314 54.4972 53.8971 53.3805 53.6985C51.7195 53.1594 50.1348 52.4088 48.6654 51.4651C47.7224 50.8447 44.6949 48.3382 44.6949 47.3704C44.6949 46.4026 47.8217 44.6406 48.4173 44.2932C48.9881 43.8961 51.6434 42.3575 51.693 41.7619C51.7427 41.1664 51.7427 41.0175 50.9485 39.5285C50.1544 38.0395 48.7647 36.0542 48.9632 34.7638C49.2114 33.4733 51.4449 32.7785 53.1075 32.1581L58.2445 30.2224C58.6415 30.0239 58.5423 29.8502 57.3511 29.7261C56.1599 29.6268 52.8097 29.1801 51.296 29.602C49.7822 30.0239 47.2509 30.6691 47.0028 31.0165C46.8042 31.364 46.6057 31.364 46.829 32.5551L48.2684 40.3722C48.3677 41.3649 48.5662 42.0349 47.5239 42.2831C46.432 42.5313 44.6204 42.9531 44 42.9531C43.3796 42.9531 41.5432 42.5313 40.4761 42.2831C39.409 42.0349 39.6075 41.3649 39.7316 40.3722C39.8309 39.3796 40.9228 33.7215 41.1461 32.5551C41.3943 31.364 41.171 31.364 40.9724 31.0165C40.7243 30.6691 38.1682 30.0239 36.6544 29.602C35.1654 29.1801 31.7904 29.6268 30.5993 29.7509C29.4081 29.8502 29.3088 29.9991 29.7059 30.2472L34.8428 32.1581C36.4807 32.7785 38.7638 33.4733 38.9871 34.7638C39.2353 36.079 37.8208 38.0395 37.0018 39.5285C36.1829 41.0175 36.2077 41.1664 36.2574 41.7619C36.307 42.3575 38.9871 43.8961 39.5331 44.2932C40.1287 44.6654 43.2555 46.4026 43.2555 47.3704C43.2555 48.3382 40.3024 50.8447 39.3097 51.4651C37.8404 52.4088 36.2557 53.1594 34.5947 53.6985C33.4779 53.8971 31.7408 52.6314 30.7233 50.7206C29.7307 48.8346 30.6241 46.9982 31.2197 45.5092C31.8401 44.0202 30.7978 43.2261 30.2767 42.705L24.9412 36.9972C24.0726 36.079 23.1792 35.5827 23.1792 33.7463C23.1792 31.9099 30.3015 23.3235 30.3015 23.3235L37.0763 24.4154C37.8704 24.4154 39.6324 23.7454 41.2454 23.1746C42.8585 22.6783 43.9752 22.6287 43.9752 22.6287C43.9752 22.6287 45.0671 22.6287 46.705 23.1746C48.3428 23.7206 50.08 24.4154 50.8741 24.4154C51.693 24.4154 57.6985 23.2491 57.6985 23.2491L57.6737 23.2739ZM52.3382 56.2298C52.7849 56.4779 52.512 57.0239 52.0901 57.3217L45.7868 62.2353C45.2904 62.7316 44.4963 63.4761 43.9752 63.4761C43.454 63.4761 42.6847 62.7316 42.1636 62.2353C40.0743 60.5717 37.9648 58.9337 35.8355 57.3217C35.4384 57.0239 35.1654 56.5028 35.5873 56.2298L39.3097 54.2445C40.7894 53.4618 42.3551 52.8539 43.9752 52.4329C44.3474 52.4329 46.705 53.2767 48.6158 54.2445L52.3382 56.2298Z",fill:"white"}),(0,m.jsx)("path",{d:"M59.262 19.2785L53.7032 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967C21.591 20.1967 28.0432 19.6259 30.2767 23.2491L37.126 24.4154C37.9201 24.4154 39.682 23.7454 41.2951 23.1746C42.9081 22.6783 44.0249 22.6287 44.0249 22.6287C44.0249 22.6287 45.1168 22.6287 46.7546 23.1746C48.3925 23.7206 50.1296 24.4154 50.9238 24.4154C51.7427 24.4154 57.7482 23.2491 57.7482 23.2491C59.9817 19.6259 66.4339 20.1967 66.4339 20.1967C64.1508 17.9136 59.2868 19.2537 59.2868 19.2537",fill:"url(#paint1_linear_2183_5890)"}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_2183_5890",x1:"17",y1:"45.3241",x2:"71",y2:"45.3241",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{offset:"0.4",stopColor:"#FF5500"}),(0,m.jsx)("stop",{offset:"0.6",stopColor:"#FF2000"})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint1_linear_2183_5890",x1:"22.4879",y1:"18.8219",x2:"66.4339",y2:"18.8219",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#FF452A"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#FF2000"})]}))]})]}))},qd=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({},t,{"aria-hidden":"true",width:"600",height:"600",viewBox:"0 0 600 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"}},{children:[(0,m.jsx)("path",{d:"M470.747 209.191C462.305 192.354 448.646 178.695 431.808 170.253C413.337 161 389.233 161 341.006 161C331.236 161 307.916 161 300 161C292.084 161 268.728 161 258.994 161C210.856 161 186.662 161 168.191 170.253C151.354 178.69 137.7 192.35 129.27 209.191C119.999 227.662 120 251.767 120 299.976C120 348.185 119.999 372.308 129.27 390.778C137.7 407.619 151.354 421.279 168.191 429.716C186.662 438.97 210.784 438.97 258.994 438.97C268.764 438.97 292.084 438.97 300 438.97C307.916 438.97 331.272 438.97 341.006 438.97C389.144 438.97 413.337 438.97 431.808 429.716C448.646 421.274 462.305 407.616 470.747 390.778C480 372.308 480 348.203 480 299.976C480 251.749 480 227.662 470.747 209.191Z",fill:"#FFCEAA"}),(0,m.jsx)("path",{d:"M218.557 350.342C216.323 345.957 212.922 342.274 208.729 339.698C204.536 337.121 199.713 335.752 194.791 335.741H166.747C163.876 335.755 161.041 336.37 158.422 337.548C155.804 338.725 153.462 340.439 151.547 342.577C149.632 344.716 148.186 347.232 147.303 349.964C146.42 352.696 146.12 355.582 146.422 358.437C147.385 367.476 148.954 374.34 151.575 379.564C157.629 391.573 167.378 401.323 179.388 407.377C188.195 411.798 201.674 413.26 222.444 413.742C225.415 413.812 228.353 413.109 230.97 411.702C233.587 410.295 235.793 408.232 237.373 405.715C238.953 403.199 239.852 400.315 239.982 397.346C240.113 394.378 239.47 391.427 238.116 388.781L218.557 350.342Z",fill:"#FF3B9A"}),(0,m.jsx)("path",{d:"M180.618 312.563C189.852 312.562 198.95 310.335 207.14 306.071C215.33 301.806 222.371 295.63 227.668 288.066L254.856 249.253C259.761 242.25 262.839 234.134 263.81 225.64C264.782 217.146 263.616 208.545 260.419 200.616V200.384C258.913 196.555 256.409 193.2 253.167 190.666C249.925 188.133 246.064 186.514 241.985 185.978C209.732 186.085 190.726 186.887 179.405 192.575C167.37 198.586 157.611 208.339 151.592 220.37C146.725 230.247 145.227 258.007 144.87 280.507C144.797 284.698 145.56 288.862 147.114 292.754C148.668 296.647 150.983 300.191 153.923 303.179C156.863 306.167 160.369 308.539 164.236 310.156C168.103 311.774 172.254 312.604 176.445 312.599L180.618 312.563Z",fill:"#FF3B9A"}),(0,m.jsx)("path",{d:"M449.702 220.356C443.655 208.365 433.909 198.639 421.906 192.614C409.89 186.588 389.262 186.053 353.337 186C304.664 186 289.528 242 279.134 256.834L248.556 300.497C243.645 307.51 240.729 315.725 240.12 324.266C239.511 332.806 241.231 341.352 245.098 348.991L267.758 393.813C270.842 399.931 275.578 405.063 281.43 408.627C287.282 412.191 294.016 414.045 300.867 413.978H301.49C309.495 413.978 334.171 413.978 342.283 413.978C385.072 413.978 408.713 413.977 421.906 407.381C433.914 401.331 443.66 391.58 449.702 379.568C456.317 366.374 456.316 342.787 456.316 299.944C456.316 257.101 456.317 233.621 449.702 220.356Z",fill:"#FF3B9A"})]}))},Hd=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #FED812 0%, #FFAF00 100%)"}},{children:(0,m.jsx)("path",{d:"M47.4 43.7163C47.4 45.6251 45.8781 47.1714 44.0001 47.1714C42.1219 47.1714 40.6 45.6251 40.6 43.7163L40.6 -7H27L27 43.7163C27 53.2612 34.6106 61 44.0001 61C53.3882 61 61 53.2612 61 43.7163V-7H47.4V43.7163Z",fill:"#1F2129"})}))},Wd=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"}},{children:(0,m.jsx)("path",{d:"M20 16L28.675 24.677C32.1885 21.8644 36.4154 20.0873 40.8816 19.545C45.348 19.0026 49.8769 19.7164 53.9604 21.6063C58.0438 23.4963 61.5207 26.4876 64.0005 30.2447C66.4804 34.0019 67.8653 38.3763 68 42.8772V43.5854V72L59.3367 63.3231C55.8263 66.1389 51.6014 67.9196 47.1361 68.4655C42.6708 69.0112 38.1419 68.3007 34.0577 66.4135C29.9734 64.5262 26.4956 61.537 24.0144 57.7813C21.5333 54.0255 20.1472 49.6521 20.0115 45.1515V44.4433L20 16ZM25.931 30.3311V44.4146C25.9323 47.7294 26.8335 50.9817 28.5384 53.8236C30.2432 56.6655 32.6875 58.9902 35.6101 60.5497C38.5328 62.1089 41.8238 62.8439 45.1313 62.6764C48.439 62.5087 51.639 61.4445 54.3894 59.5978L54.8611 59.2754L27.0873 31.4884L25.931 30.3311ZM33.6223 28.4022L33.1505 28.7304L60.9186 56.5117L62.069 57.6632V43.5854C62.0683 40.2717 61.1679 37.0204 59.464 34.179C57.7603 31.3377 55.3171 29.0132 52.3957 27.4539C49.4742 25.8946 46.1844 25.1592 42.8777 25.3262C39.5712 25.4933 36.372 26.5565 33.6223 28.4022Z",fill:"#23262F"})}))},$d=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#12FF80"}},{children:[(0,m.jsx)("path",{d:"M68.7186 44H62.6472C60.8339 44 59.3646 45.4686 59.3646 47.281V56.0888C59.3646 57.9012 57.8952 59.3697 56.0819 59.3697H31.9278C30.1145 59.3697 28.6452 60.8383 28.6452 62.6507V68.719C28.6452 70.5314 30.1145 72 31.9278 72H57.48C59.2933 72 60.7417 70.5314 60.7417 68.719V63.8504C60.7417 62.038 62.2111 60.7524 64.0244 60.7524H68.7174C70.5307 60.7524 72 59.2838 72 57.4714V47.2429C72 45.4305 70.5307 44 68.7174 44H68.7186Z",fill:"#121312"}),(0,m.jsx)("path",{d:"M28.6406 31.9308C28.6406 30.1162 30.1104 28.6458 31.9243 28.6458H56.0712C57.8851 28.6458 59.3548 27.1754 59.3548 25.3608V19.285C59.3548 17.4704 57.8851 16 56.0712 16H30.5245C28.7107 16 27.2409 17.4704 27.2409 19.285V23.9666C27.2409 25.7813 25.7711 27.2516 23.9572 27.2516H19.2837C17.4698 27.2516 16 28.722 16 30.5366V40.7888C16 42.6034 17.4759 44 19.2898 44H25.3631C27.177 44 28.6468 42.5296 28.6468 40.715L28.6406 31.932V31.9308Z",fill:"#121312"}),(0,m.jsx)("path",{d:"M41.1004 37.6774H46.8995C48.7894 37.6774 50.3226 39.2117 50.3226 41.1004V46.8995C50.3226 48.7894 48.7882 50.3225 46.8995 50.3225H41.1004C39.2106 50.3225 37.6774 48.7882 37.6774 46.8995V41.1004C37.6774 39.2105 39.2118 37.6774 41.1004 37.6774V37.6774Z",fill:"#121312"})]}))},Kd=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({},t,{"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#CC703C"}},{children:(0,m.jsx)("path",{d:"M63.6429 20L63.3645 20.7254L62.4521 23.0445L61.8461 24.5395C57.2427 35.7491 53.6629 41.0688 49.8557 41.0688C48.8938 41.0936 47.9371 40.9212 47.0465 40.5625C46.156 40.2038 45.3512 39.6667 44.6834 38.9852L44.1979 38.5518C42.9885 37.4538 42.4799 37.1831 41.3154 37.1832C40.7094 37.1832 39.6238 37.9435 38.2521 39.7303C36.4147 42.2912 34.8522 45.0327 33.59 47.9106L33.4353 48.2482L49.7645 48.2483L47.7312 52.4075H32.4845L32.4843 69.44L28 69.44L28.0001 20L63.6429 20ZM57.2889 24.1518L32.4843 24.1518L32.4843 40.6262C35.4564 35.5545 38.2816 33.0086 41.32 33.0086C42.3421 32.9765 43.3595 33.1534 44.3082 33.5284C45.2569 33.9034 46.1159 34.468 46.8311 35.1865L47.3323 35.6335C48.4611 36.6585 48.8956 36.8941 49.8604 36.8941C50.9211 36.8957 53.7433 32.4855 57.2889 24.1518Z",fill:"white"})}))},Gd=Bd;let Zd=[];if("undefined"!=typeof window){const{ethereum:e}=window;Zd=[{id:"injected",name:"Browser Wallet",shortName:"Browser",logos:{default:(0,m.jsx)(Id,{}),mobile:(0,m.jsx)("div",Object.assign({style:{padding:5,background:"var(--ck-body-background-tertiary)",borderRadius:"27%",boxShadow:"inset 0 0 0 1px rgba(0, 0, 0, 0.02)"}},{children:(0,m.jsx)("div",Object.assign({style:{transform:"scale(0.75)",position:"relative",width:"100%"}},{children:(0,m.jsx)(Id,{})}))})),transparent:(0,m.jsx)(Id,{})},scannable:!1,extensionIsInstalled:()=>Boolean(e)},{id:"walletConnect",name:"Other Wallets",shortName:"Other",logos:{default:(0,m.jsx)(Td,{}),mobile:(0,m.jsx)("div",Object.assign({style:{padding:5,background:"var(--ck-body-background-secondary)",borderRadius:"21%",boxShadow:"inset 0 0 0 1px rgba(0, 0, 0, 0.02)"}},{children:(0,m.jsx)(Md,{})})),transparent:(0,m.jsx)(Td,{background:!1}),connectorButton:(0,m.jsx)(Md,{}),qrCode:(0,m.jsx)(Td,{background:!0})},logoBackground:"var(--ck-brand-walletConnect)",scannable:!0,defaultConnect:()=>{}},{id:"metaMask",name:"MetaMask",logos:{default:(0,m.jsx)(Fd,{background:!0}),mobile:(0,m.jsx)(Fd,{background:!0}),transparent:(0,m.jsx)("div",Object.assign({style:{transform:"scale(0.86)",position:"relative",width:"100%"}},{children:(0,m.jsx)(Fd,{})})),connectorButton:(0,m.jsx)("div",Object.assign({style:{transform:"scale(1.1)"}},{children:(0,m.jsx)(Fd,{})}))},logoBackground:"linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))",scannable:!1,extensions:{chrome:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",firefox:"https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",brave:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",edge:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm"},appUrls:{download:"https://connect.family.co/v0/download/metamask",website:"https://metamask.io/download/",android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/app/metamask/id1438144202"},extensionIsInstalled:()=>oc()},{id:"coinbaseWallet",name:"Coinbase Wallet",shortName:"Coinbase",logos:{default:(0,m.jsx)(jd,{}),mobile:(0,m.jsx)(jd,{background:!0}),transparent:(0,m.jsx)(jd,{background:!1}),appIcon:(0,m.jsx)(jd,{background:!1}),connectorButton:(0,m.jsx)(jd,{background:!0}),qrCode:(0,m.jsx)(jd,{background:!0})},logoBackground:"var(--ck-brand-coinbaseWallet)",scannable:!0,extensions:{chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},appUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455"},extensionIsInstalled:()=>Boolean(e&&((null==e?void 0:e.isCoinbaseWallet)||e.providers&&e.providers.find((e=>e.isCoinbaseWallet))))}]}var Jd=Zd;const Xd=/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/,Yd=(e,t="\u2022\u2022\u2022\u2022")=>{if(!e)return"";const r=e.match(Xd);return r?`${r[1]}${t}${r[2]}`:e},Qd=(e,t)=>e.length>t?e.replace(".eth","").slice(0,t)+"...":e,ec=(e,t=2)=>{if(e<1e4)return e.toFixed(2);var r=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"m"},{value:1e9,symbol:"g"},{value:1e12,symbol:"t"},{value:1e15,symbol:"p"},{value:1e18,symbol:"e"}].slice().reverse().find((function(t){return e>=t.value}));return r?(e/r.value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+r.symbol:"0"},tc=()=>{var e;const t=Nu();return null!==(e=null==t?void 0:t.name)&&void 0!==e?e:""},rc=()=>{var e;const t=Nu();return null!==(e=null==t?void 0:t.os)&&void 0!==e?e:""},nc=()=>rc().toLowerCase().includes("android"),ic=()=>nc()||rc().toLowerCase().includes("ios"),oc=()=>{if("undefined"==typeof window)return!1;const{ethereum:e}=window;return!!e&&(!!Boolean(e.isMetaMask)&&(!Boolean(e.isBraveWallet)&&!Boolean(e.isTokenary)))},ac=()=>{if("undefined"==typeof window)return!1;const{ethereum:e}=window;return!!((null==e?void 0:e.isCoinbaseWallet)||(null==e?void 0:e.providers)&&(null==e?void 0:e.providers.find((e=>e.isCoinbaseWallet))))};var sc=560;const uc=xu(Ua.div)`
  z-index: -1;
  pointer-events: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: var(--width);
  top: 64px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  background: var(--ck-body-color-danger);
  border-radius: 20px;
  padding: 24px 46px 82px 24px;
  transition: width var(--duration) var(--ease);
  a {
    font-weight: 700;
    text-decoration: underline;
  }
  code {
    font-size: 0.9em;
    display: inline-block;
    font-family: monospace;
    margin: 1px;
    padding: 0 4px;
    border-radius: 8px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.1);
  }
`,dc=Cu`
from { opacity: 0; }
  to { opacity: 1; }
`,cc=Cu`
from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`,lc=Cu`
from { opacity: 0; transform: scale(1.1); }
  to { opacity: 1; transform: scale(1); }
`,pc=Cu`
from { opacity: 1; }
  to { opacity: 0; }
`,fc=Cu`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(1.1); }
`,hc=Cu`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.85); }
`,mc=xu(Ua.div)`
  max-width: 100%;
  width: 295px;
  padding-top: 48px;
`,vc=xu(Ua.div)`
  user-select: none;
  position: relative;
  display: block;
  text-align: center;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  span {
    z-index: 2;
    position: relative;
    display: inline-block;
    user-select: none;
    pointer-events: none;
    padding: 0 14px;
    background: var(--ck-body-background);
    transition: background-color 200ms ease;
  }
  &:before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    transform: translateY(-1px);
    background: var(--ck-body-divider);
    box-shadow: var(--ck-body-divider-box-shadow);
  }
`,gc=xu(Ua.div)`
  z-index: 3;
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76px;
  transform: translateX(-50%);
  width: var(--width);
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: var(--ck-modal-heading-font-weight, 600);
  color: var(--ck-body-color);
  span {
    display: inline-block;
  }
`,yc=xu(Ua.div)`
  position: relative;
  padding: 0;
`,bc=xu(Ua.div)`
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;

  @media only screen and (max-width: ${sc}px) {
    display: block;
  }
`,wc=xu(Ua.h1)`
  margin: 0;
  padding: 0;
  line-height: ${e=>e.$small?20:22}px;
  font-size: ${e=>e.$small?17:19}px;
  font-weight: var(--ck-modal-h1-font-weight, 600);
  color: ${e=>e.$error?"var(--ck-body-color-danger)":e.$valid?"var(--ck-body-color-valid)":"var(--ck-body-color)"};
  > svg {
    position: relative;
    top: -2px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
  @media only screen and (max-width: ${sc}px) {
    margin-bottom: 6px;
    font-size: 17px;
  }
`,_c=xu.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;xu.div`
  padding: 0 12px;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;const Ac=xu(Ua.div)`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ck-overlay-background, rgba(71, 88, 107, 0.24));
  backdrop-filter: var(--ck-overlay-backdrop-filter, none);
  opacity: 0;
  animation: ${e=>e.$active?dc:pc} 150ms ease-out
    both;
`,Ec=Cu`
  from{ opacity: 0; transform: scale(0.97); }
  to{ opacity: 1; transform: scale(1); }
`,Cc=Cu`
  from{ opacity: 1; transform: scale(1); }
  to{ opacity: 0; transform: scale(0.97); }
`,xc=Cu`
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0%, 0); }
`,kc=Cu`
  from { opacity: 1; }
  to { opacity: 0; }
`,Sc=xu(Ua.div)`
  z-index: 2;
  position: relative;
  color: var(--ck-body-color);

  animation: 150ms ease both;
  animation-name: ${Cc};
  &.active {
    animation-name: ${Ec};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: var(--width);
    height: var(--height);
    transform: translateX(-50%);
    backface-visibility: hidden;
    transition: all 200ms ease;
    border-radius: var(--ck-border-radius, 20px);
    background: var(--ck-body-background);
    box-shadow: var(--ck-modal-box-shadow);
  }

  @media only screen and (max-width: ${sc}px) {
    animation-name: ${kc};
    animation-duration: 130ms;
    animation-timing-function: ease;

    &.active {
      animation-name: ${xc};
      animation-duration: 300ms;
      animation-delay: 32ms;
      animation-timing-function: cubic-bezier(0.15, 1.15, 0.6, 1);
    }

    &:before {
      width: 100%;
      transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
      will-change: height;
    }
  }
`,Oc=xu(Ua.div)`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 50%;
  height: 64px;
  transform: translateX(-50%);
  backface-visibility: hidden;
  width: var(--width);
  transition: 0.2s ease width;
  pointer-events: auto;
  //border-bottom: 1px solid var(--ck-body-divider);
`,Dc=xu(Ua.div)`
  position: relative;
  overflow: hidden;
  height: var(--height);
  transition: 0.2s ease height;
  @media only screen and (max-width: ${sc}px) {
    transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
    /* animation-delay: 34ms; */
  }
`,Bc=xu(Ua.div)`
  z-index: 2;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  width: var(--width);
  /* left: 0; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  animation: 200ms ease both;

  &.active {
    animation-name: ${lc};
  }
  &.active-scale-up {
    animation-name: ${cc};
  }
  &.exit-scale-down {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    animation-name: ${hc};
  }
  &.exit {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    animation-name: ${fc};
    animation-delay: 16.6667ms;
  }
  @media only screen and (max-width: ${sc}px) {
    /* animation: 0ms ease both; */
    /* animation-delay: 35ms; */
    animation: 0ms cubic-bezier(0.15, 1.15, 0.6, 1) both;

    &.active {
      animation-name: ${dc};
    }
    &.active-scale-up {
      animation-name: ${dc};
    }
    &.exit-scale-down {
      z-index: 3;
      animation-name: ${pc};
    }
    &.exit {
      z-index: 3;
      animation-name: ${pc};
      animation-delay: 0ms;
    }
  }
`,Ic=xu(Ua.div)`
  margin: 0 auto;
  width: fit-content;
  padding: 29px 24px 24px;
  backface-visibility: hidden;
`,Mc=xu.div`
  z-index: 2147483646; // z-index set one below max (2147483647) for if we wish to layer things ontop of the modal in a seperate Portal
  position: fixed;
  inset: 0;
`,Tc=xu(Ua.button)`
  z-index: 3;
  cursor: pointer;
  position: absolute;
  top: 22px;
  right: 17px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
  }

  &:hover {
    background: var(--ck-body-background-secondary);
  }
  &:active {
    transform: scale(0.9);
  }
`,Fc=xu(Ua.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,jc=xu(Ua.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
    left: -1px;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,Pc=xu(Ua.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  transform: translateX(-1px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }
  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,Nc=xu(Ua.div)`
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 200ms;
  --transition: height var(--duration) var(--ease),
    width var(--duration) var(--ease);
  z-index: 3;
  display: block;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  @media only screen and (max-width: ${sc}px) {
    pointer-events: auto;
    left: 0;
    top: auto;
    bottom: -5px;
    transform: none;
    ${Sc} {
      max-width: 448px;
      margin: 0 auto;
      &:before {
        width: 100%;
        border-radius: var(--ck-border-radius, 30px)
          var(--ck-border-radius, 30px) 0 0;
      }
    }
    ${Bc} {
      left: 0;
      right: 0;
      margin: 0 auto;
      width: auto;
    }
    ${mc} {
      margin: 0 auto;
      width: 100% !important;
    }
    ${gc} {
      top: 4px;
    }
    ${bc} {
      gap: 12px;
    }
    ${_c} {
      margin: 0 auto;
      max-width: 295px;
    }
    ${Ic} {
      width: 100%;
      padding: 31px 24px;
    }
    ${Oc} {
      width: 100%;
      top: 4px;
      border-bottom: 0;
    }
    ${Tc} {
      right: 22px;
    }
    ${jc} {
      top: -1px;
      left: -3px;
    }
    ${Pc} {
      top: -1px;
      left: -3px;
      svg {
        width: 65%;
        height: auto;
      }
    }
    ${Tc},
    ${jc},
    ${Pc} {
      // Quick hack for bigger tappable area on mobile
      transform: scale(1.4) !important;
      background: transparent !important;
      svg {
        transform: scale(0.8) !important;
      }
    }
  }
`,Rc=xu(Ua.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px -24px -24px -24px;
  padding: 15px 40px 18px;
  font-size: var(--ck-body-disclaimer-font-size, 13px);
  font-weight: var(--ck-body-disclaimer-font-weight, 400);
  text-align: center;
  line-height: 19px;
  color: var(--ck-body-disclaimer-color, var(--ck-body-color-muted, inherit));

  & a {
    color: var(--ck-body-disclaimer-link-color, inherit);
    font-weight: var(--ck-body-disclaimer-font-weight, 400);
    text-decoration: none;
    transition: color 200ms ease;
    &:hover {
      color: var(--ck-body-disclaimer-link-hover-color, inherit);
    }
  }

  @media only screen and (max-width: ${sc}px) {
    margin: 24px -24px -26px -24px;
    padding: 20px 42px 22px 42px;
  }
`,Lc=xu(Ua.div)`
  pointer-events: all;
  z-index: 9;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: var(--width);
  backface-visibility: hidden;
  transform: translateX(-50%);
  transform-origin: bottom center;

  border-radius: var(--ck-border-radius, 30px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: width 200ms ease;

  background: var(
    --ck-body-disclaimer-background,
    var(--ck-body-background-secondary)
  );
  box-shadow: var(--ck-body-disclaimer-box-shadow);

  ${Rc} {
    margin: 0 !important;
    /* visibility: hidden; */
  }

  @media only screen and (max-width: ${sc}px) {
    border-radius: 0;
  }
`,Uc=xu(Ua.div)`
  z-index: 2;
  position: absolute;
  top: 100%;
  white-space: nowrap;
  padding: 8px 16px;
  color: #fff;
  font-size: 13px;
  line-height: 1.5;
  background: #1a88f8;
  border-radius: calc(var(--ck-border-radius) * 0.75);
  transform: translateY(8px) translateX(-48px);
  box-shadow: var(--ck-modal-box-shadow);
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: 18px;
    height: 18px;
    transform: translate(215%, -75%) rotate(45deg);
    background: inherit;
    border-radius: 3px 0 0 0;
  }

  @media only screen and (max-width: ${sc}px) {
    transform: translateY(8px) translateX(-16px);
    &:before {
      transform: translate(40%, -75%) rotate(45deg);
    }
  }
`,zc="undefined"!=typeof window?v.useLayoutEffect:v.useEffect;function Vc(e){const[t,r]=(0,v.useState)(e),n=ym();return zc((()=>{var e;if(!t)return;const r={overflow:document.body.style.overflow,position:document.body.style.position,touchAction:document.body.style.touchAction,paddingRight:document.body.style.paddingRight},i=getComputedStyle(document.body),o=parseInt(i.marginRight)+parseInt(i.paddingRight)+parseInt(i.borderRight)+parseInt(i.marginLeft)+parseInt(i.paddingLeft)+parseInt(i.borderLeft),a=window.innerWidth-document.body.offsetWidth-o;return document.documentElement.style.setProperty("--ck-scrollbar-width",`${a}px`),document.body.style.overflow="hidden",document.body.style.position="relative",document.body.style.touchAction="none",(null===(e=n.options)||void 0===e?void 0:e.avoidLayoutShift)&&(document.body.style.paddingRight=`${a}px`),()=>{var e;document.documentElement.style.removeProperty("--ck-scrollbar-width"),document.body.style.overflow=r.overflow,document.body.style.position=r.position,document.body.style.touchAction=r.touchAction,(null===(e=n.options)||void 0===e?void 0:e.avoidLayoutShift)&&(document.body.style.paddingRight=r.paddingRight)}}),[t]),(0,v.useEffect)((()=>{t!==e&&r(e)}),[e]),[t,r]}function qc(e){const t=function(){const e=(0,v.useRef)(null);function t(t){if(e.current){var r=e.current.querySelectorAll('\n        a[href]:not(:disabled),\n        button:not(:disabled),\n        textarea:not(:disabled),\n        input[type="text"]:not(:disabled),\n        input[type="radio"]:not(:disabled),\n        input[type="checkbox"]:not(:disabled),\n        select:not(:disabled)\n      '),n=r[0],i=r[r.length-1];("Tab"===t.key||9===t.keyCode)&&(t.shiftKey?document.activeElement===n&&(i.focus(),t.preventDefault()):document.activeElement===i&&(n.focus(),t.preventDefault()))}}return(0,v.useEffect)((()=>(e.current&&(e.current.addEventListener("keydown",t),e.current.focus({preventScroll:!0})),()=>{e.current&&e.current.removeEventListener("keydown",t)})),[]),e}();return(0,v.useEffect)((()=>{t.current&&t.current.focus({preventScroll:!0})}),[]),(0,m.jsx)("div",Object.assign({ref:t,tabIndex:0},{children:e.children}))}const Hc=(e,t)=>{let r=e;return t&&Object.keys(t).forEach((e=>{r=r.replaceAll(`{{ ${e} }}`,t[e])})),$c(r)},Wc=e=>e.split(/(\*\*[^\*]*\*\*)/g).map(((e,t)=>/(\*\*.*\*\*)/g.test(e)?(0,m.jsx)("strong",{children:e.replaceAll("**","")},t):`${e}`)).map((e=>"string"==typeof e?e.split(/(\[WALLETCONNECTLOGO\])/g).map(((e,t)=>"[WALLETCONNECTLOGO]"===e?(0,m.jsx)("span",Object.assign({className:"ck-tt-logo"},{children:(0,m.jsx)(Td,{})}),t):e)):e)),$c=e=>{let t=e;return t=t.split("\n"),t=t.map(((e,r)=>(0,m.jsxs)(v.Fragment,{children:[Wc(e),r<t.length-1&&(0,m.jsx)("br",{})]},r))),t},Kc="{{ CONNECTORNAME }}",Gc="{{ CONNECTORSHORTNAME }}";var Zc={en:{warnings:{walletSwitchingUnsupported:"Your wallet does not support switching networks from this app.",walletSwitchingUnsupportedResolve:"Try switching networks from within your wallet instead.",chainUnsupported:"This app does not support the current connected network.",chainUnsupportedResolve:"Switch or disconnect to continue."},onboardingScreen:{heading:"Get a Wallet",h1:"Start Exploring Web3",p:"Your wallet is the gateway to all things Ethereum, the magical technology that makes it possible to explore web3.",ctaText:"Choose Your First Wallet",ctaUrl:"https://ethereum.org/en/wallets/find-wallet/#main-content"},aboutScreen:{heading:"About Wallets",a_h1:"For your digital assets",a_p:"Wallets let you send, receive, store, and interact with digital assets like NFTs and other Ethereum tokens.",b_h1:"A better way to login",b_p:"With modern apps, your wallet can be used as an easy way to login, instead of having to remember a password.",c_h1:"Explore the world of web3",c_p:"Your wallet is an essential utility that lets you explore and participate in the fast evolving world of web3.",ctaText:"Learn More",ctaUrl:"https://docs.ethhub.io/using-ethereum/wallets/intro-to-ethereum-wallets/"},connectorsScreen:{heading:"Connect Wallet",newcomer:"I don\u2019t have a wallet",h1:"What is a wallet?",p:"Wallets are used to send, receive, and store digital assets. Connecting a wallet lets you interact with apps."},mobileConnectorsScreen:{heading:"Choose Wallet"},scanScreen:{heading:"Scan with Phone",tooltip:{walletConnect:"Open a [WALLETCONNECTLOGO] WalletConnect \nsupported wallet to scan",default:`Open ${Kc} on \nyour mobile phone to scan`}},downloadAppScreen:{heading:`Get ${Kc}`,iosAndroid:"Scan with your phone camera to download on iOS or Android.",ios:"Scan with your phone camera to download on iOS.",android:"Scan with your phone camera to download Android."},injectionScreen:{unavailable:{h1:"Unsupported Browser",p:`To connect your ${Gc} wallet,\ninstall the extension on {{ SUGGESTEDEXTENSIONBROWSER }}.`},install:{h1:`Install ${Kc}`,p:`To connect your ${Gc} wallet,\ninstall the browser extension.`},connecting:{h1:"Requesting Connection",p:`Open the ${Gc} browser \nextension to connect your wallet.`,injected_h1:"Requesting Connection",injected_p:"Accept the request through your wallet to connect to this app."},expiring:{requestWillExpiryIn:"This request will expire in"},connected:{h1:"Already Connected",p:"It is now okay to close this popup"},rejected:{h1:"Request Cancelled",p:"You cancelled the request.\nClick above to try again."},failed:{h1:"Connection Failed",p:"Sorry, something went wrong.\nPlease try connecting again."},notconnected:{h1:`Login to ${Kc}`,p:`To continue, please login to your ${Kc} extension.`}},profileScreen:{heading:"Connected"},switchNetworkScreen:{heading:"Switch Networks"},signInWithEthereumScreen:{signedOut:{heading:"Sign In With Ethereum",h1:"This app would like to verify you \n as the owner of this wallet.",p:"Please sign the message request \n in your wallet to continue.",button:"Sign In"},signedIn:{heading:"Signed In With Ethereum",h1:"You successfully verified yourself \n as the owner of this wallet.",p:"Signing out will require you to \n authenticate again in the future.",button:"Sign Out"}}}};function Jc(e,t){const r=(0,v.useRef)({target:e,previous:t});return r.current.target!==e&&(r.current.previous=r.current.target,r.current.target=e),r.current.previous}const Xc=(0,v.createContext)(null),Yc=({children:e,theme:t="auto",mode:r="auto",customTheme:n})=>{const i={theme:t,mode:r,customTheme:n};return(0,v.createElement)(Xc.Provider,{value:i},(0,m.jsx)(m.Fragment,{children:e}))},Qc=()=>{const e=v.useContext(Xc);if(!e)throw Error("ConnectKitThemeProvider must be inside a Provider.");return e},el=e=>(ad(e,[]),(0,m.jsx)("svg",Object.assign({"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 2.82561C0 1.26507 1.26507 0 2.82561 0H4.59161C6.15215 0 7.41722 1.26507 7.41722 2.82561V4.59161C7.41722 6.15215 6.15215 7.41722 4.59161 7.41722H2.82561C1.26507 7.41722 0 6.15215 0 4.59161V2.82561ZM2.82561 1.69536C2.20139 1.69536 1.69536 2.20139 1.69536 2.82561V4.59161C1.69536 5.21583 2.20139 5.72185 2.82561 5.72185H4.59161C5.21583 5.72185 5.72185 5.21583 5.72185 4.59161V2.82561C5.72185 2.20139 5.21583 1.69536 4.59161 1.69536H2.82561ZM0 11.4084C0 9.84791 1.26507 8.58284 2.82561 8.58284H4.59161C6.15215 8.58284 7.41722 9.8479 7.41722 11.4084V13.1744C7.41722 14.735 6.15215 16.0001 4.59161 16.0001H2.82561C1.26507 16.0001 0 14.735 0 13.1744V11.4084ZM2.82561 10.2782C2.20139 10.2782 1.69536 10.7842 1.69536 11.4084V13.1744C1.69536 13.7987 2.20139 14.3047 2.82561 14.3047H4.59161C5.21583 14.3047 5.72185 13.7987 5.72185 13.1744V11.4084C5.72185 10.7842 5.21583 10.2782 4.59161 10.2782H2.82561ZM11.4083 0C9.84779 0 8.58272 1.26507 8.58272 2.82561V4.59161C8.58272 6.15215 9.84779 7.41722 11.4083 7.41722H13.1743C14.7349 7.41722 15.9999 6.15215 15.9999 4.59161V2.82561C15.9999 1.26507 14.7349 0 13.1743 0H11.4083ZM10.2781 2.82561C10.2781 2.20139 10.7841 1.69536 11.4083 1.69536H13.1743C13.7985 1.69536 14.3046 2.20139 14.3046 2.82561V4.59161C14.3046 5.21583 13.7985 5.72185 13.1743 5.72185H11.4083C10.7841 5.72185 10.2781 5.21583 10.2781 4.59161V2.82561ZM15.7351 9.96026C15.7351 10.7795 15.0709 11.4437 14.2516 11.4437C13.4323 11.4437 12.7682 10.7795 12.7682 9.96026C12.7682 9.14098 13.4323 8.47682 14.2516 8.47682C15.0709 8.47682 15.7351 9.14098 15.7351 9.96026ZM9.96026 11.4437C10.7795 11.4437 11.4437 10.7795 11.4437 9.96026C11.4437 9.14098 10.7795 8.47682 9.96026 8.47682C9.14098 8.47682 8.47682 9.14098 8.47682 9.96026C8.47682 10.7795 9.14098 11.4437 9.96026 11.4437ZM15.7351 14.2517C15.7351 15.071 15.0709 15.7352 14.2516 15.7352C13.4323 15.7352 12.7682 15.071 12.7682 14.2517C12.7682 13.4325 13.4323 12.7683 14.2516 12.7683C15.0709 12.7683 15.7351 13.4325 15.7351 14.2517ZM9.96026 15.7352C10.7795 15.7352 11.4437 15.071 11.4437 14.2517C11.4437 13.4325 10.7795 12.7683 9.96026 12.7683C9.14098 12.7683 8.47682 13.4325 8.47682 14.2517C8.47682 15.071 9.14098 15.7352 9.96026 15.7352Z",fill:"currentColor",fillOpacity:"0.3"})}))),tl=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0}},t,{children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.89543 4 2 4.89543 2 6V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V9.66667C12 9.11438 12.4477 8.66667 13 8.66667C13.5523 8.66667 14 9.11438 14 9.66667V12C14 14.2091 12.2091 16 10 16H4C1.79086 16 0 14.2091 0 12V6C0 3.79086 1.79086 2 4 2H6.33333C6.88562 2 7.33333 2.44772 7.33333 3C7.33333 3.55228 6.88562 4 6.33333 4H4Z",fill:"currentColor",fillOpacity:.3}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.5 1C9.5 0.447715 9.94772 0 10.5 0H15C15.5523 0 16 0.447715 16 1V5.5C16 6.05228 15.5523 6.5 15 6.5C14.4477 6.5 14 6.05228 14 5.5V3.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L12.5858 2H10.5C9.94772 2 9.5 1.55228 9.5 1Z",fill:"currentColor",fillOpacity:.3})]}))},rl=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.81753 1.60122C7.39283 0.530035 8.46953 0 9.50409 0C10.5507 0 11.6022 0.539558 12.1805 1.59767L18.6047 13.3334C18.882 13.8283 19 14.3568 19 14.8622C19 16.5296 17.7949 18 15.9149 18H3.08514C1.20508 18 0 16.5296 0 14.8622C0 14.3454 0.131445 13.8172 0.405555 13.3379L6.81753 1.60122ZM9.50409 2C9.13355 2 8.77256 2.18675 8.57866 2.54907L8.57458 2.5567L2.14992 14.3166L2.144 14.3268C2.04638 14.4959 2 14.6817 2 14.8622C2 15.5497 2.43032 16 3.08514 16H15.9149C16.5697 16 17 15.5497 17 14.8622C17 14.6681 16.9554 14.4805 16.8588 14.309L16.8529 14.2986L10.4259 2.55741C10.2191 2.1792 9.86395 2 9.50409 2Z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M9.5 11.2297C9.01639 11.2297 8.7459 10.9419 8.72951 10.4186L8.60656 6.4157C8.59016 5.88372 8.95902 5.5 9.4918 5.5C10.0164 5.5 10.4016 5.89244 10.3852 6.42442L10.2623 10.4099C10.2377 10.9419 9.96721 11.2297 9.5 11.2297ZM9.5 14.5C8.95082 14.5 8.5 14.0901 8.5 13.5058C8.5 12.9215 8.95082 12.5116 9.5 12.5116C10.0492 12.5116 10.5 12.9128 10.5 13.5058C10.5 14.0988 10.041 14.5 9.5 14.5Z",fill:"currentColor"})]}))},nl=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({"aria-hidden":"true",width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0}},t,{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H6C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12H4C2.89543 12 2 11.1046 2 10V4C2 2.89543 2.89543 2 4 2H6C6.55228 2 7 1.55228 7 1C7 0.447715 6.55228 0 6 0H4ZM11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90237 3.68342 9.90237 4.31658 10.2929 4.70711L11.5858 6H9.5H6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8H9.5H11.5858L10.2929 9.29289C9.90237 9.68342 9.90237 10.3166 10.2929 10.7071C10.6834 11.0976 11.3166 11.0976 11.7071 10.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289L11.7071 3.29289Z",fill:"currentColor",fillOpacity:"0.4"})}))},il=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({"aria-hidden":"true",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.274 7.13324C13.6237 6.70579 13.5607 6.07577 13.1332 5.72604C12.7058 5.37632 12.0758 5.43932 11.726 5.86676L7.92576 10.5115L6.20711 8.79289C5.81658 8.40237 5.18342 8.40237 4.79289 8.79289C4.40237 9.18342 4.40237 9.81658 4.79289 10.2071L7.29289 12.7071C7.49267 12.9069 7.76764 13.0128 8.04981 12.9988C8.33199 12.9847 8.59505 12.8519 8.77396 12.6332L13.274 7.13324Z",fill:"currentColor"})}))},ol=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z",fill:"currentColor"})}))},al=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[(0,m.jsx)("path",{d:"M14.5 2V6H10.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M14 5.66537L10.9899 2.75871C10.0931 1.83853 8.92897 1.24216 7.6729 1.05947C6.41683 0.876774 5.13688 1.11765 4.02592 1.7458C2.91497 2.37395 2.0332 3.35534 1.5135 4.54208C0.993792 5.72883 0.864305 7.05663 1.14455 8.3254C1.42479 9.59418 2.09958 10.7352 3.06724 11.5765C4.03489 12.4178 5.24298 12.9138 6.50946 12.9898C7.77594 13.0657 9.03219 12.7176 10.0889 11.9977C10.4765 11.7337 10.8295 11.4249 11.142 11.0792",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}))},sl=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[(0,m.jsx)("path",{d:"M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),(0,m.jsx)("rect",{x:"10",y:"10",width:"9",height:"9",rx:"2",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),(0,m.jsx)("path",{d:"M1 3L3 5L7 1",stroke:"var(--ck-body-color)",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]}))},ul=e=>{var t=ad(e,[]);return(0,m.jsx)("div",Object.assign({},t,{style:Object.assign({zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",bottom:0,right:0,background:"#34C759",borderRadius:10,boxShadow:"0 0 0 1.5px var(--background)",width:10,height:10},null==t?void 0:t.style)},{children:(0,m.jsx)("svg",Object.assign({"aria-hidden":"true",width:"6",height:"6",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)("path",{d:"M0.75 3L2.25 4.5L5.25 1.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}))},dl=({signedIn:e})=>(0,m.jsxs)("div",Object.assign({style:{position:"relative"}},{children:[e?(0,m.jsx)(ul,{style:{bottom:-1,right:-1}}):(0,m.jsx)("div",{style:{zIndex:2,position:"absolute",top:-2,right:-2,background:"#1A88F8",borderRadius:8,boxShadow:"0 0 0 2px var(--ck-body-background)",width:8,height:8}}),(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible"}},{children:[(0,m.jsx)("circle",{cx:"10",cy:"10",r:"9",stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("path",{d:"M16.5 16.775C14.8618 15.0649 12.5552 14 10 14C7.44477 14 5.13825 15.0649 3.5 16.775",stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("circle",{cx:"10",cy:"8",r:"3",stroke:"currentColor",strokeWidth:"2"})]}))]})),cl=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z",fill:"currentColor"})}))},ll=e=>{var t=ad(e,[]);return(0,m.jsxs)(Ua.svg,Object.assign({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[(0,m.jsx)("path",{d:"M1 13L13 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,m.jsx)("path",{d:"M1 0.999999L13 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}))},pl=e=>{var t=ad(e,[]);return(0,m.jsx)(Ua.svg,Object.assign({width:9,height:16,viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:(0,m.jsx)("path",{d:"M8 1L1 8L8 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))},fl={initial:{zIndex:2,opacity:0},animate:{opacity:1,scale:1,transition:{duration:.165,delay:.055,ease:[.26,.08,.25,1]}},exit:{zIndex:1,opacity:0,pointerEvents:"none",position:"absolute",left:["50%","50%"],x:["-50%","-50%"],transition:{duration:.22,ease:[.26,.08,.25,1]}}},hl=({open:e,pages:t,pageId:r,positionInside:n,inline:i,demo:a,onClose:s,onBack:u,onInfo:d})=>{var c,l,p,f,h,g;const y=ym(),b=Qc(),w=ic(),{signedIn:_}=um(),[A,E]=qu({timeout:160,preEnter:!0,mountOnEnter:!0,unmountOnExit:!0}),C=!("exited"===A||"unmounted"===A),x="preEnter"===A||"exiting"!==A,k=y.route===mm.CONNECTORS?0:y.route===mm.DOWNLOAD?2:1,S=Jc(k,k);n||Vc(C),Jc(r,r),(0,v.useEffect)((()=>{E(e),e&&I(void 0)}),[e]);const[O,D]=(0,v.useState)({width:void 0,height:void 0}),[B,I]=(0,v.useState)(void 0),M=e=>{const t={width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight};D({width:`${null==t?void 0:t.width}px`,height:`${null==t?void 0:t.height}px`})};let T;const F=(0,v.useCallback)((e=>{e&&(N.current=e,I(void 0!==B),clearTimeout(T),T=setTimeout((()=>I(!1)),360),M(e))}),[e,B]),{chain:j}=(0,o.useNetwork)(),{switchNetwork:P}=(0,o.useSwitchNetwork)(),N=(0,v.useRef)(null);(0,v.useEffect)((()=>{N.current&&M(N.current)}),[j,P,w]),(0,v.useEffect)((()=>{if(!C)return void D({width:void 0,height:void 0});const e=e=>{"Escape"===e.key&&s&&s()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[C,s]);const R={"--height":O.height,"--width":O.width},L=(0,m.jsx)(xd,Object.assign({$useTheme:null!==(c=null==a?void 0:a.theme)&&void 0!==c?c:b.theme,$useMode:null!==(l=null==a?void 0:a.mode)&&void 0!==l?l:b.mode,$customTheme:null!==(p=null==a?void 0:a.customTheme)&&void 0!==p?p:b.customTheme},{children:(0,m.jsxs)(Mc,Object.assign({role:"dialog",style:{pointerEvents:x?"auto":"none",position:n?"absolute":void 0}},{children:[!i&&(0,m.jsx)(Ac,{$active:x,onClick:s}),(0,m.jsxs)(Nc,Object.assign({style:R,initial:!1},{children:[(0,m.jsx)("div",{style:{pointerEvents:B?"all":"none",position:"absolute",top:0,bottom:0,left:"50%",transform:"translateX(-50%)",width:"var(--width)",zIndex:9,transition:"width 200ms ease"}}),(0,m.jsxs)(Sc,Object.assign({className:`${x&&"active"}`},{children:[(0,m.jsx)(Wa,Object.assign({initial:!1},{children:(null===(f=y.options)||void 0===f?void 0:f.disclaimer)&&y.route===mm.CONNECTORS&&(0,m.jsx)(Lc,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:0,duration:.2,ease:[.25,.1,.25,1]}},{children:(0,m.jsx)(Rc,{children:(0,m.jsx)("div",{children:null===(h=y.options)||void 0===h?void 0:h.disclaimer})})}))})),(0,m.jsx)(Wa,Object.assign({initial:!1},{children:y.errorMessage&&(0,m.jsxs)(uc,Object.assign({initial:{y:"10%",x:"-50%"},animate:{y:"-100%"},exit:{y:"100%"},transition:{duration:.2,ease:"easeInOut"}},{children:[(0,m.jsx)("span",{children:y.errorMessage}),(0,m.jsx)("div",Object.assign({onClick:()=>y.debug(null),style:{position:"absolute",right:24,top:24}},{children:(0,m.jsx)(ll,{})}))]}))})),(0,m.jsxs)(Oc,{children:[s&&(0,m.jsx)(Tc,Object.assign({"aria-label":"Close",onClick:s},{children:(0,m.jsx)(ll,{})})),(0,m.jsx)("div",Object.assign({style:{position:"absolute",top:23,left:20,width:32,height:32}},{children:(0,m.jsx)(Wa,{children:u?(0,m.jsx)(jc,Object.assign({disabled:B,"aria-label":"Back",onClick:u,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:w?0:.1,delay:w?.01:0}},{children:(0,m.jsx)(pl,{})}),"backButton"):y.route===mm.PROFILE&&y.signInWithEthereum?(0,m.jsxs)(m.Fragment,{children:[!_&&(0,m.jsx)(Ua.div,Object.assign({style:{position:"absolute",inset:0,pointerEvents:"none"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:.5,duration:.2}},exit:{opacity:0,scale:.6,transition:{delay:0,duration:w?0:.1}}},{children:(0,m.jsxs)(Uc,{children:["You\u2019re not signed in to this app.",(0,m.jsx)("br",{}),(0,m.jsx)("strong",{children:"Sign In With Ethereum"})," to continue."]})})),(0,m.jsx)(Fc,Object.assign({disabled:B,"aria-label":"Sign In With Ethereum",onClick:()=>y.setRoute(mm.SIGNINWITHETHEREUM),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:w?0:.1,delay:w?.01:0}},{children:(0,m.jsx)(dl,{signedIn:!!_})}),"siweButton")]}):d&&!(null===(g=y.options)||void 0===g?void 0:g.hideQuestionMarkCTA)&&(0,m.jsx)(Pc,Object.assign({disabled:B,"aria-label":"More information",onClick:d,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:w?0:.1,delay:w?.01:0}},{children:(0,m.jsx)(cl,{})}),"infoButton")})}))]}),(0,m.jsx)(gc,{children:(0,m.jsx)(Wa,{children:(0,m.jsx)(Ua.div,Object.assign({style:{position:"absolute",top:0,bottom:0,left:62,right:62,display:"flex",alignItems:"center",justifyContent:"center"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:w?0:.17,delay:w?.01:0}},{children:(0,m.jsx)("div",{children:function(){const e=Jd.filter((e=>e.id===y.connector))[0];switch(y.route){case mm.ABOUT:return Hc(Zc[y.lang].aboutScreen.heading);case mm.CONNECT:return function(){const e=Jd.filter((e=>e.id===y.connector))[0];if(!e)return!1;const t=e.extensionIsInstalled&&e.extensionIsInstalled();return!(!e.scannable||t)}()?"walletConnect"===e.id?Hc(Zc[y.lang].scanScreen.heading):(0,m.jsxs)(m.Fragment,{children:["Scan with ",(0,m.jsx)("span",{children:e.name})]}):e.name;case mm.CONNECTORS:return Hc(Zc[y.lang].connectorsScreen.heading);case mm.MOBILECONNECTORS:return Hc(Zc[y.lang].mobileConnectorsScreen.heading);case mm.DOWNLOAD:return Hc(Zc[y.lang].downloadAppScreen.heading,{CONNECTORNAME:e.name});case mm.ONBOARDING:return Hc(Zc[y.lang].onboardingScreen.heading);case mm.PROFILE:return Hc(Zc[y.lang].profileScreen.heading);case mm.SWITCHNETWORKS:return Hc(Zc[y.lang].switchNetworkScreen.heading);case mm.SIGNINWITHETHEREUM:return Hc(_?Zc[y.lang].signInWithEthereumScreen.signedIn.heading:Zc[y.lang].signInWithEthereumScreen.signedOut.heading);default:return""}}()})}),`${y.route}-${_?"signedIn":""}`)})}),(0,m.jsx)(Dc,{children:Object.keys(t).map((e=>{const i=t[e];return(0,m.jsx)(ml,Object.assign({open:e===r,initial:!n&&"entered"!==A,enterAnim:e===r?k>S?"active-scale-up":"active":"",exitAnim:e!==r?k<S?"exit-scale-down":"exit":""},{children:(0,m.jsx)(Ic,Object.assign({ref:F,style:{pointerEvents:e===r&&x?"auto":"none"}},{children:i}),`inner-${e}`)}),e)}))})]}))]}))]}))}));return(0,m.jsx)(m.Fragment,{children:C&&(0,m.jsx)(m.Fragment,{children:n?L:(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(kd,{children:(0,m.jsx)(qc,{children:L})})})})})},ml=({children:e,open:t,initial:r,prevDepth:n,currentDepth:i,enterAnim:o,exitAnim:a})=>{const[s,u]=qu({timeout:400,preEnter:!0,initialEntered:t,mountOnEnter:!0,unmountOnExit:!0}),d=!("exited"===s||"unmounted"===s),c="preEnter"===s||"exiting"!==s;return(0,v.useEffect)((()=>{u(t)}),[t]),d?(0,m.jsx)(Bc,Object.assign({className:`${c?o:a}`,style:{animationDuration:r?"0ms":void 0,animationDelay:r?"0ms":void 0}},{children:e})):null},vl=({children:e})=>(0,m.jsx)(vc,{children:(0,m.jsx)("span",{children:null!=e?e:"or"})}),gl=xu(Ua.div)`
  position: relative;
  margin: 16px auto 20px;
  height: 190px;
  max-width: 295px;
  pointer-events: none;
  user-select: none;
  @media only screen and (max-width: ${sc}px) {
    height: 200px;
    max-width: 100%;
    margin-bottom: 32px;
  }
`,yl=xu(Ua.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
`,bl=Cu`
  0%{
    opacity:0;
    transform:scale(0.9);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,wl=xu(Ua.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  top: -2px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--ck-body-background);
    background: radial-gradient(
      closest-side,
      var(--ck-body-background-transparent, transparent) 18.75%,
      var(--ck-body-background) 100%
    );
    background-size: 100%;
  }
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  animation: ${bl} 1000ms 100ms ease both;
  @media only screen and (max-width: ${sc}px) {
    animation: none;
  }
`,_l=Cu`
  0%{
    opacity:0;
    transform:scale(0) translateY(40%);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,Al=xu(Ua.div)`
  position: absolute;
  inset: 0;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-delay: inherit;
`,El=xu(Ua.div)`
  position: absolute;
`,Cl=xu(Ua.div)`
  position: relative;
  overflow: hidden;
  height: 58px;
  width: 58px;
  border-radius: 13.84px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 20px 0 rgba(0, 0, 0, 0.03);

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,xl=Cu`
  0%,100%{ transform:none; }
  50%{ transform: translateY(-10%) }
`,kl=xu(Ua.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${xl};
  animation-duration: 3600ms;
`,Sl=Cu`
  0%,100%{ transform:rotate(-3deg); }
  50%{ transform:rotate(3deg); }
`,Ol=xu(Ua.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${Sl};
  animation-duration: 3200ms;
`,Dl=xu(Ua.div)`
  position:absolute;
  inset:0;

  animation: ${_l} 750ms cubic-bezier(0.19, 1, 0.22, 1) both;
  &:nth-child(1){ z-index:2; animation-delay:0ms;  }
  &:nth-child(2){ z-index:1; animation-delay:60ms; }
  &:nth-child(3){ z-index:1; animation-delay:30ms; }
  &:nth-child(4){ z-index:1; animation-delay:90ms; }
  &:nth-child(5){ z-index:1; animation-delay:120ms;}

  &:nth-child(1){ ${Ol}{ animation-delay:0ms; } }
  &:nth-child(2){ ${Ol}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${Ol}{ animation-delay:-1200ms; } }
  &:nth-child(4){ ${Ol}{ animation-delay:-1800ms; } }
  &:nth-child(5){ ${Ol}{ animation-delay:-2400ms; } }

  &:nth-child(1){ ${kl}{ animation-delay:-200ms; } }
  &:nth-child(2){ ${kl}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${kl}{ animation-delay:-800ms; } }
  &:nth-child(4){ ${kl}{ animation-delay:-300ms; } }
  &:nth-child(5){ ${kl}{ animation-delay:-3200ms; } }

  @media only screen and (max-width: ${sc}px) {
    animation:none !important;
    ${Ol},${kl}{
      animation:none !important;
    }
  }
  

  ${El}{
    transform: translate(-50%, -50%);
  }

  &:nth-child(1) ${Al}{
    transform: translate(50%, 50%);
    ${Cl}{
      border-radius: 17.2px;
      width: 72px;
      height: 72px;
    }
  }
  &:nth-child(2) ${Al}{
    transform: translate(21%, 21.5%);
  }
  &:nth-child(3) ${Al}{
    transform: translate(78%, 14%);
  }
  &:nth-child(4) ${Al}{
    transform: translate(22.5%, 76%);
  }
  &:nth-child(5) ${Al}{
    transform: translate(76%, 80%);
  }
}`;var Bl=(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"298",height:"188",viewBox:"0 0 298 188",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M1 55.2757L21.6438 46.0285C55.5896 30.8228 94.4104 30.8228 128.356 46.0286L169.644 64.5229C203.59 79.7287 242.41 79.7286 276.356 64.5229L297 55.2757M1 44.2118L21.6438 34.9646C55.5896 19.7589 94.4104 19.7589 128.356 34.9646L169.644 53.459C203.59 68.6647 242.41 68.6647 276.356 53.459L297 44.2118M1 33.1477L21.6438 23.9005C55.5896 8.69479 94.4104 8.69479 128.356 23.9005L169.644 42.3949C203.59 57.6006 242.41 57.6006 276.356 42.3949L297 33.1477M1 22.1477L21.6438 12.9005C55.5896 -2.30521 94.4104 -2.30521 128.356 12.9005L169.644 31.3949C203.59 46.6006 242.41 46.6006 276.356 31.3949L297 22.1477M1 66.3398L21.6438 57.0926C55.5896 41.8869 94.4104 41.8869 128.356 57.0926L169.644 75.587C203.59 90.7927 242.41 90.7927 276.356 75.587L297 66.3398M1 77.404L21.6438 68.1568C55.5896 52.9511 94.4104 52.9511 128.356 68.1569L169.644 86.6512C203.59 101.857 242.41 101.857 276.356 86.6512L297 77.404M1 88.4681L21.6438 79.2209C55.5896 64.0152 94.4104 64.0152 128.356 79.2209L169.644 97.7153C203.59 112.921 242.41 112.921 276.356 97.7153L297 88.4681M1 121.66L21.6438 112.413C55.5896 97.2075 94.4104 97.2075 128.356 112.413L169.644 130.908C203.59 146.113 242.41 146.113 276.356 130.908L297 121.66M1 110.596L21.6438 101.349C55.5896 86.1433 94.4104 86.1433 128.356 101.349L169.644 119.843C203.59 135.049 242.41 135.049 276.356 119.843L297 110.596M1 99.5321L21.6438 90.2849C55.5896 75.0792 94.4104 75.0792 128.356 90.2849L169.644 108.779C203.59 123.985 242.41 123.985 276.356 108.779L297 99.5321M1 132.724L21.6438 123.477C55.5896 108.271 94.4104 108.271 128.356 123.477L169.644 141.971C203.59 157.177 242.41 157.177 276.356 141.971L297 132.724M1 143.788L21.6438 134.541C55.5896 119.336 94.4104 119.336 128.356 134.541L169.644 153.036C203.59 168.241 242.41 168.241 276.356 153.036L297 143.788M1 154.853L21.6438 145.605C55.5896 130.4 94.4104 130.4 128.356 145.605L169.644 164.1C203.59 179.305 242.41 179.305 276.356 164.1L297 154.853M1 165.853L21.6438 156.605C55.5896 141.4 94.4104 141.4 128.356 156.605L169.644 175.1C203.59 190.305 242.41 190.305 276.356 175.1L297 165.853",stroke:"url(#paint0_linear_1094_2077)",strokeOpacity:"0.9",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_1094_2077",x1:"1",y1:"112.587",x2:"297.034",y2:"79.6111",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-01)"}),(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-02)",offset:"0.239583"}),(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-03)",offset:"0.515625"}),(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-04)",offset:"0.739583"}),(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-05)",offset:"1"})]}))})]}));const Il=Cu`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,Ml=xu(Ua.div)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Il} 1s linear infinite;
  svg {
    display: block;
    position: relative;
    animation: ${Il} 1s ease-in-out infinite;
  }
`,Tl=xu.svg`
  --x: -3px;
  --stroke-width: 2;
  position: relative;
  top: 1px;
  left: -0.5px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 9px;
  margin-right: 1px;
  transition: all 100ms ease;
  transform: translateX(var(--x, -3px));
  color: var(--ck-secondary-button-color, var(--ck-body-color));
  opacity: 0.4;
`,Fl=xu.path``,jl=xu.line`
  transition: inherit;
  transition-property: transform;
  transform-origin: 90% 50%;
  transform: scaleX(0.1);
`,Pl=xu.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 6px;
  color: var(--ck-secondary-button-color, var(--ck-body-color));
`,Nl=xu.div`
  transform: rotate(90deg);
  ${Tl} {
    margin: 0 auto;
  }
`,Rl=xu.button`

  ${({disabled:e})=>e&&uu`
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${({$variant:e})=>"primary"===e?uu`
        --color: var(--ck-primary-button-color, var(--ck-body-color));
        --background: var(
          --ck-primary-button-background,
          var(--ck-body-background-primary)
        );
        --box-shadow: var(--ck-primary-button-box-shadow);
        --border-radius: var(--ck-primary-button-border-radius);
        --font-weight: var(--ck-primary-button-font-weight, 500);

        --hover-color: var(--ck-button-primary-hover-color, var(--color));
        --hover-background: var(
          --ck-primary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-primary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-primary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-primary-button-font-weight,
          var(--font-weight)
        );
      `:"secondary"===e?uu`
        --color: var(--ck-secondary-button-color, var(--ck-body-color));
        --background: var(
          --ck-secondary-button-background,
          var(--ck-body-background-secondary)
        );
        --box-shadow: var(--ck-secondary-button-box-shadow);
        --border-radius: var(--ck-secondary-button-border-radius);
        --font-weight: var(--ck-secondary-button-font-weight, 500);

        --hover-color: var(--ck-secondary-button-hover-color, var(--color));
        --hover-background: var(
          --ck-secondary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-secondary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-secondary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-secondary-button-font-weight,
          var(--font-weight)
        );
      `:"tertiary"===e?uu`
        --color: var(
          --ck-tertiary-button-color,
          var(--ck-secondary-button-color)
        );
        --background: var(
          --ck-tertiary-button-background,
          var(--ck-secondary-button-background)
        );
        --box-shadow: var(
          --ck-tertiary-button-box-shadow,
          var(--ck-secondary-button-box-shadow)
        );
        --border-radius: var(
          --ck-tertiary-button-border-radius,
          var(--ck-secondary-button-border-radius)
        );
        --font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );

        --hover-color: var(
          --button-tertiary-hover-color,
          var(--ck-tertiary-button-color)
        );
        --hover-background: var(
          --ck-tertiary-button-hover-background,
          var(--ck-tertiary-button-background)
        );
        --hover-box-shadow: var(
          --ck-tertiary-button-hover-box-shadow,
          var(--ck-tertiary-button-box-shadow)
        );
        --hover-border-radius: var(
          --ck-tertiary-button-hover-border-radius,
          var(--ck-tertiary-button-border-radius, var(--border-radius))
        );
        --hover-font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );
      `:void 0}

  appearance: none;
  cursor: pointer;
  user-select: none;
  min-width: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 48px;
  margin: 12px 0 0;
  line-height: 48px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: var(--font-weight,500);
  text-decoration: none;
  white-space: nowrap;
  transition: 100ms ease;
  transition-property: box-shadow, background-color;
  color: var(--color);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  will-change: transform, box-shadow, background-color, color;

  ${Pl} {
    ${Tl} {
      transform: translateX(0);
      ${jl} {
        transform: none;
      }
      ${Fl} {
      }
    }
  }
}

  @media only screen and (min-width: ${561}px) {
    &:hover,
    &:focus-visible {
      color: var(--ck-accent-text-color, var(--hover-color));
      background: var(--ck-accent-color, var(--hover-background));
      border-radius: var(--hover-border-radius);
      box-shadow: var(--hover-box-shadow);

      ${Tl} {
        transform: translateX(0);
        ${jl} {
          transform: none;
        }
        ${Fl} {
        }
      }
      ${Pl} {
        ${Tl} {
          transform: translateX(var(--x));
          ${jl} {
            transform: scaleX(0.1);
          }
          ${Fl} {
          }
        }
      }
    }
    &:active {
      box-shadow: var(--ck-secondary-button-active-box-shadow, var(--hover-box-shadow));
    }
  }
  @media only screen and (max-width: ${sc}px) {
    transition: transform 100ms ease;
    transform: scale(1);
    font-size: 17px;
    &:active {
    }
  }
`,Ll=xu.span`
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
`,Ul=xu(Ua.div)`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 20px;
  max-height: 20px;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${e=>e.$rounded&&uu`
        overflow: hidden;
        border-radius: 5px;
      `}
  svg {
    display: block;
    position: relative;
    max-width: 100%;
    height: auto;
  }
`,zl={duration:.4,ease:[.175,.885,.32,.98]},Vl=()=>(0,m.jsx)(Ml,Object.assign({initial:{opacity:0,rotate:180},animate:{opacity:1,rotate:0},exit:{position:"absolute",opacity:0,rotate:-180,transition:Object.assign({},zl)},transition:Object.assign(Object.assign({},zl),{delay:.2})},{children:(0,m.jsxs)("svg",Object.assign({width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("circle",{cx:"9",cy:"9",r:"7",stroke:"currentColor",strokeOpacity:"0.1",strokeWidth:"2.5"}),(0,m.jsx)("path",{d:"M16 9C16 5.13401 12.866 2 9 2",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]}))})),ql=({children:e,variant:t="secondary",disabled:r,icon:n,iconPosition:i="left",roundedIcon:o,waiting:a,arrow:s,download:u,href:d,style:c,onClick:l})=>(0,m.jsx)(Rl,Object.assign({as:d?"a":void 0,onClick:e=>{!r&&l&&l(e)},href:d,target:d&&"_blank",rel:d&&"noopener noreferrer",disabled:r,$variant:t,style:c},{children:(0,m.jsxs)(Wa,Object.assign({initial:!1},{children:[(0,m.jsxs)(Ua.div,Object.assign({initial:{opacity:0,y:-10},animate:{opacity:1,y:-1},exit:{position:"absolute",opacity:0,y:10,transition:Object.assign({},zl)},transition:Object.assign(Object.assign({},zl),{delay:.2})},{children:[n&&"left"===i&&(0,m.jsx)(Ul,Object.assign({$rounded:o},{children:n})),u&&(0,m.jsx)(Pl,{children:(0,m.jsx)(Nl,{children:(0,m.jsxs)(Tl,Object.assign({width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)(jl,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"}),(0,m.jsx)(Fl,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"})]}))})}),(0,m.jsx)(Ll,{children:e}),n&&"right"===i&&(0,m.jsx)(Ul,Object.assign({$rounded:o},{children:n})),s&&(0,m.jsxs)(Tl,Object.assign({width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)(jl,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"2",strokeLinecap:"round"}),(0,m.jsx)(Fl,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"2",strokeLinecap:"round"})]}))]}),"string"==typeof e?e:"content"),a&&(0,m.jsx)(Vl,{})]}))})),Hl=()=>{const e=e=>Hc(e,{}),t=ym(),r=Zc[t.lang].onboardingScreen;return(0,m.jsxs)(mc,{children:[(0,m.jsxs)(gl,{children:[(0,m.jsxs)(yl,{children:[(0,m.jsx)(Dl,{children:(0,m.jsx)(Al,{children:(0,m.jsx)(El,{children:(0,m.jsx)(kl,{children:(0,m.jsx)(Ol,{children:(0,m.jsx)(Cl,{children:(0,m.jsx)(jd,{background:!0})})})})})})}),(0,m.jsx)(Dl,{children:(0,m.jsx)(Al,{children:(0,m.jsx)(El,{children:(0,m.jsx)(kl,{children:(0,m.jsx)(Ol,{children:(0,m.jsx)(Cl,{children:(0,m.jsx)(Fd,{background:!0})})})})})})}),(0,m.jsx)(Dl,{children:(0,m.jsx)(Al,{children:(0,m.jsx)(El,{children:(0,m.jsx)(kl,{children:(0,m.jsx)(Ol,{children:(0,m.jsx)(Cl,{children:(0,m.jsx)(Pd,{})})})})})})}),(0,m.jsx)(Dl,{children:(0,m.jsx)(Al,{children:(0,m.jsx)(El,{children:(0,m.jsx)(kl,{children:(0,m.jsx)(Ol,{children:(0,m.jsx)(Cl,{children:(0,m.jsx)(Nd,{})})})})})})}),(0,m.jsx)(Dl,{children:(0,m.jsx)(Al,{children:(0,m.jsx)(El,{children:(0,m.jsx)(kl,{children:(0,m.jsx)(Ol,{children:(0,m.jsx)(Cl,{children:(0,m.jsx)(Rd,{})})})})})})})]}),(0,m.jsx)(wl,{children:Bl})]}),(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:18}},{children:[(0,m.jsx)(wc,Object.assign({$small:!0},{children:e(r.h1)})),(0,m.jsx)(_c,{children:e(r.p)})]})),(0,m.jsx)(ql,Object.assign({href:r.ctaUrl,arrow:!0},{children:e(r.ctaText)}))]})},Wl=xu.div`
  point-events: none;
  user-select: none;
  height: ${208}px;
  padding: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${sc}px) {
    display: none;
  }
`,$l=xu(Ua.div)``,Kl=xu.div`
  point-events: none;
  user-select: none;
  height: ${208}px;
  padding: 0 0 12px;
  display: none;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${sc}px) {
    display: flex;
  }
`;xu.div`
  /*
  position: relative;
  z-index: 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 138px;
  margin: -48px 0 0;
  */
`;const Gl=xu.div`
  position: relative;
`,Zl=xu(Ua.div)`
  scroll-snap-type: x mandatory;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 4px 8px;
  /* will-change: transform, opacity; */
  transition: 400ms 50ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-property: transform, opacity;
  ${e=>!e.$active&&uu`
      pointer-events: none;
      position: absolute;
      opacity: 0;
      transform: scale(0.95);
      transition-duration: 300ms;
      transition-delay: 0ms;
    `}
`,Jl=xu.div`
  --background: var(--ck-body-background-secondary);
  --background-transparent: var(--ck-body-background-transparent, transparent);
  position: relative;
  padding: 0 0 4px;
  border-radius: 16px;
  @media only screen and (max-width: ${sc}px) {
    margin: 0 -24px;
    ${Gl} {
      position: relative;
      z-index: 3;
      display: flex;
      overflow: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      margin-top: -${208}px;
      padding-top: ${208}px;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    }
    ${Zl} {
      position: relative;
      opacity: 1;
      transform: none;
      flex-shrink: 0;
      scroll-snap-align: start;
    }
  }
`,Xl=xu.div`
  position: relative;
  top: -1px;
  display: flex;
  justify-content: center;
  pointer-events: auto;
`,Yl=xu.button`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 2px;
  background: none;
  @media only screen and (max-width: ${sc}px) {
    padding: 4px;
    &:before {
      transform: none !important;
    }
  }
  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 3px;
    opacity: 0.12;
    border-radius: 4px;
    background: var(--ck-accent-color, var(--ck-body-color));
    transition: transform 200ms ease, opacity 180ms ease;
  }
  ${e=>e.$active?uu`
          cursor: default;
          &:before {
            opacity: 1;
          }
        `:!e.disabled&&uu`
          cursor: pointer;
          &:hover:before {
            transform: scaleY(3.5);
          }
          &:active:before {
          }
        `}
`,Ql={scale:[.9,1.25,1.6],opacity:[0,.11,0]},ep={ease:"linear",duration:2,repeat:1/0},tp=xu.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`,rp=Cu`
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
`,np=xu(Ua.div)`
  z-index: -1;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 100%;
  animation: ${rp} 16s linear infinite;
`,ip=xu(Ua.div)`
  overflow: hidden;
  border-radius: inherit;
  z-index: 0;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
`,op=xu(Ua.div)`
  z-index: 2;
  position: relative;
  border-radius: 50%;
  background: var(--ck-body-background);
`,ap=xu(Ua.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,sp=(0,m.jsxs)("svg",Object.assign({width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"var(--ck-graphic-compass-color, var(--ck-body-color))"}),(0,m.jsx)("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"url(#ck-compass-gradient)"}),(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",Object.assign({id:"ck-compass-gradient",x1:"17",y1:"0",x2:"17",y2:"34",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"rgba(0,0,0,0)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"rgba(0,0,0,0.05)"})]}))})]})),up=({inverted:e=!1})=>(0,m.jsxs)("svg",Object.assign({width:"58",height:"50",viewBox:"0 0 58 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.9332 20.3335V42.1113C57.9332 46.4069 54.451 49.8891 50.1555 49.8891H8.15546C3.85991 49.8891 0.377686 46.4069 0.377686 42.1113V25.0002V7.8891C0.377686 3.59355 3.85991 0.111328 8.15546 0.111328H47.0444C48.7626 0.111328 50.1555 1.50422 50.1555 3.22244C50.1555 4.94066 48.7626 6.33355 47.0443 6.33355H9.71102C7.9928 6.33355 6.59991 7.72644 6.59991 9.44466C6.59991 11.1629 7.9928 12.5558 9.71102 12.5558H50.1555C54.451 12.5558 57.9332 16.038 57.9332 20.3335ZM46.2667 34.3337C48.4145 34.3337 50.1556 32.5926 50.1556 30.4448C50.1556 28.297 48.4145 26.5559 46.2667 26.5559C44.1189 26.5559 42.3778 28.297 42.3778 30.4448C42.3778 32.5926 44.1189 34.3337 46.2667 34.3337Z",fill:e?"var(--ck-graphic-primary-color, var(--ck-body-background))":"var(--ck-graphic-primary-color, var(--ck-body-color))"}),(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_2501_7732",x1:"29.1555",y1:"0.111328",x2:"29.1555",y2:"49.8891",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:e?"var(--ck-body-color-muted)":"var(--ck-body-background-transparent, transparent)"}),(0,m.jsx)("stop",{offset:"1",stopColor:e?"var(--ck-body-color)":"var(--ck-body-background)"})]}))})]})),dp=(0,m.jsx)("svg",Object.assign({width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)("path",{d:"M35.4446 0.839914L2.14484 10.7065C0.0395033 11.3303 -0.632966 13.9786 0.919705 15.5313L7.9624 22.574C9.47585 24.0874 11.8661 24.273 13.5951 23.0114L25.2866 14.4797C25.5558 14.2832 25.9281 14.3121 26.1638 14.5478C26.3998 14.7838 26.4285 15.1567 26.2313 15.426L17.6874 27.0937C16.4213 28.8228 16.6052 31.2168 18.1206 32.7322L25.1811 39.7926C26.7337 41.3453 29.382 40.6728 30.0058 38.5675L39.8724 5.2677C40.6753 2.55794 38.1544 0.037024 35.4446 0.839914Z",fill:"var(--ck-graphic-secondary-color, white)"})})),cp=(0,m.jsx)("svg",Object.assign({width:"38",height:"44",viewBox:"0 0 38 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 0.875C21.4853 0.875 23.5 2.88972 23.5 5.375V27.761L30.068 21.193C31.8254 19.4357 34.6746 19.4357 36.432 21.193C38.1893 22.9504 38.1893 25.7996 36.432 27.557L22.182 41.807C20.4246 43.5643 17.5754 43.5643 15.818 41.807L1.56802 27.557C-0.18934 25.7996 -0.18934 22.9504 1.56802 21.193C3.32538 19.4357 6.17462 19.4357 7.93198 21.193L14.5 27.761V5.375C14.5 2.88972 16.5147 0.875 19 0.875Z",fill:"var(--ck-graphic-secondary-color, white)"})})),lp="var(--ck-body-background)";(0,m.jsxs)("svg",Object.assign({width:"14",height:"23",viewBox:"0 0 14 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M6.99794 0.59082L6.85156 1.08803V15.5145L6.99794 15.6606L13.6944 11.7022L6.99794 0.59082Z",fill:lp}),(0,m.jsx)("path",{d:"M6.99794 0.59082L0.30127 11.7022L6.99794 15.6606V8.65835V0.59082Z",fill:lp}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.99779 22.4082L6.99794 22.4084V22.408L13.6982 12.9717L6.9978 16.9279L0.30127 12.9717L6.99733 22.4075L6.99763 22.4084L6.99779 22.4082Z",fill:lp}),(0,m.jsx)("path",{d:"M6.99805 15.6614L13.6945 11.7031L6.99805 8.65918V15.6614Z",fill:lp}),(0,m.jsx)("path",{d:"M0.30127 11.7031L6.99794 15.6614V8.65918L0.30127 11.7031Z",fill:lp})]}));const pp=e=>{var t,r=ad(e,[]);const n=null!==(t=null==r?void 0:r.id)&&void 0!==t?t:"";return(0,m.jsxs)("svg",Object.assign({},r,{width:"81",height:"81",viewBox:"0 0 81 81",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${n}paint0_linear_2509_6177)`}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${n}paint1_radial_2509_6177)`,fillOpacity:"0.2"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.5658 51.2522C45.1527 50.6653 46.0151 50.4492 46.8095 50.6899C49.0823 51.3788 51.4958 51.75 54 51.75C67.6691 51.75 78.75 40.669 78.75 27C78.75 13.331 67.6691 2.25 54 2.25C40.331 2.25 29.25 13.331 29.25 27C29.25 29.5042 29.6212 31.9177 30.3101 34.1905C30.5508 34.9849 30.3347 35.8473 29.7478 36.4342L2.90901 63.273C2.48705 63.6949 2.25 64.2672 2.25 64.864V76.5C2.25 77.7426 3.25736 78.75 4.5 78.75H15.75V72C15.75 70.7574 16.7574 69.75 18 69.75H24.75V63C24.75 61.7574 25.7574 60.75 27 60.75H35.068L44.5658 51.2522ZM36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63ZM68.625 20.25C68.625 24.5992 65.0992 28.125 60.75 28.125C56.4008 28.125 52.875 24.5992 52.875 20.25C52.875 15.9008 56.4008 12.375 60.75 12.375C65.0992 12.375 68.625 15.9008 68.625 20.25ZM66.375 20.25C66.375 23.3566 63.8566 25.875 60.75 25.875C57.6434 25.875 55.125 23.3566 55.125 20.25C55.125 17.1434 57.6434 14.625 60.75 14.625C63.8566 14.625 66.375 17.1434 66.375 20.25Z",fill:"black",fillOpacity:"0.1"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.4205 47.5795C33.8598 48.0188 33.8598 48.7312 33.4205 49.1705L3.0455 79.5455C2.60616 79.9848 1.89384 79.9848 1.4545 79.5455C1.01517 79.1062 1.01517 78.3938 1.4545 77.9545L31.8295 47.5795C32.2688 47.1402 32.9812 47.1402 33.4205 47.5795Z",fill:"#A5A9AD"}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:`${n}paint0_linear_2509_6177`,x1:"72",y1:"5.625",x2:"2.25",y2:"78.75",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#D4DFE6"}),(0,m.jsx)("stop",{offset:"0.0967282",stopColor:"#C6CACD"}),(0,m.jsx)("stop",{offset:"0.526645",stopColor:"#BDBAC4"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#939CA1"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:`${n}paint1_radial_2509_6177`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(52.875 12.375) rotate(93.2705) scale(39.4392)"},{children:[(0,m.jsx)("stop",{stopColor:"white"}),(0,m.jsx)("stop",{offset:"1",stopColor:"white"})]}))]})]}))},fp=(0,m.jsxs)("svg",Object.assign({width:"131",height:"14",viewBox:"0 0 131 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M5.74805 13.2549C8.86816 13.2549 10.7227 10.6973 10.7227 6.63672C10.7227 2.57617 8.85059 0.0625 5.74805 0.0625C2.63672 0.0625 0.755859 2.59375 0.755859 6.64551C0.755859 10.7148 2.61914 13.2549 5.74805 13.2549ZM5.74805 11.4004C4.02539 11.4004 3.04102 9.64258 3.04102 6.63672C3.04102 3.68359 4.04297 1.91699 5.74805 1.91699C7.44434 1.91699 8.4375 3.6748 8.4375 6.64551C8.4375 9.65137 7.46191 11.4004 5.74805 11.4004Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M13.0869 13.1758C13.4561 13.1758 13.6934 13.0439 13.9658 12.6221L15.9697 9.66016H16.0137L18.0264 12.6572C18.2549 13.0088 18.4922 13.1758 18.8965 13.1758C19.4854 13.1758 19.9424 12.7891 19.9424 12.209C19.9424 11.9805 19.8633 11.7695 19.7051 11.541L17.376 8.28906L19.6963 5.16016C19.8896 4.90527 19.9688 4.68555 19.9688 4.43066C19.9688 3.88574 19.5381 3.49902 18.9229 3.49902C18.5361 3.49902 18.2988 3.6748 18.0176 4.10547L16.1191 6.95312H16.0752L14.1328 4.08789C13.8516 3.64844 13.6318 3.49902 13.2012 3.49902C12.6035 3.49902 12.1465 3.91211 12.1465 4.44824C12.1465 4.70312 12.2256 4.92285 12.3838 5.13379L14.7129 8.35059L12.3486 11.5498C12.1641 11.8135 12.0762 12.0156 12.0762 12.2705C12.0762 12.7979 12.498 13.1758 13.0869 13.1758Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M26.2441 13.2549C29.1445 13.2549 31.1924 11.7432 31.1924 9.57227C31.1924 7.9375 30.0146 6.68066 28.3184 6.3291V6.27637C29.7773 5.87207 30.7178 4.7998 30.7178 3.45508C30.7178 1.48633 28.8633 0.0625 26.2441 0.0625C23.625 0.0625 21.7617 1.49512 21.7617 3.44629C21.7617 4.80859 22.7109 5.88965 24.1699 6.27637V6.3291C22.4736 6.67188 21.3047 7.92871 21.3047 9.57227C21.3047 11.7344 23.335 13.2549 26.2441 13.2549ZM26.2441 5.55566C24.9258 5.55566 24.0029 4.78223 24.0029 3.6748C24.0029 2.55859 24.9258 1.77637 26.2441 1.77637C27.5537 1.77637 28.4854 2.5498 28.4854 3.6748C28.4854 4.78223 27.5537 5.55566 26.2441 5.55566ZM26.2441 11.5234C24.7236 11.5234 23.6514 10.6357 23.6514 9.40527C23.6514 8.1748 24.7236 7.28711 26.2441 7.28711C27.7646 7.28711 28.8369 8.16602 28.8369 9.40527C28.8369 10.6357 27.7646 11.5234 26.2441 11.5234Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M36.3164 13.1494C37.7578 13.1494 38.7598 12.4199 39.208 11.3477H39.252V12.0771C39.252 12.7891 39.7266 13.1758 40.3594 13.1758C40.9922 13.1758 41.4404 12.7803 41.4404 12.0771V1.29297C41.4404 0.554688 40.9834 0.141602 40.3418 0.141602C39.7002 0.141602 39.252 0.554688 39.252 1.29297V5.24805H39.1992C38.707 4.21973 37.6523 3.52539 36.3164 3.52539C33.9697 3.52539 32.4492 5.38867 32.4492 8.33301C32.4492 11.2949 33.9697 13.1494 36.3164 13.1494ZM36.9756 11.3564C35.5605 11.3564 34.6904 10.1963 34.6904 8.3418C34.6904 6.49609 35.5693 5.32715 36.9756 5.32715C38.3555 5.32715 39.2607 6.51367 39.2607 8.3418C39.2607 10.1875 38.3555 11.3564 36.9756 11.3564Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M44.0508 13.1494C44.6396 13.1494 44.9736 12.8594 45.1846 12.1738L46.0195 9.76562H50.7568L51.5918 12.1914C51.7939 12.8682 52.1367 13.1494 52.752 13.1494C53.4111 13.1494 53.8857 12.7188 53.8857 12.1035C53.8857 11.9014 53.8418 11.6992 53.7363 11.4092L50.0449 1.38965C49.7285 0.537109 49.2188 0.167969 48.3838 0.167969C47.5576 0.167969 47.0479 0.554688 46.7402 1.39844L43.0576 11.4092C42.9521 11.6816 42.9082 11.9277 42.9082 12.1035C42.9082 12.7451 43.3564 13.1494 44.0508 13.1494ZM46.5557 7.97266L48.3398 2.55859H48.4014L50.2031 7.97266H46.5557Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M60.1172 13.2549C62.8594 13.2549 64.8545 11.4004 64.8545 8.8252C64.8545 6.42578 63.1406 4.66797 60.6973 4.66797C58.9746 4.66797 57.709 5.54688 57.208 6.71582H57.1641V6.58398C57.208 3.66602 58.2275 1.89941 60.1436 1.89941C61.084 1.89941 61.7607 2.26855 62.3496 3.07715C62.7012 3.52539 62.9824 3.73633 63.4307 3.73633C64.0283 3.73633 64.3975 3.34082 64.3975 2.82227C64.3975 2.57617 64.3359 2.35645 64.1953 2.10156C63.5625 0.897461 62.0859 0.0537109 60.1523 0.0537109C56.9268 0.0537109 54.9932 2.57617 54.9932 6.80371C54.9932 8.24512 55.2305 9.45801 55.6963 10.4336C56.5752 12.2881 58.1396 13.2549 60.1172 13.2549ZM60.082 11.4092C58.667 11.4092 57.5508 10.293 57.5508 8.86914C57.5508 7.4541 58.6494 6.41699 60.1084 6.41699C61.5674 6.41699 62.6309 7.4541 62.6221 8.91309C62.6221 10.3018 61.4971 11.4092 60.082 11.4092Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M68.1328 8.83398C68.8447 8.83398 69.416 8.27148 69.416 7.55078C69.416 6.83008 68.8447 6.25879 68.1328 6.25879C67.4121 6.25879 66.8408 6.83008 66.8408 7.55078C66.8408 8.27148 67.4121 8.83398 68.1328 8.83398Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M73.3359 8.83398C74.0479 8.83398 74.6191 8.27148 74.6191 7.55078C74.6191 6.83008 74.0479 6.25879 73.3359 6.25879C72.6152 6.25879 72.0439 6.83008 72.0439 7.55078C72.0439 8.27148 72.6152 8.83398 73.3359 8.83398Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M78.5391 8.83398C79.251 8.83398 79.8223 8.27148 79.8223 7.55078C79.8223 6.83008 79.251 6.25879 78.5391 6.25879C77.8184 6.25879 77.2471 6.83008 77.2471 7.55078C77.2471 8.27148 77.8184 8.83398 78.5391 8.83398Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M83.7422 8.83398C84.4541 8.83398 85.0254 8.27148 85.0254 7.55078C85.0254 6.83008 84.4541 6.25879 83.7422 6.25879C83.0215 6.25879 82.4502 6.83008 82.4502 7.55078C82.4502 8.27148 83.0215 8.83398 83.7422 8.83398Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M92.2148 13.2549C94.957 13.2549 96.9521 11.4004 96.9521 8.8252C96.9521 6.42578 95.2383 4.66797 92.7949 4.66797C91.0723 4.66797 89.8066 5.54688 89.3057 6.71582H89.2617V6.58398C89.3057 3.66602 90.3252 1.89941 92.2412 1.89941C93.1816 1.89941 93.8584 2.26855 94.4473 3.07715C94.7988 3.52539 95.0801 3.73633 95.5283 3.73633C96.126 3.73633 96.4951 3.34082 96.4951 2.82227C96.4951 2.57617 96.4336 2.35645 96.293 2.10156C95.6602 0.897461 94.1836 0.0537109 92.25 0.0537109C89.0244 0.0537109 87.0908 2.57617 87.0908 6.80371C87.0908 8.24512 87.3281 9.45801 87.7939 10.4336C88.6729 12.2881 90.2373 13.2549 92.2148 13.2549ZM92.1797 11.4092C90.7646 11.4092 89.6484 10.293 89.6484 8.86914C89.6484 7.4541 90.7471 6.41699 92.2061 6.41699C93.665 6.41699 94.7285 7.4541 94.7197 8.91309C94.7197 10.3018 93.5947 11.4092 92.1797 11.4092Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M103.377 13.2549C106.497 13.2549 108.352 10.6973 108.352 6.63672C108.352 2.57617 106.479 0.0625 103.377 0.0625C100.266 0.0625 98.3848 2.59375 98.3848 6.64551C98.3848 10.7148 100.248 13.2549 103.377 13.2549ZM103.377 11.4004C101.654 11.4004 100.67 9.64258 100.67 6.63672C100.67 3.68359 101.672 1.91699 103.377 1.91699C105.073 1.91699 106.066 3.6748 106.066 6.64551C106.066 9.65137 105.091 11.4004 103.377 11.4004Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M117.167 13.1758C117.8 13.1758 118.248 12.7715 118.248 12.0596V10.5654H119.127C119.733 10.5654 120.094 10.1875 120.094 9.63379C120.094 9.08887 119.733 8.70215 119.136 8.70215H118.248V1.81152C118.248 0.756836 117.554 0.141602 116.385 0.141602C115.453 0.141602 114.899 0.52832 114.073 1.75879C112.553 3.99121 111.111 6.16211 110.224 7.75293C109.872 8.38574 109.731 8.79883 109.731 9.29102C109.731 10.0469 110.268 10.5654 111.085 10.5654H116.086V12.0596C116.086 12.7715 116.543 13.1758 117.167 13.1758ZM116.121 8.75488H111.788V8.69336C112.816 6.82129 114.073 4.92285 116.086 2.04004H116.121V8.75488Z",fill:"var(--ck-body-color)"}),(0,m.jsx)("path",{d:"M126.105 13.2549C128.918 13.2549 130.869 11.4355 130.869 8.78125C130.869 6.35547 129.138 4.6416 126.712 4.6416C125.438 4.6416 124.392 5.13379 123.855 5.9248H123.812L124.146 2.17188H129.27C129.85 2.17188 130.228 1.80273 130.228 1.24023C130.228 0.686523 129.85 0.317383 129.27 0.317383H123.803C122.81 0.317383 122.3 0.72168 122.221 1.72363L121.816 6.51367C121.808 6.56641 121.808 6.60156 121.808 6.6543C121.79 7.26953 122.15 7.78809 122.88 7.78809C123.398 7.78809 123.618 7.67383 124.146 7.14648C124.629 6.67188 125.323 6.34668 126.123 6.34668C127.617 6.34668 128.681 7.38379 128.681 8.84277C128.681 10.3457 127.617 11.4092 126.114 11.4092C124.893 11.4092 124.049 10.8027 123.618 9.77441C123.381 9.30859 123.091 9.12402 122.616 9.12402C122.019 9.12402 121.641 9.49316 121.641 10.082C121.641 10.4072 121.72 10.6709 121.843 10.9434C122.467 12.3232 124.154 13.2549 126.105 13.2549Z",fill:"var(--ck-body-color)"})]})),hp=({layoutId:e,duration:t,ease:r})=>(0,m.jsxs)("div",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"center"}},{children:[(0,m.jsx)(Ua.div,Object.assign({initial:{rotate:90,scale:.2,x:"100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:40,scale:.1,x:"70%"},style:{zIndex:4,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:76,height:76,background:"var(--ck-graphic-secondary-background, #6366F1)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(99, 102, 241, 0.3))"}},{children:cp})),(0,m.jsx)(op,Object.assign({layoutId:e,style:{position:"relative",zIndex:10,margin:"0 -8px",width:112,height:112}},{children:(0,m.jsxs)(ap,Object.assign({style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 3px 15px rgba(0, 0, 0, 0.1))"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},{children:[(0,m.jsx)(ip,{}),(0,m.jsx)(Ua.div,Object.assign({style:{zIndex:2,position:"relative"}},{children:(0,m.jsx)(up,{})}))]}),"SlideOneInner")}),e),(0,m.jsx)(Ua.div,Object.assign({initial:{rotate:-90,scale:.2,x:"-100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:-40,scale:.1,x:"-70%"},style:{zIndex:4,position:"relative",width:76,height:76,background:"var(--ck-graphic-secondary-background, #3897FB)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(56, 151, 251, 0.3))"}},{children:(0,m.jsx)(tp,{children:(0,m.jsx)("div",Object.assign({style:{position:"relative",left:-2,top:3}},{children:dp}))})}))]})),mp=({layoutId:e,duration:t,ease:r})=>(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",Object.assign({style:{position:"relative",left:-14}},{children:[(0,m.jsx)(op,Object.assign({layoutId:e,style:{zIndex:10,position:"absolute",left:15,top:12,width:32,height:32}},{children:(0,m.jsx)(ap,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 5px rgba(37, 41, 46, 0.16))"}},{children:(0,m.jsx)(tp,{children:(0,m.jsx)(up,{})})}),"SlideTwoInner")}),e),(0,m.jsxs)(Ua.div,Object.assign({initial:{scale:.2},animate:{scale:1},exit:{scale:.2},style:{zIndex:7,position:"relative",display:"flex",alignItems:"center",padding:"21px 56px",paddingRight:52,background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.07))",borderRadius:"var(--ck-border-radius, 16px)"}},{children:[(0,m.jsx)(ip,{}),(0,m.jsx)("div",Object.assign({style:{position:"relative",zIndex:2,top:1,left:1}},{children:fp}))]})),(0,m.jsx)(Ua.div,Object.assign({style:{zIndex:8,position:"absolute",top:-16,right:-28},initial:{rotate:90,x:-70,scale:.4},animate:{rotate:0,x:0,scale:1},exit:{rotate:0,x:-70,scale:.4}},{children:(0,m.jsx)(pp,{id:e})}))]}))}),vp=({layoutId:e,duration:t,ease:r})=>{const n=Math.random();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(Ua.div,Object.assign({style:{position:"relative"}},{children:[(0,m.jsxs)(op,Object.assign({layoutId:e,initial:{rotate:80},style:{zIndex:10,position:"relative",width:128,height:128}},{children:[(0,m.jsx)(ap,Object.assign({initial:{opacity:0,rotate:100},animate:{opacity:1},exit:{opacity:0},style:{overflow:"hidden",background:"var(--ck-graphic-globe-background, radial-gradient(\n              82.42% 82.42% at 50% 86.72%,\n              rgba(255, 255, 255, 0.2) 0%,\n              rgba(0, 0, 0, 0) 100%\n            ),\n            linear-gradient(180deg, #3897FB 0%, #5004F1 100%))",boxShadow:"var(--ck-graphic-globe-box-shadow, 0px -6px 20px rgba(56, 151, 251, 0.23))"}},{children:(0,m.jsx)(np,Object.assign({style:Boolean(e)?void 0:{animationPlayState:"paused"}},{children:(0,m.jsxs)("svg",Object.assign({width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsxs)("g",{children:[(0,m.jsx)("circle",{cx:"30",cy:"141",r:"64",stroke:`url(#networkRadialA-${n})`,strokeWidth:"3"}),(0,m.jsx)("circle",{cx:"78.8515",cy:"131.123",r:"54.1005",transform:"rotate(-37.4016 78.8515 131.123)",stroke:`url(#networkRadialB-${n})`,strokeWidth:"3"}),(0,m.jsx)("circle",{cx:"63.6053",cy:"2.12794",r:"50.8338",transform:"rotate(134.702 63.6053 2.12794)",stroke:`url(#networkRadialC-${n})`,strokeWidth:"3"}),(0,m.jsx)("circle",{cx:"126.658",cy:"56.6577",r:"50.3433",transform:"rotate(-105 126.658 56.6577)",stroke:`url(#networkRadialD-${n})`,strokeWidth:"3"}),(0,m.jsx)("circle",{cx:"13.6619",cy:"18.9603",r:"46.0247",transform:"rotate(107.362 13.6619 18.9603)",stroke:`url(#networkRadialE-${n})`,strokeWidth:"3"})]}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("radialGradient",Object.assign({id:`networkRadialA-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(60.5 84) rotate(104.668) scale(77.0097)"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:`networkRadialB-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.1805 81.6717) rotate(97.125) scale(64.7443)"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:`networkRadialC-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.3816 -36.4455) rotate(114.614) scale(57.7177)"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:`networkRadialD-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(137.86 7.73234) rotate(92.3288) scale(62.743)"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:`networkRadialE-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(35.3203 -21.566) rotate(104.513) scale(54.8617)"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}))]})]}))}))}),"SlideThreeInner"),(0,m.jsxs)(Ua.div,Object.assign({exit:{opacity:0}},{children:[(0,m.jsx)(Ua.div,{initial:Boolean(e)?void 0:{scale:1.1},animate:Boolean(e)?Ql:void 0,transition:Object.assign({},ep),style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseA"),(0,m.jsx)(Ua.div,{initial:Boolean(e)?void 0:{scale:1.2,opacity:.25},animate:Boolean(e)?Ql:void 0,transition:Object.assign(Object.assign({},ep),{delay:.5}),style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseB")]}))]}),e),(0,m.jsxs)(Ua.div,Object.assign({initial:{rotate:-20,scale:.1,y:-10,x:-10},animate:{rotate:0,scale:1,y:0,x:0},exit:{zIndex:3,scale:.2,y:-25,x:15},style:{zIndex:12,borderRadius:"50%",position:"absolute",bottom:-4,right:-4,width:54,height:54,display:"flex",alignItems:"center",justifyContent:"center",padding:13,background:"var(--ck-graphic-compass-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-compass-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.15))"}},{children:[(0,m.jsx)(ip,{}),(0,m.jsx)(Ua.div,Object.assign({style:{zIndex:2,position:"absolute"},initial:{rotate:-170},animate:{rotate:0},exit:{rotate:-180,transition:{duration:0}},transition:{type:"spring",stiffness:6,damping:.9,mass:.2}},{children:sp}))]}))]}),"SlideThree")})},gp=()=>{const e=e=>Hc(e,{}),t=ym(),r=Zc[t.lang].aboutScreen,[n,i]=(0,v.useState)(!0),[o,a]=(0,v.useState)(0),s=(0,v.useRef)(!1),u=(0,v.useRef)(0),d=[.16,1,.3,1],c=600;let l;(0,v.useEffect)((()=>()=>clearInterval(l)),[]);const p=e=>{if(b.current){const{offsetWidth:t}=b.current;b.current.scrollLeft=t*e,setTimeout((()=>a(e)),100)}},f=()=>{if(!b.current)return;const{offsetWidth:e,scrollLeft:t}=b.current,r=u.current;if(u.current=t,r-t>-4&&r-t<4){const r=Math.round(t/e);a(r)}},h=()=>{y()},g=()=>{const{offsetWidth:e,scrollLeft:t}=b.current,r=Math.round(t/e);a(r)},y=()=>{s.current=!0,clearTimeout(l)},b=(0,v.useRef)(null);(0,v.useEffect)((()=>{if(b.current)return b.current.addEventListener("scroll",f),b.current.addEventListener("touchmove",h),b.current.addEventListener("touchend",g),()=>{b.current&&(b.current.removeEventListener("scroll",f),b.current.removeEventListener("touchmove",h),b.current.removeEventListener("touchend",g))}}),[b]);const w=[(0,m.jsx)(hp,{layoutId:"graphicCircle",duration:c,ease:d}),(0,m.jsx)(mp,{layoutId:"graphicCircle",duration:c,ease:d}),(0,m.jsx)(vp,{layoutId:"graphicCircle",duration:c,ease:d})],_=[(0,m.jsx)(hp,{duration:c,ease:d}),(0,m.jsx)(mp,{duration:c,ease:d}),(0,m.jsx)(vp,{duration:c,ease:d})],A=[(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(wc,Object.assign({$small:!0},{children:e(r.a_h1)})),(0,m.jsx)(_c,{children:e(r.a_p)})]}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(wc,Object.assign({$small:!0},{children:e(r.b_h1)})),(0,m.jsx)(_c,{children:e(r.b_p)})]}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(wc,Object.assign({$small:!0},{children:e(r.c_h1)})),(0,m.jsx)(_c,{children:e(r.c_p)})]})];return(0,m.jsxs)(mc,{children:[(0,m.jsxs)(Jl,{children:[(0,m.jsx)(Wl,{children:(0,m.jsx)($a,Object.assign({transition:{duration:.6,ease:d}},{children:(0,m.jsx)(Wa,Object.assign({initial:!1,onExitComplete:()=>i(!0)},{children:w.map(((e,t)=>o===t&&(0,m.jsx)($l,Object.assign({style:{position:"absolute"}},{children:e}),t)))}))}))}),(0,m.jsx)(Gl,Object.assign({ref:b},{children:(0,m.jsx)(Wa,{children:A.map(((e,t)=>(0,m.jsxs)(Zl,Object.assign({$active:o===t},{children:[(0,m.jsx)(Kl,{children:(0,m.jsx)($a,Object.assign({transition:{duration:0}},{children:(0,m.jsx)($l,{children:_[t]})}))}),(0,m.jsx)(bc,Object.assign({style:{gap:8,paddingBottom:0}},{children:e}))]}),t)))})}))]}),(0,m.jsx)(vl,{children:(0,m.jsx)(Xl,{children:A.map(((e,t)=>(0,m.jsx)(Yl,{$active:o===t,onClick:()=>{y(),(e=>{i(!1),(()=>{if(b.current){const{overflow:e}=getComputedStyle(b.current);return"visible"!==e}return!1})()?p(e):a(e)})(t)}},t)))})}),(0,m.jsx)(ql,Object.assign({href:r.ctaUrl,arrow:!0},{children:e(r.ctaText)}))]})};function yp(){const e=ym(),{chains:t}=(0,o.useNetwork)(),{connectAsync:r,connectors:n}=(0,o.useConnect)({onError(t){t.message?"User rejected request"!==t.message&&e.debug(t.message,t):e.debug("Could not connect. See console for more details.",t)}});return{connectAsync:n=>{var i,o,a,s=ad(n,[]);return r(Object.assign(Object.assign({},s),{chainId:null!==(o=null===(i=e.options)||void 0===i?void 0:i.initialChainId)&&void 0!==o?o:null===(a=t[0])||void 0===a?void 0:a.id}))},connectors:n}}var bp=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[(0,m.jsx)("path",{d:"M1.57568 4.60616C1.57568 2.69827 3.12234 1.15161 5.03023 1.15161H15.3939C17.3018 1.15161 18.8484 2.69826 18.8484 4.60616V10.3637C18.8484 12.2716 17.3018 13.8183 15.3939 13.8183H5.03023C3.12234 13.8183 1.57568 12.2716 1.57568 10.3637V4.60616Z",stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("path",{d:"M1 4.79293C1 2.435 3.31004 0.770014 5.54697 1.51566L12.4561 3.81869C13.8667 4.2889 14.8182 5.60901 14.8182 7.09596V13.6313C14.8182 15.9892 12.5081 17.6542 10.2712 16.9086L3.36212 14.6056C1.95149 14.1353 1 12.8152 1 11.3283V4.79293Z",fill:"var(--ck-body-background)",stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("circle",{cx:"10.3863",cy:"10.1894",r:"1.32574",fill:"currentColor"})]}))};const wp=xu.div`
  padding: 24px 24px 28px;
  border-radius: var(--ck-tertiary-border-radius, 24px);
  box-shadow: var(--ck-tertiary-box-shadow, none);
  background: var(--ck-body-background-tertiary);
  ${_c} {
    max-width: none;
  }
`,_p=xu.div`
  display: flex;
  gap: 16px;
  margin: 5px -8px -12px;
  button {
  }
`,Ap=xu(Ua.div)`
  text-align: center;
  margin-bottom: -6px;
`,Ep=xu(Ua.button)`
  appearance: none;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 42px;
  padding: 0 16px;
  border-radius: 6px;
  background: none;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  /* will-change: transform; */
  transition: color 200ms ease, transform 100ms ease;
  svg {
    transition: all 100ms ease-out;
    display: block;
    position: relative;
    top: 2px;
    left: 2px;
    transform: translateZ(0px);
    path,
    circle {
      transition: all 100ms ease-out;
    }
    path:last-of-type {
      transform-origin: 0 0;
      transform: scaleX(1.3) skewY(-12deg);
      opacity: 0;
    }
    circle {
      transform: translate(20%, -15%);
    }
  }
  &:hover {
    color: var(--ck-body-color-muted-hover);
    svg {
      path,
      circle {
        opacity: 1;
        transform: none;
      }
    }
  }
  &:active {
    transform: scale(0.96);
  }
`,Cp=xu(Ua.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;
`,xp=xu(Ua.button)`
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  font-size: 17px;
  font-weight: var(--ck-primary-button-font-weight, 500);
  line-height: 20px;
  text-align: var(--ck-body-button-text-align, left);
  transition: 180ms ease;
  transition-property: background, color, box-shadow, transform;
  will-change: transform, box-shadow, background-color, color;

  --fallback-color: var(--ck-primary-button-color);
  --fallback-background: var(--ck-primary-button-background);
  --fallback-box-shadow: var(--ck-primary-button-box-shadow);
  --fallback-border-radius: var(--ck-primary-button-border-radius);

  --color: var(--ck-primary-button-color, var(--fallback-color));
  --background: var(--ck-primary-button-background, var(--fallback-background));
  --box-shadow: var(--ck-primary-button-box-shadow, var(--fallback-box-shadow));
  --border-radius: var(
    --ck-primary-button-border-radius,
    var(--fallback-border-radius)
  );

  --hover-color: var(--ck-primary-button-hover-color, var(--color));
  --hover-background: var(
    --ck-primary-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-primary-button-hover-box-shadow,
    var(--box-shadow)
  );
  --hover-border-radius: var(
    --ck-primary-button-hover-border-radius,
    var(--border-radius)
  );

  --active-color: var(--ck-primary-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-primary-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-primary-button-active-box-shadow,
    var(--hover-box-shadow)
  );
  --active-border-radius: var(
    --ck-primary-button-active-border-radius,
    var(--hover-border-radius)
  );

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &:disabled {
    transition: 180ms ease;
  }

  &:not(:disabled) {
    &:hover {
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
    }
    &:focus-visible {
      transition-duration: 100ms;
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
    }
    &:active {
      color: var(--active-color);
      background: var(--active-background);
      box-shadow: var(--active-box-shadow);
      border-radius: var(--active-border-radius);
    }
  }
`,kp=xu(Ua.span)`
  width: 100%;
`,Sp=xu(Ua.div)`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Op=xu(Ua.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 14px 0 28px;
  margin: 0 0;
`,Dp=xu(Ua.button)`
  --background: var(--ck-body-background-secondary);
  cursor: pointer;
  user-select: none;
  position: relative;
  padding: 0;
  width: 100%;
  min-width: 25%;
  font-size: 13px;
  font-weight: 500;
  line-height: 13px;
  text-align: center;
  transition: transform 100ms ease;

  background: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:not(:disabled) {
    &:active {
      transform: scale(0.97);
    }
  }
`,Bp=xu(Ua.span)`
  display: block;
  padding: 10px 0 0;
  color: var(--ck-body-color);
  opacity: 0.75;
`,Ip=xu(Ua.div)`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  overflow: hidden;
  svg {
    border-radius: inherit;
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: 100%;
  }
`,Mp=({chains:e})=>{const t="undefined"!=typeof window&&Boolean(window.ethereum),r=ic()&&!t;return{id:"injected",name:"Browser Wallet",shortName:"browser",scannable:!1,logos:{default:(0,m.jsx)(Id,{})},installed:Boolean(!r&&t),createConnector:()=>({connector:new d.I({chains:e,options:{shimDisconnect:!0}})})}},Tp=({chains:e})=>({id:"walletConnect",name:"Other Wallets",logos:{default:(0,m.jsx)(Td,{}),mobile:(0,m.jsx)(Md,{}),transparent:(0,m.jsx)(Td,{background:!1}),connectorButton:(0,m.jsx)(Md,{}),qrCode:(0,m.jsx)(Td,{background:!0})},logoBackground:"var(--ck-brand-walletConnect)",scannable:!0,createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Fp=({chains:e})=>{const t=oc(),r=ic()&&!t;return{id:"metaMask",name:"MetaMask",logos:{default:(0,m.jsx)(Fd,{background:!0}),mobile:(0,m.jsx)(Fd,{background:!0}),transparent:(0,m.jsx)("div",Object.assign({style:{transform:"scale(0.86)",position:"relative",width:"100%"}},{children:(0,m.jsx)(Fd,{})})),connectorButton:(0,m.jsx)("div",Object.assign({style:{transform:"scale(1.1)"}},{children:(0,m.jsx)(Fd,{})}))},logoBackground:"linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/metamask",website:"https://metamask.io/download/",android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/app/metamask/id1438144202",chrome:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",firefox:"https://addons.mozilla.org/firefox/addon/ether-metamask/",brave:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",edge:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm"},installed:Boolean(!r&&t),createConnector:()=>{const t=r?new s.WalletConnectConnector({chains:e,options:{qrcode:!1}}):new a.MetaMaskConnector({chains:e,options:{shimDisconnect:!0,shimChainChangedDisconnect:!1,UNSTABLE_shimOnConnectSelectAccount:!0}});return{connector:t,getUri:()=>sd(void 0,void 0,void 0,(function*(){})),getMobileConnector:r?()=>sd(void 0,void 0,void 0,(function*(){let e=t;return t.on("error",(e=>{console.log("onError",e)})),t.on("message",(({type:t})=>sd(void 0,void 0,void 0,(function*(){if(console.log("onMessage: MetaMask",t),"connecting"===t){let t="";try{const{uri:r}=(yield e.getProvider()).connector;t=nc()?r:`https://metamask.app.link/wc?uri=${encodeURIComponent(r)}`,window.location.href=t}catch(e){console.log("catch bad URI",t)}}})))),t})):void 0}}}},jp=({chains:e,appName:t})=>{const r=ac(),n=ic()&&!r;return{id:"coinbaseWallet",name:"Coinbase Wallet",shortName:"Coinbase",logos:{default:(0,m.jsx)(jd,{}),mobile:(0,m.jsx)(jd,{background:!0}),transparent:(0,m.jsx)(jd,{background:!1}),appIcon:(0,m.jsx)(jd,{background:!1}),connectorButton:(0,m.jsx)(jd,{background:!0}),qrCode:(0,m.jsx)(jd,{background:!0})},logoBackground:"var(--ck-brand-coinbaseWallet)",scannable:!0,installed:Boolean(!n&&r),downloadUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455",chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},createConnector:()=>{const r=new u.CoinbaseWalletConnector({chains:e,options:{appName:null!=t?t:"",headlessMode:!0}});return{connector:r,qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield r.getProvider()).qrUrl}))}}}}},Pp=({chains:e})=>({id:"rainbow",name:"Rainbow",logos:{default:(0,m.jsx)(Ld,{})},logoBackground:"#174299",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/rainbow",website:"https://rainbow.me",android:"https://play.google.com/store/apps/details?id=me.rainbow",ios:"https://apps.apple.com/app/rainbow-ethereum-wallet/id1457119021"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://rnbwapp.com/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Np=({chains:e})=>({id:"argent",name:"Argent",logos:{default:(0,m.jsx)(Nd,{})},logoBackground:"#fff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/argent",android:"https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",ios:"https://apps.apple.com/app/argent/id1358741926"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://argent.link/app/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Rp=({chains:e})=>({id:"trust",name:"Trust Wallet",shortName:"Trust",logos:{default:(0,m.jsx)(Pd,{})},logoBackground:"#fff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/trust",android:"https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",ios:"https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://link.trustwallet.com/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Lp=({chains:e})=>({id:"ledger",name:"Ledger Live",shortName:"Ledger",logos:{default:(0,m.jsx)(zd,{})},logoBackground:"#000",scannable:!1,downloadUrls:{website:"https://www.ledger.com/ledger-live/download#download-device-2",download:"https://connect.family.co/v0/download/ledger",android:"https://play.google.com/store/apps/details?id=com.ledger.live",ios:"https://apps.apple.com/app/ledger-live-web3-wallet/id1361671700"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`ledgerlive://wc?uri=${encodeURIComponent(e)}`}))},desktop:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return`ledgerlive://wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Up=({chains:e})=>({id:"imToken",name:"imToken",logos:{default:(0,m.jsx)(Rd,{})},logoBackground:"#098de6",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/imToken",android:"https://play.google.com/store/apps/details?id=im.token.app",ios:"https://itunes.apple.com/us/app/imtoken2/id1384798940"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return`imtokenv2://wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),zp=({chains:e})=>{var t;const r="undefined"!=typeof window&&!0===(null===(t=window.ethereum)||void 0===t?void 0:t.isBraveWallet);return{id:"brave",name:"Brave Wallet",shortName:"Brave",logos:{default:(0,m.jsx)(Vd,{})},logoBackground:"#fff",scannable:!1,downloadUrls:{},installed:r,createConnector:()=>({connector:new d.I({chains:e,options:{shimDisconnect:!0}})})}},Vp=({chains:e})=>({id:"steak",name:"Steak",logos:{default:(0,m.jsx)(qd,{})},logoBackground:"#000000",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/steak",android:"https://play.google.com/store/apps/details?id=fi.steakwallet.app",ios:"https://apps.apple.com/app/steakwallet/id1569375204",website:"https://steakwallet.fi/download"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://links.steakwallet.fi/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),qp=({chains:e})=>({id:"unstoppable",name:"Unstoppable",logos:{default:(0,m.jsx)(Hd,{})},logoBackground:"linear-gradient(180deg, #FED812 0%, #FFAF00 100%)",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/unstoppable",ios:"https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907",android:"https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://unstoppable.money/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Hp=({chains:e})=>({id:"onto",name:"ONTO",logos:{default:(0,m.jsx)(Wd,{})},logoBackground:"#ffffff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/onto",ios:"https://apps.apple.com/app/onto-an-ontology-dapp/id1436009823",android:"https://play.google.com/store/apps/details?id=com.github.ontio.onto",website:"https://onto.app/en/download/"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://onto.app/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Wp=({chains:e})=>({id:"gnosisSafe",name:"Gnosis Safe",shortName:"Safe",logos:{default:(0,m.jsx)($d,{})},logoBackground:"#ffffff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/gnosisSafe",ios:"https://apps.apple.com/app/id1515759131",android:"https://play.google.com/store/apps/details?id=io.gnosis.safe",website:"https://gnosis-safe.io/"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://gnosis-safe.io/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),$p=({chains:e})=>({id:"frontier",name:"Frontier",logos:{default:(0,m.jsx)(Kd,{})},logoBackground:"#CC703C",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/frontier",ios:"https://apps.apple.com/app/frontier-crypto-defi-wallet/id1482380988",android:"https://play.google.com/store/apps/details?id=com.frontierwallet",website:"https://frontier.xyz/"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`frontier://wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}}),Kp=({chains:e})=>({id:"zerion",name:"Zerion",logos:{default:(0,m.jsx)(Gd,{})},logoBackground:"#CC703C",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/zerion",ios:"https://apps.apple.com/app/apple-store/id1456732565",android:"https://play.google.com/store/apps/details?id=io.zerion.android",website:"https://zerion.io/"},createConnector:()=>{const t=new s.WalletConnectConnector({chains:e,options:{qrcode:!1}});return{connector:t,mobile:{getUri:()=>sd(void 0,void 0,void 0,(function*(){const{uri:e}=(yield t.getProvider()).connector;return nc()?e:`https://app.zerion.io/wc?uri=${encodeURIComponent(e)}`}))},qrCode:{getUri:()=>sd(void 0,void 0,void 0,(function*(){return(yield t.getProvider()).connector.uri}))}}}});function Gp(){const{connectors:e}=(0,o.useConnect)(),t=e[0].chains;let r=[];e.find((e=>"metaMask"===e.id))||r.push("metaMask"),e.find((e=>"coinbaseWallet"===e.id))||r.push("coinbaseWallet"),r.push("rainbow","argent","trust","ledger","imToken","brave","steak","unstoppable","onto","gnosisSafe","frontier","zerion");const n=(({chains:e})=>[Mp({chains:e}),Tp({chains:e}),Fp({chains:e}),jp({chains:e}),Pp({chains:e}),Np({chains:e}),Rp({chains:e}),Lp({chains:e}),Up({chains:e}),zp({chains:e}),Wp({chains:e}),qp({chains:e}),Vp({chains:e}),Hp({chains:e}),$p({chains:e}),Kp({chains:e})])({chains:t});return n.filter((e=>r.includes(e.id)))}const Zp=()=>{var e,t,r,n,i,o,a;const c=ym(),l=Zc[c.lang].connectorsScreen,p=ic(),{connectAsync:f,connectors:h}=yp();(0,v.useEffect)((()=>{}),[p]);const g=()=>{const{ethereum:e}=window;return"undefined"!=typeof window&&e&&!oc()&&!ac()},y=Gp(),b=e=>{let t=e.split(/[(),]+/);t.shift(),t=t.map((e=>e.trim()));const r=t.filter((e=>y.map((e=>e.name)).includes(e)?e:null));return 0===r.length?null:y.filter((e=>e.installed&&e.name===r[0]))[0]};return(0,m.jsx)(mc,Object.assign({style:{width:312}},{children:(0,m.jsxs)(m.Fragment,p?{children:[(0,m.jsx)(Op,{children:h.map((e=>{var t,r,n,i,o,a;const l=Jd.filter((t=>t.id===e.id))[0];if(!l)return null;let v=l.logos,y=null!==(r=null!==(t=l.shortName)&&void 0!==t?t:l.name)&&void 0!==r?r:e.name;if("injected"===l.id){if(!g())return null;const t=b(e.name);t&&(v=t.logos,y=t.name.replace(" Wallet",""))}return(null===(n=c.options)||void 0===n?void 0:n.walletConnectName)&&"walletConnect"===l.id&&(y=c.options.walletConnectName),(0,m.jsxs)(Dp,Object.assign({onClick:()=>{var t;"injected"===l.id||"metaMask"===l.id&&oc()?(c.setRoute(mm.CONNECT),c.setConnector(e.id)):(t=e.id,sd(void 0,void 0,void 0,(function*(){const e=h.filter((e=>e.id===t))[0];let r=null;switch(e.id){case"walletConnect":c.setRoute(mm.MOBILECONNECTORS);break;case"metaMask":r=new s.WalletConnectConnector({chains:e.chains,options:Object.assign(Object.assign({},e.options),{qrcode:!1})});break;case"coinbaseWallet":r=new u.CoinbaseWalletConnector({chains:e.chains,options:e.options});break;case"injected":r=new d.I({chains:e.chains,options:e.options})}if(r){if("metaMask"===e.id&&p){let e=r;r.on("message",(({type:t})=>sd(void 0,void 0,void 0,(function*(){if("connecting"===t){const{uri:t}=(yield e.getProvider()).connector,r=nc()?t:`https://metamask.app.link/wc?uri=${encodeURIComponent(t)}`;window.location.href=r}}))))}try{yield f({connector:r})}catch(e){c.debug("Async connect error. See console for more details.",e)}}})))}},{children:[(0,m.jsx)(Ip,{children:null!==(a=null!==(o=null!==(i=v.mobile)&&void 0!==i?i:v.appIcon)&&void 0!==o?o:v.connectorButton)&&void 0!==a?a:v.default}),(0,m.jsx)(Bp,{children:y})]}),`m-${e.id}`)}))}),(0,m.jsxs)(wp,{children:[(0,m.jsxs)(bc,Object.assign({style:{padding:0,textAlign:"left"}},{children:[(0,m.jsx)(wc,Object.assign({$small:!0},{children:l.h1})),(0,m.jsx)(_c,{children:l.p})]})),(0,m.jsxs)(_p,{children:[!(null===(e=c.options)||void 0===e?void 0:e.hideQuestionMarkCTA)&&(0,m.jsx)(ql,Object.assign({variant:"tertiary",onClick:()=>c.setRoute(mm.ABOUT)},{children:"Learn More"})),!(null===(t=c.options)||void 0===t?void 0:t.hideNoWalletCTA)&&(0,m.jsx)(ql,Object.assign({variant:"tertiary",onClick:()=>c.setRoute(mm.ONBOARDING)},{children:"Get a Wallet"}))]})]}),(null===(r=c.options)||void 0===r?void 0:r.disclaimer)&&(0,m.jsx)(Rc,Object.assign({style:{visibility:"hidden",pointerEvents:"none"}},{children:(0,m.jsx)("div",{children:null===(n=c.options)||void 0===n?void 0:n.disclaimer})}))]}:{children:[(0,m.jsx)(Cp,{children:h.map((e=>{var t,r,n;const i=Jd.filter((t=>t.id===e.id))[0];if(!i)return null;let o=i.logos,a=null!==(t=i.name)&&void 0!==t?t:e.name;if((null===(r=c.options)||void 0===r?void 0:r.walletConnectName)&&"walletConnect"===i.id&&(a=c.options.walletConnectName),"injected"===i.id){if(!g())return null;const t=b(e.name);t&&(o=t.logos,a=t.name)}let s=null!==(n=o.connectorButton)&&void 0!==n?n:o.default;return i.extensionIsInstalled&&o.appIcon&&i.extensionIsInstalled()&&(s=o.appIcon),(0,m.jsxs)(xp,Object.assign({disabled:c.route!==mm.CONNECTORS,onClick:()=>{c.setRoute(mm.CONNECT),c.setConnector(e.id)}},{children:[(0,m.jsx)(Sp,{children:s}),(0,m.jsx)(kp,{children:a})]}),e.id)}))}),!(null===(i=c.options)||void 0===i?void 0:i.hideNoWalletCTA)&&(0,m.jsx)(Ap,{children:(0,m.jsxs)(Ep,Object.assign({onClick:()=>c.setRoute(mm.ONBOARDING)},{children:[(0,m.jsx)(bp,{})," ",l.newcomer]}))}),(null===(o=c.options)||void 0===o?void 0:o.disclaimer)&&(0,m.jsx)(Rc,Object.assign({style:{visibility:"hidden",pointerEvents:"none"}},{children:(0,m.jsx)("div",{children:null===(a=c.options)||void 0===a?void 0:a.disclaimer})}))]})}))},Jp=xu.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px 8px;
  margin: 0 -10px -20px;
  padding: 4px 0 0;
`,Xp=xu.div`
  text-align: center;
`,Yp=xu.div`
  z-index: 9;
  position: relative;
  margin: 0 auto 10px;
  border-radius: 16px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  ${e=>e.$outline&&"\n  &:before {\n    content: '';\n    z-index: 2;\n    position: absolute;\n    inset: 0;\n    border-radius: inherit;\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);\n  }"}
  svg {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
`,Qp=xu.div`
  color: var(--ck-body-color);
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  opacity: 0.75;
`,ef=xu.div``;function tf(){const{connectAsync:e,connectors:t}=yp();return{openDefaultWalletConnect:()=>sd(this,void 0,void 0,(function*(){const r=t.find((e=>"walletConnect"===e.id));if(r){const t=new s.WalletConnectConnector({chains:r.chains,options:Object.assign(Object.assign({},r.options),{qrcode:!0})});try{yield e({connector:t})}catch(e){console.log("WalletConnect",e)}}else console.log("No WalletConnect connector available")}))}}const rf=xu(Ua.div)`
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  svg {
    display: block;
  }
  svg,
  svg path,
  svg rect {
    transition: inherit;
  }
  svg path:first-child {
    transform-origin: 50% 50%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg rect {
    transform-origin: 53% 63%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg path:last-child {
    opacity: 0;
    stroke: var(--bg);
    transform: translate(11.75px, 10px) rotate(90deg) scale(0.6);
  }
  ${e=>e.$clipboard?uu`
          --color: var(--ck-focus-color) !important;
          --bg: var(--ck-body-background);
          svg {
            transition-delay: 0ms;
            path:first-child {
              opacity: 0;
              transform: rotate(-90deg) scale(0.2);
            }
            rect {
              rx: 10px;
              fill: var(--color);
              transform: rotate(-90deg) scale(1.45);
            }
            path:last-child {
              transition-delay: 100ms;
              opacity: 1;
              transform: translate(7.75px, 9.5px);
            }
          }
        `:uu`
          &:hover {
          }
          &:hover:active {
          }
        `}
`,nf=({copied:e,small:t})=>(0,m.jsx)(rf,Object.assign({$clipboard:e},{children:(0,m.jsx)(sl,{style:{transform:t?"scale(1)":"translateX(3px) scale(1.5)",opacity:t||e?1:.3}})})),of=xu.div`
  --color: var(--ck-copytoclipboard-stroke);
  --bg: var(--ck-body-background);
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${e=>e.$disabled?uu`
          cursor: not-allowed;
          opacity: 0.4;
        `:uu`
          &:hover {
            --color: var(--ck-body-color-muted);
          }
        `}
`,af=xu.div`
  display: block;
  position: relative;
  transition: inherit;
  svg {
    position: absolute;
    left: 100%;
    display: block;
    top: -1px;
    margin: 0;
    margin-left: 4px;
  }
`,sf=({string:e,children:t,variant:r})=>{const[n,i]=(0,v.useState)(!1);let o;const a=()=>{if(!e)return;const t=e.trim();navigator.clipboard&&navigator.clipboard.writeText(t),i(!0),clearTimeout(o),o=setTimeout((()=>i(!1)),1e3)};return"button"===r?(0,m.jsx)(ql,Object.assign({disabled:!e,onClick:a,icon:(0,m.jsx)(nf,{copied:n})},{children:t})):(0,m.jsx)(of,Object.assign({onClick:a,$disabled:!e},{children:(0,m.jsxs)(af,{children:[t,(0,m.jsx)(nf,{copied:n,small:!0})]})}))},uf=(0,m.jsx)("svg",Object.assign({width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)("path",{d:"M30 42V19M19 30.5H42",stroke:"var(--ck-body-color-muted)",strokeWidth:"3",strokeLinecap:"round"})})),df=()=>{var e;const t=ym(),{connectAsync:r}=yp(),{chains:n}=(0,o.useNetwork)(),{openDefaultWalletConnect:i}=tf(),a=Gp().filter((e=>void 0===e.installed));function s(e){return sd(this,void 0,void 0,(function*(){yield r({connector:e})}))}const[u,d]=(0,v.useState)("");return(0,v.useEffect)((()=>{sd(void 0,void 0,void 0,(function*(){const e=yield Tp({chains:n}).createConnector(),r=yield e.qrCode.getUri();console.log(r),e.connector.on("message",(t=>sd(void 0,void 0,void 0,(function*(){const t=yield e.connector.getProvider();console.log(t),d(t.connector.uri),t.connector.on("disconnect",(()=>{s(e.connector)}))}))));try{yield s(e.connector)}catch(e){t.debug((0,m.jsx)(m.Fragment,{children:"WalletConnect cannot connect. See console for more details."}),e)}}))}),[]),(0,m.jsx)(mc,Object.assign({style:{width:312}},{children:(0,m.jsxs)(ef,{children:[(0,m.jsx)(bc,{children:(0,m.jsxs)(Jp,{children:[a.map(((e,n)=>{var i;const{name:o,shortName:a,logos:s,logoBackground:u}=e;return(0,m.jsxs)(Xp,Object.assign({onClick:()=>(e=>{const n=e.createConnector();if(e.installed)t.setRoute(mm.CONNECT),t.setConnector(n.connector.id);else{n.connector.on("message",(({type:e})=>sd(void 0,void 0,void 0,(function*(){if("connecting"===e){const e=yield n.mobile.getUri();window.location.href=e}}))));try{r({connector:n.connector})}catch(e){t.debug("Async connect error. See console for more details.",e)}}})(e)},{children:[(0,m.jsx)(Yp,Object.assign({$outline:!0,style:u?{background:u}:void 0},{children:null!==(i=s.mobile)&&void 0!==i?i:s.default})),(0,m.jsx)(Qp,{children:null!=a?a:o})]}),n)})),(0,m.jsxs)(Xp,Object.assign({onClick:i},{children:[(0,m.jsx)(Yp,Object.assign({style:{background:"var(--ck-body-background-secondary)"}},{children:uf})),(0,m.jsx)(Qp,{children:"More"})]}))]})}),"modal"!==(null===(e=t.options)||void 0===e?void 0:e.walletConnectCTA)&&(0,m.jsx)("div",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,paddingTop:16}},{children:(0,m.jsx)(sf,Object.assign({variant:"button",string:u},{children:"Copy to Clipboard"}))}))]})}))},cf=xu(Ua.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  left: 0;
  right: 0;
  ${bc} {
    padding: 0 8px 32px;
    gap: 12px;
  }
`,lf=Cu`
  0%{ transform:none; }
  25%{ transform:translateX(${2}px); }
  50%{ transform:translateX(-${2}px); }
  75%{ transform:translateX(${2}px); }
  100%{ transform:none; }
`,pf=Cu`
  0%{ opacity:1; }
  100%{ opacity:0; }
`,ff=xu(Ua.div)`
  background: var(
    --ck-body-background
  ); // To stop the overlay issue during transition for the spinner
`,hf=xu(Ua.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 16px;
  height: 120px;
  //transform: scale(1.001); // fixes shifting issue between states
`,mf=xu(Ua.div)`
  user-select: none;
  position: relative;
  --spinner-error-opacity: 0;
  &:before {
    content: '';
    position: absolute;
    inset: -5px;
    opacity: 0;
    background: var(--ck-body-color-danger);
    ${e=>e.$circle&&uu`
        border-radius: 50%;
        background: none;
        box-shadow: inset 0 0 0 3.5px var(--ck-body-color-danger);
      `}
  }
  ${e=>e.$shake&&uu`
      animation: ${lf} 220ms ease-out both;
      &:before {
        animation: ${pf} 220ms ease-out 750ms both;
      }
    `}
`,vf=xu(Ua.button)`
  z-index: 5;
  appearance: none;
  position: absolute;
  right: 2px;
  bottom: 2px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  background: none;

  color: var(--ck-body-background);
  transition: color 200ms ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease;
    background: var(--ck-body-color);
  }

  &:hover:before {
    opacity: 0.1;
  }
`,gf=xu(Ua.div)`
  position: absolute;
  inset: 0;

  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 16px;
    background: conic-gradient(
      from 90deg,
      currentColor 10%,
      var(--ck-body-color) 80%
    );
  }

  svg {
    z-index: 2;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
`,yf=xu(Ua.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
  pointer-events: none;
`,bf=xu(Ua.div)`
  --shadow: var(--ck-tooltip-shadow);
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: var(
    --ck-tooltip-border-radius,
    ${e=>"small"===e.$size?11:14}px
  );
  border-radius: ;
  padding: 10px 16px 10px 12px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: var(--ck-tooltip-color);
  background: var(--ck-tooltip-background);
  box-shadow: var(--shadow);
  > span {
    z-index: 3;
    position: relative;
  }
  > div {
    margin: -4px 0; // offset for icon
  }
  strong {
    color: var(--ck-spinner-color);
  }

  .ck-tt-logo {
    display: inline-block;
    vertical-align: text-bottom;
    height: 1em;
    width: 1.25em;
    svg {
      display: block;
      height: 100%;
      transform: translate(0.5px, -1px) scale(1.75);
    }
  }
`,wf=xu(Ua.div)`
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>"small"===e.$size?14:18}px;
  right: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: ${e=>"small"===e.$size?14:18}px;
    height: ${e=>"small"===e.$size?14:18}px;
    transform: translate(75%, 0) rotate(45deg);
    background: var(--ck-tooltip-background);
    border-radius: ${e=>"small"===e.$size?2:3}px 0 0 0;
  }
`,_f=({children:e,message:t,open:r,xOffset:n=0,yOffset:i=0,delay:o})=>{var a;const s=ym(),u=Qc();if(null===(a=s.options)||void 0===a?void 0:a.hideTooltips)return(0,m.jsx)(m.Fragment,{children:e});const[d,c]=(0,v.useState)(!1),[l,p]=(0,v.useState)(!1),[f,h]=(0,v.useState)("small"),[g,y]=(0,v.useState)(!1),[b]=(0,v.useState)(s.route),w=(0,v.useRef)(null),[_,A]=$u({debounce:g?0:220,offsetSize:!0,scroll:!0});return("undefined"!=typeof window?v.useLayoutEffect:v.useEffect)((()=>{if(!w.current||A.top+A.bottom+A.left+A.right+A.height+A.width===0)return;const e=n+A.left+A.width,t=i+A.top+.5*A.height;g||0===e||0===t||y(!0),w.current.style.left=`${e}px`,w.current.style.top=`${t}px`,h(w.current.offsetHeight<=40?"small":"large"),p((()=>{let e=!1;const t=n+A.left+A.width,r=i+A.top+.5*A.height;return(t>window.innerWidth||t<0||r>window.innerHeight||r<0)&&(e=!0),e})())}),[A,r,d]),(0,v.useEffect)((()=>{s.open||c(!1)}),[s.open]),(0,v.useEffect)((()=>{c(!!r)}),[r]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ua.div,Object.assign({ref:_,style:void 0===r?{cursor:"help"}:{},onHoverStart:()=>c(!0),onHoverEnd:()=>c(!1),onClick:()=>c(!1)},{children:e})),(0,m.jsx)(kd,{children:(0,m.jsx)(Wa,{children:b===s.route&&!l&&d&&(0,m.jsx)(xd,Object.assign({$useTheme:u.theme,$useMode:u.mode,$customTheme:u.customTheme},{children:(0,m.jsx)(yf,{children:(0,m.jsxs)(bf,Object.assign({role:"tooltip",$size:f,ref:w,initial:"collapsed",animate:g?"open":{},exit:"collapsed",variants:{collapsed:{transformOrigin:"20px 50%",opacity:0,scale:.9,z:.01,y:"-50%",x:20,transition:{duration:.1}},open:{willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:"-50%",x:20,transition:{ease:[.76,0,.24,1],duration:.15,delay:o||.5}}}},{children:[t,(0,m.jsx)(wf,{$size:f})]}))})}))})})]})},Af=xu(Ua.div)`
  display: flex;
  gap: 8px;
  position: relative;
  border-radius: 9px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  max-width: 260px;
  min-width: 100%;

  border-radius: var(--ck-alert-border-radius, 12px);
  color: var(--ck-alert-color, var(--ck-body-color-muted));
  background: var(--ck-alert-background, var(--ck-body-background-secondary));
  box-shadow: var(--ck-alert-box-shadow, var(--ck-body-box-shadow));

  @media only screen and (max-width: ${sc}px) {
    padding: 16px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 24px;
    text-align: center;
  }
`,Ef=xu(Ua.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,Cf=v.forwardRef((({children:e,icon:t},r)=>(0,m.jsxs)(Af,{children:[t&&(0,m.jsx)(Ef,{children:t}),(0,m.jsx)("div",{children:e})]})));Cf.displayName="Alert";const xf=xu(Ua.div)`
  z-index: 4;
  position: relative;
  width: 100px;
  height: 100px;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`,kf=xu(Ua.div)`
  z-index: 2;
  position: absolute;
  //overflow: hidden;
  inset: 6px;
  border-radius: 50px;
  background: var(--ck-body-background);
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    pointer-events: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    ${e=>e.$small&&uu`
        width: 60%;
        height: 60%;
      `}
  }
`,Sf=xu(Ua.div)`
  position: absolute;
  inset: -5px;
`,Of=xu(Ua.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  background: var(--ck-body-background);
  div:first-child {
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 0% 50%;
      animation: rotateExpiringSpinner 5000ms ease-in both;
    }
  }
  div:last-child {
    position: absolute;
    left: 0;
    right: 50%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 100% 50%;
      animation: rotateExpiringSpinner 5000ms ease-out 5000ms both;
    }
  }
  @keyframes rotateExpiringSpinner {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`,Df=xu(Ua.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: 0;
  svg {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Bf=({logo:e,smallLogo:t,connecting:r=!0,unavailable:n=!1,countdown:i=!1})=>(0,m.jsxs)(xf,Object.assign({transition:{duration:.5,ease:[.175,.885,.32,.98]}},{children:[(0,m.jsx)(kf,Object.assign({$small:!n&&t,style:n?{borderRadius:0}:void 0},{children:e})),(0,m.jsx)(Sf,{children:(0,m.jsxs)(Wa,{children:[r&&(0,m.jsx)(Df,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:i?1:0}}},{children:(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"102",height:"102",viewBox:"0 0 102 102",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M52 100C24.3858 100 2 77.6142 2 50",stroke:"url(#paint0_linear_1943_4139)",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_1943_4139",x1:"2",y1:"48.5",x2:"53",y2:"100",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-spinner-color)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]}))})]}))}),"Spinner"),i&&(0,m.jsxs)(Of,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25}},{children:[(0,m.jsx)("div",{}),(0,m.jsx)("div",{})]}),"ExpiringSpinner")]})})]})),If=xu(Ua.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 32px;
  max-height: 32px;
  width: 100%;
  height: 100%;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;var Mf={Chrome:(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("g",Object.assign({filter:"url(#filter0_ii_927_5781)"},{children:(0,m.jsxs)("g",Object.assign({clipPath:"url(#clip0_927_5781)"},{children:[(0,m.jsx)("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"#DB4437"}),(0,m.jsx)("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"url(#paint0_linear_927_5781)"}),(0,m.jsx)("path",{d:"M6.17038 12.2272L1.64538 4.46582L1.57947 4.57946L6.07265 12.284L6.17038 12.2272Z",fill:"black",fillOpacity:"0.15"}),(0,m.jsx)("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"#0F9D58"}),(0,m.jsx)("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"url(#paint1_linear_927_5781)"}),(0,m.jsx)("path",{d:"M13.8412 12.4208L13.7469 12.3662L9.38324 19.9969H9.51392L13.8435 12.4242L13.8412 12.4208Z",fill:"#263238",fillOpacity:"0.15"}),(0,m.jsx)("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"#FFCD40"}),(0,m.jsx)("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"url(#paint2_linear_927_5781)"}),(0,m.jsx)("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"#FFCD40"}),(0,m.jsx)("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"url(#paint3_linear_927_5781)"}),(0,m.jsx)("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"#DB4437"}),(0,m.jsx)("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"url(#paint4_linear_927_5781)"}),(0,m.jsx)("path",{d:"M10 5.45459V7.83527L18.9091 5.45459H10Z",fill:"url(#paint5_radial_927_5781)"}),(0,m.jsx)("path",{d:"M0 19.9998H9.51932L11.9318 15.9089L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"#0F9D58"}),(0,m.jsx)("path",{d:"M0 19.9998H9.51932L12.1023 15.5112L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"url(#paint6_linear_927_5781)"}),(0,m.jsx)("path",{d:"M1.58771 4.59668L8.09339 11.1012L6.06384 12.2728L1.58771 4.59668Z",fill:"url(#paint7_radial_927_5781)"}),(0,m.jsx)("path",{d:"M9.52661 19.9884L11.9084 11.1021L13.938 12.2725L9.52661 19.9884Z",fill:"url(#paint8_radial_927_5781)"}),(0,m.jsx)("path",{d:"M10.0003 14.5455C12.5107 14.5455 14.5458 12.5104 14.5458 10C14.5458 7.48966 12.5107 5.45459 10.0003 5.45459C7.48996 5.45459 5.4549 7.48966 5.4549 10C5.4549 12.5104 7.48996 14.5455 10.0003 14.5455Z",fill:"#F1F1F1"}),(0,m.jsx)("path",{d:"M9.99995 13.6365C12.0083 13.6365 13.6363 12.0084 13.6363 10.0001C13.6363 7.99183 12.0083 6.36377 9.99995 6.36377C7.99164 6.36377 6.36359 7.99183 6.36359 10.0001C6.36359 12.0084 7.99164 13.6365 9.99995 13.6365Z",fill:"#4285F4"}),(0,m.jsx)("path",{d:"M10.0003 5.34082C7.48899 5.34082 5.4549 7.37491 5.4549 9.88628V9.99991C5.4549 7.48855 7.48899 5.45446 10.0003 5.45446H20.0003V5.34082H10.0003Z",fill:"black",fillOpacity:"0.2"}),(0,m.jsx)("path",{d:"M13.9318 12.273C13.1455 13.6299 11.6818 14.5458 10 14.5458C8.31818 14.5458 6.85227 13.6299 6.06818 12.273H6.06364L0 1.87305V1.98668L6.06818 12.3867C6.85455 13.7435 8.31818 14.6594 10 14.6594C11.6818 14.6594 13.1455 13.7446 13.9318 12.3867H13.9375V12.273H13.9307H13.9318Z",fill:"white",fillOpacity:"0.1"}),(0,m.jsx)("path",{opacity:"0.1",d:"M10.1133 5.45459C10.094 5.45459 10.0758 5.45686 10.0565 5.458C12.5406 5.48868 14.5452 7.50913 14.5452 10C14.5452 12.491 12.5406 14.5114 10.0565 14.5421C10.0758 14.5421 10.094 14.5455 10.1133 14.5455C12.6247 14.5455 14.6588 12.5114 14.6588 10C14.6588 7.48868 12.6247 5.45459 10.1133 5.45459Z",fill:"black"}),(0,m.jsx)("path",{d:"M13.9769 12.4204C14.3632 11.7522 14.5871 10.9795 14.5871 10.1522C14.5874 9.68602 14.5157 9.22262 14.3746 8.77832C14.4826 9.16696 14.5451 9.57377 14.5451 9.99764C14.5451 10.8249 14.3212 11.5976 13.9348 12.2658L13.9371 12.2704L9.51892 19.9976H9.65074L13.9769 12.4204Z",fill:"white",fillOpacity:"0.2"}),(0,m.jsx)("path",{d:"M10 0.113636C15.5034 0.113636 19.9682 4.56023 20 10.0568C20 10.0375 20.0011 10.0193 20.0011 10C20.0011 4.47727 15.5239 0 10.0011 0C4.47841 0 0 4.47727 0 10C0 10.0193 0.00113639 10.0375 0.00113639 10.0568C0.0318182 4.56023 4.49659 0.113636 10 0.113636Z",fill:"white",fillOpacity:"0.2"}),(0,m.jsx)("path",{d:"M10 19.8865C15.5034 19.8865 19.9682 15.4399 20 9.94336C20 9.96268 20.0011 9.98086 20.0011 10.0002C20.0011 15.5229 15.5239 20.0002 10.0011 20.0002C4.47841 20.0002 0 15.5229 0 10.0002C0 9.98086 0.00113639 9.96268 0.00113639 9.94336C0.0318182 15.4399 4.49659 19.8865 10.0011 19.8865H10Z",fill:"black",fillOpacity:"0.15"})]}))})),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("filter",Object.assign({id:"filter0_ii_927_5781",x:0,y:"-0.235294",width:20,height:"20.4706",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},{children:[(0,m.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),(0,m.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,m.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,m.jsx)("feOffset",{dy:"0.235294"}),(0,m.jsx)("feGaussianBlur",{stdDeviation:"0.235294"}),(0,m.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,m.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),(0,m.jsx)("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_927_5781"}),(0,m.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,m.jsx)("feOffset",{dy:"-0.235294"}),(0,m.jsx)("feGaussianBlur",{stdDeviation:"0.235294"}),(0,m.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,m.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),(0,m.jsx)("feBlend",{mode:"normal",in2:"effect1_innerShadow_927_5781",result:"effect2_innerShadow_927_5781"})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_927_5781",x1:"2.42521",y1:"7.61591",x2:"8.39112",y2:"4.13068",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),(0,m.jsx)("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint1_linear_927_5781",x1:"11.6932",y1:"17.7844",x2:"5.06136",y2:"13.8981",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#055524",stopOpacity:"0.4"}),(0,m.jsx)("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint2_linear_927_5781",x1:"12.9438",y1:"4.75004",x2:"14.6143",y2:"12.0569",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),(0,m.jsx)("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint3_linear_927_5781",x1:"12.9428",y1:"4.75004",x2:"14.6132",y2:"12.0569",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),(0,m.jsx)("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint4_linear_927_5781",x1:"2.42441",y1:"7.61591",x2:"8.39032",y2:"4.13068",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),(0,m.jsx)("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint5_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.56818 5.44891) scale(9.55455)"},{children:[(0,m.jsx)("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),(0,m.jsx)("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint6_linear_927_5781",x1:"11.6932",y1:"17.7839",x2:"5.06136",y2:"13.8976",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#055524",stopOpacity:"0.4"}),(0,m.jsx)("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint7_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(1.57975 4.60463) scale(8.86818)"},{children:[(0,m.jsx)("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),(0,m.jsx)("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint8_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.97775 10.0157) scale(9.98523)"},{children:[(0,m.jsx)("stop",{stopColor:"#263238",stopOpacity:"0.2"}),(0,m.jsx)("stop",{offset:1,stopColor:"#263238",stopOpacity:0})]})),(0,m.jsx)("clipPath",Object.assign({id:"clip0_927_5781"},{children:(0,m.jsx)("rect",{width:20,height:20,rx:10,fill:"white"})}))]})]})),FireFox:(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsxs)("g",Object.assign({clipPath:"url(#clip0_927_5847)"},{children:[(0,m.jsx)("path",{d:"M19.011 6.71023C18.5898 5.69685 17.7355 4.60269 17.0665 4.25681C17.5436 5.18063 17.8747 6.17276 18.0481 7.19792L18.0499 7.21417C16.954 4.48315 15.0963 3.38023 13.5782 0.981835C13.5014 0.860539 13.4246 0.738994 13.3498 0.610696C13.3071 0.537418 13.2728 0.471393 13.2431 0.410621C13.1801 0.288713 13.1316 0.159878 13.0985 0.0267267C13.0985 0.0205825 13.0963 0.0146369 13.0923 0.0100242C13.0882 0.00541151 13.0826 0.00245454 13.0765 0.00171737C13.0705 7.85858e-05 13.0642 7.85858e-05 13.0582 0.00171737C13.057 0.00171737 13.055 0.00396821 13.0535 0.0044684C13.052 0.00496859 13.0487 0.00721943 13.0465 0.00821981L13.0502 0.00171737C10.6156 1.42725 9.78901 4.06574 9.71399 5.38624C8.74136 5.45292 7.81141 5.81121 7.04549 6.41437C6.96561 6.34671 6.88212 6.28343 6.79539 6.2248C6.57456 5.45174 6.56514 4.6336 6.76813 3.85566C5.87401 4.28877 5.07954 4.90279 4.43501 5.65884H4.43051C4.04636 5.17191 4.07337 3.5663 4.09538 3.23093C3.98174 3.2766 3.87326 3.33419 3.77176 3.40274C3.43264 3.64477 3.11562 3.91635 2.8244 4.2143C2.49255 4.55075 2.18946 4.91441 1.91831 5.30146V5.30296V5.3012C1.29521 6.18444 0.853213 7.18234 0.617826 8.23731L0.604821 8.30133C0.586564 8.38661 0.52079 8.81377 0.509535 8.90656C0.509535 8.91381 0.508035 8.92056 0.507285 8.92781C0.42244 9.36882 0.369864 9.81542 0.349976 10.2641V10.3141C0.354259 12.7396 1.26772 15.0754 2.91002 16.8604C4.55233 18.6454 6.80415 19.7498 9.22094 19.9556C11.6377 20.1615 14.0439 19.4538 15.9644 17.9723C17.8849 16.4908 19.1803 14.3431 19.5947 11.9532C19.6109 11.8282 19.6242 11.7044 19.6387 11.5781C19.8384 9.92791 19.6222 8.25404 19.01 6.70873L19.011 6.71023ZM7.83928 14.2981C7.88455 14.3198 7.92707 14.3433 7.97358 14.3641L7.98034 14.3684C7.93332 14.3458 7.8863 14.3224 7.83928 14.2981ZM18.0501 7.21692V7.20767L18.0519 7.21792L18.0501 7.21692Z",fill:"url(#paint0_linear_927_5847)"}),(0,m.jsx)("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint1_radial_927_5847)"}),(0,m.jsx)("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint2_radial_927_5847)"}),(0,m.jsx)("path",{d:"M14.2993 7.84794C14.3203 7.8627 14.3398 7.87745 14.3595 7.89221C14.1161 7.46047 13.813 7.06519 13.4592 6.71802C10.4456 3.70439 12.6696 0.18557 13.0445 0.00550206L13.0483 0C10.6136 1.42553 9.78706 4.06402 9.71204 5.38452C9.82508 5.37677 9.93712 5.36726 10.0527 5.36726C10.9164 5.36893 11.7644 5.59929 12.5103 6.03492C13.2562 6.47055 13.8734 7.09592 14.2993 7.84744V7.84794Z",fill:"url(#paint3_radial_927_5847)"}),(0,m.jsx)("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint4_radial_927_5847)"}),(0,m.jsx)("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint5_radial_927_5847)"}),(0,m.jsx)("path",{d:"M6.59134 6.0923C6.66987 6.14231 6.73464 6.18583 6.79141 6.2251C6.57058 5.45204 6.56117 4.63389 6.76415 3.85596C5.87003 4.28907 5.07556 4.90308 4.43103 5.65913C4.4783 5.65788 5.88432 5.63262 6.59134 6.0923Z",fill:"url(#paint6_radial_927_5847)"}),(0,m.jsx)("path",{d:"M0.437567 10.5439C1.1856 14.963 5.19185 18.3393 9.73855 18.4668C13.9476 18.5859 16.6361 16.1425 17.7466 13.7601C18.6873 11.6998 18.7954 9.35569 18.0482 7.21762V7.20837C18.0482 7.20111 18.0467 7.19686 18.0482 7.19911L18.0499 7.21537C18.3938 9.46046 17.2519 11.6345 15.4665 13.1076L15.4609 13.1201C11.9821 15.9536 8.6534 14.8292 7.98064 14.3706C7.93363 14.348 7.88661 14.3246 7.83959 14.3003C5.81158 13.3309 4.97352 11.4842 5.15358 9.89862C4.67218 9.90573 4.19905 9.77307 3.79151 9.51672C3.38397 9.26038 3.05952 8.89134 2.85747 8.45433C3.38987 8.1282 3.99692 7.94382 4.62077 7.91878C5.24461 7.89374 5.86448 8.02887 6.42131 8.31128C7.56906 8.83225 8.87507 8.8836 10.0602 8.45433C10.0564 8.37555 8.36954 7.70405 7.71179 7.05631C7.36041 6.70993 7.1936 6.54312 7.04579 6.41782C6.96591 6.35016 6.88243 6.28688 6.7957 6.22825C6.73818 6.18898 6.6734 6.14647 6.59562 6.09545C5.88861 5.63578 4.48258 5.66104 4.43607 5.66229H4.43156C4.04742 5.17535 4.07443 3.56975 4.09644 3.23438C3.9828 3.28005 3.87431 3.33764 3.77282 3.40619C3.4337 3.64822 3.11667 3.91979 2.82546 4.21774C2.49242 4.55325 2.18808 4.91607 1.91562 5.3024V5.3039V5.30215C1.29252 6.18539 0.850521 7.18329 0.615133 8.23825C0.610381 8.25801 0.266002 9.76357 0.435816 10.5444L0.437567 10.5439Z",fill:"url(#paint7_radial_927_5847)"}),(0,m.jsx)("path",{d:"M13.459 6.71761C13.8128 7.06516 14.1159 7.46087 14.3593 7.89305C14.4126 7.93331 14.4624 7.97333 14.5046 8.01209C16.7022 10.0378 15.5508 12.9014 15.465 13.104C17.2502 11.6332 18.3911 9.45763 18.0485 7.21179C16.952 4.47826 15.0923 3.37535 13.5768 0.976952C13.5 0.855657 13.4232 0.734111 13.3484 0.605813C13.3057 0.532535 13.2714 0.466511 13.2417 0.405738C13.1787 0.283831 13.1302 0.154995 13.0971 0.0218439C13.0971 0.0156997 13.0949 0.0097541 13.0909 0.0051414C13.0868 0.000528701 13.0812 -0.00242828 13.0751 -0.00316545C13.0691 -0.00480423 13.0628 -0.00480423 13.0568 -0.00316545C13.0556 -0.00316545 13.0536 -0.000914601 13.0521 -0.000414413C13.0506 8.57743e-05 13.0473 0.00233662 13.0451 0.00333699C12.6702 0.181154 10.4466 3.70222 13.4602 6.71335L13.459 6.71761Z",fill:"url(#paint8_radial_927_5847)"}),(0,m.jsx)("path",{d:"M14.5043 8.01315C14.462 7.97439 14.4122 7.93437 14.359 7.8941C14.3392 7.87935 14.3197 7.86459 14.2987 7.84984C13.6169 7.37759 12.784 7.17536 11.9616 7.28238C15.4479 9.02553 14.5125 15.0278 9.68095 14.8027C9.25075 14.785 8.82562 14.703 8.41973 14.5594C8.32486 14.5238 8.22999 14.485 8.13512 14.4428C8.08035 14.4178 8.02558 14.3928 7.97156 14.3648L7.97831 14.369C8.65206 14.829 11.9798 15.9526 15.4586 13.1186L15.4641 13.1061C15.5509 12.9035 16.7023 10.0399 14.5038 8.01415L14.5043 8.01315Z",fill:"url(#paint9_radial_927_5847)"}),(0,m.jsx)("path",{d:"M5.68842 11.1892C5.68842 11.1892 6.13583 9.52179 8.89212 9.52179C9.18998 9.52179 10.0425 8.69023 10.0578 8.44914C8.8727 8.8784 7.56669 8.82706 6.41894 8.30608C5.86211 8.02367 5.24224 7.88855 4.61839 7.91359C3.99455 7.93863 3.3875 8.123 2.8551 8.44914C3.05715 8.88615 3.3816 9.25518 3.78914 9.51153C4.19668 9.76787 4.66981 9.90053 5.15121 9.89343C4.97165 11.4783 5.80946 13.3247 7.83722 14.2951C7.88249 14.3168 7.925 14.3403 7.97152 14.3611C6.78783 13.7496 5.81046 12.5932 5.68842 11.1899V11.1892Z",fill:"url(#paint10_radial_927_5847)"}),(0,m.jsx)("path",{d:"M19.0112 6.71023C18.59 5.69685 17.7357 4.60269 17.0667 4.25681C17.5438 5.18063 17.8749 6.17276 18.0483 7.19792L18.0501 7.21417C16.9542 4.48315 15.0965 3.38023 13.5784 0.981835C13.5016 0.860539 13.4249 0.738994 13.3501 0.610696C13.3073 0.537418 13.2731 0.471393 13.2433 0.410621C13.1803 0.288713 13.1318 0.159878 13.0987 0.0267267C13.0988 0.0205825 13.0966 0.0146369 13.0925 0.0100242C13.0884 0.00541151 13.0828 0.00245454 13.0767 0.00171737C13.0708 7.85859e-05 13.0644 7.85859e-05 13.0585 0.00171737C13.0572 0.00171737 13.0552 0.00396821 13.0537 0.0044684C13.0522 0.00496859 13.049 0.00721943 13.0467 0.00821981L13.0505 0.00171737C10.6158 1.42725 9.78925 4.06574 9.71422 5.38624C9.82726 5.37848 9.9393 5.36898 10.0548 5.36898C10.9186 5.37065 11.7666 5.60101 12.5125 6.03664C13.2584 6.47227 13.8756 7.09764 14.3014 7.84916C13.6196 7.37691 12.7868 7.17468 11.9643 7.2817C15.4506 9.02485 14.5153 15.0271 9.68371 14.802C9.25351 14.7843 8.82838 14.7023 8.42248 14.5587C8.32761 14.5232 8.23275 14.4843 8.13788 14.4421C8.08311 14.4171 8.02834 14.3921 7.97432 14.3641L7.98107 14.3684C7.93405 14.3458 7.88703 14.3224 7.84002 14.2981C7.88528 14.3198 7.9278 14.3433 7.97432 14.3641C6.79062 13.7524 5.81326 12.5959 5.69121 11.1929C5.69121 11.1929 6.13863 9.52554 8.89491 9.52554C9.19277 9.52554 10.0453 8.69398 10.0606 8.45289C10.0568 8.37411 8.36996 7.7026 7.71222 7.05486C7.36084 6.70848 7.19402 6.54167 7.04622 6.41637C6.96634 6.34871 6.88285 6.28543 6.79612 6.2268C6.57529 5.45374 6.56588 4.6356 6.76886 3.85766C5.87474 4.29077 5.08027 4.90479 4.43574 5.66084H4.43124C4.04709 5.17391 4.0741 3.5683 4.09611 3.23293C3.98247 3.2786 3.87399 3.33619 3.77249 3.40474C3.43337 3.64677 3.11635 3.91835 2.82514 4.2163C2.49328 4.55275 2.19019 4.91641 1.91905 5.30345V5.30496V5.30321C1.29595 6.18644 0.853946 7.18434 0.618558 8.23931L0.605554 8.30333C0.587297 8.38861 0.505516 8.82177 0.493762 8.91481C0.418959 9.36194 0.371188 9.81318 0.350708 10.2661V10.3161C0.354992 12.7416 1.26845 15.0774 2.91076 16.8624C4.55307 18.6474 6.80488 19.7518 9.22168 19.9576C11.6385 20.1635 14.0446 19.4558 15.9652 17.9743C17.8857 16.4928 19.181 14.3451 19.5954 11.9552C19.6117 11.8302 19.6249 11.7064 19.6394 11.5801C19.8391 9.92991 19.623 8.25604 19.0107 6.71073L19.0112 6.71023ZM18.0496 7.20817L18.0513 7.21842L18.0496 7.20817Z",fill:"url(#paint11_linear_927_5847)"})]})),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_927_5847",x1:"17.728",y1:"3.09786",x2:"1.63621",y2:"18.6237",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{offset:"0.048",stopColor:"#FFF44F"}),(0,m.jsx)("stop",{offset:"0.111",stopColor:"#FFE847"}),(0,m.jsx)("stop",{offset:"0.225",stopColor:"#FFC830"}),(0,m.jsx)("stop",{offset:"0.368",stopColor:"#FF980E"}),(0,m.jsx)("stop",{offset:"0.401",stopColor:"#FF8B16"}),(0,m.jsx)("stop",{offset:"0.462",stopColor:"#FF672A"}),(0,m.jsx)("stop",{offset:"0.534",stopColor:"#FF3647"}),(0,m.jsx)("stop",{offset:"0.705",stopColor:"#E31587"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint1_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(17.1052 2.25108) scale(20.2076)"},{children:[(0,m.jsx)("stop",{offset:"0.129",stopColor:"#FFBD4F"}),(0,m.jsx)("stop",{offset:"0.186",stopColor:"#FFAC31"}),(0,m.jsx)("stop",{offset:"0.247",stopColor:"#FF9D17"}),(0,m.jsx)("stop",{offset:"0.283",stopColor:"#FF980E"}),(0,m.jsx)("stop",{offset:"0.403",stopColor:"#FF563B"}),(0,m.jsx)("stop",{offset:"0.467",stopColor:"#FF3750"}),(0,m.jsx)("stop",{offset:"0.71",stopColor:"#F5156C"}),(0,m.jsx)("stop",{offset:"0.782",stopColor:"#EB0878"}),(0,m.jsx)("stop",{offset:"0.86",stopColor:"#E50080"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint2_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.6024 10.5042) scale(20.2076)"},{children:[(0,m.jsx)("stop",{offset:"0.3",stopColor:"#960E18"}),(0,m.jsx)("stop",{offset:"0.351",stopColor:"#B11927",stopOpacity:"0.74"}),(0,m.jsx)("stop",{offset:"0.435",stopColor:"#DB293D",stopOpacity:"0.343"}),(0,m.jsx)("stop",{offset:"0.497",stopColor:"#F5334B",stopOpacity:"0.094"}),(0,m.jsx)("stop",{offset:"0.53",stopColor:"#FF3750",stopOpacity:0})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint3_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.1034 -2.25084) scale(14.638)"},{children:[(0,m.jsx)("stop",{offset:"0.132",stopColor:"#FFF44F"}),(0,m.jsx)("stop",{offset:"0.252",stopColor:"#FFDC3E"}),(0,m.jsx)("stop",{offset:"0.506",stopColor:"#FF9D12"}),(0,m.jsx)("stop",{offset:"0.526",stopColor:"#FF980E"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint4_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(7.35173 15.7558) scale(9.62111)"},{children:[(0,m.jsx)("stop",{offset:"0.353",stopColor:"#3A8EE6"}),(0,m.jsx)("stop",{offset:"0.472",stopColor:"#5C79F0"}),(0,m.jsx)("stop",{offset:"0.669",stopColor:"#9059FF"}),(0,m.jsx)("stop",{offset:1,stopColor:"#C139E6"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint5_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(10.5799 8.76923) rotate(-13.5916) scale(5.10194 5.97309)"},{children:[(0,m.jsx)("stop",{offset:"0.206",stopColor:"#9059FF",stopOpacity:0}),(0,m.jsx)("stop",{offset:"0.278",stopColor:"#8C4FF3",stopOpacity:"0.064"}),(0,m.jsx)("stop",{offset:"0.747",stopColor:"#7716A8",stopOpacity:"0.45"}),(0,m.jsx)("stop",{offset:"0.975",stopColor:"#6E008B",stopOpacity:"0.6"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint6_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35238 1.50057) scale(6.9226)"},{children:[(0,m.jsx)("stop",{stopColor:"#FFE226"}),(0,m.jsx)("stop",{offset:"0.121",stopColor:"#FFDB27"}),(0,m.jsx)("stop",{offset:"0.295",stopColor:"#FFC82A"}),(0,m.jsx)("stop",{offset:"0.502",stopColor:"#FFA930"}),(0,m.jsx)("stop",{offset:"0.732",stopColor:"#FF7E37"}),(0,m.jsx)("stop",{offset:"0.792",stopColor:"#FF7139"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint7_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.8545 -3.00121) scale(29.5361)"},{children:[(0,m.jsx)("stop",{offset:"0.113",stopColor:"#FFF44F"}),(0,m.jsx)("stop",{offset:"0.456",stopColor:"#FF980E"}),(0,m.jsx)("stop",{offset:"0.622",stopColor:"#FF5634"}),(0,m.jsx)("stop",{offset:"0.716",stopColor:"#FF3647"}),(0,m.jsx)("stop",{offset:"0.904",stopColor:"#E31587"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint8_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.3996 -1.36343) rotate(83.976) scale(21.6445 14.2051)"},{children:[(0,m.jsx)("stop",{stopColor:"#FFF44F"}),(0,m.jsx)("stop",{offset:"0.06",stopColor:"#FFE847"}),(0,m.jsx)("stop",{offset:"0.168",stopColor:"#FFC830"}),(0,m.jsx)("stop",{offset:"0.304",stopColor:"#FF980E"}),(0,m.jsx)("stop",{offset:"0.356",stopColor:"#FF8B16"}),(0,m.jsx)("stop",{offset:"0.455",stopColor:"#FF672A"}),(0,m.jsx)("stop",{offset:"0.57",stopColor:"#FF3647"}),(0,m.jsx)("stop",{offset:"0.737",stopColor:"#E31587"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint9_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35233 4.00165) scale(18.4369)"},{children:[(0,m.jsx)("stop",{offset:"0.137",stopColor:"#FFF44F"}),(0,m.jsx)("stop",{offset:"0.48",stopColor:"#FF980E"}),(0,m.jsx)("stop",{offset:"0.592",stopColor:"#FF5634"}),(0,m.jsx)("stop",{offset:"0.655",stopColor:"#FF3647"}),(0,m.jsx)("stop",{offset:"0.904",stopColor:"#E31587"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint10_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.1041 5.00184) scale(20.1801)"},{children:[(0,m.jsx)("stop",{offset:"0.094",stopColor:"#FFF44F"}),(0,m.jsx)("stop",{offset:"0.231",stopColor:"#FFE141"}),(0,m.jsx)("stop",{offset:"0.509",stopColor:"#FFAF1E"}),(0,m.jsx)("stop",{offset:"0.626",stopColor:"#FF980E"})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint11_linear_927_5847",x1:"17.5331",y1:"3.01533",x2:"3.84302",y2:"16.708",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{offset:"0.167",stopColor:"#FFF44F",stopOpacity:"0.8"}),(0,m.jsx)("stop",{offset:"0.266",stopColor:"#FFF44F",stopOpacity:"0.634"}),(0,m.jsx)("stop",{offset:"0.489",stopColor:"#FFF44F",stopOpacity:"0.217"}),(0,m.jsx)("stop",{offset:"0.6",stopColor:"#FFF44F",stopOpacity:0})]})),(0,m.jsx)("clipPath",Object.assign({id:"clip0_927_5847"},{children:(0,m.jsx)("rect",{width:20,height:20,fill:"white"})}))]})]})),Brave:(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M17.2924 5.22043L17.7256 4.15905L16.4982 2.8883C15.8339 2.22404 14.4187 2.61393 14.4187 2.61393L12.8158 0.794434H7.16242L5.55231 2.62115C5.55231 2.62115 4.13715 2.23848 3.47289 2.8883L2.24545 4.15183L2.67866 5.21321L2.13715 6.78721L3.9422 13.6681C4.31765 15.141 4.57036 15.7114 5.63173 16.4623L8.93137 18.7006C9.24906 18.8955 9.63895 19.2349 9.99274 19.2349C10.3465 19.2349 10.7364 18.8955 11.0541 18.7006L14.3538 16.4623C15.4151 15.7114 15.6678 15.141 16.0433 13.6681L17.8483 6.78721L17.2924 5.22043Z",fill:"url(#paint0_linear_927_5861)"}),(0,m.jsx)("path",{d:"M13.9711 3.78343C13.9711 3.78343 16.0433 6.28884 16.0433 6.81592C16.0433 7.35744 15.7834 7.49462 15.5234 7.77621L13.9711 9.43686C13.8267 9.58126 13.5162 9.82675 13.6967 10.2527C13.8772 10.686 14.1299 11.2203 13.8411 11.769C13.5523 12.3249 13.0469 12.6932 12.722 12.6354C12.2387 12.4786 11.7777 12.2602 11.3502 11.9856C11.0758 11.8051 10.1949 11.0758 10.1949 10.7943C10.1949 10.5127 11.1047 10 11.278 9.89895C11.444 9.78343 12.2166 9.33577 12.231 9.16249C12.2455 8.9892 12.2455 8.94588 12.0144 8.51267C11.7834 8.07946 11.379 7.50184 11.4368 7.12639C11.509 6.75094 12.1588 6.54877 12.6426 6.36827L14.1372 5.80509C14.2527 5.74733 14.2238 5.69679 13.8772 5.66068C13.5307 5.6318 12.5559 5.50184 12.1155 5.62458C11.6751 5.74733 10.9386 5.93505 10.8664 6.03614C10.8086 6.13722 10.7509 6.13722 10.8159 6.48379L11.2346 8.75816C11.2635 9.04697 11.3213 9.24191 11.018 9.31411C10.7003 9.38632 10.1733 9.50906 9.99276 9.50906C9.81225 9.50906 9.27796 9.38632 8.96749 9.31411C8.65702 9.24191 8.71478 9.04697 8.75088 8.75816C8.77976 8.46935 9.09745 6.82314 9.16243 6.48379C9.23464 6.13722 9.16965 6.13722 9.11189 6.03614C9.03969 5.93505 8.29601 5.74733 7.85558 5.62458C7.42236 5.50184 6.44041 5.6318 6.09384 5.66791C5.74727 5.69679 5.71839 5.74011 5.83391 5.81231L7.3285 6.36827C7.80503 6.54877 8.46929 6.75094 8.53428 7.12639C8.60648 7.50906 8.19493 8.07946 7.95666 8.51267C7.71839 8.94588 7.72561 8.9892 7.74005 9.16249C7.75449 9.33577 8.53428 9.78343 8.69312 9.89895C8.86641 10.0073 9.77615 10.5127 9.77615 10.7943C9.77615 11.0758 8.91695 11.8051 8.62814 11.9856C8.20063 12.2602 7.73957 12.4786 7.2563 12.6354C6.93139 12.6932 6.42597 12.3249 6.12994 11.769C5.84113 11.2203 6.10106 10.686 6.27435 10.2527C6.45485 9.81953 6.1516 9.58848 5.99998 9.43686L4.44763 7.77621C4.19493 7.50906 3.935 7.36466 3.935 6.83036C3.935 6.29606 6.0072 3.79787 6.0072 3.79787L7.97832 4.11556C8.20937 4.11556 8.722 3.92061 9.19132 3.75455C9.66063 3.61014 9.98554 3.5957 9.98554 3.5957C9.98554 3.5957 10.3032 3.5957 10.7798 3.75455C11.2563 3.91339 11.7617 4.11556 11.9928 4.11556C12.231 4.11556 13.9783 3.77621 13.9783 3.77621L13.9711 3.78343ZM12.4188 13.3719C12.5487 13.4441 12.4693 13.6029 12.3465 13.6896L10.5126 15.1192C10.3682 15.2636 10.1372 15.4802 9.98554 15.4802C9.83391 15.4802 9.61009 15.2636 9.45846 15.1192C8.8506 14.6351 8.23683 14.1586 7.61731 13.6896C7.50178 13.6029 7.42236 13.4513 7.54511 13.3719L8.62814 12.7943C9.05864 12.5665 9.51417 12.3897 9.98554 12.2672C10.0938 12.2672 10.7798 12.5127 11.3357 12.7943L12.4188 13.3719Z",fill:"white"}),(0,m.jsx)("path",{d:"M14.4332 2.62115L12.8159 0.794434H7.16243L5.55232 2.62115C5.55232 2.62115 4.13716 2.23848 3.4729 2.8883C3.4729 2.8883 5.35016 2.72223 5.99998 3.77638L7.99276 4.11573C8.2238 4.11573 8.73644 3.92079 9.20575 3.75472C9.67507 3.61032 9.99998 3.59588 9.99998 3.59588C9.99998 3.59588 10.3177 3.59588 10.7942 3.75472C11.2707 3.91357 11.7761 4.11573 12.0072 4.11573C12.2455 4.11573 13.9928 3.77638 13.9928 3.77638C14.6426 2.72223 16.5198 2.8883 16.5198 2.8883C15.8556 2.22404 14.4404 2.61393 14.4404 2.61393",fill:"url(#paint1_linear_927_5861)"}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_927_5861",x1:"2.13715",y1:"10.1991",x2:"17.8483",y2:"10.1991",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{offset:"0.4",stopColor:"#FF5500"}),(0,m.jsx)("stop",{offset:"0.6",stopColor:"#FF2000"})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint1_linear_927_5861",x1:"3.73384",y1:"2.4883",x2:"16.5198",y2:"2.4883",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#FF452A"}),(0,m.jsx)("stop",{offset:1,stopColor:"#FF2000"})]}))]})]})),Edge:(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsxs)("g",Object.assign({clipPath:"url(#clip0_927_5865)"},{children:[(0,m.jsx)("path",{d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint0_linear_927_5865)"}),(0,m.jsx)("path",{opacity:"0.35",d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint1_radial_927_5865)"}),(0,m.jsx)("path",{d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint2_linear_927_5865)"}),(0,m.jsx)("path",{opacity:"0.41",d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint3_radial_927_5865)"}),(0,m.jsx)("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint4_radial_927_5865)"}),(0,m.jsx)("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint5_radial_927_5865)"})]})),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_927_5865",x1:"4.58594",y1:"13.8281",x2:"18.5234",y2:"13.8281",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#0C59A4"}),(0,m.jsx)("stop",{offset:1,stopColor:"#114A8B"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint1_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.2813 13.9332) scale(7.45313 7.08047)"},{children:[(0,m.jsx)("stop",{offset:"0.7",stopOpacity:0}),(0,m.jsx)("stop",{offset:"0.9",stopOpacity:"0.5"}),(0,m.jsx)("stop",{offset:1})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint2_linear_927_5865",x1:"11.9297",y1:"7.78125",x2:"3.23436",y2:"17.2578",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"#1B9DE2"}),(0,m.jsx)("stop",{offset:"0.2",stopColor:"#1595DF"}),(0,m.jsx)("stop",{offset:"0.7",stopColor:"#0680D7"}),(0,m.jsx)("stop",{offset:1,stopColor:"#0078D4"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint3_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(5.51209 15.5419) rotate(-81.3844) scale(11.202 9.05011)"},{children:[(0,m.jsx)("stop",{offset:"0.8",stopOpacity:0}),(0,m.jsx)("stop",{offset:"0.9",stopOpacity:"0.5"}),(0,m.jsx)("stop",{offset:1})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint4_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(2.02266 3.69656) rotate(92.2906) scale(15.8251 33.7043)"},{children:[(0,m.jsx)("stop",{stopColor:"#35C1F1"}),(0,m.jsx)("stop",{offset:"0.1",stopColor:"#34C1ED"}),(0,m.jsx)("stop",{offset:"0.2",stopColor:"#2FC2DF"}),(0,m.jsx)("stop",{offset:"0.3",stopColor:"#2BC3D2"}),(0,m.jsx)("stop",{offset:"0.7",stopColor:"#36C752"})]})),(0,m.jsxs)("radialGradient",Object.assign({id:"paint5_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(18.7547 6.03906) rotate(73.7398) scale(7.60156 6.18159)"},{children:[(0,m.jsx)("stop",{stopColor:"#66EB6E"}),(0,m.jsx)("stop",{offset:1,stopColor:"#66EB6E",stopOpacity:0})]})),(0,m.jsx)("clipPath",Object.assign({id:"clip0_927_5865"},{children:(0,m.jsx)("rect",{width:20,height:20,fill:"white"})}))]})]}))};const Tf=v.forwardRef((({browser:e},t)=>{let r;switch(null!=e?e:tc()){case"chrome":r=Mf.Chrome;break;case"firefox":r=Mf.FireFox;break;case"edge":r=Mf.Edge}return r?(0,m.jsx)(If,{children:r}):(0,m.jsx)(m.Fragment,{})}));Tf.displayName="BrowserIcon";const Ff="connected",jf="connecting",Pf="expiring",Nf="failed",Rf="rejected",Lf="notconnected",Uf="unavailable",zf={initial:{willChange:"transform,opacity",position:"relative",opacity:0,scale:.95},animate:{position:"relative",opacity:1,scale:1,transition:{ease:[.16,1,.3,1],duration:.4,delay:.05,position:{delay:0}}},exit:{position:"absolute",opacity:0,scale:.95,transition:{ease:[.16,1,.3,1],duration:.3}}},Vf=({connectorId:e,switchConnectMethod:t,forceState:r})=>{var n,i;const a=ym(),s=Zc[a.lang].injectionScreen,{chains:u}=(0,o.useNetwork)(),{connect:d,connectors:c}=(0,o.useConnect)({onMutate:e=>{e.connector?E(jf):E(Uf)},onError(e){console.error(e)},onSettled(e,t){if(t)if(h(!0),setTimeout((()=>h(!1)),3500),t.code)switch(t.code){case-32002:E(Lf);break;case 4001:E(Rf);break;default:E(Nf)}else t.message&&("User rejected request"===t.message?E(Rf):E(Nf))}}),[l,p]=(0,v.useState)(e),[f,h]=(0,v.useState)(!1),g=Jd.filter((e=>e.id===l))[0];(0,v.useState)(9);const y=g.extensionIsInstalled&&g.extensionIsInstalled(),b=tc(),w=g.extensions?g.extensions[b]:void 0,_=g.extensions?{name:Object.keys(g.extensions)[0],label:Object.keys(g.extensions)[0].charAt(0).toUpperCase()+Object.keys(g.extensions)[0].slice(1),url:g.extensions[Object.keys(g.extensions)[0]]}:void 0,[A,E]=(0,v.useState)(r||(y?jf:Uf)),C=e=>{var t,r;return Hc(e,{CONNECTORNAME:g.name,CONNECTORSHORTNAME:null!==(t=g.shortName)&&void 0!==t?t:g.name,SUGGESTEDEXTENSIONBROWSER:null!==(r=null==_?void 0:_.label)&&void 0!==r?r:"your browser"})},x=()=>{var e,t,r;if(!y)return;const n=c.find((e=>e.id===l));n?d({connector:n,chainId:null!==(t=null===(e=a.options)||void 0===e?void 0:e.initialChainId)&&void 0!==t?t:null===(r=u[0])||void 0===r?void 0:r.id}):E(Uf)};let k;return(0,v.useEffect)((()=>{if(A!==Uf)return k=setTimeout(x,600),()=>{clearTimeout(k)}}),[]),g?"walletConnect"===g.id?(0,m.jsx)(mc,{children:(0,m.jsxs)(ff,{children:[(0,m.jsx)(gc,{children:"Invalid State"}),(0,m.jsx)(bc,{children:(0,m.jsx)(Cf,{children:"WalletConnect does not have an injection flow. This state should never happen."})})]})}):(0,m.jsx)(mc,{children:(0,m.jsxs)(ff,{children:[(0,m.jsx)(hf,{children:(0,m.jsxs)(mf,Object.assign({$shake:A===Nf||A===Rf,$circle:!0},{children:[(0,m.jsx)(Wa,{children:(A===Nf||A===Rf)&&(0,m.jsx)(vf,Object.assign({"aria-label":"Retry",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileTap:{scale:.9},transition:{duration:.1},onClick:x},{children:(0,m.jsx)(gf,{children:(0,m.jsx)(_f,Object.assign({open:f&&(A===Nf||A===Rf),message:"Try again?",xOffset:-6},{children:(0,m.jsx)(ol,{})}))})}))}),(0,m.jsx)(Bf,{logo:A===Uf?(0,m.jsx)("div",Object.assign({style:{transform:"scale(1.14)",position:"relative",width:"100%"}},{children:null!==(n=g.logos.transparent)&&void 0!==n?n:g.logos.default})):(0,m.jsx)(m.Fragment,{children:null!==(i=g.logos.transparent)&&void 0!==i?i:g.logos.default}),smallLogo:"injected"===g.id,connecting:A===jf,unavailable:A===Uf,countdown:A===Pf})]}))}),(0,m.jsx)(yc,{children:(0,m.jsxs)(Wa,Object.assign({initial:!1},{children:[A===Nf&&(0,m.jsxs)(cf,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:zf},{children:[(0,m.jsxs)(bc,{children:[(0,m.jsxs)(wc,Object.assign({$error:!0},{children:[(0,m.jsx)(rl,{}),C(s.failed.h1)]})),(0,m.jsx)(_c,{children:C(s.failed.p)})]}),g.scannable&&"coinbaseWallet"!==g.id&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(vl,{}),(0,m.jsx)(ql,Object.assign({icon:(0,m.jsx)(el,{}),onClick:()=>t(l)},{children:"Scan the QR code"}))]})]}),Nf),A===Rf&&(0,m.jsxs)(cf,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:zf},{children:[(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:28}},{children:[(0,m.jsx)(wc,{children:C(s.rejected.h1)}),(0,m.jsx)(_c,{children:C(s.rejected.p)})]})),g.scannable&&"coinbaseWallet"!==g.id&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(vl,{}),(0,m.jsx)(ql,Object.assign({icon:(0,m.jsx)(el,{}),onClick:()=>t(l)},{children:"Scan the QR code"}))]})]}),Rf),(A===jf||A===Pf)&&(0,m.jsx)(cf,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:zf},{children:(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:28}},{children:[(0,m.jsx)(wc,{children:C("injected"===g.id?s.connecting.injected_h1:s.connecting.h1)}),(0,m.jsx)(_c,{children:C("injected"===g.id?s.connecting.injected_p:s.connecting.p)})]}))}),jf),A===Ff&&(0,m.jsx)(cf,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:zf},{children:(0,m.jsxs)(bc,{children:[(0,m.jsxs)(wc,Object.assign({$valid:!0},{children:[(0,m.jsx)(il,{})," ",C(s.connected.h1)]})),(0,m.jsx)(_c,{children:C(s.connected.p)})]})}),Ff),A===Lf&&(0,m.jsx)(cf,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:zf},{children:(0,m.jsxs)(bc,{children:[(0,m.jsx)(wc,{children:C(s.notconnected.h1)}),(0,m.jsx)(_c,{children:C(s.notconnected.p)})]})}),Lf),A===Uf&&(0,m.jsx)(cf,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:zf},{children:(0,m.jsxs)(m.Fragment,w?{children:[(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:18}},{children:[(0,m.jsx)(wc,{children:C(s.install.h1)}),(0,m.jsx)(_c,{children:C(s.install.p)})]})),!y&&w&&(0,m.jsx)(ql,Object.assign({href:w,icon:(0,m.jsx)(Tf,{})},{children:"Install the Extension"}))]}:{children:[(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:12}},{children:[(0,m.jsx)(wc,{children:C(s.unavailable.h1)}),(0,m.jsx)(_c,{children:C(s.unavailable.p)})]})),!y&&_&&(0,m.jsxs)(ql,Object.assign({href:null==_?void 0:_.url,icon:(0,m.jsx)(Tf,{browser:null==_?void 0:_.name})},{children:["Install on ",null==_?void 0:_.label]}))]})}),Uf)]}))})]})}):(0,m.jsx)(mc,{children:(0,m.jsxs)(ff,{children:[(0,m.jsx)(gc,{children:"Invalid State"}),(0,m.jsx)(bc,{children:(0,m.jsx)(Cf,{children:"No connectors match the id given. This state should never happen."})})]})})},qf=xu(Ua.div)`
  z-index: 3;
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 2px;
  border-radius: var(--ck-qr-border-radius, 24px);
  background: var(--ck-qr-background, transparent);
  box-shadow: 0 0 0 1px var(--ck-qr-border-color);
  backface-visibility: hidden;
  svg {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`,Hf=xu(Ua.div)`
  position: absolute;
  inset: 13px;
  svg {
    width: 100% !important;
    height: auto !important;
  }
`,Wf=Cu`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,$f=xu(Ua.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /*
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(1.5) rotate(45deg);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.1),
      rgba(255, 255, 255, 0)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${Wf} 1000ms linear infinite both;
  }
  */
`,Kf=xu(Ua.div)`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(50%) scale(0.9999); // Shifting fix
`,Gf=xu(Ua.div)`
  z-index: 6;
  position: absolute;
  left: 50%;
  overflow: hidden;

  transform: translate(-50%, -50%) scale(0.9999); // Shifting fix

  svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${e=>e.$wcLogo?uu`
          width: 29%;
          height: 20.5%;
        `:uu`
          width: 28%;
          height: 28%;
          border-radius: 17px;
          &:before {
            pointer-events: none;
            z-index: 2;
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
          }
        `}
`;function Zf({ecl:e="M",size:t=200,uri:r,clearArea:n=!1,image:i,imageBackground:o="transparent"}){const a=n?76:0,s=t-20,u=(0,v.useMemo)((()=>{const t=[],n=((e,t)=>{const r=Array.prototype.slice.call(Ju.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e),[])})(r,e),u=s/n.length;if([{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach((({x:e,y:r})=>{const i=(n.length-7)*u*e,o=(n.length-7)*u*r;for(let n=0;n<3;n++)t.push((0,m.jsx)("rect",{fill:n%2!=0?"var(--ck-qr-background, var(--ck-body-background))":"var(--ck-qr-dot-color)",rx:-5*(n-2)+(0===n?2:3),ry:-5*(n-2)+(0===n?2:3),width:u*(7-2*n),height:u*(7-2*n),x:i+u*n,y:o+u*n},`${n}-${e}-${r}`))})),i){const e=(n.length-7)*u*1,r=(n.length-7)*u*1;t.push((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("rect",{fill:o,rx:12,ry:12,width:7*u,height:7*u,x:e+0*u,y:r+0*u}),(0,m.jsx)("foreignObject",Object.assign({width:7*u,height:7*u,x:e+0*u,y:r+0*u},{children:(0,m.jsx)("div",Object.assign({style:{borderRadius:12,overflow:"hidden"}},{children:i}))}))]}))}const d=Math.floor((a+25)/u),c=n.length/2-d/2,l=n.length/2+d/2-1;return n.forEach(((e,r)=>{e.forEach(((e,o)=>{n[r][o]&&(r<7&&o<7||r>n.length-8&&o<7||r<7&&o>n.length-8||!i&&r>c&&r<l&&o>c&&o<l||t.push((0,m.jsx)("circle",{cx:r*u+u/2,cy:o*u+u/2,fill:"var(--ck-qr-dot-color)",r:u/3},`circle-${r}-${o}`)))}))})),t}),[e,s,r]);return(0,m.jsxs)("svg",Object.assign({height:s,width:s,viewBox:`0 0 ${s} ${s}`,style:{width:s,height:s}},{children:[(0,m.jsx)("rect",{fill:"transparent",height:s,width:s}),u]}))}const Jf=v.forwardRef((({value:e,image:t,imageBackground:r,imagePosition:n="center",tooltipMessage:i},o)=>{const a=i?(0,m.jsx)(_f,Object.assign({xOffset:139,yOffset:5,delay:.1,message:i},{children:t})):t;return(0,m.jsx)(qf,{children:(0,m.jsxs)(Hf,{children:[t&&(0,m.jsx)(Kf,{children:(0,m.jsx)(Gf,Object.assign({$wcLogo:"center"!==n,style:{background:"center"===n?r:void 0}},{children:a}))}),e?(0,m.jsx)(Wa,Object.assign({initial:!1},{children:(0,m.jsx)(Ua.div,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.4}},{children:(0,m.jsx)(Zf,{uri:e,size:288,ecl:"M",clearArea:!("center"!==n||!t)})}),e)})):(0,m.jsx)($f,{})]})})}));Jf.displayName="CustomQRCode";const Xf=xu(Ua.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 52px;
  min-width: 47px;
  min-height: 52px;
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`,Yf=({logo:e})=>{const t=[(0,m.jsx)(Fd,{background:!0}),(0,m.jsx)(jd,{background:!0}),(0,m.jsx)(Ud,{}),(0,m.jsx)(Rd,{}),(0,m.jsx)(Nd,{}),(0,m.jsx)(Pd,{})];return(0,m.jsx)(Xf,{children:(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"47",height:"52",viewBox:"0 0 47 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsxs)("g",Object.assign({mask:"url(#gradient-mask)"},{children:[(0,m.jsx)("path",{d:"M7 14.5C7 11.4624 9.46243 9 12.5 9H31.5C34.5376 9 37 11.4624 37 14.5V47H7V14.5Z",fill:"var(--ck-graphic-scaniconwithlogos-04)"}),e?(0,m.jsx)("foreignObject",Object.assign({x:"13",y:"21",width:"18",height:"18",rx:"5"},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:5}},{children:e}))})):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("foreignObject",Object.assign({x:"12",y:"15",width:"9",height:"9",rx:"2.5"},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:2.5}},{children:t[0]}))})),(0,m.jsx)("foreignObject",Object.assign({x:"23",y:"15",width:"9",height:"9",rx:"2.5"},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:2.5}},{children:t[1]}))})),(0,m.jsx)("foreignObject",Object.assign({x:"12",y:"26",width:"9",height:"9",rx:"2.5"},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:2.5}},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:2.5}},{children:t[2]}))}))})),(0,m.jsx)("foreignObject",Object.assign({x:"23",y:"26",width:"9",height:"9",rx:"2.5"},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:2.5}},{children:t[3]}))})),(0,m.jsx)("foreignObject",Object.assign({x:"12",y:"37",width:"9",height:"9",rx:"2.5"},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:2.5}},{children:t[4]}))})),(0,m.jsx)("foreignObject",Object.assign({x:"23",y:"37",width:"9",height:"9",rx:"2.5"},{children:(0,m.jsx)("div",Object.assign({style:{overflow:"hidden",borderRadius:2.5}},{children:t[5]}))}))]}),(0,m.jsx)("path",{d:"M36 47V13.7143C36 11.1107 33.8893 9 31.2857 9H12.7143C10.1107 9 8 11.1107 8 13.7143V47",stroke:"url(#paint0_linear_924_12568)",strokeWidth:"2"}),(0,m.jsx)("path",{d:"M15 10H29C29 11.1046 28.1046 12 27 12H17C15.8954 12 15 11.1046 15 10Z",fill:"var(--ck-graphic-scaniconwithlogos-01)"}),(0,m.jsx)("rect",{x:"1",y:"47",width:"43",height:"5",fill:"var(--ck-tooltip-background)"}),(0,m.jsx)("rect",{x:"22",y:"1",width:"24",height:"24",rx:"12",fill:"var(--ck-graphic-scaniconwithlogos-03)",stroke:"var(--ck-tooltip-background)",strokeWidth:"2"}),(0,m.jsx)("rect",{x:"34.5",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,m.jsx)("rect",{x:"31",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,m.jsx)("rect",{x:"31",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,m.jsx)("rect",{x:"34.5",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,m.jsx)("path",{d:"M28.5 10.5V9C28.5 8.17157 29.1716 7.5 30 7.5H31.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M36.5 7.5L38 7.5C38.8284 7.5 39.5 8.17157 39.5 9L39.5 10.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M39.5 15.5L39.5 17C39.5 17.8284 38.8284 18.5 38 18.5L36.5 18.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M31.5 18.5L30 18.5C29.1716 18.5 28.5 17.8284 28.5 17L28.5 15.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_924_12568",x1:"22",y1:"8.2549",x2:"22",y2:"47",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-graphic-scaniconwithlogos-01)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-scaniconwithlogos-02)"})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"linear-gradient-mask",x1:"47",y1:"42",x2:"47",y2:"47",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"white"}),(0,m.jsx)("stop",{offset:"1",stopColor:"black",stopOpacity:"0"})]})),(0,m.jsx)("mask",Object.assign({id:"gradient-mask"},{children:(0,m.jsx)("rect",{x:"0",y:"0",width:"47",height:"52",fill:"url(#linear-gradient-mask)"})}))]})]}))})},Qf=({connectorId:e})=>{var t,r,n,i;const o=ym(),a=Zc[o.lang].scanScreen,[s,u]=(0,v.useState)(e),d=Jd.filter((e=>e.id===s))[0],{connectors:c,connectAsync:l}=yp(),[p,f]=(0,v.useState)(void 0),h=e=>Hc(e,{CONNECTORNAME:d.name});function g(e){return sd(this,void 0,void 0,(function*(){return(yield l({connector:e}))||!1}))}const{openDefaultWalletConnect:y}=tf();if((0,v.useEffect)((()=>{p||sd(void 0,void 0,void 0,(function*(){const e=c.filter((e=>e.id===s))[0];if(e&&!p)switch(e.id){case"injected":case"metaMask":break;case"coinbaseWallet":e.on("message",(t=>sd(void 0,void 0,void 0,(function*(){const t=yield e.getProvider();f(t.qrUrl)}))));try{yield g(e)}catch(e){o.debug((0,m.jsxs)(m.Fragment,{children:["This dApp is most likely missing the"," ",(0,m.jsx)("code",{children:"headlessMode: true"})," flag in the custom"," ",(0,m.jsx)("code",{children:"CoinbaseWalletConnector"})," options. See"," ",(0,m.jsx)("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:"https://connect.family.co/v0/docs/cbwHeadlessMode"},{children:"documentation"}))," ","for more details."]}),e)}break;case"walletConnect":e.on("message",(t=>sd(void 0,void 0,void 0,(function*(){const t=yield e.getProvider();f(t.connector.uri),t.connector.on("disconnect",(()=>{g(e)}))}))));try{yield g(e)}catch(e){o.debug((0,m.jsx)(m.Fragment,{children:"WalletConnect cannot connect. See console for more details."}),e)}}}))}),[]),!d)return(0,m.jsx)(m.Fragment,{children:"Connector not found"});const b=tc();d.extensions&&d.extensions[b];const w=d.appUrls&&0!==Object.keys(d.appUrls).length;if(d.extensions&&(Object.keys(d.extensions)[0],Object.keys(d.extensions)[0].charAt(0).toUpperCase(),Object.keys(d.extensions)[0].slice(1),d.extensions[Object.keys(d.extensions)[0]]),d.extensionIsInstalled&&d.extensionIsInstalled(),!d.scannable)return(0,m.jsxs)(mc,{children:[(0,m.jsx)(gc,{children:"Invalid State"}),(0,m.jsx)(bc,{children:(0,m.jsxs)(Cf,{children:[d.name," does not have it's own QR Code to scan. This state should never happen"]})})]});const _=d.defaultConnect;return(0,m.jsxs)(mc,{children:[(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:8,gap:14}},{children:[(0,m.jsx)(Jf,{value:p,image:d.logos.qrCode,imageBackground:d.logoBackground,tooltipMessage:(0,m.jsxs)(m.Fragment,"walletConnect"===e?{children:[(0,m.jsx)(Yf,{}),(0,m.jsx)("span",{children:h(a.tooltip.walletConnect)})]}:{children:[(0,m.jsx)(Yf,{logo:d.logos.connectorButton}),(0,m.jsx)("span",{children:h(a.tooltip.default)})]})}),_?(0,m.jsx)(vl,{}):w&&(0,m.jsx)(vl,{children:"Don\u2019t have the app?"})]})),_&&(0,m.jsxs)("div",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14}},{children:["modal"!==(null===(t=o.options)||void 0===t?void 0:t.walletConnectCTA)&&(0,m.jsx)(sf,Object.assign({variant:"button",string:p},{children:"link"===(null===(r=o.options)||void 0===r?void 0:r.walletConnectCTA)?"Copy to Clipboard":"Copy Code"})),"link"!==(null===(n=o.options)||void 0===n?void 0:n.walletConnectCTA)&&(0,m.jsx)(ql,Object.assign({icon:(0,m.jsx)(tl,{}),onClick:()=>sd(void 0,void 0,void 0,(function*(){"walletConnect"===c.filter((e=>e.id===s))[0].id&&y()}))},{children:"modal"===(null===(i=o.options)||void 0===i?void 0:i.walletConnectCTA)?"Use WalletConnect Modal":"Use Modal"}))]})),w&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(ql,Object.assign({onClick:()=>{o.setRoute(mm.DOWNLOAD)},download:!0},{children:["Get ",d.name]}))})]})},eh="qrcode",th="injector",rh=({connectorId:e})=>{const[t,r]=(0,v.useState)(e),n=Jd.filter((e=>e.id===t))[0],i=n.extensionIsInstalled&&n.extensionIsInstalled(),o=!n.scannable||i,[a,s]=(0,v.useState)(o?th:eh);return n?(0,m.jsxs)(Wa,{children:[a===eh&&(0,m.jsx)(Ua.div,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:fl},{children:(0,m.jsx)(Qf,{connectorId:t,switchConnectMethod:e=>{e&&r(e),s(th)}})}),eh),a===th&&(0,m.jsx)(Ua.div,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:fl},{children:(0,m.jsx)(Vf,{connectorId:t,switchConnectMethod:e=>{e&&r(e),s(eh)}})}),th)]}):(0,m.jsx)(Cf,{children:"Connector not found"})},nh=({connectorId:e})=>{var t,r,n;const i=ym(),o=Zc[i.lang].downloadAppScreen,[a,s]=(0,v.useState)(e),u=Jd.filter((e=>e.id===a))[0];if(!u)return(0,m.jsx)(m.Fragment,{children:"Connector not found"});const d=null===(t=u.appUrls)||void 0===t?void 0:t.ios,c=null===(r=u.appUrls)||void 0===r?void 0:r.android,l=null===(n=u.appUrls)||void 0===n?void 0:n.download,p=d&&c?o.iosAndroid:d?o.ios:o.android;return(0,m.jsxs)(mc,{children:[(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:4,gap:14}},{children:[l&&(0,m.jsx)(Jf,{value:l}),!l&&(0,m.jsx)(m.Fragment,{children:"No download link available"}),(0,m.jsx)(_c,Object.assign({style:{fontSize:15,lineHeight:"20px",padding:"0 12px"}},{children:(f=p,Hc(f,{CONNECTORNAME:u.name}))})),u.defaultConnect&&(0,m.jsx)(vl,{})]})),u.defaultConnect&&(0,m.jsx)(ql,Object.assign({icon:(0,m.jsx)(tl,{})},{children:"Open Default Modal"}))]});var f},ih=xu(Ua.div)`
  padding: 18px 0 20px;
  @media only screen and (max-width: ${sc}px) {
    padding: 16px 0 20px;
  }
`,oh=xu(Ua.div)`
  position: relative;
  display: inline-block;
`,ah=xu(Ua.div)`
  z-index: 3;
  position: absolute;
  bottom: 0px;
  right: -16px;
`,sh=xu(Ua.div)`
  position: relative;
`,uh=xu(Ua.div)`
  position: relative;
`,dh=Cu`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,ch=xu(Ua.div)`
  width: 25%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ck-body-background-secondary);
  inset: 0;
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      var(--ck-body-background-transparent) 50%,
      var(--ck-body-background),
      var(--ck-body-background-transparent)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${dh} 1000ms linear infinite both;
  }
`,lh=xu(Ua.div)`
  will-change: transform; // Needed for Safari
  pointer-events: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: ${e=>`${e.$radius}px`};
  width: ${e=>`${e.$size}px`};
  height: ${e=>`${e.$size}px`};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  }
  ${e=>{if(e.$seed){const t=Math.ceil(e.$seed.split("").map((e=>e.charCodeAt(0))).reduce(((e,t)=>e+t))%100/100*8),r=`0${0===t?1:t}`;return uu`
        background: var(--ck-ens-${r}-start);
        background: linear-gradient(
          180deg,
          var(--ck-ens-${r}-start) 0%,
          var(--ck-ens-${r}-stop) 100%
        );
      `}}}
`,ph=xu(Ua.img)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${e=>e.$loaded?1:0};
  will-change: opacity; // Needed for Safari
  transition: opacity 500ms ease;
  transform: scale(1.01); // fixes background color bleeding
`;function fh(){const[e,t]=(0,v.useState)(!1);return(0,v.useEffect)((()=>t(!0)),[]),e}const hh=({address:e,name:t,size:r=96,radius:n=96})=>{var i,a;const s=fh(),u=ym(),d=(0,v.useRef)(null),[c,l]=(0,v.useState)(!0),{data:p}=(0,o.useEnsName)({chainId:1,address:e}),{data:f}=(0,o.useEnsAddress)({chainId:1,name:t}),{data:h}=(0,o.useEnsAvatar)({chainId:1,addressOrName:null!=e?e:t}),g={address:null!=f?f:e,name:null!=p?p:t,avatar:null!=h?h:void 0};return(0,v.useEffect)((()=>{d.current&&d.current.complete&&0!==d.current.naturalHeight||l(!1)}),[h]),s?(null===(i=u.options)||void 0===i?void 0:i.customAvatar)?(0,m.jsx)("div",Object.assign({style:{width:r,height:r,borderRadius:n,overflow:"hidden"}},{children:null===(a=u.options)||void 0===a?void 0:a.customAvatar({address:null!=e?e:null==g?void 0:g.address,ensName:null!=t?t:null==g?void 0:g.name,ensImage:null==g?void 0:g.avatar,size:r,radius:n})})):(0,m.jsx)(xd,g.name&&g.avatar?Object.assign({style:{pointerEvents:"none"}},{children:(0,m.jsx)(lh,Object.assign({$size:r,$seed:g.address,$radius:n},{children:(0,m.jsx)(ph,{ref:d,src:g.avatar,alt:g.name,onLoad:()=>l(!0),$loaded:c})}))}):Object.assign({style:{pointerEvents:"none"}},{children:(0,m.jsx)(lh,{$size:r,$seed:g.address,$radius:n})})):(0,m.jsx)("div",{style:{width:r,height:r,borderRadius:n}})};var mh=e=>{var{testnet:t}=e,r=ad(e,["testnet"]);let n="var(--ck-chain-ethereum-01, #25292E)",i="var(--ck-chain-ethereum-02, #ffffff)";return t&&(n="linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)",i="#fff"),(0,m.jsxs)("svg",Object.assign({},r,{"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:n}},{children:[(0,m.jsx)("path",{d:"M21.9967 6.99621L21.7955 7.67987V27.5163L21.9967 27.7171L31.2044 22.2744L21.9967 6.99621Z",fill:i}),(0,m.jsx)("path",{d:"M21.9957 6.99621L12.7878 22.2744L21.9957 27.7171V18.0891V6.99621Z",fill:i}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9959 36.9996L21.9959 36.9997V36.9995L31.2091 24.0243L21.9959 29.4642L12.788 24.0243L21.9957 36.9993L21.9958 36.9997L21.9959 36.9996Z",fill:i}),(0,m.jsx)("path",{d:"M21.996 27.7181L31.2037 22.2753L21.996 18.09V27.7181Z",fill:i}),(0,m.jsx)("path",{d:"M12.7878 22.2753L21.9957 27.7181V18.09L12.7878 22.2753Z",fill:i})]}))},vh=e=>{var{testnet:t}=e,r=ad(e,["testnet"]);return(0,m.jsx)("svg",Object.assign({},r,{"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:t?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#6F41D8"}},{children:(0,m.jsx)("path",{d:"M29.0015 17.4529C28.4941 17.1572 27.8355 17.1572 27.2773 17.4529L23.3186 19.7271L20.6305 21.2094L16.6719 23.4822C16.1645 23.7792 15.5059 23.7792 14.9476 23.4822L11.8016 21.703C11.2943 21.4074 10.9395 20.8642 10.9395 20.2702V16.7612C10.9395 16.1686 11.2434 15.6255 11.8016 15.3285L14.8954 13.5988C15.4041 13.3018 16.0641 13.3018 16.6224 13.5988L19.7161 15.3285C20.2249 15.6255 20.5796 16.1686 20.5796 16.7612V19.0355L23.2678 17.5024V15.2295C23.2707 14.9343 23.1917 14.6441 23.0395 14.3911C22.8873 14.1381 22.6679 13.9324 22.4056 13.7968L16.6719 10.5353C16.1645 10.2382 15.5059 10.2382 14.9476 10.5353L9.11214 13.7968C8.84992 13.9324 8.63049 14.1381 8.47828 14.3911C8.32607 14.6441 8.24705 14.9343 8.25002 15.2295V21.802C8.25002 22.396 8.55389 22.9391 9.11214 23.2361L14.9476 26.4976C15.455 26.7932 16.115 26.7932 16.6719 26.4976L20.6305 24.2729L23.3186 22.7411L27.2773 20.5177C27.7846 20.2207 28.4433 20.2207 29.0015 20.5177L32.0966 22.2475C32.6054 22.5431 32.9588 23.0863 32.9588 23.6803V27.1893C32.9588 27.7819 32.6563 28.325 32.0966 28.622L29.0029 30.4013C28.4941 30.6983 27.8341 30.6983 27.2773 30.4013L24.1821 28.6715C23.6734 28.3745 23.3186 27.8314 23.3186 27.2387V24.9645L20.6305 26.4976V28.7705C20.6305 29.3631 20.9344 29.9076 21.4926 30.2032L27.3281 33.4647C27.8355 33.7617 28.4941 33.7617 29.0524 33.4647L34.8879 30.2032C35.3953 29.9076 35.75 29.3645 35.75 28.7705V22.198C35.753 21.9028 35.674 21.6126 35.5218 21.3596C35.3695 21.1066 35.1501 20.9009 34.8879 20.7653L29.0029 17.4529H29.0015Z",fill:"white"})}))},gh=e=>{var{testnet:t}=e,r=ad(e,["testnet"]);return(0,m.jsxs)("svg",Object.assign({},r,{"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:t?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#FF0420"}},{children:[(0,m.jsx)("path",{d:"M15.5877 27.8473C14.2777 27.8473 13.2045 27.539 12.3679 26.9226C11.5422 26.2952 11.1294 25.4035 11.1294 24.2477C11.1294 24.0055 11.157 23.7082 11.212 23.356C11.3552 22.5634 11.5588 21.6112 11.823 20.4994C12.5715 17.4722 14.5034 15.9586 17.6187 15.9586C18.4664 15.9586 19.2259 16.1017 19.8974 16.3879C20.5689 16.663 21.0973 17.0814 21.4826 17.6428C21.8678 18.1932 22.0605 18.8537 22.0605 19.6242C22.0605 19.8554 22.033 20.1471 21.9779 20.4994C21.8128 21.4791 21.6146 22.4313 21.3835 23.356C20.9982 24.8641 20.3322 25.9924 19.3855 26.741C18.4388 27.4785 17.1729 27.8473 15.5877 27.8473ZM15.8189 25.4695C16.4354 25.4695 16.9582 25.2879 17.3876 24.9247C17.8279 24.5614 18.1416 24.0055 18.3287 23.257C18.5819 22.2222 18.7746 21.3195 18.9067 20.5489C18.9507 20.3178 18.9727 20.0811 18.9727 19.8389C18.9727 18.8372 18.4498 18.3363 17.4041 18.3363C16.7876 18.3363 16.2592 18.5179 15.8189 18.8812C15.3896 19.2445 15.0813 19.8004 14.8943 20.5489C14.6961 21.2865 14.4979 22.1892 14.2998 23.257C14.2557 23.477 14.2337 23.7082 14.2337 23.9504C14.2337 24.9632 14.7622 25.4695 15.8189 25.4695Z",fill:"white"}),(0,m.jsx)("path",{d:"M22.8188 27.6815C22.6977 27.6815 22.6041 27.6429 22.5381 27.5659C22.483 27.4778 22.4665 27.3788 22.4885 27.2687L24.7672 16.5358C24.7892 16.4147 24.8498 16.3156 24.9489 16.2385C25.0479 16.1615 25.1525 16.1229 25.2626 16.1229H29.6548C30.8767 16.1229 31.8564 16.3761 32.5939 16.8825C33.3426 17.3889 33.7168 18.1209 33.7168 19.0786C33.7168 19.3538 33.6838 19.64 33.6177 19.9372C33.3426 21.2032 32.7867 22.1389 31.95 22.7443C31.1244 23.3498 29.9905 23.6525 28.5485 23.6525H26.3194L25.5598 27.2687C25.5377 27.3898 25.4772 27.4888 25.3782 27.5659C25.2791 27.6429 25.1745 27.6815 25.0645 27.6815H22.8188ZM28.6641 21.3738C29.1264 21.3738 29.5282 21.2472 29.8695 20.994C30.2217 20.7408 30.4529 20.3776 30.563 19.9042C30.596 19.717 30.6125 19.552 30.6125 19.4089C30.6125 19.0896 30.519 18.8474 30.3318 18.6823C30.1446 18.5062 29.8255 18.4182 29.3741 18.4182H27.3926L26.7652 21.3738H28.6641Z",fill:"white"})]}))},yh=e=>{var{testnet:t}=e,r=ad(e,["testnet"]);const n=t?"#ffffff":"#28A0F0",i=t?"#ffffff":"#96BEDC";return(0,m.jsxs)("svg",Object.assign({},r,{"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:t?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2C364F"}},{children:[!t&&(0,m.jsx)("path",{d:"M25.7948 20.5826L28.2683 16.3854L34.9355 26.7696L34.9386 28.7625L34.9168 15.0491C34.9011 14.7137 34.7231 14.407 34.4391 14.2261L22.4357 7.32182C22.1551 7.1838 21.7989 7.18546 21.5187 7.32618C21.4807 7.34524 21.4453 7.36576 21.4113 7.38835L21.3694 7.41467L9.71816 14.1664L9.67298 14.1871C9.61474 14.2137 9.55609 14.2479 9.50076 14.2872C9.27983 14.4456 9.1331 14.68 9.08564 14.9425C9.07859 14.9823 9.0732 15.023 9.07092 15.064L9.08916 26.239L15.2994 16.6138C16.0811 15.3376 17.7847 14.9262 19.3662 14.9488L21.2221 14.9977L10.2862 32.5356L11.5753 33.2778L22.6422 15.0155L27.5338 14.9977L16.4956 33.7209L21.0955 36.3668L21.6451 36.6827C21.8776 36.7772 22.1516 36.7819 22.386 36.6972L34.5581 29.6433L32.2309 30.9918L25.7948 20.5826ZM26.7384 34.175L22.0925 26.8829L24.9287 22.0702L31.0303 31.6876L26.7384 34.175Z",fill:"#2D374B"}),(0,m.jsx)("path",{d:"M22.0924 26.8832L26.7385 34.1751L31.0302 31.6879L24.9286 22.0705L22.0924 26.8832Z",fill:n}),(0,m.jsx)("path",{d:"M34.9387 28.7627L34.9356 26.7698L28.2684 16.3856L25.7949 20.5828L32.2312 30.992L34.5584 29.6435C34.7866 29.4582 34.9248 29.1861 34.9393 28.8926L34.9387 28.7627Z",fill:n}),(0,m.jsx)("path",{d:"M7 30.642L10.2863 32.5356L21.2222 14.9976L19.3663 14.9487C17.785 14.9263 16.0814 15.3375 15.2995 16.6137L9.08927 26.239L7 29.449V30.642V30.642Z",fill:"white"}),(0,m.jsx)("path",{d:"M27.534 14.9977L22.6423 15.0155L11.5754 33.2778L15.4437 35.5049L16.4955 33.7209L27.534 14.9977Z",fill:"white"}),(0,m.jsx)("path",{d:"M37 14.9723C36.9592 13.9493 36.4052 13.013 35.5377 12.4677L23.377 5.47434C22.5187 5.04223 21.4466 5.04161 20.5868 5.47414C20.4852 5.52533 8.76078 12.3251 8.76078 12.3251C8.5985 12.4029 8.44224 12.4955 8.2953 12.6008C7.52081 13.156 7.0487 14.0186 7 14.9661V29.4492L9.08927 26.2392L9.07103 15.0639C9.07352 15.0231 9.0787 14.9827 9.08575 14.9431C9.133 14.6801 9.27994 14.4457 9.50086 14.2872C9.5562 14.2478 21.4806 7.34517 21.5186 7.32611C21.799 7.18538 22.155 7.18373 22.4356 7.32175L34.439 14.226C34.723 14.4069 34.901 14.7137 34.9167 15.049V28.8921C34.9022 29.1856 34.7862 29.4577 34.558 29.643L32.2308 30.9916L31.03 31.6875L26.7383 34.1747L22.3859 36.6969C22.1515 36.7817 21.8773 36.7769 21.645 36.6824L16.4955 33.7206L15.4435 35.5046L20.0713 38.169C20.2243 38.256 20.3607 38.3331 20.4726 38.3961C20.6458 38.4933 20.764 38.5582 20.8056 38.5785C21.1345 38.7383 21.6077 38.8311 22.0342 38.8311C22.4251 38.8311 22.8064 38.7594 23.1672 38.6181L35.8092 31.2971C36.5347 30.7348 36.9617 29.8869 37 28.9686V14.9723Z",fill:i})]}))},bh=e=>{var t=ad(e,[]);return(0,m.jsxs)("svg",Object.assign({},t,{"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)"}},{children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5611 8.12948C21.0082 7.90729 21.5007 7.79167 22 7.79167C22.4993 7.79167 22.9919 7.90729 23.439 8.12948L23.4408 8.1304L33.0387 12.9293C33.577 13.197 34.031 13.61 34.3478 14.121C34.6649 14.6323 34.833 15.2218 34.8333 15.8234V27.2595C34.833 27.8611 34.6649 28.4511 34.3478 28.9624C34.031 29.4733 33.578 29.8858 33.0398 30.1535L23.4411 34.9528C22.9919 35.1775 22.4963 35.2947 21.994 35.2947C21.4918 35.2947 20.9964 35.1777 20.5472 34.9529L10.9475 30.1531L10.9452 30.1519C10.4071 29.8808 9.95535 29.4646 9.6411 28.9504C9.32739 28.437 9.16312 27.8464 9.16673 27.2448L9.16675 27.2417L10.0004 27.2475H9.16673V27.2448V15.8239C9.16705 15.2223 9.33518 14.6322 9.65222 14.121C9.96906 13.61 10.4221 13.1976 10.9604 12.9298L20.5592 8.1304L20.5611 8.12948ZM21.3031 9.62267L11.8706 14.3389L22 19.4036L32.1294 14.3389L22.697 9.62267C22.4806 9.51531 22.2416 9.45905 22 9.45905C21.7585 9.45905 21.5194 9.51534 21.3031 9.62267ZM10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241ZM22.8337 33.3923L32.2967 28.6608C32.5576 28.5312 32.7772 28.3313 32.9308 28.0836C33.0844 27.836 33.1658 27.5504 33.166 27.259V15.8243C33.1659 15.7786 33.1639 15.7331 33.1599 15.6878L22.8337 20.8509V33.3923Z",fill:"url(#paint0_linear_3546_7073)"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241Z",fill:"url(#paint1_linear_3546_7073)",fillOpacity:"0.3"}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"white"}),(0,m.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]})),(0,m.jsxs)("linearGradient",Object.assign({id:"paint1_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"white"}),(0,m.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]}))]})]}))};const wh=[{id:1,name:"Ethereum",logo:(0,m.jsx)(mh,{})},{id:3,name:"Rinkeby",logo:(0,m.jsx)(mh,{testnet:!0})},{id:4,name:"Ropsten",logo:(0,m.jsx)(mh,{testnet:!0})},{id:5,name:"G\xf6rli",logo:(0,m.jsx)(mh,{testnet:!0})},{id:42,name:"Kovan",logo:(0,m.jsx)(mh,{testnet:!0})},{id:10,name:"Optimism",logo:(0,m.jsx)(gh,{})},{id:69,name:"Optimism Kovan",logo:(0,m.jsx)(gh,{testnet:!0})},{id:137,name:"Polygon",logo:(0,m.jsx)(vh,{})},{id:80001,name:"Polygon Mumbai",logo:(0,m.jsx)(vh,{testnet:!0})},{id:31337,name:"Hardhat",logo:(0,m.jsx)(mh,{testnet:!0})},{id:1337,name:"Localhost",logo:(0,m.jsx)(mh,{testnet:!0})},{id:42161,name:"Arbitrum",logo:(0,m.jsx)(yh,{})},{id:421611,name:"Arbitrum Rinkeby",logo:(0,m.jsx)(yh,{testnet:!0})},{id:421613,name:"Arbitrum Goerli",logo:(0,m.jsx)(yh,{testnet:!0})}],_h=xu.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: ${sc}px) {
    flex-direction: column-reverse;
  }
`,Ah=xu(Ua.div)`
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background: var(--ck-body-background);
  svg {
    border-radius: inherit;
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  ${e=>e.$empty&&uu`
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '?';
        color: var(--ck-body-color-muted);
        font-weight: bold;
        font-family: var(--ck-font-family);
      }
    `}
  @media only screen and (max-width: ${sc}px) {
    border-radius: 16px;
    width: 32px;
    height: 32px;
  }
`,Eh=xu(Ua.div)`
  position: relative;
`,Ch=xu(Ua.div)`
  position: absolute;
  inset: -6px;
  animation: rotateSpinner 1200ms linear infinite;
  pointer-events: none;
  svg {
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,xh=xu.div`
  position: relative;
  margin: -8px -8px;
  &:after {
    border-radius: var(--border-radius, 0);
    z-index: 2;
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0 2px;
    box-shadow: inset 0 16px 8px -12px var(--background, var(--ck-body-background)),
      inset 0 -16px 8px -12px var(--background, var(--ck-body-background));
  }
`,kh=xu(Ua.div)`
  padding: 8px 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 242px;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media only screen and (max-width: ${sc}px) {
    padding: 8px 14px;
    margin: 2px -2px 0;
    max-height: 70vh;
  }
`,Sh=xu(Ua.button)`
  appearance: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 11px;
  margin: 0 0 1px;
  padding: 8px 0;
  padding-right: 154px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  text-decoration: none;
  color: var(--ck-body-color);
  background: none;
  white-space: nowrap;
  transition: transform 100ms ease, background-color 100ms ease;
  transform: translateZ(0px);
  &:before {
    content: '';
    background: currentColor;
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: var(--ck-dropdown-active-border-radius, 12px);
    opacity: 0;
    transition: opacity 180ms ease;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0 -8px;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 180ms ease;
    outline: 2px solid var(--ck-focus-color);
  }
  @media only screen and (max-width: ${sc}px) {
    font-size: 17px;
    padding: 8px 0;
  }
  @media only screen and (min-width: ${sc}px) {
    &:hover {
      &:before {
        transition-duration: 80ms;
        opacity: 0.05;
      }
    }
  }
  &:active {
    transform: scale(0.99) translateZ(0px);
  }
  &:disabled {
    //opacity: 0.4;
    pointer-events: none;
  }
  &:focus-visible {
    outline: none !important;
    &:after {
      opacity: 1;
    }
  }
`,Oh=xu(Ua.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  padding-right: 4px;
  span {
    display: block;
    position: relative;
  }
  @media only screen and (max-width: ${sc}px) {
    font-size: 17px;
    padding: 0;
  }
`,Dh=xu(Ua.div)`
  position: absolute;
  z-index: -1;
  inset: 0 var(--ck-dropdown-active-inset, -8px);
  background: var(--ck-dropdown-active-background, rgba(26, 136, 248, 0.1));
  box-shadow var(--ck-dropdown-active-box-shadow);
  border-radius: var(--ck-dropdown-active-border-radius, 12px);
  @media only screen and (max-width: ${sc}px) {
    inset: 0 -12px;
  }
`,Bh=(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 16.75C2.69036 16.75 3.25 17.3096 3.25 18V19C3.25 26.5939 9.40609 32.75 17 32.75V35.25C8.02537 35.25 0.75 27.9746 0.75 19V18C0.75 17.3096 1.30964 16.75 2 16.75Z",fill:"url(#paint0_linear_1288_18701)"}),(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_1288_18701",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-spinner-color)"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]}))})]})),Ih=()=>{const{connector:e}=(0,o.useAccount)(),{chain:t,chains:r}=(0,o.useNetwork)(),{isLoading:n,pendingChainId:i,switchNetwork:a}=(0,o.useSwitchNetwork)(),s=ym(),u=Zc[s.lang].warnings,d=ic();return(0,m.jsxs)(_h,{children:[(0,m.jsx)(xh,{children:(0,m.jsx)(kh,{children:r.map((r=>{var o;const s=wh.find((e=>e.id===r.id)),u=Object.assign(Object.assign({},s),r);return(0,m.jsxs)(Sh,Object.assign({disabled:!a||u.id===(null==t?void 0:t.id)||n&&i===u.id,onClick:()=>null==a?void 0:a(u.id),style:{opacity:a||u.id===(null==t?void 0:t.id)?void 0:.4}},{children:[(0,m.jsxs)("span",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:12,color:u.id===(null==t?void 0:t.id)?"var(--ck-dropdown-active-color, inherit)":"inherit"}},{children:[(0,m.jsxs)(Eh,{children:[(0,m.jsx)(Ch,Object.assign({initial:{opacity:0},animate:{opacity:n&&i===u.id?1:0},transition:{ease:[.76,0,.24,1],duration:.15}},{children:(0,m.jsx)(Ua.div,Object.assign({animate:d&&"coinbaseWallet"===(null==e?void 0:e.id)&&n&&i===u.id?{opacity:[1,0],transition:{delay:4,duration:3}}:{opacity:1}},{children:Bh}),`${null==u?void 0:u.id}-${null==u?void 0:u.name}`)})),(0,m.jsx)(Ah,{children:null!==(o=u.logo)&&void 0!==o?o:(0,m.jsx)(bh,{})})]}),u.name]})),(0,m.jsx)(Oh,{children:(0,m.jsxs)(Wa,Object.assign({initial:!1,exitBeforeEnter:!0},{children:[u.id===(null==t?void 0:t.id)&&(0,m.jsx)(Ua.span,Object.assign({style:{color:"var(--ck-dropdown-active-color, var(--ck-focus-color))",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4,transition:{duration:.1,delay:0}},transition:{ease:[.76,0,.24,1],duration:.3,delay:.2}},{children:"Connected"}),"connectedText"),n&&i===u.id&&(0,m.jsx)(Ua.span,Object.assign({style:{color:"var(--ck-dropdown-pending-color, inherit)",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4},transition:{ease:[.76,0,.24,1],duration:.3}},{children:(0,m.jsx)(Ua.span,Object.assign({animate:d&&"coinbaseWallet"===(null==e?void 0:e.id)&&{opacity:[1,0],transition:{delay:4,duration:4}}},{children:"Approve in Wallet"}))}),"approveText")]}))}),u.id===(null==t?void 0:t.id)&&(0,m.jsx)(Dh,{layoutId:"activeChain",layout:"position",transition:{duration:.3,ease:"easeOut"}})]}),`${null==u?void 0:u.id}-${null==u?void 0:u.name}`)}))})}),!a&&(0,m.jsxs)(Cf,{children:[Hc(u.walletSwitchingUnsupported)," ",Hc(u.walletSwitchingUnsupportedResolve)]})]})},Mh=xu(Ua.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
`,Th=xu(Ua.div)`
  position: absolute;
  inset: 0;
`,Fh=xu(Ua.div)`
  --shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  --background: var(--ck-dropdown-background, var(--ck-tooltip-background));
  --border-radius: var(
    --ck-dropdown-border-radius,
    var(--ck-tooltip-border-radius, 12px)
  );

  pointer-events: auto;
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: fit-content;
  padding: 14px 16px 16px;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
  background: var(--background);
  box-shadow: var(
    --ck-dropdown-box-shadow,
    var(--ck-tooltip-shadow, var(--shadow))
  );
  border-radius: var(--border-radius);
`,jh=xu(Ua.div)`
  padding: 0 0 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  user-select: none;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
`,Ph=({children:e,open:t,onClose:r,offsetX:n=0,offsetY:i=8})=>{var o,a,s;const u=ym(),d=Qc(),[c,l]=(0,v.useState)({x:0,y:0});Vc(t);const p=(0,v.useRef)(null);(0,v.useEffect)((()=>{const e=e=>{var n,i,o;if(t&&("Escape"===e.key&&r(),"ArrowDown"===e.key||"ArrowUp"===e.key)){if(!p.current)return;e.preventDefault();const t=null===(n=p.current)||void 0===n?void 0:n.querySelectorAll('\n            a[href]:not(:disabled),\n            button:not(:disabled),\n            textarea:not(:disabled),\n            input[type="text"]:not(:disabled),\n            input[type="radio"]:not(:disabled),\n            input[type="checkbox"]:not(:disabled),\n            select:not(:disabled)\n          '),r=t[0],a=t[t.length-1];if("ArrowUp"===e.key)if(document.activeElement===r)a.focus();else{let e=null===(i=null===document||void 0===document?void 0:document.activeElement)||void 0===i?void 0:i.previousSibling;for(e||(e=a);e.disabled;)e=e.previousSibling;e.focus()}else if(document.activeElement===a)r.focus();else{let e=null===(o=null===document||void 0===document?void 0:document.activeElement)||void 0===o?void 0:o.nextSibling;for(e||(e=r);e.disabled;)e=e.nextSibling;e.focus()}}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[t]);const f=(0,v.useRef)(null),h=(0,v.useCallback)((e=>{e&&(f.current=e,b())}),[t]),[g,y]=$u({debounce:120,offsetSize:!0,scroll:!0}),b=()=>{if(!f.current||y.top+y.bottom+y.left+y.right+y.height+y.width===0)return;let e=y.left+n,t=y.top+y.height+i;f.current.style.left=`${e}px`,f.current.style.top=`${t}px`};("undefined"!=typeof window?v.useLayoutEffect:v.useEffect)(b,[f.current,y,t]),(0,v.useEffect)(b,[t,f.current]);const w=r,_=r;return(0,v.useEffect)((()=>(b(),window.addEventListener("scroll",w),window.addEventListener("resize",_),()=>{window.removeEventListener("scroll",w),window.removeEventListener("resize",_)})),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",Object.assign({ref:g},{children:e})),(0,m.jsx)(Wa,{children:t&&(0,m.jsx)(kd,{children:(0,m.jsx)(xd,Object.assign({$useTheme:null!==(o=d.theme)&&void 0!==o?o:u.theme,$useMode:null!==(a=d.mode)&&void 0!==a?a:u.mode,$customTheme:null!==(s=d.customTheme)&&void 0!==s?s:u.customTheme},{children:(0,m.jsx)(qc,{children:(0,m.jsxs)(Mh,Object.assign({ref:p},{children:[(0,m.jsx)(Th,{onClick:r}),(0,m.jsxs)(Fh,Object.assign({ref:h,style:{left:c.x,top:c.y},initial:"collapsed",animate:"open",exit:"collapsed",variants:{collapsed:{transformOrigin:"0 0",opacity:0,scale:.96,z:.01,y:-4,x:0,transition:{duration:.1}},open:{transformOrigin:"0 0",willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:0,x:0,transition:{ease:[.76,0,.24,1],duration:.15}}}},{children:[(0,m.jsx)(jh,{children:"Switch Networks"}),(0,m.jsx)(Ih,{})]}))]}))})}))})})]})},Nh=xu.div`
  --bg: transparent;
  --color: #333;
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 24px;
  background: var(--ck-body-background-secondary);
  pointer-events: none;
  user-select: none;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Rh=xu(Ua.div)`
  display: block;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,Lh=Cu`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,Uh=xu(Ua.div)`
  position: absolute;
  inset: 0;
  animation: ${Lh} 1s linear infinite;
  svg {
    display: block;
    position: absolute;
    inset: 0;
  }
`,zh=xu(Ua.div)`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 13px;
  height: 13px;
  color: var(--ck-body-color-danger, red);
  svg {
    display: block;
    position: relative;
    top: -2px;
    right: -2px;
  }
`,Vh=(0,m.jsxs)("svg",Object.assign({"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3592 30.1654C10.0472 29.4491 8.85718 28.524 7.83713 27.424C6.81708 26.324 5.98425 25.0677 5.36889 23.7054C5.20157 23.335 5.05033 22.9567 4.91578 22.5717C4.51465 21.4237 4.26735 20.2308 4.17794 19.0239C4.16599 18.8626 4.13894 18.7041 4.09809 18.5507C3.85023 17.6197 3.09399 16.8738 2.11531 16.7999C0.975331 16.7138 -0.0310983 17.5702 0.0141657 18.7125C0.0223289 18.9185 0.0340286 19.1243 0.049253 19.3298C0.165374 20.8971 0.486545 22.4464 1.00749 23.9373C1.10424 24.2142 1.20764 24.4884 1.31755 24.7596C2.13617 26.7799 3.31595 28.6371 4.80146 30.239C6.28696 31.841 8.04998 33.1573 10.0029 34.1258C10.2651 34.2558 10.5307 34.3796 10.7995 34.4969C12.247 35.1287 13.7676 35.5656 15.3217 35.7995C15.5255 35.8301 15.7298 35.8573 15.9346 35.881C17.0703 36.0122 18.0001 35.0731 18.0001 33.9299C18.0001 32.9484 17.3133 32.1381 16.4036 31.8208C16.2537 31.7685 16.0977 31.7296 15.9377 31.7056C14.7411 31.5255 13.5702 31.1891 12.4556 30.7026C12.0818 30.5394 11.716 30.3601 11.3592 30.1654Z",fill:"url(#paint0_linear_1288_1870)"}),(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",Object.assign({id:"paint0_linear_1288_1870",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse"},{children:[(0,m.jsx)("stop",{stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0.7"}),(0,m.jsx)("stop",{offset:"1",stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0"})]}))})]})),qh=({id:e,unsupported:t})=>{var r;const n=wh.find((t=>t.id===e));return(0,m.jsx)(Nh,{children:(0,m.jsxs)(Wa,Object.assign({initial:!1},{children:[t&&(0,m.jsx)(zh,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},{children:(0,m.jsxs)("svg",Object.assign({width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,m.jsx)("path",{d:"M2.61317 11.2501H9.46246C10.6009 11.2501 11.3256 10.3506 11.3256 9.3549C11.3256 9.05145 11.255 8.73244 11.0881 8.43303L7.65903 2.14708C7.659 2.14702 7.65897 2.14696 7.65893 2.1469C7.65889 2.14682 7.65884 2.14673 7.65879 2.14664C7.31045 1.50746 6.6741 1.17871 6.04 1.17871C5.41478 1.17871 4.763 1.50043 4.41518 2.14968L0.993416 8.43476C0.828865 8.72426 0.75 9.04297 0.75 9.3549C0.75 10.3506 1.47471 11.2501 2.61317 11.2501Z",fill:"currentColor",stroke:"var(--ck-body-background, #fff)",strokeWidth:"1.5"}),(0,m.jsx)("path",{d:"M6.03258 7.43916C5.77502 7.43916 5.63096 7.29153 5.62223 7.02311L5.55675 4.96973C5.54802 4.69684 5.74446 4.5 6.02821 4.5C6.3076 4.5 6.51277 4.70131 6.50404 4.9742L6.43856 7.01864C6.42546 7.29153 6.2814 7.43916 6.03258 7.43916ZM6.03258 9.11676C5.7401 9.11676 5.5 8.9065 5.5 8.60677C5.5 8.30704 5.7401 8.09678 6.03258 8.09678C6.32506 8.09678 6.56515 8.30256 6.56515 8.60677C6.56515 8.91097 6.32069 9.11676 6.03258 9.11676Z",fill:"white"})]}))})),e?(0,m.jsx)(Rh,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},{children:null!==(r=null==n?void 0:n.logo)&&void 0!==r?r:(0,m.jsx)(bh,{})}),`${null==n?void 0:n.id}-${null==n?void 0:n.name}-${e}`):(0,m.jsx)(Uh,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},{children:Vh}),"loading")]}))})},Hh=xu(Ua.div)``,Wh=xu(Ua.button)`
  --color: var(
    --ck-dropdown-button-color,
    var(--ck-button-primary-color, var(--ck-body-color))
  );
  --background: var(
    --ck-dropdown-button-background,
    var(--ck-secondary-button-background, var(--ck-body-background-secondary))
  );
  --box-shadow: var(
    --ck-dropdown-button-box-shadow,
    var(
      --ck-secondary-button-box-shadow,
      var(--ck-button-primary-box-shadow),
      none
    )
  );

  --hover-color: var(--ck-dropdown-button-hover-color, var(--color));
  --hover-background: var(
    --ck-dropdown-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-dropdown-button-hover-box-shadow,
    var(--box-shadow)
  );

  --active-color: var(--ck-dropdown-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-dropdown-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-dropdown-button-active-box-shadow,
    var(--hover-box-shadow)
  );

  appearance: none;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  width: 52px;
  height: 30px;
  padding: 2px 6px 2px 3px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transform: translateZ(0px);

  transition: 100ms ease;
  transition-property: transform, background-color, box-shadow, color;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);

  svg {
    position: relative;
    display: block;
  }

  ${e=>e.disabled?uu`
          width: auto;
          padding: 3px;
          position: relative;
          left: -22px;
        `:uu`
          cursor: pointer;

          @media only screen and (min-width: ${561}px) {
            &:hover,
            &:focus-visible {
              color: var(--hover-color);
              background: var(--hover-background);
              box-shadow: var(--hover-box-shadow);
            }
            &:active {
              color: var(--active-color);
              background: var(--active-background);
              box-shadow: var(--active-box-shadow);
            }
          }
        `}
`,$h=e=>{var t=ad(e,[]);return(0,m.jsx)("svg",Object.assign({"aria-hidden":"true",width:"11",height:"6",viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:(0,m.jsx)("path",{d:"M1.5 1L5.5 5L9.5 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))},Kh=()=>{const e=ym(),[t,r]=(0,v.useState)(!1),{chain:n,chains:i}=(0,o.useNetwork)(),a=ic()||(null===window||void 0===window?void 0:window.innerWidth)<sc;(0,v.useEffect)((()=>{e.open||r(!1)}),[e.open]);const s=i.length<=1;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(Hh,{children:(0,m.jsx)(Ph,Object.assign({offsetX:-12,open:!a&&t,onClose:()=>r(!1)},{children:(0,m.jsxs)(Wh,Object.assign({"aria-label":"Change Network",disabled:s,onClick:()=>{a?e.setRoute(mm.SWITCHNETWORKS):r(!t)}},{children:[s?(0,m.jsx)(_f,Object.assign({message:`${null==n?void 0:n.name} Network`,xOffset:-6,delay:.01},{children:(0,m.jsx)(qh,{id:null==n?void 0:n.id,unsupported:null==n?void 0:n.unsupported})})):(0,m.jsx)(qh,{id:null==n?void 0:n.id,unsupported:null==n?void 0:n.unsupported}),!s&&(0,m.jsx)($h,{style:{top:1,left:-3}})]}))}))})})},Gh=({closeModal:e})=>{var t,r;const n=ym(),i=Qc(),{reset:a}=(0,o.useConnect)(),{disconnect:s}=(0,o.useDisconnect)(),{chain:u}=(0,o.useNetwork)(),{address:d,isConnected:c}=(0,o.useAccount)(),{data:l}=(0,o.useEnsName)({chainId:1,address:d}),{data:p}=(0,o.useBalance)({addressOrName:d}),[f,h]=(0,v.useState)(!1);(0,v.useEffect)((()=>{c||n.setOpen(!1)}),[c]),(0,v.useEffect)((()=>{if(f)return e?e():n.setOpen(!1),()=>{s(),a()}}),[f,s,a]);const g=["web95","rounded","minimal"].includes(null!==(r=null!==(t=i.theme)&&void 0!==t?t:n.theme)&&void 0!==r?r:"")?"....":void 0;return(0,m.jsxs)(mc,{children:[(0,m.jsxs)(bc,Object.assign({style:{paddingBottom:22,gap:6}},{children:[(0,m.jsx)(ih,{children:(0,m.jsxs)(oh,{children:[(0,m.jsx)(ah,{children:(0,m.jsx)(Kh,{})}),(0,m.jsx)(hh,{address:d})]})}),(0,m.jsx)(wc,{children:(0,m.jsx)(sf,Object.assign({string:d},{children:null!=l?l:Yd(d,g)}))}),(0,m.jsx)(_c,{children:(0,m.jsx)(sh,{children:(0,m.jsxs)(Wa,Object.assign({exitBeforeEnter:!0,initial:!1},{children:[p&&(0,m.jsxs)(uh,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},{children:[ec(Number(null==p?void 0:p.formatted))," ",null==p?void 0:p.symbol]}),`chain-${null==u?void 0:u.id}`),!p&&(0,m.jsx)(ch,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},{children:"\xa0"}))]}))})})]})),(0,m.jsx)(ql,Object.assign({onClick:()=>h(!0),icon:(0,m.jsx)(nl,{})},{children:"Disconnect"}))]})},Zh=()=>{const e=ym(),{reset:t}=(0,o.useConnect)(),{disconnect:r}=(0,o.useDisconnect)(),{chain:n}=(0,o.useNetwork)(),i=Zc[e.lang].warnings;return(0,m.jsx)(mc,Object.assign({style:{width:278}},{children:(0,m.jsxs)(bc,Object.assign({style:{padding:0,marginTop:-10}},{children:[(null==n?void 0:n.unsupported)&&(0,m.jsxs)(_c,{children:[Hc(i.chainUnsupported)," ",Hc(i.chainUnsupportedResolve)]}),(0,m.jsx)("div",Object.assign({style:{padding:"6px 8px",marginBottom:-8}},{children:(0,m.jsx)(Ih,{})})),(null==n?void 0:n.unsupported)&&(0,m.jsx)(ql,Object.assign({icon:(0,m.jsx)(nl,{}),onClick:()=>{r(),t()}},{children:"Disconnect"}))]}))}))},Jh=Cu`
  from{ transform: rotate(0deg); }
  to{   transform: rotate(360deg); }
`,Xh=Cu`
  from{ background-position: 0 0; }
  to{ background-position: 100% 0; }
`,Yh=xu.div`
  @media only screen and (max-width: ${sc}px) {
    margin: 5px auto 24px;
    padding: 16px 16px;
    border-radius: var(--ck-tertiary-border-radius, 24px);
    box-shadow: var(--ck-tertiary-box-shadow, none);
    background: var(--ck-body-background-tertiary);
  }
`,Qh=xu(Ua.div)`
  z-index: 2;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  transition: inherit;
  background: var(--ck-body-background-secondary);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  svg,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: ${sc}px) {
    width: 64px;
    height: 64px;
  }
`,em=xu(Ua.div)`
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  color: currentColor;
  border-radius: 100%;
  transition: inherit;
  svg {
    z-index: 3;
    position: relative;
    transform: scale(0.89);
    transition: inherit;
    opacity: 0.5;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 10px;
    border-radius: inherit;
    border: 1px dashed var(--border-color);
    background: var(--ck-body-background);
    transition: inherit;
    animation: ${Jh} 10s linear infinite;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: #34c759;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
    transform: scale(0);
    transition: inherit;
  }
  @media only screen and (max-width: ${sc}px) {
    width: 64px;
    height: 64px;
    svg {
      transform: scale(1.1);
    }
  }
`,tm=xu(Ua.svg)`
  display: block;
  position: relative;
  margin: 0 auto;
  transition: inherit;
  overflow: visible;
  rect {
    stroke: var(--border-color);
    rx: var(--ck-border-radius);
  }
  @media only screen and (max-width: ${sc}px) {
    display: none;
  }
`,rm=xu(Ua.div)`
  --border-color: var(--ck-siwe-border, var(--ck-body-divider));
  --border-size: 0;
  --border-style: dashed;

  user-select: none;
  pointer-events: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  margin: 12px auto;
  padding: 42px 32px;
  transition: all 320ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  border: var(--border-size) var(--border-style) var(--border-color);
  border-radius: var(--ck-border-radius);

  @media only screen and (max-width: ${sc}px) {
    --border-size: 1px;
    margin: 0 auto 20px;
    padding: 38px 0;
    gap: 18px;
    + div {
      // easier than wrapping in another styled component
      padding-bottom: 10px;
    }
  }

  > div {
    z-index: 2;
    position: relative;
    transition: inherit;
  }

  &:before,
  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 1px;
    margin-left: -60px;
    transition: inherit;
    animation: ${Xh} 10s linear infinite;
    background: linear-gradient(
      90deg,
      var(--border-color),
      var(--border-color) 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 6px 1px;
  }

  &:after {
    background: var(--border-color);
    transform: scaleX(0);
  }

  ${({$connected:e})=>e&&uu`
      &:before {
        opacity: 0;
      }
      &:after {
        transform: none;
      }
      ${tm} {
        rect {
          stroke-dasharray: 0 0;
        }
      }
      ${Qh} {
        transform: scale(0.62);
      }
      ${em} {
        svg {
          transform: scale(1.5);
          opacity: 1;
          color: #fff;
        }
        &:before {
          transform: scale(0);
        }
        &:after {
          transform: scale(1);
        }
      }
      @media only screen and (max-width: ${sc}px) {
        --border-size: 1px;
        --border-style: solid;
        ${em} {
          svg {
            transform: scale(1.75);
          }
        }
      }
    `};
`,nm=(0,v.createContext)(null);var im,om;(om=im||(im={})).READY="ready",om.LOADING="loading",om.SUCCESS="success",om.REJECTED="rejected",om.ERROR="error";const am=({showSignOutButton:e,onSignIn:t})=>{var r;const n=(0,v.useContext)(nm),i=fh(),{address:a}=(0,o.useAccount)(),{chain:s}=(0,o.useNetwork)(),{signMessageAsync:u}=(0,o.useSignMessage)(),[d,c]=(0,v.useState)(im.READY),l=(null===(r=null==n?void 0:n.session.data)||void 0===r?void 0:r.address)?im.SUCCESS:(null==n?void 0:n.session.isLoading)||(null==n?void 0:n.nonce.isLoading)?im.LOADING:d;if(!n)throw new Error("SIWEButton must be inside a SIWEProvider.");return i?e&&l===im.SUCCESS?(0,m.jsx)(ql,Object.assign({style:{margin:0},onClick:n.signOutAndRefetch,icon:(0,m.jsx)(nl,{})},{children:"Sign Out"}),"button"):(0,m.jsx)(ql,Object.assign({style:{margin:0},arrow:!!a&&l===im.READY,onClick:l!==im.LOADING&&l!==im.SUCCESS?()=>sd(void 0,void 0,void 0,(function*(){try{if(!n)throw new Error("SIWE not configured");const e=null==s?void 0:s.id;if(!a)throw new Error("No address found");if(!e)throw new Error("No chainId found");const r=n.nonce.data;if(!r)throw new Error("Could not fetch nonce");c(im.LOADING);const i=n.createMessage({address:a,chainId:e,nonce:r}),o=yield u({message:i});if(!(yield n.verifyMessage({message:i,signature:o})))throw new Error("Error verifying SIWE signature");yield n.session.refetch(),c(im.READY),null==t||t()}catch(e){(e=>{switch(console.error("signIn error",e.code,e.message),e.code){case-32e3:case"ACTION_REJECTED":c(im.REJECTED);break;default:c(im.ERROR)}})(e)}})):void 0,disabled:!a||n.nonce.isFetching||l===im.LOADING||l===im.SUCCESS,waiting:l===im.LOADING,icon:l===im.REJECTED&&(0,m.jsx)(Ua.div,Object.assign({initial:{rotate:-270},animate:{rotate:0},transition:{duration:1,ease:[.175,.885,.32,.98]}},{children:(0,m.jsx)(al,{style:{opacity:.4}})}))},{children:function(e){const t={[im.READY]:"Sign In",[im.LOADING]:"Awaiting Confirmation",[im.REJECTED]:"Try Again",[im.ERROR]:"Unknown Error",[im.SUCCESS]:"Signed In"};return a?t[e]:"Wallet Not Connected"}(l)}),"button"):(0,m.jsx)(ql,{style:{margin:0},disabled:!0},"loading")},sm=e=>{var t=ad(e,[]);return(0,m.jsx)(xd,{children:(0,m.jsx)(am,Object.assign({},t))})},um=()=>{const e=(0,v.useContext)(nm);if(!e)return{signedIn:!1};const{session:t,nonce:r,signOutAndRefetch:n}=e,{address:i,chainId:o}=t.data||{};return{address:i,chainId:o,signedIn:!!i,signOut:n,session:t,nonce:r}},dm=({src:e,alt:t,width:r,height:n})=>{const i=(0,v.useRef)(null),[o,a]=(0,v.useState)(!0);return(0,v.useEffect)((()=>{i.current&&i.current.complete&&0!==i.current.naturalHeight||a(!1)}),[e]),(0,m.jsx)("div",Object.assign({style:{width:r,height:n,background:"rgba(0,0,0,0.02)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.02)"}},{children:(0,m.jsx)("img",{ref:i,src:e,alt:t,width:r,height:n,onLoad:()=>a(!0),style:{transition:"opacity 0.2s ease",opacity:o?1:0}})}))},cm={duration:.2,ease:[.26,.08,.25,1]},lm={duration:.16,ease:[.26,.08,.25,1]},pm=()=>{var e,t;const r=e=>Hc(e,{}),n=ym(),{signedIn:i}=um(),a=ic(),[s,u]=(0,v.useState)(i?"signedIn":"signedOut"),d=Zc[n.lang].signInWithEthereumScreen[s];(0,v.useEffect)((()=>{i&&u("signedIn")}),[]),(0,v.useEffect)((()=>{i||u("signedOut")}),[i]);const{address:c}=(0,o.useAccount)(),l=(()=>{const e={svg:null,default:null},t=document.getElementsByTagName("link");return Array.from(t).forEach((t=>{"icon"!==t.getAttribute("rel")&&"shortcut icon"!==t.getAttribute("rel")||!t.getAttribute("href")||("image/svg+xml"===t.getAttribute("type")?e.svg=t.getAttribute("href"):e.default=t.getAttribute("href"))})),e})(),p=null!==(t=null!==(e=Qu)&&void 0!==e?e:l.svg)&&void 0!==t?t:l.default;return(0,m.jsx)(mc,Object.assign({style:{width:278}},{children:(0,m.jsxs)(bc,Object.assign({style:{padding:0,marginTop:-10}},{children:[(0,m.jsx)(Yh,{children:(0,m.jsx)(Wa,Object.assign({exitBeforeEnter:!0},{children:(0,m.jsx)(Ua.div,Object.assign({initial:!a&&{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:lm},{children:(0,m.jsx)(_c,{children:r(d.h1)})}),d.h1)}))}),(0,m.jsxs)(rm,Object.assign({$connected:i},{children:[(0,m.jsx)("div",Object.assign({style:{position:"absolute",inset:0}},{children:(0,m.jsx)(tm,Object.assign({width:"262",height:"134",viewBox:"0 0 262 134",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)(Ua.rect,{x:"0",y:"0",rx:"12",width:"262",height:"134",strokeDasharray:"3 3",animate:{strokeDashoffset:[0,-6]},transition:{duration:.4,ease:"linear",repeat:1/0}})}))})),(0,m.jsx)(Ua.div,Object.assign({initial:!a&&{opacity:0,x:50,scale:.8},animate:{opacity:1,x:0,scale:1},transition:cm},{children:(0,m.jsx)(Qh,{children:(0,m.jsx)(hh,{address:c,size:64})})}),"avatarImage"),(0,m.jsx)(Ua.div,Object.assign({initial:!a&&{scale:.6},animate:{scale:1},transition:Object.assign({},cm)},{children:(0,m.jsx)(em,{children:(0,m.jsx)(il,{})})}),"tickIcon"),(0,m.jsx)(Ua.div,Object.assign({initial:!a&&{opacity:0,x:-40,scale:.8},animate:{opacity:1,x:0,scale:1},transition:Object.assign({},cm)},{children:(0,m.jsx)(Qh,{children:p?(0,m.jsx)(dm,{src:p,alt:"app"}):(0,m.jsx)(bh,{})})}),"appLogo")]}),"status"),(0,m.jsx)(Wa,Object.assign({exitBeforeEnter:!0},{children:(0,m.jsx)(Ua.div,Object.assign({style:{paddingBottom:a?24:12},initial:!a&&{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:lm},{children:(0,m.jsx)(_c,Object.assign({style:{marginTop:-1,marginBottom:-3}},{children:r(d.p)}))}),d.p)})),(0,m.jsx)(am,{showSignOutButton:"signedIn"===s,onSignIn:()=>{setTimeout((()=>{n.setOpen(!1)}),2e3)}})]}))}))},fm={},hm=({mode:e="auto",theme:t="auto",customTheme:r=fm,lang:n="en"})=>{const i=ym(),{isConnected:a}=(0,o.useAccount)(),{chain:s}=(0,o.useNetwork)(),u=!(null==s?void 0:s.unsupported),d=!(null==s?void 0:s.unsupported)&&i.route!==mm.CONNECTORS&&i.route!==mm.PROFILE,c=!(null==s?void 0:s.unsupported)&&i.route!==mm.PROFILE,l={onboarding:(0,m.jsx)(Hl,{}),about:(0,m.jsx)(gp,{}),download:(0,m.jsx)(nh,{connectorId:i.connector}),connectors:(0,m.jsx)(Zp,{}),mobileConnectors:(0,m.jsx)(df,{}),connect:(0,m.jsx)(rh,{connectorId:i.connector}),profile:(0,m.jsx)(Gh,{}),switchNetworks:(0,m.jsx)(Zh,{}),signInWithEthereum:(0,m.jsx)(pm,{})};function p(){i.setOpen(!1)}return(0,v.useEffect)((()=>{a?i.route===mm.PROFILE&&i.route===mm.SIGNINWITHETHEREUM||(i.signInWithEthereum?i.setRoute(mm.SIGNINWITHETHEREUM):p()):p()}),[a]),(0,v.useEffect)((()=>i.setMode(e)),[e]),(0,v.useEffect)((()=>i.setTheme(t)),[t]),(0,v.useEffect)((()=>i.setCustomTheme(r)),[r]),(0,v.useEffect)((()=>i.setLang(n)),[n]),(0,v.useEffect)((()=>{const e=ed();if(!e||!i.open)return;const t=document.createElement("meta");return t.setAttribute("property","og:title"),t.setAttribute("content",e),document.head.prepend(t),()=>{document.head.removeChild(t)}}),[i.open]),(0,m.jsx)(Yc,Object.assign({theme:t,customTheme:r,mode:e},{children:(0,m.jsx)(hl,{open:i.open,pages:l,pageId:i.route,onClose:u?p:void 0,onInfo:c?()=>i.setRoute(mm.ABOUT):void 0,onBack:d?()=>{i.route===mm.SIGNINWITHETHEREUM||i.route===mm.SWITCHNETWORKS?i.setRoute(mm.PROFILE):i.route===mm.DOWNLOAD?i.setRoute(mm.CONNECT):i.setRoute(mm.CONNECTORS)}:void 0})}))};const mm={ONBOARDING:"onboarding",ABOUT:"about",CONNECTORS:"connectors",MOBILECONNECTORS:"mobileConnectors",CONNECT:"connect",DOWNLOAD:"download",PROFILE:"profile",SWITCHNETWORKS:"switchNetworks",SIGNINWITHETHEREUM:"signInWithEthereum"},vm=(0,v.createContext)(null),gm=({children:e,theme:t="auto",mode:r="auto",customTheme:n,options:i})=>{var a,s,u;if(v.useContext(vm))throw new Error("Multiple, nested usages of ConnectKitProvider detected. Please use only one.");const d=Object.assign({},{language:"en",hideTooltips:!1,hideQuestionMarkCTA:!1,hideNoWalletCTA:!1,walletConnectCTA:"modal",avoidLayoutShift:!0,embedGoogleFonts:!1,truncateLongENSAddress:!0,walletConnectName:"Other Wallets",reducedMotion:!1,disclaimer:null,bufferPolyfill:!0,customAvatar:void 0,initialChainId:void 0},i);"undefined"!=typeof window&&d.bufferPolyfill&&(window.Buffer=null!==(a=window.Buffer)&&void 0!==a?a:g.Buffer);const[c,l]=(0,v.useState)(t),[p,f]=(0,v.useState)(r),[h,y]=(0,v.useState)(null!=n?n:{}),[b,w]=(0,v.useState)("en"),[_,A]=(0,v.useState)(!1),[E,C]=(0,v.useState)(""),[x,k]=(0,v.useState)(mm.CONNECTORS),[S,O]=(0,v.useState)("");d.embedGoogleFonts&&function(e){var t;const r=null!==(t={web95:"Lato",retro:"Nunito",midnight:"Inter",minimal:"Inter",rounded:"Nunito"}[e])&&void 0!==t?t:null;!function(e){(0,v.useEffect)((()=>{if(!e)return;e=e.replace(/ /g,"+");const t=document.createElement("link");t.href="https://fonts.googleapis.com",t.rel="preconnect";const r=document.createElement("link");r.href="https://fonts.gstatic.com",r.rel="preconnect",r.crossOrigin="true";const n=document.createElement("link");return n.href=`https://fonts.googleapis.com/css2?family=${e}:wght@400;500;600&display=swap`,n.rel="stylesheet",document.head.appendChild(t),document.head.appendChild(r),document.head.appendChild(n),()=>{document.head.removeChild(t),document.head.removeChild(r),document.head.removeChild(n)}}),[e])}(null!=r?r:"")}(t),(0,v.useEffect)((()=>l(t)),[t]),(0,v.useEffect)((()=>w(d.language||"en")),[d.language]),(0,v.useEffect)((()=>O(null)),[x,_]);const{chain:D}=(0,o.useNetwork)();(0,v.useEffect)((()=>{(null==D?void 0:D.unsupported)&&(A(!0),k(mm.SWITCHNETWORKS))}),[D,x,_]);const B={theme:c,setTheme:l,mode:p,setMode:f,customTheme:n,setCustomTheme:y,lang:b,setLang:w,open:_,setOpen:A,route:x,setRoute:k,connector:E,setConnector:C,signInWithEthereum:null!==(u=null===(s=v.useContext(nm))||void 0===s?void 0:s.enabled)&&void 0!==u&&u,options:d,errorMessage:S,debug:(e,t)=>{O(e),console.log("---------CONNECTKIT DEBUG---------"),console.log(e),t&&console.table(t),console.log("---------/CONNECTKIT DEBUG---------")}};return(0,v.createElement)(vm.Provider,{value:B},(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(wu,Object.assign({theme:od},{children:[e,(0,m.jsx)(hm,{lang:b,theme:c,mode:r,customTheme:h})]}))}))},ym=()=>{const e=v.useContext(vm);if(!e)throw Error("ConnectKit Hook must be inside a Provider.");return e},bm=()=>{const e=ym(),{isConnected:t}=(0,o.useAccount)();return{open:e.open,setOpen:r=>{r&&e.setRoute(t?mm.PROFILE:mm.CONNECTORS),e.setOpen(r)}}},wm=xu(Ua.div)`
  top: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;xu(Ua.div)`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  svg {
    display: block;
  }
`;const _m=xu(Ua.div)`
  pointer-events: none;
  user-select: none;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,Am=xu(Ua.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  background: var(--ck-body-color-danger, red);
  color: #fff;
  svg {
    display: block;
    position: relative;
    top: -1px;
  }
`,Em=xu(Ua.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 40px;
  padding: 0;
  line-height: 0;
  letter-spacing: -0.2px;
  font-size: var(--ck-connectbutton-font-size, 16px);
  font-weight: var(--ck-connectbutton-font-weight, 500);
  text-align: center;
  transition: 100ms ease;
  transition-property: color, background, box-shadow, border-radius;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &.primary {
    --color: var(--ck-connectbutton-color);
    --background: var(--ck-connectbutton-background);
    --box-shadow: var(--ck-connectbutton-box-shadow);
    --border-radius: var(--ck-connectbutton-border-radius, 12px);

    --hover-color: var(--ck-connectbutton-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(--ck-connectbutton-active-color, var(--hover-color));
    --active-background: var(
      --ck-connectbutton-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-active-border-radius,
      var(--hover-border-radius)
    );
  }
  &.secondary {
    --color: var(--ck-connectbutton-balance-color);
    --background: var(--ck-connectbutton-balance-background);
    --box-shadow: var(--ck-connectbutton-balance-box-shadow);
    --border-radius: var(
      --ck-connectbutton-balance-border-radius,
      var(--ck-connectbutton-border-radius, 12px)
    );

    --hover-color: var(--ck-connectbutton-balance-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-balance-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-balance-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-balance-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(
      --ck-connectbutton-balance-active-color,
      var(--hover-color)
    );
    --active-background: var(
      --ck-connectbutton-balance-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-balance-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-balance-active-border-radius,
      var(--hover-border-radius)
    );
  }
`,Cm=xu.button`
  all: initial;
  appearance: none;
  user-select: none;
  position: relative;
  padding: 0;
  margin: 0;
  background: none;
  border-radius: var(--ck-border-radius);

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  display: flex;
  flex-wrap: nowrap;
  background: none;
  cursor: pointer;
  * {
    cursor: pointer;
  }
  &:hover {
    ${Em} {
      color: var(--hover-color, var(--color));
      background: var(--hover-background, var(--background));
      box-shadow: var(--hover-box-shadow, var(--box-shadow));
      border-radius: var(--hover-border-radius, var(--border-radius));
    }
  }
  &:active {
    ${Em} {
      color: var(--active-color, var(--hover-color, var(--color)));
      background: var(
        --active-background,
        var(--hover-background, var(--background))
      );
      box-shadow: var(
        --active-box-shadow,
        var(--hover-box-shadow, var(--box-shadow))
      );
      border-radius: var(
        --active-border-radius,
        var(--hover-border-radius, var(--border-radius))
      );
    }
  }
  &:focus-visible {
    outline: 2px solid var(--ck-family-brand);
  }
`,xm=({children:e,variant:t="primary",autoSize:r=!0,duration:n=.3,style:i})=>{const[o,a]=$u();return(0,m.jsx)(Em,Object.assign({className:t,initial:!1,animate:r?{width:a.width>10?a.width:"auto"}:void 0,transition:{duration:n,ease:[.25,1,.5,1],delay:.01},style:i},{children:(0,m.jsx)("div",Object.assign({ref:o,style:{whiteSpace:"nowrap",width:"fit-content",position:"relative",padding:"0 12px"}},{children:e}))}))},km=xu(Ua.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,Sm=Cu`
  0%,100%{ opacity: 0.1; transform: scale(0.75); }
  50%{ opacity: 0.75; transform: scale(1.2) }
`,Om=xu.div`
  pointer-events: none;
  user-select: none;
  padding: 0 5px;
  span {
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    width: 3px;
    height: 3px;
    border-radius: 4px;
    background: currentColor;
    animation: ${Sm} 1000ms ease infinite both;
  }
`,Dm=({hideIcon:e,hideSymbol:t})=>{const r=fh(),[n,i]=(0,v.useState)(!0),{address:a}=(0,o.useAccount)(),{chain:s}=(0,o.useNetwork)(),{data:u}=(0,o.useBalance)({addressOrName:a,chainId:null==s?void 0:s.id,watch:!0}),d=wh.find((e=>e.id===(null==s?void 0:s.id))),c=r&&void 0!==(null==u?void 0:u.formatted)?`balance-${null==d?void 0:d.id}-${null==u?void 0:u.formatted}`:"balance-loading";return(0,v.useEffect)((()=>{i(!1)}),[]),(0,m.jsx)("div",Object.assign({style:{position:"relative"}},{children:(0,m.jsx)(Wa,Object.assign({initial:!1},{children:(0,m.jsx)(Ua.div,Object.assign({initial:void 0!==(null==u?void 0:u.formatted)&&n?{opacity:1}:{opacity:0,position:"absolute",top:0,left:0,bottom:0},animate:{opacity:1,position:"relative"},exit:{opacity:0,position:"absolute",top:0,left:0,bottom:0},transition:{duration:.4,ease:[.25,1,.5,1],delay:.4}},{children:a&&r&&void 0!==(null==u?void 0:u.formatted)?(null==s?void 0:s.unsupported)?(0,m.jsxs)(km,{children:[!e&&(0,m.jsx)(qh,{id:null==s?void 0:s.id}),(0,m.jsx)("span",Object.assign({style:{minWidth:32}},{children:"???"}))]}):(0,m.jsxs)(km,{children:[!e&&(0,m.jsx)(qh,{id:null==s?void 0:s.id}),(0,m.jsx)("span",Object.assign({style:{minWidth:32}},{children:ec(Number(null==u?void 0:u.formatted))})),!t&&` ${null==u?void 0:u.symbol}`]}):(0,m.jsxs)(km,{children:[!e&&(0,m.jsx)(qh,{}),(0,m.jsx)("span",Object.assign({style:{minWidth:32}},{children:(0,m.jsxs)(Om,{children:[(0,m.jsx)("span",{style:{animationDelay:"0ms"}}),(0,m.jsx)("span",{style:{animationDelay:"50ms"}}),(0,m.jsx)("span",{style:{animationDelay:"100ms"}})]})}))]})}),c)}))}))},Bm={initial:{zIndex:2,opacity:0,x:"-100%"},animate:{opacity:1,x:.1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,opacity:0,x:"-100%",pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},Im={initial:{zIndex:2,opacity:0,x:"100%"},animate:{x:.2,opacity:1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,x:"100%",opacity:0,pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},Mm={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,ease:[.25,1,.5,1]}},exit:{position:"absolute",opacity:0,transition:{duration:.3,ease:[.25,1,.5,1]}}},Tm=({children:e})=>{const t=fh(),r=ym(),{chain:n}=(0,o.useNetwork)(),{address:i,isConnected:a,isConnecting:s}=(0,o.useAccount)(),{data:u}=(0,o.useEnsName)({chainId:1,address:i});return e&&t?(0,m.jsx)(m.Fragment,{children:e({show:function(){r.setOpen(!0),r.setRoute(a?mm.PROFILE:mm.CONNECTORS)},hide:function(){r.setOpen(!1)},unsupported:!!(null==n?void 0:n.unsupported),isConnected:!!i,isConnecting:s,address:null==i?void 0:i.toString(),truncatedAddress:i?Yd(i):void 0,ensName:null==u?void 0:u.toString()})}):null};function Fm({label:e,showAvatar:t,separator:r}){var n;const i=ym(),{signedIn:a}=um(),{address:s}=(0,o.useAccount)(),{data:u}=(0,o.useEnsName)({chainId:1,address:s}),{chain:d}=(0,o.useNetwork)();return(0,m.jsx)(Wa,Object.assign({initial:!1},{children:s?(0,m.jsxs)(wm,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:Im,style:{height:40}},{children:[t&&(0,m.jsxs)(_m,{children:[(0,m.jsxs)(Wa,Object.assign({initial:!1},{children:[a&&(0,m.jsx)(Ua.div,Object.assign({style:{zIndex:2,position:"absolute",bottom:0,right:0},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},{children:(0,m.jsx)(ul,{})})),(null==d?void 0:d.unsupported)&&(0,m.jsx)(Am,Object.assign({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},{children:(0,m.jsx)("svg",Object.assign({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,m.jsx)("path",{d:"M1.68831 13.5H12.0764C13.1026 13.5 13.7647 12.7197 13.7647 11.763C13.7647 11.4781 13.6985 11.1863 13.5462 10.9149L8.34225 1.37526C8.02445 0.791754 7.45505 0.5 6.88566 0.5C6.31627 0.5 5.73364 0.791754 5.42246 1.37526L0.225108 10.9217C0.0728291 11.1863 0 11.4781 0 11.763C0 12.7197 0.662083 13.5 1.68831 13.5ZM6.88566 8.8048C6.49503 8.8048 6.27655 8.5809 6.26331 8.1738L6.16399 5.0595C6.15075 4.64562 6.44869 4.34708 6.87904 4.34708C7.30278 4.34708 7.61396 4.6524 7.60071 5.06628L7.5014 8.16701C7.48154 8.5809 7.26305 8.8048 6.88566 8.8048ZM6.88566 11.3492C6.44207 11.3492 6.07792 11.0303 6.07792 10.5757C6.07792 10.1211 6.44207 9.80219 6.88566 9.80219C7.32926 9.80219 7.69341 10.1143 7.69341 10.5757C7.69341 11.0371 7.32264 11.3492 6.88566 11.3492Z",fill:"currentColor"})}))}))]})),(0,m.jsx)(hh,{size:24,address:s})]}),(0,m.jsx)("div",Object.assign({style:{position:"relative",paddingRight:t?1:0}},{children:(0,m.jsx)(Wa,Object.assign({initial:!1},{children:u?(0,m.jsx)(wm,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:Mm,style:{position:u?"relative":"absolute"}},{children:(null===(n=i.options)||void 0===n?void 0:n.truncateLongENSAddress)?Qd(u,20):u}),"ckEnsName"):(0,m.jsxs)(wm,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:Mm,style:{position:u?"absolute":"relative"}},{children:[Yd(s,r)," "]}),"ckTruncatedAddress")}))}))]}),"connectedText"):(0,m.jsx)(wm,Object.assign({initial:"initial",animate:"animate",exit:"exit",variants:Bm,style:{height:40}},{children:e||(0,m.jsx)(m.Fragment,{children:"Connect Wallet"})}),"connectWalletText")}))}function jm({label:e,showBalance:t=!1,showAvatar:r=!0,theme:n,mode:i,customTheme:a,onClick:s}){var u;const d=fh(),c=ym(),{isConnected:l,address:p}=(0,o.useAccount)(),{chain:f}=(0,o.useNetwork)();function h(){c.setOpen(!0),c.setRoute(l?mm.PROFILE:mm.CONNECTORS)}const v=["web95","rounded","minimal"].includes(null!==(u=null!=n?n:c.theme)&&void 0!==u?u:"")?"....":void 0;if(!d)return null;const g=t&&!(null==f?void 0:f.unsupported),y=p&&g;return(0,m.jsx)(xd,Object.assign({$useTheme:null!=n?n:c.theme,$useMode:null!=i?i:c.mode,$customTheme:null!=a?a:c.customTheme},{children:(0,m.jsxs)(Cm,Object.assign({onClick:()=>{s?s(h):h()}},{children:[g&&(0,m.jsx)(Wa,Object.assign({initial:!1},{children:y&&(0,m.jsx)(Ua.div,Object.assign({initial:{opacity:0,x:"100%",width:0,marginRight:0},animate:{opacity:1,x:0,width:"auto",marginRight:-24,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{opacity:0,x:"100%",width:0,marginRight:0,transition:{duration:.4,ease:[.25,1,.5,1]}}},{children:(0,m.jsx)(xm,Object.assign({variant:"secondary",theme:null!=n?n:c.theme,mode:null!=i?i:c.mode,customTheme:null!=a?a:c.customTheme,style:{overflow:"hidden"}},{children:(0,m.jsx)(Ua.div,Object.assign({style:{paddingRight:24}},{children:(0,m.jsx)(Dm,{hideSymbol:!0})}))}))}),"balance")})),(0,m.jsx)(xm,Object.assign({theme:null!=n?n:c.theme,mode:null!=i?i:c.mode,customTheme:null!=a?a:c.customTheme,style:g&&t&&p&&("retro"===n||"retro"===c.theme)?{boxShadow:"var(--ck-connectbutton-balance-connectbutton-box-shadow)",borderRadius:"var(--ck-connectbutton-balance-connectbutton-border-radius)",overflow:"hidden"}:{overflow:"hidden"}},{children:(0,m.jsx)(Fm,{separator:v,showAvatar:r,label:e})}))]}))}))}Tm.displayName="ConnectKitButton.Custom",jm.Custom=Tm;const Pm=e=>{var{children:t,enabled:r=!0,nonceRefetchInterval:n=3e5,sessionRefetchInterval:i=3e5,signOutOnDisconnect:a=!0,signOutOnAccountChange:s=!0,signOutOnNetworkChange:u=!0}=e,d=ad(e,["children","enabled","nonceRefetchInterval","sessionRefetchInterval","signOutOnDisconnect","signOutOnAccountChange","signOutOnNetworkChange"]);if((0,v.useContext)(nm))throw new Error("Multiple, nested usages of SIWEProvider detected. Please use only one.");if((0,v.useContext)(vm))throw new Error("ConnectKitProvider must be mounted inside SIWEProvider.");const c=(0,o.useQuery)(["ckSiweNonce"],(()=>d.getNonce()),{initialData:null,refetchInterval:n}),l=(0,o.useQuery)(["ckSiweSession"],d.getSession,{initialData:null,refetchInterval:i}),p=l.data,f=()=>sd(void 0,void 0,void 0,(function*(){if(!(yield d.signOut()))throw new Error("Failed to sign out.");yield Promise.all([l.refetch(),c.refetch()])})),{address:h}=(0,o.useAccount)({onDisconnect:()=>{a&&f()}}),{chain:g}=(0,o.useNetwork)();return(0,v.useEffect)((()=>{p&&p.address&&p.chainId&&h&&g&&(s&&p.address!==h?(console.warn("Wallet account changed, signing out of SIWE session"),f()):u&&p.chainId!==g.id&&(console.warn("Wallet network changed, signing out of SIWE session"),f()))}),[l,h,g]),(0,m.jsx)(nm.Provider,Object.assign({value:Object.assign(Object.assign({enabled:r,nonceRefetchInterval:n,sessionRefetchInterval:i,signOutOnDisconnect:a,signOutOnAccountChange:s,signOutOnNetworkChange:u},d),{nonce:c,session:l,signOutAndRefetch:f})},{children:t}))},Nm=Cu`
  0%{ transform:none; }
  25%{ transform:translateX(${8}px); }
  50%{ transform:translateX(-${8}px); }
  75%{ transform:translateX(${8}px); }
  100%{ transform:none; }
`,Rm=Cu`
  0%{ transform:translate(500%,100%); opacity:0; }
  60%{ transform:translate(25%,-20%); opacity:1; }
  70%{ transform:translate(25%,-20%); }
  85%{ transform:translate(25%,-20%) scale(0.9); }
  100%{ transform:translate(25%,-20%) scale(1); opacity:1; }
`,Lm=xu.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  &.play {
    animation: ${Rm} 1300ms 200ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`,Um=xu.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  &.shake {
    animation: ${Nm} 300ms 100ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`,zm=xu.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    z-index: 9;
    content: '';
    position: absolute;
    inset: 0;
  }