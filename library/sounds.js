let actx=new AudioContext;"suspended"===actx.state&&actx.resume();class Sound{constructor(e,t){this.source=e,this.loadHandler=t,this.actx=actx,this.volumeNode=this.actx.createGain(),this.panNode=this.actx.createStereoPanner(),this.convolverNode=this.actx.createConvolver(),this.delayNode=this.actx.createDelay(),this.feedbackNode=this.actx.createGain(),this.filterNode=this.actx.createBiquadFilter(),this.soundNode=null,this.buffer=null,this.loop=!1,this.playing=!1,this.panValue=0,this.volumeValue=1,this.startTime=0,this.startOffset=0,this.playbackRate=1,this.randomPitch=!0,this.reverb=!1,this.reverbImpulse=null,this.echo=!1,this.delayValue=.3,this.feebackValue=.3,this.filterValue=0,this.load()}load(){let e=new XMLHttpRequest;e.open("GET",this.source,!0),e.responseType="arraybuffer",e.addEventListener("load",()=>{this.actx.decodeAudioData(e.response,e=>{this.buffer=e,this.hasLoaded=!0,this.loadHandler&&this.loadHandler()},e=>{throw new Error("Audio could not be decoded: "+e)})}),e.send()}play(){this.startTime=this.actx.currentTime,this.soundNode=this.actx.createBufferSource(),this.soundNode.buffer=this.buffer,this.soundNode.connect(this.volumeNode),!1===this.reverb?this.volumeNode.connect(this.panNode):(this.volumeNode.connect(this.convolverNode),this.convolverNode.connect(this.panNode),this.convolverNode.buffer=this.reverbImpulse),this.panNode.connect(this.actx.destination),this.echo&&(this.feedbackNode.gain.value=this.feebackValue,this.delayNode.delayTime.value=this.delayValue,this.filterNode.frequency.value=this.filterValue,this.delayNode.connect(this.feedbackNode),(0<this.filterValue?(this.feedbackNode.connect(this.filterNode),this.filterNode):this.feedbackNode).connect(this.delayNode),this.volumeNode.connect(this.delayNode),this.delayNode.connect(this.panNode)),this.soundNode.loop=this.loop,this.soundNode.playbackRate.value=this.playbackRate,this.soundNode.start(this.startTime,this.startOffset%this.buffer.duration),this.playing=!0}setReverb(e=2,t=2,a=!1){this.reverbImpulse=impulseResponse(e,t,a),this.reverb=!0}setEcho(e=.3,t=.3,a=0){this.delayValue=e,this.feebackValue=t,this.filterValue=a,this.echo=!0}pause(){this.playing&&(this.soundNode.stop(this.actx.currentTime),this.startOffset+=this.actx.currentTime-this.startTime,this.playing=!1,console.log(this.startOffset))}restart(){this.playing&&this.soundNode.stop(this.actx.currentTime),this.startOffset=0,this.startPoint=0,this.endPoint=this.buffer.duration,this.play()}playFrom(e){this.playing&&this.soundNode.stop(this.actx.currentTime),this.startOffset=e,this.play()}playSection(e,t){this.playing&&this.soundNode.stop(this.actx.currentTime),0===this.startOffset&&(this.startOffset=e),this.startTime=this.actx.currentTime,this.soundNode=this.actx.createBufferSource(),this.soundNode.buffer=this.buffer,this.soundNode.connect(this.panNode),this.panNode.connect(this.volumeNode),this.volumeNode.connect(this.actx.destination),this.soundNode.loop=this.loop,this.soundNode.loopStart=e,this.soundNode.loopEnd=t,this.soundNode.start(this.startTime,this.startOffset%this.buffer.duration,t-e),this.playing=!0}get volume(){return this.volumeValue}set volume(e){this.volumeNode.gain.value=e,this.volumeValue=e}get pan(){return this.panNode.pan.value}set pan(e){this.panNode.pan.value=e}}function makeSound(e,t){return new Sound(e,t)}function soundEffect(e,a=0,i=1,t="sine",s=1,n=0,o=0,c=0,r=!1,h=0,u=0,l=void 0,d=void 0){let f=actx.createOscillator(),p=actx.createGain(),m=actx.createStereoPanner();f.connect(p),p.connect(m),m.connect(actx.destination),p.gain.value=s,m.pan.value=n,f.type=t;let v;if(v=0<h?(n=e-h/2,t=e+h/2,Math.floor(Math.random()*(t-n+1))+n):e,f.frequency.value=v,0<a&&y(p),0<i&&T(p),0<c&&b(f),l&&x(p),d&&N(p),0<u){h=actx.createOscillator(),t=actx.createOscillator(),n=actx.createGain(),e=actx.createGain();n.gain.value=s,e.gain.value=s,h.connect(n),n.connect(actx.destination),t.connect(e),e.connect(actx.destination),h.type="sawtooth",t.type="sawtooth",h.frequency.value=v+u,t.frequency.value=v-u,0<a&&(y(n),y(e)),0<i&&(T(n),T(e)),0<c&&(b(h),b(t)),l&&(x(n),x(e)),d&&(N(n),N(e)),g(h),g(t)}function N(e){var t=actx.createConvolver();t.buffer=impulseResponse(d[0],d[1],d[2]),e.connect(t),t.connect(m)}function x(e){var t=actx.createGain(),a=actx.createDelay(),i=actx.createBiquadFilter();a.delayTime.value=l[0],t.gain.value=l[1],l[2]&&(i.frequency.value=l[2]),a.connect(t),(l[2]?(t.connect(i),i):t).connect(a),e.connect(a),a.connect(m)}function y(e){e.gain.value=0,e.gain.linearRampToValueAtTime(0,actx.currentTime+o),e.gain.linearRampToValueAtTime(s,actx.currentTime+o+a)}function T(e){e.gain.linearRampToValueAtTime(s,actx.currentTime+a+o),e.gain.linearRampToValueAtTime(0,actx.currentTime+o+a+i)}function b(e){var t=e.frequency.value;r?(e.frequency.linearRampToValueAtTime(t,actx.currentTime+o),e.frequency.linearRampToValueAtTime(t+c,actx.currentTime+o+a+i)):(e.frequency.linearRampToValueAtTime(t,actx.currentTime+o),e.frequency.linearRampToValueAtTime(t-c,actx.currentTime+o+a+i))}function g(e){e.start(actx.currentTime+o)}g(f)}function impulseResponse(e=2,a=2,i=!1){var s=actx.sampleRate*e,e=actx.createBuffer(2,s,actx.sampleRate),n=e.getChannelData(0),o=e.getChannelData(1);for(let t=0;t<s;t++){let e;e=i?s-t:t,n[t]=(2*Math.random()-1)*Math.pow(1-e/s,a),o[t]=(2*Math.random()-1)*Math.pow(1-e/s,a)}return e}export{actx,makeSound,soundEffect};