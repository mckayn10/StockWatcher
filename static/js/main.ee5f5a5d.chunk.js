(this.webpackJsonpstockwatcher=this.webpackJsonpstockwatcher||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a.n(l),o=(a(23),a(15)),s=a(13),i=a(14),m=a(17),h=a(16),d=a(2),u=a.n(d),p=(a(41),a(42),function(e){var t=e.searchChange,a=e.addStock,n=e.inputValue,l=e.screenWidth;return c.a.createElement("div",{className:"search-container"},c.a.createElement("input",{type:"text",value:n,placeholder:"Enter stock symbol",id:"input",onChange:t}),l>640?c.a.createElement("button",{onClick:a}," ADD STOCK "):c.a.createElement("button",{onClick:a}," ADD "))});a(43);function f(e){var t=e.netVal,a=e.color;return parseFloat(t)>=0?c.a.createElement("svg",{className:"svg-arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},c.a.createElement("path",{style:{fill:a},d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"})):c.a.createElement("svg",{className:"svg-arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},c.a.createElement("path",{style:{fill:a},d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"}))}var v=function(e){var t=e.newStock,a=t.symbol,n=t.company,l=t.open,r=t.high,o=t.low,s=t.close,i=parseFloat(l).toFixed(2),m=parseFloat(r).toFixed(2),h=parseFloat(o).toFixed(2),d=parseFloat(s).toFixed(2),u=(parseFloat(s)-parseFloat(l)).toFixed(2),p=(u/l*100).toFixed(2),v={top:"".concat(94-(d-h)/(m-h)*100,"%")},w={backgroundImage:parseFloat(u)>=0?"linear-gradient(white, #ffffff46)":"linear-gradient(#ffffff46, white)"},E=parseFloat(u)>=0?"green-gradient":"red-gradient",g=parseFloat(u)>=0?"green":"red";return c.a.createElement("div",{className:"card-container"},c.a.createElement("div",{className:"stock-card flex"},c.a.createElement("div",{className:"scale-wrapper ".concat(E)},c.a.createElement("div",{className:"scale-graph",style:w},c.a.createElement("div",{className:"triangle",style:v})),c.a.createElement("div",{className:"scale-amounts"},c.a.createElement("div",null," ",m," "),c.a.createElement("div",null," ",h," "))),c.a.createElement("div",{className:"info-wrapper"},c.a.createElement("div",{className:"name-info"},c.a.createElement("h2",null," ",n," "),c.a.createElement("h4",null," ",a," ")),c.a.createElement("div",{className:"current-info flex"},c.a.createElement("div",null,c.a.createElement("h2",null," ",d," ")),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"net-amount flex ".concat(g)},c.a.createElement(f,{netVal:u,color:g}),c.a.createElement("h5",{className:g}," ",u," ")),c.a.createElement("h5",{className:g}," (",p,"%) "))),c.a.createElement("div",{className:"daily-info flex"},c.a.createElement("h5",null,"Open",c.a.createElement("span",{className:"blue-text"}," ",i," ")),c.a.createElement("h5",{className:"high-amount"},"High",c.a.createElement("span",{className:"blue-text"}," ",m," ")),c.a.createElement("h5",null,"Low",c.a.createElement("span",{className:"blue-text"}," ",h," "))))))},w=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={searchField:"",searchedStock:{},stocksArr:[],width:0,height:0},e.updateDimensions=function(){if(window.innerWidth<500)e.setState({width:450,height:102});else{var t=window.innerWidth,a=window.innerHeight;e.setState({width:t,height:a})}},e.componentDidMount=function(){e.updateDimensions(),window.addEventListener("resize",e.updateDimensions)},e.componentWillUnmount=function(){window.removeEventListener("resize",e.updateDimensions)},e.onSearchChange=function(t){e.setState({searchField:t.target.value})},e.addStock=function(){var t="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(e.state.searchField,"&apikey=HY0JP87WH3PG17X6"),a="https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(e.state.searchField,"&apikey=HY0JP87WH3PG17X6");u.a.get(t).then((function(t){u.a.get(a).then((function(a){var n=t.data["Time Series (Daily)"],c=Object.keys(t.data["Time Series (Daily)"])[0],l=n["".concat(c)],r={symbol:a.data.bestMatches[0]["1. symbol"],company:a.data.bestMatches[0]["2. name"],open:l["1. open"],high:l["2. high"],low:l["3. low"],close:l["4. close"]};console.log(l),e.setState({searchedStock:r,stocksArr:[].concat(Object(o.a)(e.state.stocksArr),[r]),searchField:""})})).catch((function(e){alert(e,"please enter a valid stock symbol or try again in 15 seconds")}))})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.stocksArr.map((function(e,t){return c.a.createElement(v,{key:t,newStock:e})}));return c.a.createElement("div",{className:"home-container"},c.a.createElement("h1",null," Stock Watcher "),c.a.createElement(p,{searchChange:this.onSearchChange,addStock:this.addStock,inputValue:this.state.searchField,screenWidth:this.state.width}),c.a.createElement("div",{className:"list-container flex"},e))}}]),a}(n.Component);a(44);var E=function(){return c.a.createElement("div",{className:"app-container"},c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ee5f5a5d.chunk.js.map