const PCSS=`@page{size:A4 portrait;margin:0}*{box-sizing:border-box}
body{margin:0;background:#e7ecf4;font:11px/1.45 'Plus Jakarta Sans',Arial,sans-serif;color:#15213b;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.pg{width:794px;height:1120px;background:#fff;margin:0 auto 16px;position:relative;overflow:hidden;padding:0 44px}.L .pg{width:1123px;height:792px}
.tp{height:6px;background:linear-gradient(90deg,#0c3a8a,#1a5bd0 70%,#c8202f);margin:0 -44px 20px}
table{border-collapse:collapse}
.hd{width:100%}.hd img{height:38px;display:block}.hd td{vertical-align:middle}.hd .r{text-align:right}
.dt1{font-size:20px;font-weight:800;color:#0c3a8a;letter-spacing:-.01em;line-height:1.2}.ds{font-size:10px;color:#5d6c88;margin-top:3px}
.lb{display:block;color:#5d6c88;font-weight:600;font-size:9.5px}
.st{display:inline-block;padding:2px 10px;border-radius:99px;font-size:9.5px;font-weight:700;background:#e8eef9;color:#0c3a8a}
.st:before{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;background:currentColor;margin-right:5px;vertical-align:1px}
.st.Berjalan{background:#fff1cf;color:#8a5a00}.st.Selesai{background:#e1f5ec;color:#0a6a50}

.tkw{position:relative;border:1px solid #c9d8f0;border-radius:12px;background:#f4f8ff;margin:14px 0 12px}
.tk{width:100%;table-layout:fixed}.tk td{vertical-align:middle;padding:13px 18px}
.tk .a{width:446px}.tk .b{text-align:center;border-left:2px dashed #b7c9e8}
.tk .id{font-size:25px;font-weight:800;color:#0c3a8a;letter-spacing:.02em;line-height:1.2;margin:2px 0 7px}
.tk .b svg{display:inline-block;height:44px;max-width:100%}.tk .b div{font-size:9px;letter-spacing:.22em;color:#5d6c88;margin-top:3px}
.nc{position:absolute;left:438px;width:18px;height:9px;background:#fff;border:1px solid #c9d8f0}
.nc.t{top:-1px;border-top:0;border-radius:0 0 9px 9px}.nc.u{bottom:-1px;border-bottom:0;border-radius:9px 9px 0 0}

.cds{width:100%;table-layout:fixed;border-collapse:separate;border-spacing:0;margin-bottom:12px}
.cds td{vertical-align:top}.cds td.gap{width:14px}
.cds td.cd{border:1px solid #d9e3f3;border-radius:12px;padding:12px 15px 11px}
.ch{font-weight:800;color:#0c3a8a;font-size:11.5px;margin-bottom:9px;padding-bottom:7px;border-bottom:1px solid #e3ebf7}
.ch .tm{float:right;font-weight:600;color:#5d6c88;font-size:9.5px;padding-top:3px}
.ic{display:inline-block;width:22px;height:22px;line-height:22px;border-radius:7px;background:#eaf2ff;margin-right:8px;vertical-align:middle;text-align:center}
.ic svg{display:inline-block;vertical-align:middle}
.ic.ok{background:#e1f5ec}
.r2{width:100%;table-layout:fixed}.r2 th{width:82px;text-align:left;color:#5d6c88;font-weight:600;padding:3px 6px 3px 0;vertical-align:top}.r2 td{font-weight:600;padding:3px 0;vertical-align:top}
.pl{display:inline-block;border:2px solid #15213b;border-radius:7px;padding:2px 13px;font-size:18px;font-weight:800;letter-spacing:.08em;line-height:1.3;background:#fff;margin:0 0 8px}

.pj{border:1px solid #d9e3f3;border-radius:12px;padding:12px 15px 8px;margin-bottom:12px}
.tl{width:100%;table-layout:fixed;margin:0 0 8px}.tl td{vertical-align:middle}
.tl .e{width:190px}.tl .z{text-align:right}.tl .m{padding:0 14px}
.tl .e .lb{margin-bottom:1px}.tl .e b{display:block;font-size:15px;line-height:1.25;color:#15213b}.tl .e span.t{color:#5d6c88;font-weight:700;font-size:11px}
.dot{display:inline-block;width:9px;height:9px;border-radius:50%;border:2px solid #0c3a8a;background:#0c3a8a;margin-right:6px;vertical-align:-1px}.dot.o{background:#fff}
.mw{width:100%}.mw td{vertical-align:middle;padding:0}.mw .ln div{height:0;border-top:2px dashed #9db6e8}
.mw .pb{width:1%;white-space:nowrap;text-align:center;padding:0 8px}
.rl2{display:inline-block;background:#eaf2ff;color:#0c3a8a;font-weight:700;font-size:10px;padding:4px 11px;border-radius:99px}.rl2 svg{display:inline-block;vertical-align:middle;margin-right:5px}
.c2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.35;max-height:2.7em;word-break:break-word}
.kv{width:100%;table-layout:fixed}.kv th{width:17%;color:#5d6c88;font-weight:600;text-align:left;padding:5px 8px 5px 0;vertical-align:top}.kv td{width:33%;font-weight:600;padding:5px 8px 5px 0;border-top:1px solid #edf1f8;vertical-align:top}

.cl{width:100%;table-layout:fixed;margin:7px 0 0}.cl td{padding:3px 0;font-weight:600;font-size:10.5px}.cl td.bad{color:#9c1a27;font-weight:800}
.cb{display:inline-block;width:15px;height:15px;line-height:13px;border-radius:5px;vertical-align:middle;margin-right:7px;text-align:center;background:#e1f5ec;border:1px solid #98d6bf}
.cb svg{display:inline-block;vertical-align:middle}
.cb.no{background:#fdecee;border-color:#f0a9b0}.cb.na{background:#fff;border-color:#c3cee2}
.gg i{display:inline-block;width:19px;height:8px;border-radius:2px;background:#d9e3f3;margin-right:3px;vertical-align:middle}.gg i.on{background:#1a5bd0}.gg.lo i.on{background:#c8202f}
.nb{margin-top:9px;border:1px dashed #bccbe4;border-radius:9px;padding:6px 10px;height:72px;overflow:hidden;font-weight:500;line-height:1.4}.nb .tx{display:block;max-height:4.2em;overflow:hidden}
.ph{border:1.5px dashed #bccbe4;border-radius:10px;height:220px;text-align:center;padding:90px 22px 0;color:#5d6c88;font-weight:700;background:#fafcff}.ph span{display:block;font-weight:500;font-size:9.5px;margin-top:4px}

.sg{width:100%;table-layout:fixed;margin-top:14px}.sg td{text-align:center;padding:0 14px;vertical-align:top;font-weight:700;color:#5d6c88}
.sg .sp{height:70px}.sg .sn{border-top:1px solid #15213b;padding-top:4px;font-weight:700;color:#15213b;min-height:18px;max-height:2.9em;overflow:hidden;line-height:1.35}.sg .dd{font-size:9px;color:#8392ad;margin-top:3px;font-weight:500}
.nt{margin-top:12px;padding:8px 12px;background:#f4f8ff;border-radius:8px;color:#5d6c88;font-size:9.5px}

.kw{margin:0 -10px}.kpi2{width:100%;border-collapse:separate;border-spacing:10px 0;margin:12px 0 14px;table-layout:fixed}.kpi2 td{border:1px solid #d9e3f3;background:#f4f8ff;border-radius:10px;padding:10px 14px}
.kpi2 td.a{background:#fff8e6;border-color:#f3dfa6}.kpi2 td.c{background:#e8f7f1;border-color:#a9dcc8}.kpi2 td.w{background:#fff}
.kpi2 small{display:block;color:#5d6c88;font-weight:600;font-size:9.5px}.kpi2 b{font-size:20px;font-weight:800;color:#0c3a8a;line-height:1.25}.kpi2 td.a b{color:#a15f00}.kpi2 td.c b{color:#0a6a50}
.d{width:100%;table-layout:fixed;font-size:10px;border-collapse:separate;border-spacing:0}
.d th{background:#0c3a8a;color:#fff;text-align:left;padding:8px 7px;font-size:9.5px;font-weight:700;white-space:nowrap}.d th:first-child{border-radius:8px 0 0 0}.d th:last-child{border-radius:0 8px 0 0}
.d td{padding:0 7px;height:30px;border-bottom:1px solid #e6ecf5;overflow:hidden;line-height:1.25;vertical-align:middle}.d td.nw{white-space:nowrap}
.d .e1{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.d small{display:block;color:#5d6c88;font-size:8.5px;font-weight:500;line-height:1.3}.d .c2{max-height:2.5em;line-height:1.25}
.d tr:nth-child(even) td{background:#f6f9ff}.d .n{text-align:right}.d td.i b{color:#0c3a8a;letter-spacing:0}.d .st{padding:1px 8px;font-size:9px;white-space:nowrap}
.d tr.tt td{background:#eaf2ff;font-weight:800;color:#0c3a8a;border-bottom:0;height:30px}
.ft{position:absolute;left:44px;right:44px;bottom:16px;width:calc(100% - 88px);border-top:1px solid #dbe3ef;font-size:9px;color:#5d6c88}.ft td{padding-top:6px}.ft .r{text-align:right}
.cp1 .sg{margin-top:8px}.cp1 .sg .sp{height:44px}
.cp2 .sg{margin-top:6px}.cp2 .sg .sp{height:40px}.cp2 .nt{margin-top:8px;padding:5px 10px}.cp2 .tkw{margin:8px 0}.cp2 .cds,.cp2 .pj{margin-bottom:8px}.cp2 .nb{height:56px;margin-top:6px}.cp2 .nb .tx{max-height:2.8em}.cp2 .ph{height:201px;padding-top:80px}
@media print{body{background:#fff}.pg{margin:0;page-break-after:always}.pg:last-child{page-break-after:auto}}`;
const head=(t,s)=>`<div class="tp"></div><table class="hd"><tr><td><img src="${LOGO}"></td><td class="r"><div class="dt1">${t}</div><div class="ds">${s}</div></td></tr></table>`;
const nowS=()=>{const n=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString();return fd(n.slice(0,10)+' '+n.slice(11,16))};
/* Bila isi form sangat panjang sehingga menabrak footer, rapatkan jarak secara bertahap (ruang tanda tangan tetap dipertahankan sebisanya) */
function compactPages(doc){doc.querySelectorAll('.pg').forEach(p=>{const ft=p.querySelector('.ft'),nt=p.querySelector('.nt');if(!ft||!nt)return;
  for(const c of['cp1','cp2']){if(nt.getBoundingClientRect().bottom<=ft.getBoundingClientRect().top-4)break;p.classList.add(c)}})}
