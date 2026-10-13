import{S as re,B as me,M as ee,a as pe,P as ue,b as n,c as xe,W as fe,d as he,A as we,e as ye,f as ge,g as te,V as oe,h as be,i as ne,C as se,I as Me,j as ze,D as ie,k as Se,l as ae,m as Ae,n as Be,o as Pe}from"./three-fVk0OKPd.js";class Te extends re{constructor(){super();const t=new me;t.deleteAttribute("uv");const c=new ee({side:pe}),o=new ee,y=new ue(16777215,900,28,2);y.position.set(.418,16.199,.3),this.add(y);const g=new n(t,c);g.position.set(-.757,13.219,.717),g.scale.set(31.713,28.305,28.591),this.add(g);const m=new n(t,o);m.position.set(-10.906,2.009,1.846),m.rotation.set(0,-.195,0),m.scale.set(2.328,7.905,4.651),this.add(m);const s=new n(t,o);s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),this.add(s);const a=new n(t,o);a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),this.add(a);const u=new n(t,o);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const x=new n(t,o);x.position.set(2.291,-.756,-2.621),x.rotation.set(0,-.286,0),x.scale.set(1.546,1.552,1.496),this.add(x);const l=new n(t,o);l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),this.add(l);const S=new n(t,z(50));S.position.set(-16.116,14.37,8.208),S.scale.set(.1,2.428,2.739),this.add(S);const p=new n(t,z(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const v=new n(t,z(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const b=new n(t,z(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const r=new n(t,z(20));r.position.set(3.235,11.486,-12.541),r.scale.set(2.5,2,.1),this.add(r);const f=new n(t,z(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(c=>{c.isMesh&&(t.add(c.geometry),t.add(c.material))});for(const c of t)c.dispose()}}function z(w){const t=new xe;return t.color.setScalar(w),t}const ce=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`,Re=`
precision highp float;
uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse;
varying vec2 vUv;
${ce}
float fbm(vec3 p){float f=0.0,a=0.5;for(int i=0;i<3;i++){f+=a*snoise(p);p*=2.02;a*=0.5;}return f;}
void main(){
  vec2 uv=vUv; vec2 p=uv; p.x*=uRes.x/uRes.y;
  float t=uTime*0.035;
  vec2 q=vec2(fbm(vec3(p*0.55,t)),fbm(vec3(p*0.55+5.2,t)));
  float n=fbm(vec3(p*0.7+q*0.9,t*1.2));
  vec3 ink=vec3(0.075,0.055,0.043);
  vec3 umber=vec3(0.20,0.12,0.075);
  vec3 clay=vec3(0.62,0.30,0.17);
  vec3 sand=vec3(0.86,0.68,0.50);
  float bands=smoothstep(-0.55,0.95,n*0.8+uv.y*0.75-0.3);
  vec3 col=mix(ink,umber,smoothstep(0.0,0.6,bands));
  col=mix(col,clay,smoothstep(0.45,0.95,bands)*0.85);
  col=mix(col,sand,smoothstep(0.78,1.1,bands)*0.55);
  // low sun glow following the pointer slightly
  vec2 sun=vec2(0.72+uMouse.x*0.06,0.62+uMouse.y*0.05); sun.x*=uRes.x/uRes.y;
  float d=length(p-sun);
  col+=vec3(0.95,0.62,0.36)*0.32*exp(-d*2.4);
  col+=vec3(1.0,0.82,0.6)*0.12*exp(-d*9.0);
  // vignette + grain
  col*=mix(0.55,1.05,smoothstep(1.25,0.25,length(uv-vec2(0.55,0.5))));
  float g=fract(sin(dot(gl_FragCoord.xy+uTime,vec2(12.9898,78.233)))*43758.5453);
  col+=(g-0.5)*0.035;
  gl_FragColor=vec4(col,1.0);
}`;function Ce(w,{reducedMotion:t=!1,onReady:c}={}){let o;try{const e=document.createElement("canvas");if(!(e.getContext("webgl2")||e.getContext("webgl")))return null}catch{return null}try{o=new fe({canvas:w,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}const y=o.getContext();if(!y)return null;let g=!1;try{const e=y.getExtension("WEBGL_debug_renderer_info"),h=e?String(y.getParameter(e.UNMASKED_RENDERER_WEBGL)):"";g=/swiftshader|llvmpipe|software|basic render/i.test(h)&&!/[?&]forcegl\b/.test(location.search)}catch{}const m=window.matchMedia("(max-width: 760px)").matches;o.setPixelRatio(Math.min(window.devicePixelRatio||1,m?1.5:1.75)),o.outputColorSpace=he,o.toneMapping=we,o.toneMappingExposure=1.05;const s=new re,a=new ye(35,1,.1,100);a.position.set(0,0,8);const u=new ge(o),x=u.fromScene(new Te,.04).texture;s.environment=x;const l={uTime:{value:0},uRes:{value:new oe(1,1)},uMouse:{value:new oe}},S=new te({uniforms:l,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:Re,depthWrite:!1}),p=new n(new be(1,1),S);p.position.z=-6,s.add(p);const v={uTime:{value:0},uAmp:{value:.15}},b=new ne({color:new se("#fff4ea"),metalness:0,roughness:.06,transmission:1,thickness:1.6,ior:1.42,iridescence:.55,iridescenceIOR:1.3,iridescenceThicknessRange:[180,620],attenuationColor:new se("#e9b98c"),attenuationDistance:2.4,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2,specularIntensity:1});b.onBeforeCompile=e=>{e.uniforms.uTime=v.uTime,e.uniforms.uAmp=v.uAmp,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime; uniform float uAmp;
        ${ce}
        float dispAt(vec3 p){ return snoise(p*0.75+vec3(0.0,uTime*0.2,uTime*0.1))*uAmp + snoise(p*1.6-uTime*0.15)*uAmp*0.18; }
        vec3 displaced(vec3 p){ vec3 n=normalize(p); return p+n*dispAt(p); }`).replace("#include <beginnormal_vertex>",`vec3 pBase=position;
        vec3 nBase=normalize(pBase);
        vec3 tA=normalize(cross(nBase, abs(nBase.y)>0.95?vec3(1.0,0.0,0.0):vec3(0.0,1.0,0.0)));
        vec3 tB=normalize(cross(nBase,tA));
        float eps=0.012;
        vec3 dP=displaced(pBase);
        vec3 dA=displaced(normalize(pBase+tA*eps)*length(pBase));
        vec3 dB=displaced(normalize(pBase+tB*eps)*length(pBase));
        vec3 objectNormal=normalize(cross(dA-dP,dB-dP));
        if(dot(objectNormal,nBase)<0.0) objectNormal=-objectNormal;
        #ifdef USE_TANGENT
        vec3 objectTangent=vec3(tangent.xyz);
        #endif`).replace("#include <begin_vertex>","vec3 transformed=dP;")};const r=new n(new Me(1.25,m?20:40),b);s.add(r);const f=new n(new ze(.22,48,48),new ne({color:"#f7d9b8",roughness:.15,metalness:0,transmission:.9,thickness:.5,ior:1.5,clearcoat:1}));s.add(f);const U=new ie("#ffd7b0",2.2);U.position.set(3,4,5),s.add(U);const W=new ie("#c66a3e",1.6);W.position.set(-4,-2,2),s.add(W);const C=m?140:320,T=new Float32Array(C*3),q=new Float32Array(C);for(let e=0;e<C;e++)T[e*3]=(Math.random()-.5)*14,T[e*3+1]=(Math.random()-.5)*8,T[e*3+2]=(Math.random()-.2)*4,q[e]=Math.random();const _=new Se;_.setAttribute("position",new ae(T,3)),_.setAttribute("aSeed",new ae(q,1));const le=new te({uniforms:{uTime:v.uTime,uPR:{value:o.getPixelRatio()}},vertexShader:`attribute float aSeed; uniform float uTime; uniform float uPR; varying float vA;
      void main(){ vec3 p=position; p.y+=mod(uTime*0.12*(0.4+aSeed)+aSeed*8.0,8.0)-4.0; p.x+=sin(uTime*0.3+aSeed*20.0)*0.25;
      vec4 mv=modelViewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=(2.0+aSeed*3.5)*uPR*(6.0/-mv.z);
      vA=0.25+aSeed*0.55; }`,fragmentShader:"varying float vA; void main(){ float d=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,d)*vA; gl_FragColor=vec4(1.0,0.85,0.65,a); }",transparent:!0,depthWrite:!1,blending:Ae}),de=new Be(_,le);s.add(de);const i={x:0,y:0,tx:0,ty:0};let A=1,B=1,L=0;function G(){const e=w.getBoundingClientRect();A=Math.max(1,e.width),B=Math.max(1,e.height),o.setSize(A,B,!1),a.aspect=A/B,a.updateProjectionMatrix();const h=a.position.z-p.position.z,d=2*Math.tan(a.fov*Math.PI/360)*h;p.scale.set(d*a.aspect*1.04,d*1.04,1),l.uRes.value.set(A,B)}function O(){const e=A<760,h=e?.95:1.85,d=e?1.9:.2,M=e?.56:1;r.position.x=h+i.x*.35,r.position.y=d+i.y*.25+L*1.6,r.scale.setScalar(M*(1-L*.25)),f.position.set(r.position.x-1.55*M,r.position.y-1*M,1.2)}const ve=new Pe;let k=0,P=!1,I=!0,V=!1,Y=g,R=0,j=0,F=performance.now(),H=!1;function X(){if(!P)return;k=requestAnimationFrame(X);const e=performance.now(),h=e-F;if(F=e,document.documentElement.classList.contains("locked"))return;if(R>5&&(j+=h),R++,R===45){const M=j/39;if(M>42&&!H)H=!0,o.setPixelRatio(1),G(),R=0,j=0;else if(M>42){E(),Y=!0,D();return}}const d=ve.getElapsedTime();i.x+=(i.tx-i.x)*.05,i.y+=(i.ty-i.y)*.05,l.uTime.value=d,l.uMouse.value.set(i.x,i.y),v.uTime.value=d,r.rotation.y=d*.12+i.x*.4,r.rotation.x=Math.sin(d*.2)*.2-i.y*.3,f.position.y+=Math.sin(d*.9)*.002,O(),o.render(s,a)}function N(){P||V||t||Y||!I||document.hidden||(P=!0,F=performance.now(),k=requestAnimationFrame(X))}function E(){P=!1,cancelAnimationFrame(k)}function D(){l.uTime.value=12,v.uTime.value=12,r.rotation.set(.15,.6,0),O(),o.render(s,a)}const $=e=>{i.tx=e.clientX/window.innerWidth*2-1,i.ty=-(e.clientY/window.innerHeight*2-1)},K=()=>{L=Math.min(1,Math.max(0,window.scrollY/Math.max(1,B)))},J=()=>{G(),P||D()},Q=()=>document.hidden?E():N(),Z=new IntersectionObserver(([e])=>{I=e.isIntersecting,I?N():E()});return Z.observe(w),window.addEventListener("pointermove",$,{passive:!0}),window.addEventListener("scroll",K,{passive:!0}),window.addEventListener("resize",J),document.addEventListener("visibilitychange",Q),G(),D(),c&&c(),N(),()=>{V=!0,E(),Z.disconnect(),window.removeEventListener("pointermove",$),window.removeEventListener("scroll",K),window.removeEventListener("resize",J),document.removeEventListener("visibilitychange",Q),s.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),x.dispose(),u.dispose(),o.dispose()}}export{Ce as createHeroScene};
