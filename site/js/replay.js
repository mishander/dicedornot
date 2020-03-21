"use strict";function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}var replay={processReplay:function processReplay(a){for(var b,c=extractGameDetails(a),d={},e=[],f=0;f<a.replay.replaystep.length;f++)b=a.replay.replaystep[f],extractPlayerDetails(b,d),e=e.concat(Roll.fromReplayStep(f,b));return{gameDetails:c,playerDetails:d,rolls:e,version:1}}};function extractGameDetails(a){var b=a.replay.replaystep[0],c=a.replay.replaystep[a.replay.replaystep.length-1];return{stadiumName:b.gameinfos.namestadium,homeTeam:{coachName:b.gameinfos.coachesinfos.coachinfos[0].userid,teamName:b.boardstate.listteams.teamstate[0].data.name,raceId:b.boardstate.listteams.teamstate[0].data.idrace,score:c.ruleseventgamefinished.matchresult.row.homescore||0},awayTeam:{coachName:b.gameinfos.coachesinfos.coachinfos[1].userid,teamName:b.boardstate.listteams.teamstate[1].data.name,raceId:b.boardstate.listteams.teamstate[1].data.idrace,score:c.ruleseventgamefinished.matchresult.row.awayscore||0}}}function translateStringNumberList(a){if(!a)return[];for(var b=a.substring(1,a.length-1),c=b.split(","),d=[],e=0;e<c.length;e++)d.push(parseInt(c[e]));return d}function extractPlayerDetails(a,b){var c=(((a||{}).boardstate||{}).listteams||{}).teamstate;!c||2>c.length||(extractPlayerDetailsFromTeamState(c[0],b),extractPlayerDetailsFromTeamState(c[1],b))}function extractPlayerDetailsFromTeamState(a,b){var c=((a||{}).listpitchplayers||{}).playerstate;if(c)for(var d,e=0;e<c.length;e++)d=c[e],d.id in b||(b[d.id]={id:d.id,teamId:d.data.teamid||0,type:d.data.idplayertypes,name:d.data.name})}function extractActionsFromStep(a,b){var c=extractKickoffDetails(a);c&&b.push(c);var d=a.ruleseventboardaction;if(d&&d.length)for(var e,f=0;f<d.length;f++)e=d[f],processAction(a,e,b);else d&&processAction(a,d,b)}function processAction(a,b,c){if(b){var d=b.results.boardactionresult;if(d&&d.length)for(var e,f=0;f<d.length;f++)e=d[f],processResult(a,b,e,c);else processResult(a,b,d,c)}}function processResult(a,b,c,d){if(c&&c.coachchoices&&c.coachchoices.listdices){var e=extractActionDetails(a,b,c);e&&d.push(e)}}function extractActionDetails(a,b,c){if(ignoreResult(c))return null;console.log(b);var d=translateDice(c.coachchoices.listdices,c.rolltype);return 10==c.rolltype&&1<d.length&&(c.rolltype=-2),{team:a.boardstate.activeteam||0,turn:a.boardstate.listteams.teamstate[a.boardstate.activeteam||0].gameturn||0,player:b.playerid,rollType:c.rolltype,dice:d,outcomeValue:outcomeValue(c.rolltype,d,b.playerid,b.targetid),expectedValue:expectedValue(c.rolltype,d,b.playerid,b.targetid)}}function expectedValue(a,b){var c=Math.max;return a==ROLL_BLOCK?(values=1==b.length?BLOCK.values.map(blockResultValue):TWO_DIE_BLOCK.values.map((function(a){return c(blockResultValue(a[0]),blockResultValue(a[1]))})),values.reduce((function(c,a){return c+a}),0)/values.length):0}function outcomeValue(a,b){var c=Math.max;return a==ROLL_BLOCK?1==b.length?blockResultValue(asBlockDie(b)):c.apply(Math,_toConsumableArray(b.map(asBlockDie).map(blockResultValue))):0}function ignoreResult(a){return!(2!=a.rollstatus)||!(15!=a.rolltype)||!(61!=a.rolltype)||!(63!=a.rolltype)||!(5!=a.rolltype||2==a.resulttype)||!(8!=a.rolltype||2==a.resulttype||1==a.subresulttype||12==a.subresulttype)}function translateDice(a,b){var c=translateStringNumberList(a);return 5==b?c=c.slice(0,c.length/2):8==b&&(c=c.slice(0,c.length/2),c=[c[c.length-1]]),c}function extractKickoffDetails(a){return a.ruleseventkickofftable?{team:a.boardstate.activeteam||0,turn:a.boardstate.listteams.teamstate[a.boardstate.activeteam||0].gameturn||0,player:null,rollType:-1,dice:translateDice(a.ruleseventkickofftable.listdice,-1)}:null}