!function(){var e=new(function(){var e;function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),this.board=e||this.createEmptyBoard(),this.status="idle",this.score=0,console.log(e)}return e=[{key:"moveLeft",value:function(){var e=this,t=!1;return this.board=this.board.map(function(r){for(var n=r.filter(function(e){return 0!==e}),a=0;a<n.length-1;a++)n[a]===n[a+1]&&(n[a]*=2,e.score+=n[a],n.splice(a+1,1),t=!0);for(;n.length<4;)n.push(0);return JSON.stringify(n)!==JSON.stringify(r)&&(t=!0),n}),t&&this.addRandomTile(),this.checkGameWin(),this.checkGameOver(),t}},{key:"moveRight",value:function(){var e=this,t=!1;return this.board=this.board.map(function(r){for(var n=r.filter(function(e){return 0!==e}),a=n.length-1;a>0;a--)n[a]===n[a-1]&&(n[a]*=2,e.score+=n[a],n.splice(a-1,1),t=!0);for(;n.length<4;)n.unshift(0);return JSON.stringify(n)!==JSON.stringify(r)&&(t=!0),n}),t&&this.addRandomTile(),this.checkGameWin(),this.checkGameOver(),t}},{key:"moveUp",value:function(){var e=this,t=!1,r=this.transpose(this.board).map(function(r){for(var n=r.filter(function(e){return 0!==e}),a=0;a<n.length-1;a++)n[a]===n[a+1]&&(n[a]*=2,e.score+=n[a],n.splice(a+1,1),t=!0);for(;n.length<4;)n.push(0);return JSON.stringify(n)!==JSON.stringify(r)&&(t=!0),n});return this.board=this.transpose(r),t&&this.addRandomTile(),this.checkGameWin(),this.checkGameOver(),t}},{key:"moveDown",value:function(){var e=this,t=!1,r=this.transpose(this.board);return r=r.map(function(r){for(var n=r.reverse(),a=n.filter(function(e){return 0!==e}),i=0;i<a.length-1;i++)a[i]===a[i+1]&&(a[i]*=2,e.score+=a[i],a.splice(i+1,1),t=!0);for(;a.length<4;)a.push(0);return JSON.stringify(a)!==JSON.stringify(n)&&(t=!0),a.reverse()}),this.board=this.transpose(r),t&&this.addRandomTile(),this.checkGameWin(),this.checkGameOver(),t}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.board}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.board=this.createEmptyBoard(),this.addRandomTile(),this.addRandomTile(),this.status="playing"}},{key:"restart",value:function(){this.start()}},{key:"createEmptyBoard",value:function(){return Array.from({length:4},function(){return[,,,,].fill(0)})}},{key:"addRandomTile",value:function(){for(var e=[],t=0;t<4;t++)for(var r=0;r<4;r++)0===this.board[t][r]&&e.push({row:t,col:r});if(e.length>0){var n=Math.floor(Math.random()*e.length),a=e[n],i=a.row,s=a.col;this.board[i][s]=.9>Math.random()?2:4}}},{key:"checkGameOver",value:function(){if(!this.board.some(function(e){return e.includes(0)})){for(var e=0;e<4;e++)for(var t=0;t<4;t++){var r=this.board[e][t];if(e>0&&r===this.board[e-1][t]||t>0&&r===this.board[e][t-1])return}this.status="lose"}}},{key:"checkGameWin",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,a=this.board[Symbol.iterator]();!(e=(n=a.next()).done);e=!0)if(n.value.includes(2048)){this.status="win";return}}catch(e){t=!0,r=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw r}}}},{key:"transpose",value:function(e){return e[0].map(function(t,r){return e.map(function(e){return e[r]})})}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}()),t=document.querySelector(".game-field"),r=document.querySelector(".game-score");function n(){var n=e.getState(),a=t.querySelectorAll(".field-cell"),i=0;n.forEach(function(e){e.forEach(function(e){var t=a[i];t.textContent=0===e?"":e,t.className="field-cell",e>0&&t.classList.add("field-cell--".concat(e)),i++})}),r.textContent=e.getScore();var s=e.getStatus(),o=document.querySelector(".message-win"),c=document.querySelector(".message-lose"),u=document.querySelector(".message-start");o.classList.add("hidden"),c.classList.add("hidden"),u.classList.add("hidden"),"win"===s?o.classList.remove("hidden"):"lose"===s?c.classList.remove("hidden"):"idle"===s&&u.classList.remove("hidden")}document.querySelector(".start").addEventListener("click",function(){"idle"!==e.getStatus()?e.restart():e.start(),n()}),document.addEventListener("keydown",function(t){var r=!1;switch(t.preventDefault(),t.key){case"ArrowLeft":r=e.moveLeft();break;case"ArrowRight":r=e.moveRight();break;case"ArrowUp":r=e.moveUp();break;case"ArrowDown":r=e.moveDown()}if(r){n();var a=document.querySelector(".start");a.classList.contains("restart")||(a.classList.remove("start"),a.classList.add("restart"),a.textContent="Restart")}})}();
//# sourceMappingURL=index.b2ee81ec.js.map
