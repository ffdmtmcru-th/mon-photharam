'use client'

import { useEffect, useState } from 'react'

export default function RamanyWithi() {
  const [selectedId, setSelectedId] = useState('0')

  const mapData = {
    0: { tag:"ศูนย์กลางเรียนรู้", title:"ศูนย์วัฒนธรรมมอญ", desc:"จุดเริ่มต้นของเส้นทาง รวบรวมข้อมูลประวัติศาสตร์ เครื่องแต่งกาย และของใช้ในวิถีชีวิตมอญ", dist:"จุดเริ่มต้นเส้นทาง", time:"ใช้เวลา 30–45 นาที", x:150, y:150 },
    1: { tag:"ศาสนสถานสำคัญ", title:"วัดคงคาราม", desc:"วัดมอญเก่าแก่ชื่อดังด้านจิตรกรรมฝาผนังพื้นหลังสีคราม ชมได้ทั้งแบบปกติและผ่านสื่อ AR/VR", dist:"ห่างจากจุดเริ่มต้น 2.4 กม.", time:"ใช้เวลา 1 ชม.", x:300, y:300 },
    2: { tag:"ชุมชนวิถีมอญ", title:"ชุมชนมอญบ้านม่วง", desc:"ชุมชนที่ยังคงพูดภาษามอญในชีวิตประจำวัน มีการสาธิตหัตถกรรมและอาหารพื้นถิ่น", dist:"ห่างจากจุดเริ่มต้น 1.6 กม.", time:"ใช้เวลา 45 นาที", x:230, y:220 },
    3: { tag:"แหล่งภูมิปัญญา", title:"บ้านเนินหนองบัว", desc:"ต้นแบบภูมิปัญญาวิถีชาวนามอญ ตำบลเตาปูน จุดหมายของชุดสื่อที่ 4", dist:"ห่างจากจุดเริ่มต้น 5.1 กม.", time:"ใช้เวลา 1 ชม.", x:430, y:190 },
    4: { tag:"วิถีการค้า", title:"ตลาดน้ำวัดโบสถ์", desc:"ตลาดริมน้ำที่ยังคงกลิ่นอายวิถีมอญ แหล่งชิมอาหารและขนมพื้นบ้าน", dist:"ห่างจากจุดเริ่มต้น 6.3 กม.", time:"ใช้เวลา 1 ชม.", x:500, y:370 },
  }

  const currentData = mapData[selectedId]

  return (
    <>
      <style jsx global>{`
        :root{
          --indigo:#1B3A4B;
          --indigo-deep:#0F2530;
          --clay:#C1662F;
          --clay-soft:#E08E52;
          --gold:#C9A227;
          --plaster:#EDE3D0;
          --plaster-warm:#F5EEDC;
          --lacquer:#7A2331;
          --ink:#2A2118;
          --paper:#F7F3E8;
          --line: rgba(42,33,24,0.14);
          --shadow: 0 12px 32px rgba(15,37,48,0.18);
        }
        *{box-sizing:border-box; margin:0; padding:0;}
        html{scroll-behavior:smooth;}
        body{
          background:var(--paper);
          color:var(--ink);
          font-family:'Sarabun', sans-serif;
          line-height:1.7;
          overflow-x:hidden;
        }
        h1,h2,h3{font-family:'Noto Serif Thai', serif; font-weight:700; color:var(--indigo-deep);}
        section{padding:120px 8vw; position:relative;}
        .reveal{opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease;}
        .reveal.show{opacity:1; transform:translateY(0);}
        
        /* Timeline */
        .timeline{margin-top:70px; display:flex; gap:0; overflow-x:auto; padding-bottom:24px; scroll-snap-type:x proximity;}
        .timeline::-webkit-scrollbar{height:6px;}
        .timeline::-webkit-scrollbar-thumb{background:var(--clay); border-radius:6px;}
        .tl-item{flex:0 0 auto; width:min(320px, 78vw); padding:0 26px 0 0; position:relative; scroll-snap-align:start; padding-top:32px;}
        .tl-item::before{content:""; position:absolute; top:0; left:0; right:26px; height:2px; background:rgba(237,227,208,0.18);}
        .tl-item::after{content:""; position:absolute; top:-5px; left:0; width:12px; height:12px; border-radius:50%; background:var(--gold); box-shadow:0 0 0 4px rgba(201,162,39,0.2);}
        .tl-year{font-family:'Chonburi',cursive; font-size:15px; color:var(--gold); margin-bottom:10px; display:block;}
        .tl-item h4{font-family:'Noto Serif Thai',serif; font-size:19px; margin-bottom:10px; color:var(--plaster-warm);}
        .tl-item p{font-size:14px; color:rgba(237,227,208,0.7);}

        /* Video Grid */
        .video-grid{margin-top:56px; display:grid; grid-template-columns:repeat(3,1fr); gap:24px;}
        @media (max-width:900px){ .video-grid{grid-template-columns:1fr;} }
        .video-card{border-radius:20px; overflow:hidden; background:var(--indigo-deep); position:relative; aspect-ratio:3/4; cursor:pointer; box-shadow:var(--shadow);}
        .video-card .vc-bg{position:absolute; inset:0; opacity:0.9; transition:transform .5s ease;}
        .video-card:hover .vc-bg{transform:scale(1.06);}
        .video-card .vc-overlay{position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,37,48,0.05) 0%, rgba(15,37,48,0.85) 78%); display:flex; flex-direction:column; justify-content:flex-end; padding:22px;}
        .vc-play{width:52px; height:52px; border-radius:50%; background:rgba(247,243,232,0.92); display:flex; align-items:center; justify-content:center; margin-bottom:16px; transition:transform .25s, background .25s;}
        .video-card:hover .vc-play{transform:scale(1.1); background:var(--gold);}
        .video-card h4{color:var(--paper); font-family:'Noto Serif Thai',serif; font-size:19px; margin-bottom:6px;}
        .video-card p{color:rgba(237,227,208,0.72); font-size:13px;}
        .vc-dur{position:absolute; top:16px; right:16px; font-size:11px; color:var(--paper); background:rgba(15,37,48,0.55); padding:4px 10px; border-radius:999px; backdrop-filter:blur(4px);}

        /* Wisdom Grid */
        .wisdom-grid{margin-top:56px; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;}
        @media (max-width:900px){ .wisdom-grid{grid-template-columns:1fr; gap:40px;} }
        .stat-row{display:flex; gap:20px; margin-bottom:36px; flex-wrap:wrap;}
        .stat-box{background:var(--paper); border:1px solid var(--line); border-radius:16px; padding:20px 22px; flex:1; min-width:130px;}
        .stat-box .big{font-family:'Chonburi',cursive; font-size:32px; color:var(--clay); line-height:1;}
        .stat-box .lbl{font-size:12px; color:#5a4d3c; margin-top:8px;}
        .process{position:relative; padding-left:34px;}
        .process::before{content:""; position:absolute; left:9px; top:8px; bottom:8px; width:2px; background:var(--line);}
        .p-step{position:relative; padding-bottom:30px;}
        .p-step:last-child{padding-bottom:0;}
        .p-step::before{content:""; position:absolute; left:-34px; top:2px; width:20px; height:20px; border-radius:50%; background:var(--paper); border:2px solid var(--clay);}
        .p-step h4{font-family:'Noto Serif Thai',serif; font-size:16.5px; margin-bottom:4px;}
        .p-step p{font-size:13.5px; color:#5a4d3c;}

        /* AR Section */
        .ar-wrap{margin-top:56px; display:grid; grid-template-columns:1fr 1fr; gap:44px; align-items:center;}
        @media (max-width:900px){ .ar-wrap{grid-template-columns:1fr;} }
        .ar-features{display:flex; flex-direction:column; gap:14px;}
        .ar-feat{display:flex; gap:14px; align-items:flex-start;}
        .ar-feat h5{font-size:14.5px; font-family:'Noto Serif Thai',serif; margin-bottom:3px; color:var(--plaster-warm);}
        .ar-feat p{font-size:13px; color:rgba(237,227,208,0.6); margin:0;}

        /* About */
        #about{background:var(--plaster); border-top:1px solid var(--line);}
        .about-project-title{font-family:'Noto Serif Thai', serif; font-weight:600; font-size:clamp(20px,2.6vw,27px); line-height:1.55; color:var(--indigo-deep); margin-top:16px;}
        .about-grid{margin-top:56px; display:grid; grid-template-columns:1fr 1.3fr; gap:48px; align-items:start;}
        @media (max-width:880px){ .about-grid{grid-template-columns:1fr; gap:34px;} }
        .about-seal{aspect-ratio:1/1; border-radius:50%; border:1.5px solid var(--clay); display:flex; align-items:center; justify-content:center; position:relative; max-width:260px;}
        .about-seal-inner{text-align:center; padding:20px;}
        .about-seal-inner .yr{font-family:'Chonburi',cursive; font-size:30px; color:var(--lacquer);}
        .about-seal-inner .lbl{font-size:11.5px; color:var(--indigo-deep); opacity:0.65; margin-top:6px; letter-spacing:1px;}
        .about-rows{border-top:1px solid var(--line);}
        .about-row{display:grid; grid-template-columns:180px 1fr; gap:24px; padding:22px 0; border-bottom:1px solid var(--line);}
        @media (max-width:600px){ .about-row{grid-template-columns:1fr; gap:6px;} }
        .about-row .k{font-size:12.5px; letter-spacing:1px; color:var(--clay); text-transform:uppercase; padding-top:2px;}
        .about-row .v{font-size:15.5px; color:var(--ink);}
        .about-row .v small{display:block; font-size:13px; color:#7a6b57; margin-top:4px;}
        .about-note{margin-top:44px; padding:24px 28px; background:var(--paper); border:1px solid var(--line); border-radius:16px; font-size:13.5px; color:#5a4d3c; max-width:74ch;}

        footer{padding:60px 8vw 40px; background:var(--indigo-deep); color:rgba(237,227,208,0.55); display:flex; justify-content:space-between; flex-wrap:wrap; gap:20px; font-size:13px; border-top:1px solid rgba(237,227,208,0.08);}
        footer b{color:var(--plaster-warm); font-family:'Noto Serif Thai',serif; font-weight:600;}
      `}</style>

      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 36px', background:'rgba(247,243,232,0.86)', backdropFilter:'blur(10px)', borderBottom:'1px solid var(--line)'}}>
        <div style={{fontFamily:'Chonburi,cursive', fontSize:'20px', color:'var(--indigo-deep)', letterSpacing:'0.5px'}}>
          รามัญวิถี <span style={{color:'var(--clay)'}}>โพธาราม</span>
        </div>
        <ul style={{display:'flex', gap:'6px', listStyle:'none'}}>
          <li><a href="#map" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>01</span>แผนที่</a></li>
          <li><a href="#heritage" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>02</span>มรดก</a></li>
          <li><a href="#culinary" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>03</span>รสชาติ</a></li>
          <li><a href="#wisdom" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>04</span>ภูมิปัญญา</a></li>
          <li><a href="#mural" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>05</span>จิตรกรรม</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header style={{minHeight:'100vh', position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', padding:'140px 8vw 80px', background:'linear-gradient(180deg, var(--paper) 0%, var(--plaster-warm) 100%)', overflow:'hidden'}}>
        <span style={{display:'inline-flex', alignItems:'center', gap:'10px', fontSize:'13px', letterSpacing:'2px', color:'var(--lacquer)', marginBottom:'22px', zIndex:2, position:'relative'}}>
          <span style={{width:'26px', height:'1px', background:'var(--lacquer)', display:'inline-block'}}></span>
          อำเภอโพธาราม · จังหวัดราชบุรี
        </span>
        <h1 style={{fontSize:'clamp(40px, 6.4vw, 92px)', lineHeight:1.08, maxWidth:'15ch', zIndex:2, position:'relative'}}>
          สัมผัสลมหายใจ<br/><em style={{fontStyle:'normal', color:'var(--clay)'}}>รามัญ</em> แห่งแม่กลอง
        </h1>
        <p style={{maxWidth:'52ch', marginTop:'26px', fontSize:'18px', color:'#4a3f31', zIndex:2, position:'relative'}}>
          ชุดสื่อดิจิทัลผสมผสาน 5 รูปแบบ ที่พาคุณเดินตามรอยชุมชนมอญโพธาราม ตั้งแต่แผนที่นำทาง เรื่องเล่าประวัติศาสตร์ รสชาติอาหาร ภูมิปัญญาชาวนา ไปจนถึงจิตรกรรมฝาผนัง
        </p>
        <div style={{marginTop:'44px', display:'flex', gap:'14px', flexWrap:'wrap', zIndex:2, position:'relative'}}>
          <a href="#map" style={{padding:'14px 28px', borderRadius:'999px', fontSize:'15px', fontWeight:600, cursor:'pointer', border:'1.5px solid var(--indigo-deep)', background:'var(--indigo-deep)', color:'var(--paper)'}} onMouseEnter={(e)=>{e.target.style.background='var(--clay)'; e.target.style.borderColor='var(--clay)'}} onMouseLeave={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.borderColor='var(--indigo-deep)'}}>เริ่มออกเดินทาง</a>
          <a href="#mural" style={{padding:'14px 28px', borderRadius:'999px', fontSize:'15px', fontWeight:600, cursor:'pointer', border:'1.5px solid var(--indigo-deep)', background:'transparent', color:'var(--indigo-deep)'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background='transparent'; e.target.style.color='var(--indigo-deep)'}}>ชมจิตรกรรม AR</a>
        </div>
      </header>

      {/* MAP SECTION */}
      <section id="map" style={{padding:'120px 8vw', position:'relative', background:'linear-gradient(180deg, var(--plaster-warm), var(--paper))'}}>
        <div className="reveal">
          <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px'}}>
            <span style={{fontFamily:'Noto Serif Thai,serif', fontSize:'13px', color:'var(--paper)', background:'var(--clay)', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>01</span>
            <span style={{fontSize:'13px', letterSpacing:'2px', color:'var(--clay)', textTransform:'uppercase'}}>Interactive Map</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,3.6vw,44px)', maxWidth:'16ch'}}>แผนที่เส้นทางท่องเที่ยววัฒนธรรมมอญ</h2>
          <p style={{maxWidth:'62ch', marginTop:'16px', color:'#4a3f31', fontSize:'16.5px'}}>แผนที่ดิจิทัลแบบปฏิสัมพันธ์ แตะหมุดหรือเลือกจากรายการ เพื่อสำรวจชุมชนมอญ วัดมอญ และศูนย์วัฒนธรรมพื้นถิ่น</p>
        </div>

        <div style={{marginTop:'56px', display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:'36px', alignItems:'start'}}>
          {/* Map Canvas */}
          <div style={{background:'var(--indigo)', borderRadius:'22px', padding:'22px', boxShadow:'var(--shadow)', position:'relative', overflow:'hidden'}}>
            <svg viewBox="0 0 640 460" style={{width:'100%', height:'auto', display:'block'}}>
              <path d="M20 55 C 140 100, 118 178, 218 218 C 338 262, 328 336, 458 378 C 518 398, 558 416, 628 438" fill="none" stroke="#5F93A8" strokeWidth="14" strokeLinecap="round" opacity="0.55"/>
              <path d="M60 380 C 150 300, 260 260, 340 180 C 400 120, 470 90, 580 50" fill="none" stroke="rgba(237,227,208,0.3)" strokeWidth="2.2" strokeLinecap="round"/>
              <g onClick={() => setSelectedId('0')} style={{cursor:'pointer'}}>
                <circle cx="150" cy="150" r="6" fill="var(--plaster-warm)" stroke="var(--paper)" strokeWidth="2"/>
              </g>
              {[1,2,3,4].map(id => {
                const p = mapData[id]
                return (
                  <g key={id} onClick={() => setSelectedId(String(id))} style={{cursor:'pointer'}} transform={`translate(${p.x},${p.y})`}>
                    <circle r="8" fill="var(--clay-soft)" stroke="var(--paper)" strokeWidth="2"/>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Info Panel */}
          <div>
            <div style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:'18px', padding:'28px', minHeight:'260px', display:'flex', flexDirection:'column', boxShadow:'var(--shadow)'}}>
              {currentData && (
                <>
                  <div style={{fontSize:'11.5px', letterSpacing:'1.5px', color:'var(--clay)', textTransform:'uppercase', marginBottom:'10px'}}>{currentData.tag}</div>
                  <h3 style={{fontSize:'22px', marginBottom:'10px'}}>{currentData.title}</h3>
                  <p style={{fontSize:'14.5px', color:'#4a3f31', marginBottom:'14px'}}>{currentData.desc}</p>
                  <div style={{display:'flex', gap:'18px', flexWrap:'wrap', marginTop:'auto', paddingTop:'16px', borderTop:'1px solid var(--line)'}}>
                    <div style={{fontSize:'12px', color:'#7a6b57'}}>
                      <b style={{display:'block', color:'var(--indigo-deep)', fontSize:'13.5px', fontFamily:'Noto Serif Thai,serif'}}>{currentData.dist}</b>
                      ระยะทาง
                    </div>
                    <div style={{fontSize:'12px', color:'#7a6b57'}}>
                      <b style={{display:'block', color:'var(--indigo-deep)', fontSize:'13.5px', fontFamily:'Noto Serif Thai,serif'}}>{currentData.time}</b>
                      เวลาแนะนำ
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Location List */}
            <div style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:'18px', padding:'8px', boxShadow:'var(--shadow)', marginTop:'16px'}}>
              {Object.keys(mapData).map(id => {
                const d = mapData[id]
                return (
                  <div key={id} onClick={() => setSelectedId(id)} style={{display:'flex', alignItems:'center', gap:'14px', padding:'13px 14px', borderRadius:'12px', cursor:'pointer', background:selectedId === id ? 'var(--plaster-warm)' : 'transparent'}} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--plaster-warm)'} onMouseLeave={(e) => e.currentTarget.style.background = selectedId === id ? 'var(--plaster-warm)' : 'transparent'}>
                    <div style={{width:'26px', height:'26px', borderRadius:'50%', background:selectedId === id ? 'var(--clay)' : 'var(--indigo)', color:'var(--plaster-warm)', fontFamily:'Noto Serif Thai,serif', fontSize:'12px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>{id === '0' ? '★' : Number(id)+1}</div>
                    <div style={{flex:1, minWidth:0}}>
                      <h5 style={{fontFamily:'Noto Serif Thai,serif', fontSize:'14px', color:'var(--indigo-deep)', marginBottom:'2px', margin:0}}>{d.title}</h5>
                      <span style={{fontSize:'11.5px', color:'#7a6b57'}}>{d.tag}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section id="heritage" style={{background:'var(--indigo-deep)', color:'var(--plaster-warm)'}}>
        <div className="reveal">
          <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px'}}>
            <span style={{fontFamily:'Noto Serif Thai,serif', fontSize:'13px', color:'var(--indigo-deep)', background:'var(--gold)', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>02</span>
            <span style={{fontSize:'13px', letterSpacing:'2px', color:'var(--gold)', textTransform:'uppercase'}}>Info-Motion Graphic</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,3.6vw,44px)', maxWidth:'16ch', color:'var(--plaster-warm)'}}>เส้นทางมรดกมอญ</h2>
          <p style={{maxWidth:'62ch', marginTop:'16px', color:'rgba(237,227,208,0.75)', fontSize:'16.5px'}}>สื่อกราฟิกเคลื่อนไหวบอกเล่าประวัติความเป็นมาของชาวมอญ ตั้งแต่การอพยพเข้าสู่ลุ่มแม่น้ำแม่กลอง — เลื่อนดูเส้นเวลา</p>
        </div>

        <div className="timeline reveal">
          <div style={{flex:'0 0 auto', width:'min(320px, 78vw)', padding:'0 26px 0 0', position:'relative', paddingTop:'32px', borderTop:'2px solid rgba(237,227,208,0.18)'}}>
            <span className="tl-year">พุทธศตวรรษที่ 24</span>
            <h4 style={{fontFamily:'Noto Serif Thai',serif', fontSize:'19px', marginBottom:'10px'}}>การอพยพครั้งใหญ่</h4>
            <p>ชาวมอญอพยพจากเมืองเมาะตะมะเข้าสู่สยาม หนีภัยสงคราม ตั้งถิ่นฐานตามลุ่มแม่น้ำสำคัญ</p>
          </div>
          <div style={{flex:'0 0 auto', width:'min(320px, 78vw)', padding:'0 26px 0 0', position:'relative', paddingTop:'32px', borderTop:'2px solid rgba(237,227,208,0.18)'}}>
            <span className="tl-year">รัชกาลที่ 1–3</span>
            <h4 style={{fontFamily:'Noto Serif Thai',serif', fontSize:'19px', marginBottom:'10px'}}>ตั้งถิ่นฐานลุ่มแม่กลอง</h4>
            <p>กลุ่มมอญบางส่วนเลือกลุ่มน้ำแม่กลองที่โพธาราม เพราะภูมิประเทศคล้ายบ้านเกิด เหมาะแก่การทำนา</p>
          </div>
          <div style={{flex:'0 0 auto', width:'min(320px, 78vw)', padding:'0 26px 0 0', position:'relative', paddingTop:'32px', borderTop:'2px solid rgba(237,227,208,0.18)'}}>
            <span className="tl-year">พุทธศตวรรษที่ 25</span>
            <h4 style={{fontFamily:'Noto Serif Thai',serif', fontSize:'19px', marginBottom:'10px'}}>สร้างวัดและชุมชน</h4>
            <p>ก่อตั้งวัดคงคารามและวัดมอญอื่น ๆ เป็นศูนย์กลางศรัทธาและศิลปวัฒนธรรม</p>
          </div>
          <div style={{flex:'0 0 auto', width:'min(320px, 78vw)', padding:'0 26px 0 0', position:'relative', paddingTop:'32px', borderTop:'2px solid rgba(237,227,208,0.18)'}}>
            <span className="tl-year">ปัจจุบัน</span>
            <h4 style={{fontFamily:'Noto Serif Thai',serif', fontSize:'19px', marginBottom:'10px'}}>สืบสานผ่านคนรุ่นใหม่</h4>
            <p>ประเพณีสงกรานต์มอญ ภาษา และหัตถกรรม ยังคงสืบทอดควบคู่กับการท่องเที่ยว</p>
          </div>
        </div>
      </section>

      {/* CULINARY SECTION */}
      <section id="culinary" style={{background:'linear-gradient(180deg, var(--paper), var(--plaster-warm))'}}>
        <div className="reveal">
          <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px'}}>
            <span style={{fontFamily:'Noto Serif Thai,serif', fontSize:'13px', color:'var(--paper)', background:'var(--clay)', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>03</span>
            <span style={{fontSize:'13px', letterSpacing:'2px', color:'var(--clay)', textTransform:'uppercase'}}>Culinary Stories</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,3.6vw,44px)', maxWidth:'16ch'}}>รสชาติมอญแท้</h2>
          <p style={{maxWidth:'62ch', marginTop:'16px', color:'#4a3f31', fontSize:'16.5px'}}>วิดีทัศน์เล่าเรื่องราวอาหารมอญและวัฒนธรรมการกิน ผ่านครัวเรือนและตลาด</p>
        </div>

        <div className="video-grid reveal">
          <div className="video-card">
            <svg className="vc-bg" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
              <rect width="300" height="400" fill="#3B241A"/>
              <circle cx="230" cy="80" r="90" fill="#C1662F" opacity="0.5"/>
            </svg>
            <span className="vc-dur">4:12</span>
            <div className="vc-overlay">
              <div className="vc-play" style={{width:'52px', height:'52px', borderRadius:'50%', background:'rgba(247,243,232,0.92)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px'}}>▶</div>
              <h4>แกงมอญและเครื่องแกงพื้นบ้าน</h4>
              <p>เรียนรู้เคล็ดลับเครื่องแกงจากยายผู้สืบทอด</p>
            </div>
          </div>
          <div className="video-card">
            <svg className="vc-bg" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
              <rect width="300" height="400" fill="#2C3B2A"/>
              <circle cx="80" cy="100" r="100" fill="#C9A227" opacity="0.35"/>
            </svg>
            <span className="vc-dur">3:05</span>
            <div className="vc-overlay">
              <div className="vc-play" style={{width:'52px', height:'52px', borderRadius:'50%', background:'rgba(247,243,232,0.92)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px'}}>▶</div>
              <h4>ข้าวแช่มอญยามร้อน</h4>
              <p>วิถีการทำข้าวแช่แบบดั้งเดิม สำรับเย็นชื่นใจ</p>
            </div>
          </div>
          <div className="video-card">
            <svg className="vc-bg" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
              <rect width="300" height="400" fill="#402A22"/>
              <circle cx="150" cy="60" r="80" fill="#7A2331" opacity="0.45"/>
            </svg>
            <span className="vc-dur">2:48</span>
            <div className="vc-overlay">
              <div className="vc-play" style={{width:'52px', height:'52px', borderRadius:'50%', background:'rgba(247,243,232,0.92)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px'}}>▶</div>
              <h4>ขนมมอญในตลาดเช้า</h4>
              <p>ตามพ่อค้าแม่ค้าไปสำรวจขนมพื้นบ้าน</p>
            </div>
          </div>
        </div>
      </section>

      {/* WISDOM SECTION */}
      <section id="wisdom" style={{background:'var(--plaster-warm)'}}>
        <div className="reveal">
          <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px'}}>
            <span style={{fontFamily:'Noto Serif Thai,serif', fontSize:'13px', color:'var(--paper)', background:'var(--clay)', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>04</span>
            <span style={{fontSize:'13px', letterSpacing:'2px', color:'var(--clay)', textTransform:'uppercase'}}>Infographic</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,3.6vw,44px)', maxWidth:'16ch'}}>ภูมิปัญญามอญ</h2>
          <p style={{maxWidth:'62ch', marginTop:'16px', color:'#4a3f31', fontSize:'16.5px'}}>สื่อชุดภาพกราฟิกเชิงข้อมูล บอกเล่าภูมิปัญญาท้องถิ่นของชาวมอญด้านวิถีชาวนา</p>
        </div>

        <div className="wisdom-grid reveal">
          <div>
            <div className="stat-row">
              <div className="stat-box"><div className="big">4</div><div className="lbl">ขั้นตอนหลักของวิถีนา</div></div>
              <div className="stat-box"><div className="big">3</div><div className="lbl">รุ่นที่สืบทอดความรู้</div></div>
            </div>
            <div className="process">
              <div className="p-step">
                <h4>ดูฤกษ์และน้ำ</h4>
                <p>อ่านสัญญาณธรรมชาติและระดับน้ำในคลอง กำหนดวันเริ่มไถหว่าน</p>
              </div>
              <div className="p-step">
                <h4>เตรียมดินด้วยแรงงานร่วมมือ</h4>
                <p>ระบบ "ลงแขก" ช่วยไถคราดร่วมกันในชุมชน</p>
              </div>
              <div className="p-step">
                <h4>ปลูกข้าวพันธุ์พื้นถิ่น</h4>
                <p>คัดเมล็ดพันธุ์เองทุกปี รักษาสายพันธุ์ข้าว</p>
              </div>
            </div>
          </div>
          <div style={{background:'var(--indigo)', borderRadius:'22px', aspectRatio:'4/5', position:'relative', overflow:'hidden', boxShadow:'var(--shadow)'}}>
            <svg viewBox="0 0 400 500" width="100%" height="100%">
              <rect width="400" height="500" fill="#1B3A4B"/>
              <text x="200" y="60" textAnchor="middle" fill="#F5EEDC" fontSize="15" opacity="0.7">วิถีนา · บ้านเนินหนองบัว</text>
            </svg>
          </div>
        </div>
      </section>

      {/* MURAL SECTION */}
      <section id="mural" style={{background:'var(--indigo-deep)', color:'var(--plaster-warm)', overflow:'hidden'}}>
        <div className="reveal">
          <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px'}}>
            <span style={{fontFamily:'Noto Serif Thai,serif', fontSize:'13px', color:'var(--indigo-deep)', background:'var(--gold)', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>05</span>
            <span style={{fontSize:'13px', letterSpacing:'2px', color:'var(--gold)', textTransform:'uppercase'}}>Immersive AR / VR</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,3.6vw,44px)', maxWidth:'16ch', color:'var(--plaster-warm)'}}>สีสันแห่งธรรม — จิตรกรรมฝาผนังมอญ</h2>
          <p style={{maxWidth:'62ch', marginTop:'16px', color:'rgba(237,227,208,0.75)', fontSize:'16.5px'}}>ส่องกล้องโทรศัพท์ไปยังภาพจิตรกรรมฝาผนัง เพื่อให้เทคโนโลยี AR ขยายความเรื่องราว</p>
        </div>

        <div className="ar-wrap reveal">
          <div style={{background:'#0a1a22', borderRadius:'34px', padding:'14px', boxShadow:'0 30px 70px rgba(0,0,0,0.45)', maxWidth:'300px', margin:'0 auto', border:'1px solid rgba(237,227,208,0.1)'}}>
            <div style={{background:'linear-gradient(160deg,#12313f,#0d222c)', borderRadius:'22px', aspectRatio:'9/18.5', position:'relative', overflow:'hidden'}}>
              <svg viewBox="0 0 300 600" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <rect width="300" height="600" fill="#0d222c"/>
                <rect x="0" y="120" width="300" height="360" fill="#12313f"/>
              </svg>
              <div style={{position:'absolute', top:'16px', left:'16px', right:'16px', display:'flex', justifyContent:'space-between', fontSize:'10px', color:'rgba(237,227,208,0.7)', zIndex:3}}>
                <span>● สแกน</span><span>AR MODE</span>
              </div>
            </div>
          </div>

          <div style={{color:'var(--plaster-warm)'}}>
            <h3 style={{fontSize:'26px', marginBottom:'16px', color:'var(--plaster-warm)'}}>เดินเข้าไปในภาพวาด</h3>
            <p style={{color:'rgba(237,227,208,0.72)', fontSize:'15px', marginBottom:'22px'}}>จิตรกรรมฝาผนังพื้นหลังสีครามของวัดคงคาราม ถูกถ่ายทอดใหม่ผ่านประสบการณ์ดิจิทัลเสมือน</p>
            <div className="ar-features">
              <div className="ar-feat">
                <div>
                  <h5>📱 สแกนด้วย AR</h5>
                  <p>ส่องกล้องที่ผนังจริง ระบบจะแสดงคำอธิบายซ้อนภาพ</p>
                </div>
              </div>
              <div className="ar-feat">
                <div>
                  <h5>🥽 VR 360°</h5>
                  <p>สัมผัสพระอุโบสถแบบเสมือนจริงได้จากทุกที่</p>
                </div>
              </div>
              <div className="ar-feat">
                <div>
                  <h5>⭐ เรื่องเล่าจากช่างพื้นบ้าน</h5>
                  <p>เสียงบรรยายผูกโยงตำนาน ความเชื่อ และฝีมือช่าง</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <div className="about-head reveal">
          <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px'}}>
            <span style={{fontFamily:'Noto Serif Thai,serif', fontSize:'13px', color:'var(--paper)', background:'var(--clay)', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>i</span>
            <span style={{fontSize:'13px', letterSpacing:'2px', color:'var(--clay)', textTransform:'uppercase'}}>เกี่ยวกับโครงการ</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,3.6vw,44px)', maxWidth:'16ch'}}>เกี่ยวกับโครงการ</h2>
          <p className="about-project-title">"แนวทางการออกแบบและพัฒนาสื่อดิจิทัลแบบผสมผสานที่รองรับการพัฒนาเศรษฐกิจสร้างสรรค์"</p>
        </div>

        <div className="about-grid reveal">
          <div className="about-seal">
            <div className="about-seal-inner">
              <div className="about-seal-inner yr" style={{fontFamily:'Chonburi,cursive', fontSize:'30px', color:'var(--lacquer)'}}>2568</div>
              <div className="about-seal-inner lbl" style={{fontSize:'11.5px', color:'var(--indigo-deep)', opacity:0.65, marginTop:'6px', letterSpacing:'1px'}}>ปีงบประมาณ</div>
            </div>
          </div>

          <div>
            <div className="about-rows">
              <div className="about-row">
                <div className="k">ประเภทโครงการ</div>
                <div className="v">โครงการวิจัย<small>ประเภทงบประมาณเพื่อสนับสนุนงานมูลฐาน</small></div>
              </div>
              <div className="about-row">
                <div className="k">แหล่งทุน</div>
                <div className="v">กองทุนส่งเสริมวิทยาศาสตร์ วิจัยและนวัตกรรม (ววน.)</div>
              </div>
              <div className="about-row">
                <div className="k">หน่วยงาน</div>
                <div className="v">มหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง</div>
              </div>
              <div className="about-row">
                <div className="k">พื้นที่ศึกษา</div>
                <div className="v">อำเภอโพธาราม จังหวัดราชบุรี</div>
              </div>
            </div>

            <div className="about-note">
              เว็บแอปพลิเคชันนี้เป็นส่วนหนึ่งของผลผลิตภายใต้โครงการวิจัย จัดทำขึ้นเพื่อนำเสนอแนวทางการออกแบบสื่อดิจิทัล
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>รามัญวิถี โพธาราม<br/><b>โครงการสื่อดิจิทัลเพื่อการท่องเที่ยวเชิงวัฒนธรรมมอญอย่างยั่งยืน</b></div>
        <div>พื้นที่ศึกษา: อำเภอโพธาราม จังหวัดราชบุรี<br/>ต้นแบบเว็บแอปพลิเคชัน</div>
      </footer>

      <script>{`
        const reveals = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); } });
        }, { threshold:0.15 });
        reveals.forEach(el => io.observe(el));
      `}</script>
    </>
  )
}
