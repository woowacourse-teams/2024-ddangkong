(()=>{let intervalId;self.onmessage=function(e){const{type,delay}=e.data;if("start"===type){const startTime=Date.now();intervalId=setInterval((()=>{const elapsedTime=Date.now()-startTime;self.postMessage({elapsedTime})}),delay)}else"stop"===type&&clearInterval(intervalId)}})();