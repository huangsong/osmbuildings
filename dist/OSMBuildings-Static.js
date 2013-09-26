(exports||window).OSMBuildings=function(R){function Ka(a,c){var b=a.x-c.x,e=a.y-c.y;return b*b+e*e}function ob(a){for(var c=0,b=0,e=0,d=a.length-3;e<d;e+=2)c+=a[e],b+=a[e+1];a=(a.length-2)/2;return{x:c/a<<0,y:b/a<<0}}function na(a,c){var b={};a/=Z;c/=Z;b[pb]=0>=c?90:1<=c?-90:La*(2*qb(rb(G*(1-2*c)))-K);b[sb]=360*(1===a?1:(a%1+1)%1)-180;return b}function Ma(a,c){var b=oa(1,$(0,0.5-tb(Na(ub+K*a/180))/G/2));return{x:(c/360+0.5)*Z<<0,y:b*Z<<0}}function Oa(a,c,b){function e(a){if("XDomainRequest"in R&&
a!==d.readyState&&(d.readyState=a,d.onreadystatechange))d.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return c[b]||a});var d="XDomainRequest"in R?new R.XDomainRequest:new R.XMLHttpRequest;d.onerror=function(){d.status=500;d.statusText="Error";e(4)};d.ontimeout=function(){d.status=408;d.statusText="Timeout";e(4)};d.onprogress=function(){e(3)};d.onload=function(){d.status=200;d.statusText="Ok";e(4)};d.onreadystatechange=function(){4===d.readyState&&d.status&&!(200>d.status||299<
d.status)&&b&&d.responseText&&b(JSON.parse(d.responseText))};e(0);d.open("GET",a);e(1);d.send(null);e(2);return d}function aa(){S.render();ba.render();m.clearRect(0,0,y,x);if(!(H<pa||qa)){var a,c,b,e,d,g,f,h=ba.MAX_HEIGHT,j={x:ca+t,y:da+s},n=t,l=t+y,vb=s,k=s+x,r,p,ea,q,v;w.sort(function(a,b){return a.minHeight-b.minHeight||Ka(b.center,j)-Ka(a.center,j)||b.height-a.height});a=0;for(c=w.length;a<c;a++)if(d=w[a],!(d.height+d.roofHeight<=h)){g=!1;r=d.footprint;b=0;for(e=r.length-1;b<e;b+=2)g||(g=r[b]>
n&&r[b]<l&&r[b+1]>vb&&r[b+1]<k);if(g)if(b=1>d.scale?d.height*d.scale:d.height,g=B/(B-b),f=e=0,d.minHeight&&(e=1>d.scale?d.minHeight*d.scale:d.minHeight,f=B/(B-e)),ea=d.wallColor||Pa,q=d.altColor||ra,v=d.roofColor||fa,m.strokeStyle=q,"cylinder"===d.shape)r=Qa({x:d.center.x-t,y:d.center.y-s},d.radius,b,e,ea,q),"cylinder"===d.roofShape&&(r=Qa({x:d.center.x-t,y:d.center.y-s},d.radius,b+d.roofHeight,b,v)),m.fillStyle=v,d=r.c,g=r.r,m.beginPath(),m.arc(d.x,d.y,g,0,2*G),m.stroke(),m.fill();else{r=Ra(r,g,
f,ea,q);p=[];if(d.holes){b=0;for(e=d.holes.length;b<e;b++)p[b]=Ra(d.holes[b],g,f,ea,q)}m.fillStyle=v;Sa(r,!0,p)}}}}function Ra(a,c,b,e,d){for(var g={x:0,y:0},f={x:0,y:0},h,j,n=[],l=0,k=a.length-3;l<k;l+=2)g.x=a[l]-t,g.y=a[l+1]-s,f.x=a[l+2]-t,f.y=a[l+3]-s,h=M(g.x,g.y,c),j=M(f.x,f.y,c),b&&(g=M(g.x,g.y,b),f=M(f.x,f.y,b)),(f.x-g.x)*(h.y-g.y)>(h.x-g.x)*(f.y-g.y)&&(m.fillStyle=g.x<f.x&&g.y<f.y||g.x>f.x&&g.y>f.y?d:e,Sa([f.x,f.y,g.x,g.y,h.x,h.y,j.x,j.y])),n[l]=h.x,n[l+1]=h.y;return n}function Sa(a,c,b){if(a.length){var e,
d,g,f;m.beginPath();m.moveTo(a[0],a[1]);e=2;for(d=a.length;e<d;e+=2)m.lineTo(a[e],a[e+1]);if(b){e=0;for(d=b.length;e<d;e++){a=b[e];m.moveTo(a[0],a[1]);g=2;for(f=a.length;g<f;g+=2)m.lineTo(a[g],a[g+1])}}m.closePath();c&&m.stroke();m.fill()}}function M(a,c,b){return{x:(a-ca)*b+ca<<0,y:(c-da)*b+da<<0}}function Qa(a,c,b,e,d,g){var f=B/(B-b);b=M(a.x,a.y,f);var f=c*f,h;e&&(e=B/(B-e),a=M(a.x,a.y,e),c*=e);if(h=Ta(a,c,b,f))e=ga(h[0].y1-a.y,h[0].x1-a.x),h=ga(h[1].y1-a.y,h[1].x1-a.x),g||(g=F.parse(d),g=""+g.setLightness(0.8)),
m.fillStyle=d,m.beginPath(),m.arc(b.x,b.y,f,K,e,!0),m.arc(a.x,a.y,c,e,K),m.closePath(),m.fill(),m.fillStyle=g,m.beginPath(),m.arc(b.x,b.y,f,h,K,!0),m.arc(a.x,a.y,c,K,h),m.closePath(),m.fill();return{c:b,r:f}}function Ta(a,c,b,e){var d=a.x-b.x,g=a.y-b.y,f=c-e,h=d*d+g*g;if(!(h<=f*f)){var h=Ua(h),d=-d/h,g=-g/h,f=f/h,h=[],j,n,l;j=Ua($(0,1-f*f));for(var k=1;-1<=k;k-=2)n=d*f-k*j*g,l=g*f+k*j*d,h.push({x1:a.x+c*n<<0,y1:a.y+c*l<<0,x2:b.x+e*n<<0,y2:b.y+e*l<<0});return h}}var Va=Va||Array,Wa=Wa||Array,q=Math,
rb=q.exp,tb=q.log,wb=q.sin,xb=q.cos,Na=q.tan,qb=q.atan,ga=q.atan2,oa=q.min,$=q.max,Ua=q.sqrt,Xa=q.ceil,Ya=q.floor,yb=q.round,sa=document,F,Za=function(a){var c,b,e;if(0===a.s)c=b=e=a.l;else{e=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var d=2*a.l-e;a.h/=360;c=ta(d,e,a.h+1/3);b=ta(d,e,a.h);e=ta(d,e,a.h-1/3)}return new C(255*c<<0,255*b<<0,255*e<<0,a.a)},ta=function(a,c,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(c-a)*b:0.5>b?c:b<2/3?a+6*(c-a)*(2/3-b):a},C=function(a,c,b,e){this.r=a;this.g=c;this.b=b;this.a=
4>arguments.length?1:e},zb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",
slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ua=C.prototype;ua.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};ua.setLightness=function(a){var c=C.toHSLA(this);c.l*=a;c.l=Math.min(1,Math.max(0,c.l));return Za(c)};ua.setAlpha=function(a){return new C(this.r,
this.g,this.b,this.a*a)};C.parse=function(a){var c;a+="";a=zb[a]||a;if(~a.indexOf("#")&&(c=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/)))return new C(parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),c[4]?parseInt(c[4],16)/255:1);if(c=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new C(parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10),c[4]?parseFloat(c[5]):1);if(c=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return Za({h:parseInt(c[1],10),s:parseFloat(c[2]),
l:parseFloat(c[3]),a:c[4]?parseFloat(c[5]):1})};C.toHSLA=function(a){var c=a.r/255,b=a.g/255,e=a.b/255,d=Math.max(c,b,e),g=Math.min(c,b,e),f,h=(d+g)/2,j;if(d===g)f=g=0;else{j=d-g;g=0.5<h?j/(2-d-g):j/(d+g);switch(d){case c:f=(b-e)/j+(b<e?6:0);break;case b:f=(e-c)/j+2;break;case e:f=(c-b)/j+4}f/=6}return{h:360*f,s:g,l:h,a:a.a}};F=C;var $a,N=Math,va=N.PI,u=N.sin,D=N.cos,ab=N.tan,bb=N.asin,cb=N.atan2,I=va/180,ha=23.4397*I;$a=function(a,c,b){b=I*-b;c*=I;a=a.valueOf()/864E5-0.5+2440588-2451545;var e=I*
(357.5291+0.98560028*a),d=I*(1.9148*u(e)+0.02*u(2*e)+3E-4*u(3*e)),d=e+d+102.9372*I+va,e=bb(u(0)*D(ha)+D(0)*u(ha)*u(d)),d=cb(u(d)*D(ha)-ab(0)*u(ha),D(d));b=I*(280.16+360.9856235*a)-b-d;return{altitude:bb(u(c)*u(e)+D(c)*D(e)*D(b)),azimuth:cb(u(b),D(b)*u(c)-ab(e)*D(c))-va/2}};var fb=function(a,c){var b,e,d,g,f=0,h,j;h=0;for(j=a.length-3;h<j;h+=2)b=a[h],e=a[h+1],d=a[h+2],g=a[h+3],f+=b*g-d*e;if((0<f/2?db:eb)===c)return a;b=[];for(e=a.length-2;0<=e;e-=2)b.push(a[e],a[e+1]);return b},k={DEFAULT_HEIGHT:5},
db="CW",eb="CCW";k.windOuterPolygon=function(a){return fb(a,db)};k.windInnerPolygon=function(a){return fb(a,eb)};k.YARD_TO_METER=0.9144;k.FOOT_TO_METER=0.3048;k.INCH_TO_METER=0.0254;k.METERS_PER_LEVEL=3;k.toMeters=function(a){a=""+a;var c=parseFloat(a);return c===a||~a.indexOf("m")?c<<0:~a.indexOf("yd")?c*k.YARD_TO_METER<<0:~a.indexOf("ft")?c*k.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*k.FOOT_TO_METER+a[1]*k.INCH_TO_METER<<0):c<<0};k.getRadius=function(a){for(var c=90,b=-90,e=0,d=a.length;e<
d;e+=2)c=oa(c,a[e]),b=$(b,a[e]);return yb(6378137*((b-c)/La)/2)};var Ab={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},Bb={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",
panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"};k.getMaterialColor=function(a){a=a.toLowerCase();return"#"===a[0]?a:Ab[Bb[a]||a]||null};var gb,hb=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},
xa=function(a){if(a){for(var c=[],b,e=0,d=a.length;e<d;e++)b=wa[a[e]],c.push(b[0],b[1]);c[c.length-2]!==c[0]&&c[c.length-1]!==c[1]&&c.push(c[0],c[1]);if(!(8>c.length))return c}},Cb=function(a,c){for(var b in c)a[b]||(a[b]=c[b]);return a},ya=function(a,c){var b={},e=a.tags;a.id&&(b.id=a.id);c&&(b.footprint=k.windOuterPolygon(c));e.height&&(b.height=k.toMeters(e.height));!b.height&&e["building:height"]&&(b.height=k.toMeters(e["building:height"]));!b.height&&e.levels&&(b.height=e.levels*k.METERS_PER_LEVEL<<
0);!b.height&&e["building:levels"]&&(b.height=e["building:levels"]*k.METERS_PER_LEVEL<<0);e.min_height&&(b.minHeight=k.toMeters(e.min_height));!b.minHeight&&e["building:min_height"]&&(b.minHeight=k.toMeters(e["building:min_height"]));!b.minHeight&&e.min_level&&(b.minHeight=e.min_level*k.METERS_PER_LEVEL<<0);!b.minHeight&&e["building:min_level"]&&(b.minHeight=e["building:min_level"]*k.METERS_PER_LEVEL<<0);e["building:material"]&&(b.wallColor=k.getMaterialColor(e["building:material"]));e["building:facade:material"]&&
(b.wallColor=k.getMaterialColor(e["building:facade:material"]));e["building:cladding"]&&(b.wallColor=k.getMaterialColor(e["building:cladding"]));e["building:color"]&&(b.wallColor=e["building:color"]);e["building:colour"]&&(b.wallColor=e["building:colour"]);e["roof:material"]&&(b.roofColor=k.getMaterialColor(e["roof:material"]));e["building:roof:material"]&&(b.roofColor=k.getMaterialColor(e["building:roof:material"]));e["roof:color"]&&(b.roofColor=e["roof:color"]);e["roof:colour"]&&(b.roofColor=e["roof:colour"]);
e["building:roof:color"]&&(b.roofColor=e["building:roof:color"]);e["building:roof:colour"]&&(b.roofColor=e["building:roof:colour"]);b.height=b.height||k.DEFAULT_HEIGHT;if("dome"===e["roof:shape"]||"cylinder"===e["building:shape"]||"sphere"===e["building:shape"])b.shape="cylinder",b.radius=k.getRadius(b.footprint),"dome"===e["roof:shape"]&&e["roof:height"]&&(b.roofShape="cylinder",b.roofHeight=k.toMeters(e["roof:height"]),b.height=$(0,b.height-b.roofHeight));return b},wa,T,ia;gb=function(a){wa={};
T={};ia=[];for(var c,b=0,e=a.length;b<e;b++)switch(c=a[b],c.type){case "node":wa[c.id]=[c.lat,c.lon];break;case "way":if(hb(c)){var d=void 0,d=void 0;if(d=xa(c.nodes))d=ya(c,d),ia.push(d)}else if(d=c.tags,!d||!d.highway&&!d.railway&&!d.landuse)T[c.id]=c;break;case "relation":var g=c,f=void 0,h=void 0;c=[];var j=h=void 0,n=void 0,d=void 0;if(j=hb(g)&&!("multipolygon"!==g.tags.type&&"building"!==g.tags.type)){for(var f=g.members,h=j=void 0,n=[],l=0,m=f.length;l<m;l++)j=f[l],"way"===j.type&&T[j.ref]&&
(!j.role||"outer"===j.role?h=T[j.ref]:("inner"===j.role||"enclave"===j.role)&&n.push(T[j.ref]));f=h&&h.tags?{outer:h,inner:n}:void 0;j=f}if(j&&(j=ya(g),h=f.outer))if(n=xa(h.nodes)){h=ya(h,n);g=0;for(n=f.inner.length;g<n;g++)(d=xa(f.inner[g].nodes))&&c.push(k.windInnerPolygon(d));c.length&&(h.holes=c);ia.push(Cb(h,j))}}return ia};var G=Math.PI,K=G/2,ub=G/4,La=180/G,pb="latitude",sb="longitude",y=0,x=0,za=0,ib=0,t=0,s=0,H,Z,m,J=new F(200,190,180),Aa=J.setLightness(0.8),U=J.setLightness(1.2),Pa=J+"",
ra=Aa+"",fa=U+"",pa=15,Ba,ca,da,B=450,qa,Ca=new Date,O={},Da={add:function(a,c){O[c]={data:a,time:Date.now()}},get:function(a){return O[a]&&O[a].data},purge:function(){Ca.setMinutes(Ca.getMinutes()-5);for(var a in O)O[a].time<Ca&&delete O[a]}},jb=function(a){for(var c=new Va(a.length),b,e=0,d=a.length-1;e<d;e+=2)b=Ma(a[e],a[e+1]),c[e]=b.x,c[e+1]=b.y;a=c;c=a.length/2;b=new Wa(c);var e=0,d=c-1,g,f,h,j,n=[],l=[],k=[];for(b[e]=b[d]=1;d;){f=0;for(g=e+1;g<d;g++){h=a[2*g];var m=a[2*g+1],r=a[2*e],p=a[2*e+
1],q=a[2*d],t=a[2*d+1],v=q-r,E=t-p,s=void 0;if(0!==v||0!==E)s=((h-r)*v+(m-p)*E)/(v*v+E*E),1<s?(r=q,p=t):0<s&&(r+=v*s,p+=E*s);v=h-r;E=m-p;h=v*v+E*E;h>f&&(j=g,f=h)}2<f&&(b[j]=1,n.push(e),l.push(j),n.push(j),l.push(d));e=n.pop();d=l.pop()}for(g=0;g<c;g++)b[g]&&k.push(a[2*g],a[2*g+1]);c=k;if(!(8>c.length))return c},Db=function(a){return function(c){c=Ea(c);Da.add(c,a);V(c,!0)}},Ea=function(a){var c;if(a)if("FeatureCollection"===a.type){a=a.features;var b,e,d,g,f,h,j=[],n,l,m,p;b=0;for(e=a.length;b<e;b++)if(n=
a[b],"Feature"===n.type&&(p={},d=n.geometry,n=n.properties,"LineString"===d.type&&(g=c.length-1,c[0][0]===c[g][0]&&c[0][1]===c[g][1]&&(c=d.coordinates)),"Polygon"===d.type&&(c=d.coordinates),"MultiPolygon"===d.type&&(c=d.coordinates[0]),c)){l=c[0];f=[];d=0;for(g=l.length;d<g;d++)f.push(l[d][1],l[d][0]);p.id=n.id||[f[0],f[1],n.height,n.minHeight].join();p.footprint=k.windOuterPolygon(f);m=[];d=1;for(g=c.length;d<g;d++){l=c[d];m[d-1]=[];f=0;for(h=l.length;f<h;f++)m[d-1].push(l[f][1],l[f][0]);m[d-1]=
k.windInnerPolygon(m[d-1])}m.length&&(p.holes=m);p.height=k.toMeters(n.height)||k.DEFAULT_HEIGHT;n.minHeight&&(p.minHeight=k.toMeters(n.minHeight));if(n.color||n.wallColor)p.wallColor=n.color||n.wallColor;n.roofColor&&(p.roofColor=n.roofColor);j.push(p)}c=j}else c=a.osm3s?gb(a.elements):[];else c=[];return c},V=function(a,c){var b,e,d,g,f=[],h,j,n,l,k,p,m,q,s,t=20-H,v=156412/Math.pow(2,H)/1.5;b=0;for(e=a.length;b<e;b++)if(h=a[b],j=h.height>>t,n=h.minHeight>>t,!(n>Ba)&&(l=jb(h.footprint))){q=[];if(h.holes){d=
0;for(g=h.holes.length;d<g;d++)(s=jb(h.holes[d]))&&q.push(s)}g=d=null;if(h.wallColor&&(k=F.parse(h.wallColor)))d=k.setAlpha(1),g=""+d.setLightness(0.8),d=""+d;p=null;if(h.roofColor&&(k=F.parse(h.roofColor)))p=""+k.setAlpha(1);m=h.roofHeight>>t;j<=n&&0>=m||f.push({id:h.id,footprint:l,height:oa(j,Ba),minHeight:n,wallColor:d,altColor:g,roofColor:p,roofShape:h.roofShape,roofHeight:m,center:ob(l),holes:q.length?q:null,shape:h.shape,radius:h.radius/v})}e=0;for(h=f.length;e<h;e++)b=f[e],W[b.id]||(b.scale=
c?0:1,w.push(b),W[b.id]=1);ja||(ja=setInterval(function(){for(var a,b=!1,c=0,d=w.length;c<d;c++)a=w[c],1>a.scale&&(a.scale+=0.1,1<a.scale&&(a.scale=1),b=!0);aa();b||(clearInterval(ja),ja=null)},33))},X,Fa,Ga,W={},ka={set:function(a){Fa=!0;w=[];W={};V(Ga=Ea(a),!0)},load:function(a){X=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";
(Fa=!/(.+\{[nesw]\}){4,}/.test(X))?(w=[],W={},Oa(X,{},function(a){V(Ga=Ea(a),!0)})):ka.update()},update:function(){w=[];W={};if(!(15>H))if(Fa)V(Ga);else if(X){var a,c,b,e,d=na(t,s);a=na(t+y,s+x);var g=0.0075*Xa(d.latitude/0.0075),f=0.015*Xa(a.longitude/0.015);a=0.0075*Ya(a.latitude/0.0075);for(d=0.015*Ya(d.longitude/0.015);a<=g;a+=0.0075)for(c=d;c<=f;c+=0.015)a=parseFloat(a.toFixed(5)),c=parseFloat(c.toFixed(5)),e=a+","+c,(b=Da.get(e))?V(b):Oa(X,{n:a+0.0075,e:c+0.015,s:a,w:c},Db(e));Da.purge()}}},
w=[],ja,S,P=function(a,c,b){return{x:a+la.x*b,y:c+la.y*b}},p,kb=!0,lb=new F(0,0,0),mb=null,la={x:0,y:0},Ha={setContext:function(a){p=a;Ha.setDate((new Date).setHours(10))},enable:function(a){kb=!!a},render:function(){var a,c,b;p.clearRect(0,0,y,x);if(kb&&!(H<pa||qa))if(a=na(t+za,s+ib),a=$a(mb,a.latitude,a.longitude),!(0>=a.altitude)){c=1/Na(a.altitude);b=0.4/c;la.x=xb(a.azimuth)*c;la.y=wb(a.azimuth)*c;lb.a=b;b=lb+"";var e,d,g,f,h,j,n,l,k,m,r,q,u;a=[];c=[];p.fillStyle=b;p.beginPath();b=0;for(e=w.length;b<
e;b++){f=w[b];k=!1;h=f.footprint;l=[];d=0;for(g=h.length-1;d<g;d+=2)l[d]=j=h[d]-t,l[d+1]=n=h[d+1]-s,k||(k=0<j&&j<y&&0<n&&n<x);if(k)if(h=1>f.scale?f.height*f.scale:f.height,j=0,f.minHeight&&(j=1>f.scale?f.minHeight*f.scale:f.minHeight),"cylinder"===f.shape)"cylinder"===f.roofShape&&(h+=f.roofHeight),a.push({shape:f.shape,center:{x:f.center.x-t,y:f.center.y-s},radius:f.radius,h:h,mh:j});else{f=null;d=0;for(g=l.length-3;d<g;d+=2)n=l[d],m=l[d+1],k=l[d+2],r=l[d+3],q=P(n,m,h),u=P(k,r,h),j&&(m=P(n,m,j),
r=P(k,r,j),n=m.x,m=m.y,k=r.x,r=r.y),(k-n)*(q.y-m)>(q.x-n)*(r-m)?(1===f&&p.lineTo(n,m),f=0,d||p.moveTo(n,m),p.lineTo(k,r)):(0===f&&p.lineTo(q.x,q.y),f=1,d||p.moveTo(q.x,q.y),p.lineTo(u.x,u.y));j||c.push(l)}}b=0;for(e=a.length;b<e;b++)if(f=a[b],"cylinder"===f.shape&&(d=f.center,g=f.radius,l=f.mh,h=P(d.x,d.y,f.h),f=j=void 0,l&&(d=P(d.x,d.y,l)),l=Ta(d,g,h,g)))j=ga(l[0].y1-d.y,l[0].x1-d.x),f=ga(l[1].y1-d.y,l[1].x1-d.x),p.moveTo(l[1].x2,l[1].y2),p.arc(h.x,h.y,g,f,j),p.arc(d.x,d.y,g,j,f);p.fill();p.globalCompositeOperation=
"destination-out";p.beginPath();b=0;for(e=c.length;b<e;b++){l=c[b];p.moveTo(l[0],l[1]);d=2;for(g=l.length;d<g;d+=2)p.lineTo(l[d],l[d+1]);p.lineTo(l[0],l[1])}b=0;for(e=a.length;b<e;b++)f=a[b],"cylinder"===f.shape&&!f.mh&&(p.moveTo(f.center.x+f.radius,f.center.y),p.arc(f.center.x,f.center.y,f.radius,0,2*G));p.fillStyle="#00ff00";p.fill();p.globalCompositeOperation="source-over"}},setDate:function(a){mb=a;Ha.render()}};S=Ha;var ba,z,nb={MAX_HEIGHT:8,setContext:function(a){z=a},render:function(){z.clearRect(0,
0,y,x);if(!(H<pa||qa)){var a,c,b,e,d,g,f,h,j;z.beginPath();a=0;for(c=w.length;a<c;a++)if(b=w[a],!(b.height+b.roofHeight>nb.MAX_HEIGHT)){j=!1;d=b.footprint;h=[];b=0;for(e=d.length-1;b<e;b+=2)h[b]=g=d[b]-t,h[b+1]=f=d[b+1]-s,j||(j=0<g&&g<y&&0<f&&f<x);if(j){b=0;for(e=h.length-3;b<e;b+=2)j=h[b],d=h[b+1],b?z.lineTo(j,d):z.moveTo(j,d);z.closePath()}}z.fillStyle=fa;z.strokeStyle=ra;z.stroke();z.fill()}}};ba=nb;var Ia,Ja=function(){var a=sa.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";
a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;Q.push(a);A.appendChild(a);return c},A=sa.createElement("DIV");A.style.pointerEvents="none";A.style.position="absolute";A.style.left=0;A.style.top=0;var Q=[];S.setContext(Ja());ba.setContext(Ja());m=Ja();Ia={appendTo:function(a){a.appendChild(A)},remove:function(){A.parentNode.removeChild(A)},
setSize:function(a,c){for(var b=0,e=Q.length;b<e;b++)Q[b].width=a,Q[b].height=c},screenshot:function(){var a=sa.createElement("CANVAS");a.width=y;a.height=x;var c=a.getContext("2d");aa();for(var b=0,e=Q.length;b<e;b++)c.drawImage(Q[b],0,0);return a.toDataURL("image/png")},setPosition:function(a,c){A.style.left=a+"px";A.style.top=c+"px"}};var ma=function(a,c){H=20;y=c.w;x=c.h;za=y/2<<0;ib=x/2<<0;ca=za;da=x;Ia.setSize(y,x);Ba=B-50;var b=Ma(a.n,a.w);t=b.x;s=b.y;ka.update();aa()},Y=ma.prototype;Y.setStyle=
function(a){a=a||{};if(a.color||a.wallColor)J=F.parse(a.color||a.wallColor),Pa=J.setAlpha(1)+"",Aa=J.setLightness(0.8),ra=Aa.setAlpha(1)+"",U=J.setLightness(1.2),fa=U.setAlpha(1)+"";a.roofColor&&(U=F.parse(a.roofColor),fa=U.setAlpha(1)+"");void 0!==a.shadows&&S.enable(a.shadows);aa();return this};Y.setDate=function(a){S.setDate(a);return this};Y.loadData=function(a){ka.load(a);return this};Y.setData=function(a){ka.set(a);return this};Y.screenshot=function(a){var c=Ia.screenshot();a&&(R.location.href=
c.replace("image/png","image/octet-stream"));return c};ma.VERSION="0.1.8a";ma.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return ma}(window);
