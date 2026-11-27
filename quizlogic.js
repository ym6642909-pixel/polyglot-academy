/* Round 9: varied question pools. Every attempt draws a fresh random sample from a large
   pool built out of each unit's real content (phrases both directions, the grammar quiz
   tuple, and questions generated from the grammar table rows). */
function hasArabic(s){return /[\u0600-\u06FF]/.test(s||"")}
function mkOpts(a,pool,n,r){
let rnd=r||Math.random,seen={},d=[];
(pool||[]).forEach(x=>{if(x!=null&&x!==a&&!seen[x]){seen[x]=1;d.push(x)}});
return shS([a].concat(shS(d,rnd).slice(0,(n||3)-1)),rnd)}
function cellPools(gs){
let c0=[],c1=[];(gs||[]).forEach(g=>{(g&&g[3]||[]).forEach(r=>{if(r&&r.length>=2&&r[0]!=null&&r[1]!=null){if(c0.indexOf(r[0])<0)c0.push(r[0]);if(c1.indexOf(r[1])<0)c1.push(r[1])}})});
return{c0,c1}}
function buildUnitPool(l,us,i,g,lid,cells){
let u=us[i],others=us.filter((_,k)=>k!==i),fo=others.flatMap(x=>[x[1],x[3]]),ar=others.flatMap(x=>[x[2],x[4]]),pool=[],nm=l.name;
pool.push({q:u[1],a:u[2],label:"ما معنى العبارة التالية؟",ar:false,lid:lid,pool:ar,ph:1});
pool.push({q:u[3],a:u[4],label:"ما معنى العبارة التالية؟",ar:false,lid:lid,pool:ar,ph:1});
pool.push({q:u[2],a:u[1],label:"كيف تقول هذه العبارة بـ"+nm+"؟",ar:true,pool:fo,ph:1});
pool.push({q:u[4],a:u[3],label:"كيف تقول هذه العبارة بـ"+nm+"؟",ar:true,pool:fo,ph:1});
if(g){
if(g[4]&&g[4].length>=3)pool.push({q:g[4][0],a:g[4][1],label:"سؤال القاعدة: "+g[0],ar:true,pool:g[4].slice(2)});
(g[3]||[]).forEach(row=>{if(!row||row.length<2||row[0]==null||row[1]==null)return;
let c1=[],own1=g[3].map(x=>x[1]).filter(x=>x!==row[1]);
own1.forEach(x=>{if(c1.indexOf(x)<0)c1.push(x)});
if(c1.length<2&&cells)cells.c1.forEach(x=>{if(x!==row[1]&&c1.indexOf(x)<0)c1.push(x)});
if(c1.length>=2)pool.push({q:row[0],a:row[1],label:"قاعدة «"+g[0]+"» · اختر المقابل الصحيح",ar:hasArabic(row[0]),lid:hasArabic(row[0])?null:lid,pool:c1});
let c0=[],own0=g[3].map(x=>x[0]).filter(x=>x!==row[0]);
own0.forEach(x=>{if(c0.indexOf(x)<0)c0.push(x)});
if(c0.length<2&&cells)cells.c0.forEach(x=>{if(x!==row[0]&&c0.indexOf(x)<0)c0.push(x)});
if(c0.length>=2)pool.push({q:row[1],a:row[0],label:"قاعدة «"+g[0]+"» · اختر المقابل الصحيح",ar:hasArabic(row[1]),lid:hasArabic(row[1])?null:lid,pool:c0})})}
let seen={},out=[];pool.forEach(t=>{let k=t.q+"‖"+t.a;if(!seen[k]){seen[k]=1;out.push(t)}});
return out}
function buildLevelPool(l,id,lv){
let us=unitsFor(id,lv),gs=us.map((_,k)=>grammarFor(id,lv,k)),cells=cellPools(gs),pool=[];
us.forEach((_,i)=>{buildUnitPool(l,us,i,gs[i],id,cells).forEach(t=>pool.push(t))});
return pool}
function drawQs(pool,n,r){
let rnd=r||Math.random,out=[],used={};
shS(pool.slice(),rnd).forEach(t=>{if(out.length>=n||used[t.q])return;
let opts=mkOpts(t.a,t.pool,3,rnd);if(opts.length<3)return;
used[t.q]=1;out.push({q:t.q,a:t.a,label:t.label,ar:t.ar,lid:t.lid,opts})});
return out}