const foot=(i,n)=>`<table class="ft"><tr><td>Dicetak melalui <b>MSB ERP System</b> · General Affair · ${nowS()}</td><td class="r">Hal ${i} / ${n}</td></tr></table>`;

/* Ikon dokumen: atribut SVG ditulis langsung supaya ikut tergambar saat unduh PDF */
const IV={
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  route:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>'
};
const sv=(p,c,s,w)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ico=(k,ok)=>`<span class="ic${ok?' ok':''}">${sv(IV[k],ok?'#0a8a67':'#1a5bd0',13,2.2)}</span>`;
const nf=v=>v===''||v==null||isNaN(+v)?'-':(+v).toLocaleString('id-ID');
const dtp=s=>{const m=/^(\d{4}-\d\d-\d\d)(?: (\d\d:\d\d))?/.exec(s||'');return m?[fd(m[1],0),m[2]||'']:[s||'-','']};
const cv=v=>`<div class="c2">${esc(v)||'-'}</div>`;
const kv=a=>{let h='<table class="kv">',i=0;while(i<a.length){const x=a[i],y=a[i+1];
  if(x[2]){h+=`<tr><th>${x[0]}</th><td colspan="3">${cv(x[1])}</td></tr>`;i++}
  else if(y&&!y[2]){h+=`<tr><th>${x[0]}</th><td>${cv(x[1])}</td><th>${y[0]}</th><td>${cv(y[1])}</td></tr>`;i+=2}
  else{h+=`<tr><th>${x[0]}</th><td>${cv(x[1])}</td><th></th><td></td></tr>`;i++}}return h+'</table>'};
