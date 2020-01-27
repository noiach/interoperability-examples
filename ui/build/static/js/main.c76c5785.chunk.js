(window["webpackJsonpgaas-ui"]=window["webpackJsonpgaas-ui"]||[]).push([[0],{1191:function(e,t){},1208:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(26),i=n.n(s),o=(n(529),n(10)),c=n.n(o),l=n(75),p=n(146),u=n(85),m=n(199),d=n(200),y=n(203),f=n(258),b=n(45),h=n(1211),g=n(518),w=n(513),v=n.n(w),E=Object(g.a)({palette:{primary:{light:"#000",main:"#000",dark:"#000",contrastText:"#fff"},secondary:v.a},overrides:{PrivateNotchedOutline:{root:{}},MuiOutlinedInput:{notchedOutline:{borderColor:"#EBEBEB !important",borderWidth:"1px !important"}},MuiTextField:{},MuiToggleButtonGroup:{grouped:{"&:not(:first-child)":{borderLeft:"1px solid #EBEBEB"}}},MuiToggleButton:{root:{border:"1px solid #EBEBEB",backgroundColor:"#fff","&.Mui-selected":{backgroundColor:"#fff !important",color:"#000",fontWeight:"500","&:hover":{backgroundColor:"#fff !important"}},"&:hover":{backgroundColor:"#fff !important"}}}}}),T=n(261),x=n.n(T),k=n(1249),O=n(1254),j=n(519),S=n(1257),C=n(1253),B=n(1251),M=n(1252),I=n(1258),_=(n(86),n(262)),A=n.n(_),N=n(350),H=n(516),R=function(e,t){var n=e.get("transactions");n.push(t),e.set("transactions",n),localStorage.setItem("transactions",JSON.stringify(n)),window.txs=n},P=function(e,t){var n=e.get("transactions").map(function(e){return e.id===t.id?t:e});e.set("transactions",n),localStorage.setItem("transactions",JSON.stringify(n)),window.txs=n},W=function(e,t){var n=e.get("transactions").filter(function(e){return e.id!==t});e.set("transactions",n),localStorage.setItem("transactions",JSON.stringify(n)),window.txs=n},z=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,a,r,s,i,o,l,p,u,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.store,a=n.get("web3"),r=n.get("web3Context"),s=n.get("adapterAddress"),i=t.params,t.awaiting,o=t.renResponse,l=t.renSignature,p=new a.eth.Contract(H,s),e.next=8,r.lib.eth.getGasPrice();case 8:return u=e.sent,P(n,Object.assign(t,{awaiting:"eth-settle"})),e.prev=10,e.next=13,p.methods.shiftInWithSwap(i.contractParams[0].value,i.sendAmount,o.args.nhash,l).send({from:r.accounts[0],gasPrice:Math.round(1.5*u)});case 13:m=e.sent,console.log("result",m),P(n,Object.assign(t,{awaiting:"",txHash:m.transactionHash})),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10),console.log(e.t0),P(n,Object.assign(t,{error:!0}));case 22:case"end":return e.stop()}},e,this,[[10,18]])}));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t,n=e.amount,a=e.renBtcAddress,r=e.params,s=e.ethSig,i=e.destAddress,o=this.props.store.getState(),c=o.sdk,l=o.adapterAddress;if(s)t=c.shiftIn({messageID:s.messageID,sendTo:l,contractFn:"shiftInWithSwap",contractParams:[{name:"_to",type:"address",value:i}]});else{var p={sendToken:A.a.Tokens.BTC.Btc2Eth,sendAmount:Math.floor(n*Math.pow(10,8)),sendTo:l,contractFn:"shiftInWithSwap",contractParams:[{name:"_to",type:"address",value:i}]};r&&r.nonce&&(p.nonce=r.nonce),t=c.shiftIn(p)}return a&&r&&(t.params=r,t.gatewayAddress=a),t},D=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,a,r,s,i,o,l,p,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.store,a=t.params,r=t.awaiting,s=t.renResponse,i=t.renSignature,o=t.error,r){e.next=4;break}return e.abrupt("return");case 4:if(o&&P(n,Object.assign(t,{error:!1})),!s||!i){e.next=9;break}z.bind(this)(t),e.next=28;break;case 9:return e.next=11,G.bind(this)(t);case 11:return l=e.sent,a||R(n,Object.assign(t,{params:l.params,renBtcAddress:l.addr()})),e.next=15,l.waitForDeposit(2);case 15:return p=e.sent,P(n,Object.assign(t,{awaiting:"ren-settle"})),e.prev=17,e.next=20,p.submitToRenVM();case 20:u=e.sent,P(n,Object.assign(t,{renResponse:u.response,renSignature:u.signature})),z.bind(this)(t),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(17),console.log(e.t0);case 28:case"end":return e.stop()}},e,this,[[17,25]])}));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,a,r,s,i,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.store,t.params,t.awaiting,t.renResponse,t.renSignature,t.error,a=this.props.store.getState(),r=a.amount,s=a.address,e.next=5,fetch("".concat("","/swap-gateway/create"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceAmount:r,sourceAsset:"BTC",destinationAsset:"ETH",destinationAddress:s})});case 5:return i=e.sent,e.next=8,i.json();case 8:o=e.sent,R(n,Object.assign(t,{renBtcAddress:o.gatewayAddress}));case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=this;setInterval(Object(l.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.store.get("transactions").filter(function(e){return e.instant&&"btc-init"===e.awaiting}).map(function(){var t=Object(l.a)(c.a.mark(function t(n){var a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("","/swap-gateway/status?gateway=").concat(n.renBtcAddress),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:"complete"===(r=t.sent).status&&P(e.props.store,Object.assign(n,{awaiting:"",txHash:r.txHash}));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}},t)})),1e3)},L=function(){var e=this;this.props.store.get("transactions").filter(function(e){return e.awaiting}).map(function(t){D.bind(e)(t)})};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var K=Object(N.ephemeral)(),Z={txfee:100,force_gasLimit:2e5,gasLimit:2e5,verbose:!0},$=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={string:""},n.interval=null,n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){var t=e.state.string;t.length<3?e.setState({string:t+"."}):e.setState({string:""})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("span",null,this.state.string)}}]),t}(r.a.Component),q=function(e){function t(e){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(y.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.store,e.next=3,Object(N.fromConnection)("https://kovan.infura.io/v3/7be66f167c2e4a05981e2ffc4653dec2",{gsn:U({signKey:K},Z)});case 3:n=e.sent,t.set("web3Context",n),t.set("web3",n.lib),a=new A.a("testnet"),t.set("sdk",a),(r=localStorage.getItem("transactions"))&&t.set("transactions",JSON.parse(r)),L.bind(this)(),F.bind(this)();case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.swapMonitor)}},{key:"start",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.store,n=t.get("amount"),a=t.get("address"),t.get("transactions"),r={id:"tx-"+Math.random().toFixed(6),type:"deposit",instant:!1,awaiting:"btc-init",source:"btc",dest:"eth",destAddress:a,amount:n,error:!1,txHash:""},D.bind(this)(r);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"startInstant",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.store,n=t.get("amount"),a=t.get("address"),t.get("transactions"),r={id:Math.random(),type:"deposit",instant:!0,awaiting:"btc-init",source:"btc",dest:"eth",destAddress:a,amount:n,error:!1,txHash:""},J.bind(this)(r);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.store,a=n.getState(),s=a.transactions,i=a.adapterAddress,o=(a.selectedTab,a.instantSwapSelected),c=a.amount,l=a.address;console.log(n.getState());var p=c<1e-4||c>5e-4&&o||!l;return r.a.createElement(k.a,{container:!0},r.a.createElement(j.a,{variant:"h1",className:t.title},"Kovan ETH \u2013 Testnet BTC Exchange"),r.a.createElement(k.a,{item:!0,xs:12,className:t.contentContainer},r.a.createElement(k.a,{container:!0,direction:"column"},r.a.createElement(k.a,{className:t.desc,item:!0,xs:12},r.a.createElement("span",null,"Swap Testnet BTC for Kovan ETH"),r.a.createElement("span",{className:t.btcLink},"Send testnet BTC from ",r.a.createElement("a",{target:"_blank",href:"https://tbtc.bitaps.com/"},"here"))),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:4,className:t.amountContainer},r.a.createElement(S.a,{className:x()(t.input,t.amount),variant:"outlined",size:"small",placeholder:"0.000000",onChange:function(e){n.set("amount",e.target.value)},InputProps:{endAdornment:r.a.createElement(B.a,{className:t.endAdornment,position:"end"},"BTC")}})),r.a.createElement(k.a,{item:!0,xs:8},r.a.createElement(S.a,{className:x()(t.input,t.address),variant:"outlined",size:"small",placeholder:"Send to ETH Address",onChange:function(e){n.set("address",e.target.value)}})))),r.a.createElement(k.a,{item:!0,xs:12,className:t.switchContainer},r.a.createElement(M.a,{control:r.a.createElement(I.a,{checked:o,color:"primary",onChange:function(){return n.set("instantSwapSelected",!o)},value:"instant"}),label:"Faster swap (0 confirmations, 0.0005 BTC max)"})),r.a.createElement(k.a,{item:!0,xs:12,className:t.swapButtonContainer},r.a.createElement(C.a,{disabled:p,className:t.swapButton,variant:"outlined",color:"primary",onClick:o?this.startInstant.bind(this):this.start.bind(this)},"Start Swap")),s&&s.length?r.a.createElement(O.a,{className:t.divider}):null,r.a.createElement(k.a,{item:!0,xs:12,className:t.unfinished},s&&s.length?s.map(function(e,a){return r.a.createElement(k.a,{key:a,container:!0,direction:"row",className:t.depositItem},r.a.createElement(k.a,{item:!0,xs:3},e.amount," BTC"),r.a.createElement(k.a,{className:t.depositStatus,item:!0,xs:9},"btc-init"===e.awaiting?r.a.createElement("span",null,"Waiting for ".concat(e.instant?"0":"2"," confirmations to"),r.a.createElement($,null)," ".concat(e.renBtcAddress)):null,"ren-settle"===e.awaiting?r.a.createElement("span",null,"Submitting to RenVM",r.a.createElement($,null)):null,"eth-settle"===e.awaiting?r.a.createElement("span",null,"Submitting to Ethereum",r.a.createElement($,null)):null,e.awaiting?null:"Deposit complete","btc-init"===e.awaiting||e.error||!e.awaiting?r.a.createElement("div",null,e.txHash?r.a.createElement("a",{className:t.viewLink,target:"_blank",href:"https://kovan.etherscan.io/tx/"+e.txHash},"View transaction"):null,r.a.createElement("a",{href:"javascript:;",onClick:function(){W(n,e.id)}},e.awaiting?"Cancel":"Clear")):null))}):null))),r.a.createElement(k.a,{item:!0,xs:12,className:t.info},r.a.createElement("p",null,r.a.createElement("b",{className:t.caption},"How it Works"),r.a.createElement("br",null),r.a.createElement("br",null),"This exchange uses ",r.a.createElement("a",{target:"_blank",href:"https://renproject.io/"},"RenVM"),", ",r.a.createElement("a",{target:"_blank",href:"https://uniswap.io/"},"Uniswap"),", and Open Zeppelin's ",r.a.createElement("a",{target:"_blank",href:"https://gsn.openzeppelin.com/"},"GSN")," to facilitate trustless interoperabilty between Bitcoin and Ethereum. All swaps abstract ETH away from the user with the ",r.a.createElement("b",null,"GaaS pattern"),", and faster swaps are faciliated using the ",r.a.createElement("b",null,"CaaS pattern"),". To learn more, check out our interoperability tutorials below:"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/tutorials"},"GaaS tutorial")," (Gas-less tranasactions)"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/tutorials"},"CaaS tutorial")," (Faster swaps via expedited confirmations)"))),r.a.createElement("p",null,"Swaps are submitted to the following adapter address: ",r.a.createElement("a",{target:"_blank",href:"https://kovan.etherscan.io/address/"+i},i)),r.a.createElement("p",null,"To learn more about building interoperable applications like this with RenVM, check out our ",r.a.createElement("a",{target:"_blank",href:"https://renproject.io/developers"},"developer center")," or the following links:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/ren-sdk"},"Getting started with RenJS")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/gateway-js"},"Getting started with GatewayJS")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/renproject/ren/wiki"},"Github Spec")))),r.a.createElement("p",null)))}}]),t}(r.a.Component),Q=Object(h.a)(function(){return{root:{flexGrow:1},paper:{},navContainer:{paddingTop:E.spacing(1),paddingBottom:E.spacing(3),minHeight:52},contentContainer:{border:"1px solid #333",padding:E.spacing(3),marginTop:E.spacing(4),marginBottom:E.spacing(3),"& input":{}},input:{marginBottom:E.spacing(2),width:"100%","& input":{fontSize:12},"& p":{fontSize:12},"& .MuiOutlinedInput-notchedOutline":{borderColor:"rgba(0, 0, 0, 0.5) !important"}},amountContainer:{paddingRight:E.spacing(1)},amount:{},title:{fontSize:16,fontWeight:500,marginTop:E.spacing(4)},unfinished:{},depositItem:{fontSize:12,marginBottom:E.spacing(1)},depositStatus:{display:"flex",justifyContent:"space-between"},info:{fontSize:12,marginBottom:E.spacing(1),"& p":{marginBottom:0}},divider:{marginTop:E.spacing(3),marginBottom:E.spacing(3)},desc:{marginBottom:E.spacing(3),fontSize:14,display:"flex",alignItems:"flex-end",justifyContent:"space-between"},btcLink:{fontSize:12},viewLink:{fontSize:12,marginRight:E.spacing(1)},actionTabs:{marginTop:E.spacing(2),marginBottom:E.spacing(2)},swapButtonContainer:{textAlign:"center",paddingTop:E.spacing(1),paddingBottom:E.spacing(1)},switchContainer:{textAlign:"center",paddingBottom:E.spacing(1),"& .MuiFormControlLabel-label":{fontSize:12}},swapButton:{}}})(Object(f.b)(q)),X=n(1255),Y=n(1256),ee=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props;e.classes,e.store;return r.a.createElement(X.a,{theme:E},r.a.createElement(Y.a,{maxWidth:"sm"},r.a.createElement(Q,null)))}}]),t}(r.a.Component),te=Object(f.a)(Object(h.a)(function(){return{}})(ee),{transactions:[],adapterAddress:"0xade8792c3ee90320cabde200ccab34b27cc88651",selectedTab:0,instantSwapSelected:!1,amount:"",address:""});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},516:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IUniswapExchange","name":"_exchange","type":"address"},{"internalType":"contract IShifterRegistry","name":"_registry","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldRelayHub","type":"address"},{"indexed":true,"internalType":"address","name":"newRelayHub","type":"address"}],"name":"RelayHubChanged","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"acceptRelayedCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositZBTC","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchange","outputs":[{"internalType":"contract IUniswapExchange","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHubAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"context","type":"bytes"},{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"actualCharge","type":"uint256"},{"internalType":"bytes32","name":"preRetVal","type":"bytes32"}],"name":"postRelayedCall","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"context","type":"bytes"}],"name":"preRelayedCall","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"internalType":"contract IShifterRegistry","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"relayHubVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"_msg","type":"bytes"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32","name":"_nHash","type":"bytes32"},{"internalType":"bytes","name":"_sig","type":"bytes"}],"name":"shiftIn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32","name":"_nHash","type":"bytes32"},{"internalType":"bytes","name":"_sig","type":"bytes"}],"name":"shiftInWithSwap","outputs":[{"internalType":"uint256","name":"ethBought","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_to","type":"address"}],"name":"swap","outputs":[{"internalType":"uint256","name":"ethBought","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawZBTC","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},524:function(e,t,n){e.exports=n(1208)},529:function(e,t,n){},541:function(e,t){},548:function(e,t){},567:function(e,t){},569:function(e,t){},653:function(e,t){},661:function(e,t){},742:function(e,t){},744:function(e,t){},784:function(e,t){},790:function(e,t){},801:function(e,t){},837:function(e,t){}},[[524,1,2]]]);
//# sourceMappingURL=main.c76c5785.chunk.js.map