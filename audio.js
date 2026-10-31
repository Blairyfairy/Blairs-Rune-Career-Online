/* Independent audio layer: off by default; browser audio begins only on user gesture. */
(()=>{'use strict';
const logo=new Image();logo.src='assets/Favicon.png';window.runeLogo=logo;
let enabled=false,ctx=null,lastHover=0,lastStep=0;const button=()=>document.getElementById('sound');
function context(){if(!ctx){const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;ctx=new A()}if(ctx.state==='suspended')ctx.resume().catch(()=>{});return ctx}
function tone(freq=440,dur=.09,type='sine',gain=.035,delay=0){if(!enabled)return;try{const a=context();if(!a)return;const t=a.currentTime+delay,o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,gain),t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+dur+.01)}catch(e){console.warn('Audio unavailable:',e)}}
const sounds={hover:()=>tone(620,.045,'sine',.012),click:()=>{tone(440,.07,'triangle',.03);tone(660,.09,'sine',.025,.055)},open:()=>{tone(350,.12,'triangle',.035);tone(520,.16,'sine',.03,.1);tone(780,.23,'sine',.02,.19)},close:()=>{tone(520,.08,'sine',.02);tone(350,.14,'triangle',.025,.06)},success:()=>{[523,659,784,1047].forEach((f,i)=>tone(f,.22,'triangle',.035,i*.095))},failure:()=>{tone(260,.18,'sawtooth',.025);tone(195,.25,'triangle',.02,.11)},move:()=>tone(175,.035,'triangle',.008),select:()=>{tone(590,.08,'sine',.022);tone(790,.1,'sine',.02,.07)},toggle:()=>{tone(500,.08,'sine',.03);tone(750,.12,'triangle',.025,.08)}};
function play(name){if(enabled)(sounds[name]||sounds.click)()}
function sync(){const b=button();if(b){b.textContent='♫ Sound: '+(enabled?'On':'Off');b.setAttribute('aria-pressed',String(enabled));b.setAttribute('aria-label','Sound '+(enabled?'on; click to turn off':'off; click to turn on'))}}
function toggle(){enabled=!enabled;sync();if(enabled){context();sounds.toggle()}return enabled}
window.RuneAudio={play,toggle,isEnabled:()=>enabled};
function interactive(el){return el?.closest?.('button,a,summary,[role="button"],input,select')}
document.addEventListener('pointerover',e=>{if(!enabled||!interactive(e.target)||interactive(e.relatedTarget)===interactive(e.target))return;const now=performance.now();if(now-lastHover>95){lastHover=now;play('hover')}});
document.addEventListener('click',e=>{const el=interactive(e.target);if(!el||el.id==='sound')return;if(el.id==='close'||el.closest('[data-close]'))play('close');else if(el.matches('.choice'))play('select');else if(el.matches('[data-panel], [data-realm], .quest, .action')||el.closest('.rn-feature'))play('open');else play('click')});
document.addEventListener('keydown',e=>{if(!enabled||e.repeat||/input|textarea|select/i.test(e.target.tagName))return;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key)){const now=performance.now();if(now-lastStep>180){lastStep=now;play('move')}}else if(e.key==='Escape')play('close')});
const observer=new MutationObserver(records=>{if(!enabled)return;for(const r of records){if(r.target.id==='modal'&&r.attributeName==='hidden'){play(r.target.hidden?'close':'open');break}}});
document.addEventListener('DOMContentLoaded',()=>{sync();const modal=document.getElementById('modal');if(modal)observer.observe(modal,{attributes:true,attributeFilter:['hidden']})});
})();