const rw=a=>'<table class="r2">'+a.map(x=>`<tr><th>${x[0]}</th><td>${x[2]?x[1]:cv(x[1])}</td></tr>`).join('')+'</table>';
const BB=['Hampir habis','1/4','1/2','3/4','Penuh'];
const gauge=v=>{const i=BB.indexOf(String(v||'').trim());if(i<0)return esc(v)||'-';return `<span class="gg${i===0?' lo':''}">${BB.map((_,k)=>`<i${k<=i?' class="on"':''}></i>`).join('')}</span> ${esc(BB[i])}`};
/* "Semua baik" / "Bermasalah: Ban, Rem" -> daftar 1 (baik) / 0 (bermasalah); null bila tidak terbaca */
const cnd=s=>{s=String(s||'');const m=/^Bermasalah:\s*(.*)$/i.exec(s);if(m){const bad=m[1].split(/\s*,\s*/);return CHK.map(c=>bad.includes(c)?0:1)}return /^semua baik/i.test(s)?CHK.map(()=>1):null};
const cks=a=>{const cell=i=>{const s=a?a[i]:-1,g=s===1?sv('<path d="m5 12.5 4.5 4.5L19 7.5"/>','#0a8a67',9,3.4):s===0?sv('<path d="M6 6l12 12M18 6 6 18"/>','#c8202f',9,3.4):sv('<path d="M7 12h10"/>','#8d9bb5',9,3);
  return `<td${s===0?' class="bad"':''}><span class="cb ${s===1?'ok':s===0?'no':'na'}">${g}</span>${esc(CHK[i])}</td>`};
  let h='<table class="cl">';for(let i=0;i<CHK.length;i+=2)h+=`<tr>${cell(i)}${i+1<CHK.length?cell(i+1):'<td></td>'}</tr>`;return h+'</table>'};
