let x=new AudioContext;"suspended"===x.state&&x.resume();class i{constructor(e,t){this.source=e,this.loadHandler=t,this.actx=x,this.volumeNode=this.actx.createGain(),this.panNode=this.actx.createStereoPanner(),this.convolverNode=this.actx.createConvolver(),this.delayNode=this.actx.createDelay(),this.feedbackNode=this.actx.createGain(),this.filterNode=this.actx.createBiquadFilter(),this.soundNode=null,this.buffer=null,this.loop=!1,this.playing=!1,this.panValue=0,this.volumeValue=1,this.startTime=0,this.startOffset=0,this.playbackRate=1,this.randomPitch=!0,this.reverb=!1,this.reverbImpulse=null,this.echo=!1,this.delayValue=.3,this.feebackValue=.3,this.filterValue=0,this.load()}load(){let e=new XMLHttpRequest;e.open("GET",this.source,!0),e.responseType="arraybuffer",e.addEventListener("load",()=>{this.actx.decodeAudioData(e.response,e=>{this.buffer=e,this.hasLoaded=!0,this.loadHandler&&this.loadHandler()},e=>{throw new Error("Audio could not be decoded: "+e)})}),e.send()}play(){this.startTime=this.actx.currentTime,this.soundNode=this.actx.createBufferSource(),this.soundNode.buffer=this.buffer,this.soundNode.connect(this.volumeNode),!1===this.reverb?this.volumeNode.connect(this.panNode):(this.volumeNode.connect(this.convolverNode),this.convolverNode.connect(this.panNode),this.convolverNode.buffer=this.reverbImpulse),this.panNode.connect(this.actx.destination),this.echo&&(this.feedbackNode.gain.value=this.feebackValue,this.delayNode.delayTime.value=this.delayValue,this.filterNode.frequency.value=this.filterValue,this.delayNode.connect(this.feedbackNode),(0<this.filterValue?(this.feedbackNode.connect(this.filterNode),this.filterNode):this.feedbackNode).connect(this.delayNode),this.volumeNode.connect(this.delayNode),this.delayNode.connect(this.panNode)),this.soundNode.loop=this.loop,this.soundNode.playbackRate.value=this.playbackRate,this.soundNode.start(this.startTime,this.startOffset%this.buffer.duration),this.playing=!0}setReverb(e=2,t=2,i=!1){this.reverbImpulse=R(e,t,i),this.reverb=!0}setEcho(e=.3,t=.3,i=0){this.delayValue=e,this.feebackValue=t,this.filterValue=i,this.echo=!0}pause(){this.playing&&(this.soundNode.stop(this.actx.currentTime),this.startOffset+=this.actx.currentTime-this.startTime,this.playing=!1,console.log(this.startOffset))}restart(){this.playing&&this.soundNode.stop(this.actx.currentTime),this.startOffset=0,this.startPoint=0,this.endPoint=this.buffer.duration,this.play()}playFrom(e){this.playing&&this.soundNode.stop(this.actx.currentTime),this.startOffset=e,this.play()}playSection(e,t){this.playing&&this.soundNode.stop(this.actx.currentTime),0===this.startOffset&&(this.startOffset=e),this.startTime=this.actx.currentTime,this.soundNode=this.actx.createBufferSource(),this.soundNode.buffer=this.buffer,this.soundNode.connect(this.panNode),this.panNode.connect(this.volumeNode),this.volumeNode.connect(this.actx.destination),this.soundNode.loop=this.loop,this.soundNode.loopStart=e,this.soundNode.loopEnd=t,this.soundNode.start(this.startTime,this.startOffset%this.buffer.duration,t-e),this.playing=!0}get volume(){return this.volumeValue}set volume(e){this.volumeNode.gain.value=e,this.volumeValue=e}get pan(){return this.panNode.pan.value}set pan(e){this.panNode.pan.value=e}}function e(e,t){return new i(e,t)}function t(e,i=0,a=1,t="sine",s=1,n=0,o=0,r=0,c=!1,h=0,l=0,u=void 0,d=void 0){let f=x.createOscillator(),p=x.createGain(),m=x.createStereoPanner();f.connect(p),p.connect(m),m.connect(x.destination),p.gain.value=s,m.pan.value=n,f.type=t;let v;if(v=0<h?(n=e-h/2,t=e+h/2,Math.floor(Math.random()*(t-n+1))+n):e,f.frequency.value=v,0<i&&T(p),0<a&&b(p),0<r&&g(f),u&&y(p),d&&N(p),0<l){h=x.createOscillator(),t=x.createOscillator(),n=x.createGain(),e=x.createGain();n.gain.value=s,e.gain.value=s,h.connect(n),n.connect(x.destination),t.connect(e),e.connect(x.destination),h.type="sawtooth",t.type="sawtooth",h.frequency.value=v+l,t.frequency.value=v-l,0<i&&(T(n),T(e)),0<a&&(b(n),b(e)),0<r&&(g(h),g(t)),u&&(y(n),y(e)),d&&(N(n),N(e)),V(h),V(t)}function N(e){var t=x.createConvolver();t.buffer=R(d[0],d[1],d[2]),e.connect(t),t.connect(m)}function y(e){var t=x.createGain(),i=x.createDelay(),a=x.createBiquadFilter();i.delayTime.value=u[0],t.gain.value=u[1],u[2]&&(a.frequency.value=u[2]),i.connect(t),(u[2]?(t.connect(a),a):t).connect(i),e.connect(i),i.connect(m)}function T(e){e.gain.value=0,e.gain.linearRampToValueAtTime(0,x.currentTime+o),e.gain.linearRampToValueAtTime(s,x.currentTime+o+i)}function b(e){e.gain.linearRampToValueAtTime(s,x.currentTime+i+o),e.gain.linearRampToValueAtTime(0,x.currentTime+o+i+a)}function g(e){var t=e.frequency.value;c?(e.frequency.linearRampToValueAtTime(t,x.currentTime+o),e.frequency.linearRampToValueAtTime(t+r,x.currentTime+o+i+a)):(e.frequency.linearRampToValueAtTime(t,x.currentTime+o),e.frequency.linearRampToValueAtTime(t-r,x.currentTime+o+i+a))}function V(e){e.start(x.currentTime+o)}V(f)}function R(e=2,i=2,a=!1){var s=x.sampleRate*e,e=x.createBuffer(2,s,x.sampleRate),n=e.getChannelData(0),o=e.getChannelData(1);for(let t=0;t<s;t++){let e;e=a?s-t:t,n[t]=(2*Math.random()-1)*Math.pow(1-e/s,i),o[t]=(2*Math.random()-1)*Math.pow(1-e/s,i)}return e}export{x as actx,e as makeSound,t as soundEffect};