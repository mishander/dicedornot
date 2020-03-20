"use strict";function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}google.load("visualization","1.0",{packages:["corechart"]}),google.setOnLoadCallback(enableFileInput);function enableFileInput(){$("#file-input-button").removeClass("disabled")}var fileInput=document.getElementById("file-input");fileInput.addEventListener("change",(function(){0<fileInput.files.length&&($("#loading").show(),$("#data-param-error").hide(),$("#summary-div").hide(),$("#results-div").hide(),$("#share-alert").hide(),$("#blockdice").hide(),io.xmlToJson(fileInput.files[0],(function(a){var b=replay.processReplay(a);renderReplayData(b,"")}),(function(a){$("#loading").hide(),alert(a)})))}));function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1])}var dataParam=getParameterByName("data");dataParam&&($("#loading").show(),$("#data-param-error").hide(),google.setOnLoadCallback(renderDataParam));function renderDataParam(){try{var a=LZString.decompressFromEncodedURIComponent(dataParam),b=JSONC.decompress(JSON.parse(a));renderReplayData(b,dataParam)}catch(a){$("#loading").hide(),$("#data-param-error").show(),console.error(a)}}function renderReplayData(a,b){console.log("replayData:"),console.log(a);var c="http://onesandskulls.com"+"/index.html"+"?data="+b,d=encodeURIComponent(c);updateGameDetails(a.gameDetails),updateChart(a.rolls),$("#loading").hide(),$("#summary-div").show(),$("#results-div").show(),$("#blockdice").show(),$("#share-massive-url").attr("href",c),$("#share-tiny-url").attr("href","http://tinyurl.com/create.php?url="+d+"#success"),$("#share-alert").show(),$(".other-stats").remove(),document.getElementById("results-with-padding").scrollIntoView()}function updateChart(a){var b=_toConsumableArray(new Set(a.map((function(a){return a.team}))));console.log(b);var c=[],d=!0,e=!1,f=void 0;try{for(var g,h,i=b[Symbol.iterator]();!(d=(g=i.next()).done);d=!0)h=g.value,c.push({expectedValue:0,outcomeValue:0,team:h,index:0})}catch(a){e=!0,f=a}finally{try{d||null==i["return"]||i["return"]()}finally{if(e)throw f}}c=c.concat(a.map((function(a){return a.actual})));for(var j=0;1e3>=j;j++)c=c.concat(a.map((function(a){return a.simulated(j)})));var k={$schema:"https://vega.github.io/schema/vega-lite/v4.json",width:"container",data:{values:c},transform:[{calculate:"datum.outcomeValue - datum.expectedValue",as:"netValue"},{window:[{op:"sum",field:"netValue",as:"cumNetValue"}],groupby:["team","iteration"]}],layer:[{transform:[{quantile:"cumNetValue",probs:[.01,.1,.25,.5,.75,.9,.99],groupby:["team","index"]}],mark:{type:"line",opacity:.3,tooltip:!0},encoding:{x:{type:"ordinal",field:"index"},y:{field:"value",type:"quantitative"},color:{field:"team",type:"nominal"},detail:{field:"prob",type:"nominal"}}},{transform:[{filter:"datum.type == 'actual'"}],mark:{type:"line",interpolate:"step-after"},encoding:{x:{type:"ordinal",field:"index"},y:{field:"cumNetValue",type:"quantitative"},color:{field:"team",type:"nominal"},detail:{field:"iteration",type:"nominal"}}},{transform:[{filter:"datum.type == 'actual'"}],mark:{type:"point",tooltip:{content:"data"}},encoding:{x:{type:"ordinal",field:"index"},y:{field:"cumNetValue",type:"quantitative"},color:{field:"team",type:"nominal"}}}]};vegaEmbed("#chart",k)}function raceIdToName(a){return 1===a?"Human":2===a?"Dwarf":3===a?"Skaven":4===a?"Orc":5===a?"Lizardman":7===a?"Wood Elf":8===a?"Chaos":9===a?"Dark Elf":15===a?"High Elf":24===a?"Bretonnian":a}function rollTypeIdToName(a){return-2===a?"Kickoff Scatter":-1===a?"Kickoff":1===a?"GFI":2===a?"Dodge":3===a?"Armour":4===a?"Injury":5===a?"Block":6===a?"Stand Up":7===a?"Pickup":8===a?"Casualty":9===a?"Catch":10===a?"Scatter":11===a?"Throw-in":12===a?"Pass":16===a?"Intercept":17===a?"Wake-Up After KO":20===a?"Bone-Head":21===a?"Really Stupid":22===a?"Wild Animal":23===a?"Loner":24===a?"Landing":26===a?"Inaccurate Pass Scatter":29===a?"Dauntless":27===a?"Always Hungry":31===a?"Jump Up":34===a?"Stab":36===a?"Leap":37===a?"Foul Appearance":40===a?"Take Root":42===a?"Hail Mary Pass":45===a?"Pro":46===a?"Hypnotic Gaze":54===a?"Fireball":55===a?"Lightning Bolt":56===a?"Throw Team-Mate":58===a?"Kickoff Gust":59===a?"Armour":60===a?"Injury":a}function diceIdToName(a,b){if(5!=b)return a;return 0===a?"AD":1===a?"BD":2===a?"P":3===a?"DS":4===a?"DD":a}function twoDBDiceToName(a){return 0===a?"AD AD":1===a?"AD BD":2===a?"AD P":3===a?"AD DS":4===a?"AD DD":5===a?"BD BD":6===a?"BD P":7===a?"BD DS":8===a?"BD DD":9===a?"P P":10===a?"P DS":11===a?"P DD":12===a?"DS DS":13===a?"DS DD":14===a?"DD DD":a}function injuryDiceToName(a){return 0===a?"Stunned":1===a?"KO'd":2===a?"Casualty":a}function casualtyDiceToName(a){return 0===a?"No Long Term Effect":1===a?"Miss Next Game":2===a?"Niggling Injury":3===a?"-1 MA":4===a?"-1 AV":5===a?"-1 AG":6===a?"-1 ST":7===a?"Dead":a}function diceToName(a,b){if(0==b)return diceIdToName(a,5);return-1==b?twoDBDiceToName(a):3==b?a+2:4==b?a+2:5==b?casualtyDiceToName(a):a+1}function updateGameDetails(a){$("#file-name").text(a.fileName),$("#home-coach").text(a.homeTeam.coachName),$("#home-team").text(a.homeTeam.teamName),$("#home-race").text(raceIdToName(a.homeTeam.raceId)),$("#home-score").text(a.homeTeam.score),$("#away-coach").text(a.awayTeam.coachName),$("#away-team").text(a.awayTeam.teamName),$("#away-race").text(raceIdToName(a.awayTeam.raceId)),$("#away-score").text(a.awayTeam.score),$("#stadium-name").text(a.stadiumName)}function updateActions(a,b,c){$("#roll-details-table tbody").empty(),$.each(a,(function(a,d){var e=$.map(d.dice,(function(a){return diceIdToName(a,d.rollType)})),f=0==d.team?b.homeTeam.teamName:b.awayTeam.teamName,g=0==d.team?"home":"away",h=g;d.player in c&&(h=0==c[d.player].teamId?"home":"away"),$("#roll-details-table tbody").append('<tr><td class="'+g+'">'+d.turn+" ("+f+')</td><td class="'+h+'">'+(d.player in c?c[d.player].name:"N/A")+'</td><td class="'+h+'">'+rollTypeIdToName(d.rollType)+'</td><td class="'+h+'">'+e.join(" ")+"</td></tr>")}))}function drawCharts(a,b){drawStatCharts("1DB","1dbs",a["1db"],b),delete a["1db"],drawStatCharts("2DB","2dbs",a["2db"],b),delete a["2db"],drawStatCharts("Dodge","dodges",a[2],b),delete a[2],drawStatCharts("Armour","armour",a.armour,b),delete a.armour,drawStatCharts("All Block Dice","allblocks",a.block,b),delete a.block,drawStatCharts("All Six-Sided (non-Block) Dice","sixsided",a.standard,b),delete a.standard,drawStatCharts("All Scatter Dice","scatter",a.scatter,b),delete a.scatter,drawStatCharts("Injury","injury",a.injury,b),delete a.injury,drawStatCharts("Casualty","cas",a.casualty,b),delete a.casualty,$.each(a,(function(a,c){makeChartDiv(a),drawStatCharts(rollTypeIdToName(parseInt(a)),a,c,b)}))}function roundedPercent(a){return Math.round(100*(100*a))/100}function adjustIndex(a,b){if(-1!=b)return a+1;return 0===a?1:1===a?5:2===a?11:3===a?6:4===a?7:5===a?2:6===a?12:7===a?8:8===a?9:9===a?13:10===a?14:11===a?15:12===a?3:13===a?10:14===a?4:a+1}function drawStatCharts(a,b,c,d){var e="auto";switch(c.diceType){case 1:e=[1,2,3,4,5,6];break;case 2:e=[1,2,3,4,5,6,7,8];break;case 3:case 4:e=[2,3,4,5,6,7,8,9,10,11,12]}var f={title:a+" Percentages",seriesType:"bars",series:{2:{type:"line"}},legend:{position:"none"},hAxis:{ticks:e},focusTarget:"category",width:600,height:300},g={title:a+" Counts",seriesType:"bars",legend:{position:"none"},hAxis:{ticks:e},focusTarget:"category",width:600,height:300},h=[["Result",d.homeTeam.teamName,d.awayTeam.teamName,"Expected"]],i=[["Result",d.homeTeam.teamName,d.awayTeam.teamName]],j=0,k=0,l=0,m=0;$.each(c[0].histogram,(function(a,b){if(!isNaN(b)){var d=c[1].histogram[a],e=diceToName(a,c.diceType),f=0==b?0:roundedPercent(parseFloat(b)/c[0].total),g=0==d?0:roundedPercent(parseFloat(d)/c[1].total),n=roundedPercent(c.expected[a]),o=adjustIndex(a,c.diceType);h[o]=[e,f,g,n],i[o]=[e,b,d],j+=b,k+=d,l+=b*(a+1),m+=d*(a+1)}}));var n=null,o=null;1==c.diceType&&(n=l/j,o=m/k),g.title+="\nTotals - "+d.homeTeam.teamName+": "+j,null!==n&&0<j&&(g.title+=" ("+n.toFixed(2)+" mean)"),g.title+=", "+d.awayTeam.teamName+": "+k,null!==o&&0<k&&(g.title+=" ("+o.toFixed(2)+" mean)");var p=google.visualization.arrayToDataTable(h),q=new google.visualization.ComboChart(document.getElementById(b+"-pct-chart"));q.draw(p,f);var r=google.visualization.arrayToDataTable(i),s=new google.visualization.ComboChart(document.getElementById(b+"-count-chart"));s.draw(r,g)}function makeChartDiv(a){var b=$("#other-stats-template").clone().show();b.removeAttr("id").addClass("other-stats"),b.find(".pct-chart").attr("id",a+"-pct-chart"),b.find(".count-chart").attr("id",a+"-count-chart"),b.appendTo($("#charts"))}