const note=(a,raw,c)=>`<div class="nb"><span class="lb">Catatan</span><span class="tx">${esc((a||!raw?'':'Kondisi: '+raw+'. ')+(c||''))||'-'}</span></div>`;

function paperTiket(r){
  const sel=r.status==='Selesai',run=r.status==='Berjalan',sig=(t,n)=>`<td><div>${t}</div><div class="sp"></div><div class="sn">${esc(n)||'&nbsp;'}</div><div class="dd">Tanggal: ........ / ........ / ............</div></td>`;
  const A=dtp(r.berangkat),Z=dtp(r.rencana),mid=sel?nf(r.jarak)+' km':run?'Sedang berjalan':'';
  const tl=`<table class="tl"><tr><td class="e"><span class="lb"><span class="dot"></span>Berangkat</span><b>${esc(A[0])}</b><span class="t">${esc(A[1])}</span></td>
    <td class="m"><table class="mw"><tr><td class="ln"><div></div></td><td class="pb"><span class="rl2">${sv(IV.car,'#0c3a8a',14,2)}${mid}</span></td><td class="ln"><div></div></td></tr></table></td>
    <td class="e z"><span class="lb"><span class="dot o"></span>Rencana kembali</span><b>${esc(Z[0])}</b><span class="t">${esc(Z[1])}</span></td></tr></table>`;
  const ka=cnd(r.kondisiAwal),kb=cnd(r.kondisiAkhir);
  const back=sel?rw([['KM',nf(r.kmAkhir)+(isNaN(+r.kmAkhir)||r.kmAkhir===''?'':' km')],['BBM',gauge(r.bbmAkhir),1]])+cks(kb)+note(kb,r.kondisiAkhir,r.catatanAkhir)
    :`<div class="ph">Kendaraan belum dikembalikan<span>Bagian ini terisi setelah form pengembalian dikirim.</span></div>`;
  const pg=`<div class="pg">${head('Form Pemakaian Kendaraan','General Affair · PT Murinda Sentra Baja')}
  <div class="tkw"><div class="nc t"></div><div class="nc u"></div><table class="tk"><tr><td class="a"><span class="lb">Nomor form / tiket</span><div class="id">${esc(r.id)}</div><span class="st ${esc(r.status)}">${esc(r.status)||'-'}</span> <span style="color:#5d6c88;font-size:9.5px;margin-left:4px">Diajukan ${fd(r.waktu)}</span></td><td class="b">${bar(r.id,1.7)}<div>${esc(r.id)}</div></td></tr></table></div>
  <table class="cds"><tr>
    <td class="cd"><div class="ch">${ico('user')}Data pemohon</div>${rw([['Nama',r.nama],['ID karyawan',r.nik],['Departemen',r.dept],['No. HP',r.hp],['Atasan',r.atasan]])}</td><td class="gap"></td>
    <td class="cd"><div class="ch">${ico('car')}Kendaraan &amp; pengemudi</div><div class="pl">${esc(r.plat)||'-'}</div>${rw([['Kendaraan',r.kendaraan],['Pengemudi',r.pengemudi],['Nama sopir',r.sopir||'-']])}</td>
  </tr></table>
  <div class="pj"><div class="ch">${ico('route')}Tujuan &amp; jadwal</div>${tl}${kv([['Keperluan',r.keperluan],['Penumpang',r.penumpang?r.penumpang+' orang':''],['Tujuan',r.tujuan,1],['Nama penumpang',r.namaPenumpang||'-',1]])}</div>
  <table class="cds"><tr>
    <td class="cd"><div class="ch">${ico('clip',1)}Kondisi saat diambil<span class="tm">${fd(r.berangkat)}</span></div>${rw([['KM',nf(r.kmAwal)+(isNaN(+r.kmAwal)||r.kmAwal===''?'':' km')],['BBM',gauge(r.bbmAwal),1]])}${cks(ka)}${note(ka,r.kondisiAwal,r.catatanAwal)}</td><td class="gap"></td>
    <td class="cd"><div class="ch">${ico('clip',1)}Kondisi saat kembali<span class="tm">${sel?fd(r.kembali):''}</span></div>${back}</td>
  </tr></table>
  <table class="sg"><tr>${sig('Pemohon',r.nama)}${sig('Atasan / penyetuju',r.atasan)}${sig('Petugas General Affair','')}</tr></table>
  <div class="nt">Pemohon menyatakan data benar, memakai kendaraan sesuai keperluan dinas, dan bertanggung jawab atas kendaraan selama pemakaian.</div>
  ${foot(1,1)}</div>`;
  return {html:pg,L:0,file:'Form_'+r.id,title:'Form '+r.id};
}

