!function(){var e=parcelRequire("9cbb4a330c64e4cea889ac71cb243027"),t=parcelRequire("b2a415d528d493b93245af0c39ac2ea6"),n={},r={},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};null==i.parcelRequire&&(i.parcelRequire=function(e){if(e in r&&(r[e](),delete r[e]),e in n)return n[e];if("undefined"!=typeof module&&"function"==typeof module.require)return module.require(e);var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t},i.parcelRequire.register=function(e,t){n[e]=t},i.parcelRequire.registerBundle=function(e,t){r[e]=t,n[e]={}});var a,l,u={};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(u,"__esModule",{value:!0}),l=void 0,a=u.Roll=l,u.ROLL_TYPES=a;var s=t(),c=e();function f(){return(f=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(0<=t.indexOf(n))&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function S(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return e&&e.length?e:e?[e]:[]}function P(e){return e[Math.floor(Math.random()*e.length)]}var w=function(){function e(t,n){g(this,e),V(this,"team",void 0),L.set(this,{writable:!0,value:void 0}),this.team=t,this.playerState=n,this.id=this.playerState.data.id,this.name=this.playerState.data.name,this.cell=this.playerState.cell,this.situation=this.playerState.situation,this.canAct=1==this.playerState.canact&&this.situation===c.SITUATION.Active}return S(e,[{key:"skills",get:function(){return D.translateStringNumberList(this.playerState.data.listskills)}}]),e}(),L=new WeakMap,T=function(){function e(t){var n=this;g(this,e),I.set(this,{writable:!0,value:void 0}),this.teamState=t,this.players=this.teamState.listpitchplayers.playerstate.map((function(e){return new w(n,e)}))}return S(e,[{key:"id",get:function(){return this.teamState.data.teamid||0}},{key:"name",get:function(){return this.teamState.data.name}},{key:"turn",get:function(){return this.teamState.gameturn||0}}]),e}(),I=new WeakMap;function N(e,t){var n=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var u=a.value,o=!0,s=!1,c=void 0;try{for(var f,h,y=u.players[Symbol.iterator]();!(o=(f=y.next()).done);o=!0)if((h=f.value).id===t)return h}catch(e){s=!0,c=e}finally{try{o||null==y.return||y.return()}finally{if(s)throw c}}}}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}}var D=function(){function e(t){var n=this;g(this,e),Object.assign(this,t);var r=this.skillsInEffect.filter((function(e){return!n.constructor.handledSkills.includes(e.skillid)}));0<r.length&&console.warn("Unhandled skills for roll",{roll:this,skills:r.map((function(e){return c.SKILL_NAME[e.skillid]})),rollName:this.constructor.rollName})}return S(e,[{key:"value",value:function(){throw"value must be defined by subclass"}},{key:"simulateDice",value:function(){throw"simulateDice must be defined by subclass"}},{key:"simulated",value:function(e){return this.dataPoint(e,this.simulateDice(),"simulated")}},{key:"dataPoint",value:function(e,t,n){return{iteration:e,index:this.stepIndex.toString().padStart(3,"0")+"."+this.actionIndex+"."+this.resultIndex,team:this.activePlayer?this.activePlayer.team.id+". "+this.activePlayer.team.name:this.activeTeam.id+". "+this.activeTeam.name,outcomeValue:this.value(t),type:n,expectedValue:this.expectedValue}}},{key:"playerById",value:function(e){return N(this.teams,e)}},{key:"playerAtPosition",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.teams[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var l=i.value,u=!0,o=!1,s=void 0;try{for(var c,f,h=l.players[Symbol.iterator]();!(u=(c=h.next()).done);u=!0)if((f=c.value).cell.x===e.x&&f.cell.y===e.y)return f}catch(e){o=!0,s=e}finally{try{u||null==h.return||h.return()}finally{if(o)throw s}}}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}console.log("No player found",{replaystep:this.replaystep,action:this.action,cell:e})}},{key:"onActiveTeam",value:function(e){return e.team.id===this.activeTeam.id}},{key:"playerValue",value:function(){return 1}},{key:"teamValue",value:function(e,t){var n=this;return e.players.filter((function(e){return t.includes(e.situation)})).map((function(e){return n.playerValue(e)})).reduce((function(e,t){return e+t}),0)}},{key:"onPitchValue",value:function(e){return this.playerValue(e)/this.teamValue(e.team,[c.SITUATION.Active])}},{key:"knockdownValue",value:function(e){var t=this.onPitchValue(e);return this.onActiveTeam(e)?t*Math.min(2,this.halfTurnsLeft):t}},{key:"stunValue",value:function(e){var t=this.onPitchValue(e);return this.onActiveTeam(e)?t*Math.min(3,this.halfTurnsLeft):t*Math.min(4,this.halfTurnsLeft)}},{key:"koValue",value:function(e){return this.onPitchValue(e)*this.halfTurnsLeft-this.stunValue(e)}},{key:"casValue",value:function(e){return this.koValue(e)}},{key:"unactivatedPlayers",value:function(){return this.activeTeam.players.filter((function(e){return e.canAct}))}},{key:"turnoverValue",value:function(){var e=this;return this.unactivatedPlayers().filter((function(t){return t!=e.activePlayer})).map((function(t){return e.onPitchValue(t)})).reduce((function(e,t){return e+t}),0)}},{key:"expectedValue",get:function(){throw"expectedValue must be defined by subclass"}},{key:"actual",get:function(){return Object.assign(this.dataPoint(0,this.dice,"actual"),{turn:this.turn,player:this.activePlayer&&this.activePlayer.name||"",playerSkills:this.activePlayer&&this.activePlayer.skills.map((function(e){return c.SKILL_NAME[e]}))||[],rollName:this.constructor.rollName||this.rollName||this.rollType,dice:this.dice})}},{key:"skillsInEffect",get:function(){return O(this.boardactionresult.coachchoices.listskills.skillinfo)}},{key:"halfTurnsLeft",get:function(){var e=this.teams.map((function(e){return 16>=e.turn?16-e.turn:24-e.turn}));return e[0]+e[1]}}],[{key:"argsFromXML",value:function(e,t,n,r,i,a){var l=t.boardstate.listteams.teamstate.map((function(e){return new T(e)})),u=l.filter((function(e){return e.id==t.boardstate.activeteam}))[0]||l[0],o=N(l,r.playerid);return{replaystep:t,action:r,boardactionresult:a,stepIndex:e,actionIndex:n,resultIndex:i,teams:l,activeTeam:u,turn:u&&u.turn||0,activePlayer:o,rollType:this.rollType(a),dice:this.dice(a)}}},{key:"ignore",value:function(){return!1}},{key:"dice",value:function(e){return this.translateStringNumberList(e.coachchoices.listdices)}},{key:"rollType",value:function(e){return e.rolltype}},{key:"translateStringNumberList",value:function(e){if(!e)return[];for(var t=e.substring(1,e.length-1).split(","),n=[],r=0;r<t.length;r++)n.push(parseInt(t[r]));return n}},{key:"fromReplayStep",value:function(t,n){for(var r,i=O(n.ruleseventboardaction),a=[],l=0;l<i.length;l++)r=i[l],a=a.concat(e.fromAction(t,n,l,r));return a}},{key:"fromAction",value:function(e,t,n,r){for(var i=O(r.results.boardactionresult),a=[],l=0;l<i.length;l++){var u=i[l],o=this.fromBoardActionResult(e,t,n,r,l,u);o&&a.push(o)}return 0==i.length&&console.warn("Unexpectedly missing boardactionresult",{stepIndex:e,replaystep:t,action:r}),a}},{key:"fromBoardActionResult",value:function(e,t,n,r,i,a){if(void 0===a.rolltype)return null;if(void 0===a.coachchoices.listdices)return null;var l=G[a.rolltype];return null===l?null:l?l.ignore(t,r,a)?null:new l(l.argsFromXML(e,t,n,r,i,a)):(console.warn("Unknown roll "+a.rolltype,{stepIndex:e,replaystep:t,actionIndex:n,action:r,resultIndex:i,boardactionresult:a}),null)}}]),e}();l=D,u.Roll=l,V(D,"handledSkills",[]);var E=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"dieValue",value:function(e,t,n){var r=t&&t.skills||[],i=n&&n.skills||[];return e===s.ATTACKER_DOWN?-this.knockdownValue(t)-this.turnoverValue():e===s.BOTH_DOWN?r.includes(c.SKILL.Block)?i.includes(c.SKILL.Block)?0:this.knockdownValue(n):r.includes(c.SKILL.Wrestle)?this.knockdownValue(n)-this.knockdownValue(t):this.knockdownValue(n)-this.knockdownValue(t)-this.turnoverValue():e===s.PUSH?.25*this.knockdownValue(n):e===s.DEFENDER_STUMBLES?i.includes(c.SKILL.Dodge)?.25*this.knockdownValue(n):this.knockdownValue(n):e===s.DEFENDER_DOWN?this.knockdownValue(n):void 0}},{key:"value",value:function(e){var t=this;this.playerSkills;return Math.max.apply(Math,y(e.map((function(e){return t.dieValue(e,t.attacker,t.defender)}))))}},{key:"simulateDice",value:function(){return this.dice.map((function(){return P([s.ATTACKER_DOWN,s.BOTH_DOWN,s.PUSH,s.PUSH,s.DEFENDER_STUMBLES,s.DEFENDER_DOWN])}))}},{key:"attacker",get:function(){return this.activePlayer}},{key:"defender",get:function(){return this.playerAtPosition(this.action.order.cellto.cell)}},{key:"expectedValue",get:function(){var e,t=this;return(e=1==this.dice.length?s.BLOCK.values.map((function(e){return t.value([e])})):s.TWO_DIE_BLOCK.values.map((function(e){return t.value(e)}))).reduce((function(e,t){return e+t}),0)/e.length}}],[{key:"dice",value:function(e){var n=v(p(t),"dice",this).call(this,e);return n.slice(0,n.length/2).map(t.asBlockDie)}},{key:"ignore",value:function(e,t,n){return 2!=n.resulttype||35==n.subresulttype}},{key:"asBlockDie",value:function(e){return 0===e?s.ATTACKER_DOWN:1===e?s.BOTH_DOWN:2===e?s.PUSH:3===e?s.DEFENDER_STUMBLES:4===e?s.DEFENDER_DOWN:void 0}}]),t}(D);V(E,"rollName","Block"),V(E,"handledSkills",[c.SKILL.Guard,c.SKILL.Horns]);var x=function(e){function t(e){e.target,e.modifier;var n,r=h(e,["target","modifier"]);return g(this,t),(n=d(this,p(t).call(this,r))).modifier=O(n.boardactionresult.listmodifiers.dicemodifier||[]).map((function(e){return e.value})).reduce((function(e,t){return e+t}),0)||0,n.target=n.boardactionresult.requirement,n}return m(t,e),S(t,[{key:"value",value:function(e){return e.reduce((function(e,t){return e+t}),0)>=this.modifiedTarget?this.passValue():this.failValue()}},{key:"simulateDice",value:function(){return this.dice.map((function(){return P([1,2,3,4,5,6])}))}},{key:"passValue",value:function(){return 0}},{key:"failValue",value:function(){return 0}},{key:"actual",get:function(){return Object.assign(v(p(t.prototype),"actual",this),{target:this.modifiedTarget})}},{key:"modifiedTarget",get:function(){return 1==this.dice.length?Math.min(6,Math.max(2,this.target-this.modifier)):this.target-this.modifier}},{key:"expectedValue",get:function(){for(var e,t=[0],n=0;n<this.dice.length;n++){e=[];for(var r=1;6>=r;r++){var i=!0,a=!1,l=void 0;try{for(var u,o,s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)o=u.value,e.push(o+r)}catch(e){a=!0,l=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw l}}}t=e}for(var c=t.length,f=0,h=0,y=t;h<y.length;h++)f+=y[h]>=this.modifiedTarget?this.passValue()/c:this.failValue()/c;return f}}]),t}(D),A=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"failValue",value:function(){return-this.turnoverValue()}}]),t}(x);V(A,"rollName","Pickup");var _=function(e){function t(e){var n,r=f({},e);if(g(this,t),0==(n=d(this,p(t).call(this,r))).resultIndex)n.isPileOn=!1;else{var i=n.action.results.boardactionresult[n.resultIndex-1];if(n.isPileOn=59==i.rolltype,n.isPileOn){var a=i.coachchoices.listskills.skillinfo;a||console.log(i),a&&!a.length&&(a=[a]),n.pilingOnPlayer=n.playerById(a.filter((function(e){return e.skillid==c.SKILL.PilingOn}))[0].playerid)}}return n}return m(t,e),S(t,[{key:"passValue",value:function(){var e=-this.stunValue(this.activePlayer);return this.isPileOn?e+this.knockdownValue(this.pilingOnPlayer):e}},{key:"failValue",value:function(){return this.isPileOn?this.knockdownValue(this.pilingOnPlayer):0}},{key:"value",value:function(e){return v(p(t.prototype),"value",this).call(this,e)}}]),t}(x);V(_,"rollName","Armor"),V(_,"handledSkills",[c.SKILL.MightyBlow,c.SKILL.Claw]);var j=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"failValue",value:function(){return.5*-this.knockdownValue(this.activePlayer)}}]),t}(x);V(j,"rollName","Wild Animal");var R=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),t}(x);V(R,"rollName","Dauntless");var B=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"failValue",value:function(){return-this.knockdownValue(this.activePlayer)-this.turnoverValue()}}]),t}(x);V(B,"rollName","Dodge"),V(B,"handledSkills",[c.SKILL.BreakTackle]);var M=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),t}(x);V(M,"handledSkills",[c.SKILL.JumpUp]),V(M,"rollName","Jump Up");var K=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"failValue",value:function(){return-this.turnoverValue()}}]),t}(x);V(K,"rollName","Pass");var U=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),t}(x);V(U,"rollName","Interception");var W=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"passValue",value:function(){return this.koValue(this.activePlayer)}}]),t}(x);V(W,"rollName","Wake Up");var q=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"failValue",value:function(){return-this.knockdownValue(this.activePlayer)-this.turnoverValue()}}]),t}(x);V(q,"rollName","GFI");var C=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),t}(x);V(C,"rollName","Catch");var F=function(e){function t(e){var n,r=f({},e);if(g(this,t),0==(n=d(this,p(t).call(this,r))).resultIndex)n.isPileOn=!1;else{var i=n.action.results.boardactionresult[n.resultIndex-1];if(n.isPileOn=60==i.rolltype,n.isPileOn){var a=O(i.coachchoices.listskills.skillinfo);n.pilingOnPlayer=n.playerById(a.filter((function(e){return e.skillid==c.SKILL.PilingOn}))[0].playerid)}}return n.modifier=O(n.boardactionresult.listmodifiers.dicemodifier||[]).map((function(e){return e.value})).reduce((function(e,t){return e+t}),0)||0,n}return m(t,e),S(t,[{key:"injuryValue",value:function(e){return 7>=e?0:9>=e?-this.koValue(this.activePlayer):-this.casValue(this.activePlayer)}},{key:"value",value:function(e){var t=e[0]+e[1]+this.modifier;return this.isPileOn?this.injuryValue(t)+this.onPitchValue(this.pilingOnPlayer):this.injuryValue(t)}},{key:"simulateDice",value:function(){return this.dice.map((function(){return P([1,2,3,4,5,6])}))}},{key:"expectedValue",get:function(){for(var e=0,t=1;6>=t;t++)for(var n=1;6>=n;n++)e+=this.value([t,n]);return e/36}}]),t}(D);V(F,"rollName","Injury"),V(F,"handledSkills",[c.SKILL.MightyBlow,c.SKILL.DirtyPlayer]);var H=function(e){function t(){return g(this,t),d(this,p(t).apply(this,arguments))}return m(t,e),S(t,[{key:"value",value:function(e){return 0}},{key:"simulateDice",value:function(){return 10*P([1,2,3,4,5,6])+P([1,2,3,4,5,6,7,8])}},{key:"expectedValue",get:function(){for(var e=0,t=1;6>=t;t++)for(var n=1;8>=n;n++)e+=this.value(10*t+n);return e/48}}],[{key:"dice",value:function(e){var n=v(p(t),"dice",this).call(this,e);return[(n=n.slice(0,n.length/2))[n.length-1]]}}]),t}(D);V(H,"rollName","Casualty");var G={1:q,2:B,3:_,4:F,5:E,7:A,8:H,9:C,10:null,11:null,12:K,13:null,14:null,16:U,17:W,22:j,26:null,29:R,31:M,58:null,59:_,60:F,63:null,70:null};a=G,u.ROLL_TYPES=a,parcelRequire.register("8016873058de1762abb55249d07ce983",(function(){return u}))}();
//# sourceMappingURL=rolls.f0d0099b.js.map