function paperRekap(rows,f){
  const tot=rows.reduce((a,r)=>a+(+r.jarak||0),0),run=rows.filter(r=>r.status==='Berjalan').length,fin=rows.filter(r=>r.status==='Selesai').length;
  const k=[['Total pemakaian',rows.length,''],['Sedang berjalan',run,'a'],['Selesai',fin,'c'],['Total jarak (km)',tot.toLocaleString('id-ID'),'w']];
  const per=`${f.a?fd(f.a,0):'awal'} s/d ${f.b?fd(f.b,0):'sekarang'}`+(f.s?' · '+f.s:'')+(f.v?' · '+f.v:'');
  const COL=[['No',3,1],['Tiket',12],['Berangkat',8.5],['Pemakai / Departemen',15.5],['Kendaraan',15.5],['Tujuan',18.5],['KM awal',6.5,1],['KM akhir',6.5,1],['Jarak',5.5,1],['Status',8.5]];
  const th='<tr>'+COL.map(c=>`<th${c[2]?' class="n"':''} style="width:${c[1]}%">${c[0]}</th>`).join('')+'</tr>';
  const tr=(r,i)=>{const B=dtp(r.berangkat);return `<tr><td class="n">${i+1}</td><td class="i nw"><b>${esc(r.id)}</b></td><td class="nw">${esc(B[0])}${B[1]?`<small>${esc(B[1])}</small>`:''}</td><td><span class="e1"><b>${esc(r.nama)||'-'}</b></span><small class="e1">${esc(r.dept)||'-'}</small></td><td><span class="e1"><b>${esc(r.plat)||'-'}</b></span><small class="e1">${esc(r.kendaraan)||'-'}</small></td><td><div class="c2">${esc(r.tujuan)||'-'}</div></td><td class="n">${nf(r.kmAwal)}</td><td class="n">${nf(r.kmAkhir)}</td><td class="n">${nf(r.jarak)}</td><td class="nw"><span class="st ${esc(r.status)}">${esc(r.status)||'-'}</span></td></tr>`};
  /* Tinggi baris tetap -> jumlah baris per halaman pasti. Halaman terakhir menyisakan 1 baris untuk total. */
  const F=18,N=20,chunks=[],rest=rows.slice();
  do{const cap=chunks.length?N:F;let t=Math.min(cap,rest.length);if(t===rest.length&&t>cap-1)t=cap-1;const left=rest.length-t;if(left>0&&left<3)t-=3-left;chunks.push(rest.splice(0,t))}while(rest.length);
  let off=0;const n=chunks.length;
  const pages=chunks.map((c,p)=>{let body=c.map((r,j)=>tr(r,off+j)).join('')||`<tr><td colspan="10" style="text-align:center;color:#5d6c88;height:60px">Tidak ada data pada filter ini.</td></tr>`;off+=c.length;
    if(p===n-1&&rows.length)body+=`<tr class="tt"><td colspan="8" style="text-align:right">Total jarak tempuh (km)</td><td class="n">${tot.toLocaleString('id-ID')}</td><td></td></tr>`;
    return `<div class="pg">${head('Rekap Pemakaian Kendaraan','Periode '+per)}${p?'<div style="height:12px"></div>':`<div class="kw"><table class="kpi2"><tr>${k.map(x=>`<td class="${x[2]}"><small>${x[0]}</small><b>${x[1]}</b></td>`).join('')}</tr></table></div>`}<table class="d">${th}${body}</table>${foot(p+1,n)}</div>`}).join('');
  return {html:pages,L:1,file:'Rekap_Pemakaian_'+(f.a||'awal')+'_'+(f.b||today),title:'Rekap pemakaian'};
}
