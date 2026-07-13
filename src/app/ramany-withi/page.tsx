'use client'

import { useEffect, useState } from 'react'

export default function RamanyWithi() {
  const [selectedId, setSelectedId] = useState('0')

  const mapData = {
    0: { tag:"ศูนย์กลางเรียนรู้", title:"ศูนย์วัฒนธรรมมอญ", desc:"จุดเริ่มต้นของเส้นทาง รวบรวมข้อมูลประวัติศาสตร์ เครื่องแต่งกาย และของใช้ในวิถีชีวิตมอญ เหมาะเป็นจุดปฐมนิเทศก่อนออกสำรวจชุมชน", dist:"จุดเริ่มต้นเส้นทาง", time:"ใช้เวลา 30–45 นาที", x:150, y:150 },
    1: { tag:"ศาสนสถานสำคัญ", title:"วัดคงคาราม", desc:"วัดมอญเก่าแก่ชื่อดังด้านจิตรกรรมฝาผนังพื้นหลังสีคราม ชมได้ทั้งแบบปกติและผ่านสื่อ AR/VR ในชุดสื่อที่ 5", dist:"ห่างจากจุดเริ่มต้น 2.4 กม.", time:"ใช้เวลา 1 ชม.", x:300, y:300 },
    2: { tag:"ชุมชนวิถีมอญ", title:"ชุมชนมอญบ้านม่วง", desc:"ชุมชนที่ยังคงพูดภาษามอญในชีวิตประจำวัน มีการสาธิตหัตถกรรมและอาหารพื้นถิ่นให้นักท่องเที่ยวได้สัมผัส", dist:"ห่างจากจุดเริ่มต้น 1.6 กม.", time:"ใช้เวลา 45 นาที", x:230, y:220 },
    3: { tag:"แหล่งภูมิปัญญา", title:"บ้านเนินหนองบัว", desc:"ต้นแบบภูมิปัญญาวิถีชาวนามอญ ตำบลเตาปูน จุดหมายของชุดสื่อที่ 4 ว่าด้วยการทำนาแบบดั้งเดิม", dist:"ห่างจากจุดเริ่มต้น 5.1 กม.", time:"ใช้เวลา 1 ชม.", x:430, y:190 },
    4: { tag:"วิถีการค้า", title:"ตลาดน้ำวัดโบสถ์", desc:"ตลาดริมน้ำที่ยังคงกลิ่นอายวิถีมอญ แหล่งชิมอาหารและขนมพื้นบ้านตามรอยชุดสื่อที่ 3", dist:"ห่างจากจุดเริ่มต้น 6.3 กม.", time:"ใช้เวลา 1 ชม.", x:500, y:370 },
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
      `}</style>

      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 36px', background:'rgba(247,243,232,0.86)', backdropFilter:'blur(10px)', borderBottom:'1px solid var(--line)'}}>
        <div style={{fontFamily:'Chonburi,cursive', fontSize:'20px', color:'var(--indigo-deep)', letterSpacing:'0.5px'}}>
          รามัญวิถี <span style={{color:'var(--clay)'}}>โพธาราม</span>
        </div>
        <ul style={{display:'flex', gap:'6px', listStyle:'none'}}>
          <li><a href="#map" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px', transition:'background .25s, color .25s'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>01</span>แผนที่</a></li>
          <li><a href="#heritage" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px', transition:'background .25s, color .25s'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>02</span>มรดก</a></li>
          <li><a href="#culinary" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px', transition:'background .25s, color .25s'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>03</span>รสชาติ</a></li>
          <li><a href="#wisdom" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px', transition:'background .25s, color .25s'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>04</span>ภูมิปัญญา</a></li>
          <li><a href="#mural" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px', transition:'background .25s, color .25s'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}><span style={{fontFamily:'Noto Serif Thai,serif', fontWeight:600, fontSize:'11px', opacity:0.55}}>05</span>จิตรกรรม</a></li>
          <li><a href="#about" style={{fontSize:'14px', padding:'8px 14px', borderRadius:'999px', color:'var(--indigo-deep)', display:'flex', alignItems:'center', gap:'6px', transition:'background .25s, color .25s'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background=''; e.target.style.color='var(--indigo-deep)'}}>เกี่ยวกับโครงการ</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header style={{minHeight:'100vh', position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', padding:'140px 8vw 80px', background:'linear-gradient(180deg, var(--paper) 0%, var(--plaster-warm) 100%)', overflow:'hidden'}}>
        <span style={{display:'inline-flex', alignItems:'center', gap:'10px', fontSize:'13px', letterSpacing:'2px', color:'var(--lacquer)', marginBottom:'22px', zIndex:2, position:'relative'}}>
          <span style={{content:'""', width:'26px', height:'1px', background:'var(--lacquer)', display:'inline-block'}}></span>
          อำเภอโพธาราม · จังหวัดราชบุรี
        </span>
        <h1 style={{fontSize:'clamp(40px, 6.4vw, 92px)', lineHeight:1.08, maxWidth:'15ch', zIndex:2, position:'relative', fontFamily:'Noto Serif Thai, serif', fontWeight:700, color:'var(--indigo-deep)', margin:0}}>
          สัมผัสลมหายใจ<br/><em style={{fontStyle:'normal', color:'var(--clay)'}}>รามัญ</em> แห่งแม่กลอง
        </h1>
        <p style={{maxWidth:'52ch', marginTop:'26px', fontSize:'18px', color:'#4a3f31', zIndex:2, position:'relative'}}>
          ชุดสื่อดิจิทัลผสมผสาน 5 รูปแบบ ที่พาคุณเดินตามรอยชุมชนมอญโพธาราม ตั้งแต่แผนที่นำทาง เรื่องเล่าประวัติศาสตร์ รสชาติอาหาร ภูมิปัญญาชาวนา ไปจนถึงจิตรกรรมฝาผนังที่มีชีวิตผ่านเทคโนโลยี AR/VR
        </p>

        <div style={{marginTop:'34px', display:'flex', gap:'28px', flexWrap:'wrap', zIndex:2, position:'relative'}}>
          <div style={{fontSize:'13px', color:'var(--indigo-deep)', opacity:0.7}}><b style={{display:'block', fontFamily:'Noto Serif Thai,serif', fontSize:'15px', opacity:1, marginBottom:'2px'}}>5</b>ชุดสื่อดิจิทัล</div>
          <div style={{fontSize:'13px', color:'var(--indigo-deep)', opacity:0.7}}><b style={{display:'block', fontFamily:'Noto Serif Thai,serif', fontSize:'15px', opacity:1, marginBottom:'2px'}}>3</b>ตำบลในพื้นที่ศึกษา</div>
          <div style={{fontSize:'13px', color:'var(--indigo-deep)', opacity:0.7}}><b style={{display:'block', fontFamily:'Noto Serif Thai,serif', fontSize:'15px', opacity:1, marginBottom:'2px'}}>1</b>เส้นทางเดียว เล่าเรื่องมอญ</div>
        </div>

        <div style={{marginTop:'44px', display:'flex', gap:'14px', flexWrap:'wrap', zIndex:2, position:'relative'}}>
          <a href="#map" style={{padding:'14px 28px', borderRadius:'999px', fontSize:'15px', fontWeight:600, cursor:'pointer', border:'1.5px solid var(--indigo-deep)', transition:'all .25s', display:'inline-flex', alignItems:'center', gap:'8px', background:'var(--indigo-deep)', color:'var(--paper)'}} onMouseEnter={(e)=>{e.target.style.background='var(--clay)'; e.target.style.borderColor='var(--clay)'}} onMouseLeave={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.borderColor='var(--indigo-deep)'}}>เริ่มออกเดินทาง</a>
          <a href="#mural" style={{padding:'14px 28px', borderRadius:'999px', fontSize:'15px', fontWeight:600, cursor:'pointer', border:'1.5px solid var(--indigo-deep)', transition:'all .25s', display:'inline-flex', alignItems:'center', gap:'8px', background:'transparent', color:'var(--indigo-deep)'}} onMouseEnter={(e)=>{e.target.style.background='var(--indigo-deep)'; e.target.style.color='var(--paper)'}} onMouseLeave={(e)=>{e.target.style.background='transparent'; e.target.style.color='var(--indigo-deep)'}}>ชมจิตรกรรม AR</a>
        </div>
      </header>

      {/* MAP SECTION */}
      <section id="map" style={{padding:'120px 8vw', position:'relative', background:'linear-gradient(180deg, var(--plaster-warm), var(--paper))'}}>
        <div style={{opacity:0, transform:'translateY(24px)', transition:'opacity .7s ease, transform .7s ease'}} className="reveal">
          <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px'}}>
            <span style={{fontFamily:'Noto Serif Thai,serif', fontSize:'13px', color:'var(--paper)', background:'var(--clay)', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>01</span>
            <span style={{fontSize:'13px', letterSpacing:'2px', color:'var(--clay)', textTransform:'uppercase'}}>Interactive Map</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,3.6vw,44px)', maxWidth:'16ch', fontFamily:'Noto Serif Thai, serif', fontWeight:700, color:'var(--indigo-deep)', margin:0}}>แผนที่เส้นทางท่องเที่ยววัฒนธรรมมอญ</h2>
          <p style={{maxWidth:'62ch', marginTop:'16px', color:'#4a3f31', fontSize:'16.5px'}}>แผนที่ดิจิทัลแบบปฏิสัมพันธ์ แตะหมุดหรือเลือกจากรายการ เพื่อสำรวจชุมชนมอญ วัดมอญ และศูนย์วัฒนธรรมพื้นถิ่น</p>
          <span style={{display:'inline-block', marginTop:'14px', fontSize:'12.5px', padding:'6px 14px', border:'1px solid var(--line)', borderRadius:'999px', color:'var(--indigo-deep)', opacity:0.75}}>ขอบเขตพื้นที่ศึกษา: อำเภอโพธาราม</span>
        </div>

        <div style={{marginTop:'56px', display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:'36px', alignItems:'start'}}>
          {/* Map Canvas */}
          <div style={{background:'var(--indigo)', borderRadius:'22px', padding:'22px', boxShadow:'var(--shadow)', position:'relative', overflow:'hidden'}}>
            <svg viewBox="0 0 640 460" id="mapSvg" style={{width:'100%', height:'auto', display:'block'}}>
              <text x="70" y="90" style={{fontFamily:'Sarabun,sans-serif', fontSize:'11px', fill:'rgba(237,227,208,0.32)', letterSpacing:'1px'}}>ต.คลองตาคต</text>
              <text x="470" y="130" style={{fontFamily:'Sarabun,sans-serif', fontSize:'11px', fill:'rgba(237,227,208,0.32)', letterSpacing:'1px'}}>ต.เตาปูน</text>
              <text x="270" y="410" style={{fontFamily:'Sarabun,sans-serif', fontSize:'11px', fill:'rgba(237,227,208,0.32)', letterSpacing:'1px'}}>ต.โพธาราม</text>

              {/* River */}
              <path d="M20 55 C 140 100, 118 178, 218 218 C 338 262, 328 336, 458 378 C 518 398, 558 416, 628 438" fill="none" stroke="#5F93A8" strokeWidth="14" strokeLinecap="round" opacity="0.55"/>
              <path d="M20 55 C 140 100, 118 178, 218 218 C 338 262, 328 336, 458 378 C 518 398, 558 416, 628 438" fill="none" stroke="#EDE3D0" strokeWidth="2" opacity="0.25"/>

              {/* Roads */}
              <path d="M60 380 C 150 300, 260 260, 340 180 C 400 120, 470 90, 580 50" fill="none" stroke="rgba(237,227,208,0.3)" strokeWidth="2.2" strokeLinecap="round"/>
              <path d="M120 60 C 200 140, 260 200, 300 300 C 320 350, 360 390, 420 420" fill="none" stroke="rgba(237,227,208,0.3)" strokeWidth="2.2" strokeLinecap="round"/>

              {/* Pins */}
              <g onClick={() => setSelectedId('0')} style={{cursor:'pointer'}}>
                <circle cx="150" cy="150" r="13" fill="none" stroke="rgba(237,227,208,0.1)" strokeWidth="1.4" opacity="0.6"/>
                <circle cx="150" cy="150" r="9" fill="none" stroke="var(--gold)" strokeWidth="2" opacity={selectedId === '0' ? 1 : 0}/>
                <circle cx="150" cy="150" r="6" fill="var(--plaster-warm)" stroke="var(--paper)" strokeWidth="2"/>
              </g>
              <text x="150" y="130" textAnchor="middle" style={{fontFamily:'Sarabun,sans-serif', fontSize:'9.5px', fill:'var(--gold)', opacity:0.9, pointerEvents:'none', fontWeight:700}}>① ศูนย์วัฒนธรรมมอญ · เริ่มที่นี่</text>

              {[1,2,3,4].map(id => {
                const p = mapData[id]
                return (
                  <g key={id} onClick={() => setSelectedId(String(id))} style={{cursor:'pointer'}} transform={`translate(${p.x},${p.y})`}>
                    <circle r="9" fill="none" stroke="var(--gold)" strokeWidth="2" opacity={selectedId === String(id) ? 1 : 0}/>
                    <circle r="8" fill="var(--clay-soft)" stroke="var(--paper)" strokeWidth="2" opacity="1"/>
                    <text textAnchor="middle" dominantBaseline="central" style={{fontFamily:'Sarabun,sans-serif', fontWeight:700, fontSize:'8.5px', fill:'var(--indigo-deep)', pointerEvents:'none'}}>{id+1}</text>
                  </g>
                )
              })}

              {/* Labels */}
              <text x="300" y="282" textAnchor="middle" style={{fontFamily:'Sarabun,sans-serif', fontSize:'9.5px', fill:'var(--plaster-warm)', opacity:0.9, pointerEvents:'none'}}>วัดคงคาราม</text>
              <text x="230" y="202" textAnchor="middle" style={{fontFamily:'Sarabun,sans-serif', fontSize:'9.5px', fill:'var(--plaster-warm)', opacity:0.9, pointerEvents:'none'}}>ชุมชนมอญบ้านม่วง</text>
              <text x="430" y="172" textAnchor="middle" style={{fontFamily:'Sarabun,sans-serif', fontSize:'9.5px', fill:'var(--plaster-warm)', opacity:0.9, pointerEvents:'none'}}>บ้านเนินหนองบัว</text>
              <text x="500" y="352" textAnchor="middle" style={{fontFamily:'Sarabun,sans-serif', fontSize:'9.5px', fill:'var(--plaster-warm)', opacity:0.9, pointerEvents:'none'}}>ตลาดน้ำวัดโบสถ์</text>
            </svg>
            <div style={{display:'flex', gap:'16px', marginTop:'16px', flexWrap:'wrap'}}>
              <span style={{fontSize:'11.5px', color:'var(--plaster-warm)', opacity:0.7, display:'flex', alignItems:'center', gap:'6px'}}><i style={{width:'8px', height:'8px', borderRadius:'50%', background:'var(--plaster-warm)', display:'inline-block'}}></i>จุดเริ่มต้นเส้นทาง</span>
              <span style={{fontSize:'11.5px', color:'var(--plaster-warm)', opacity:0.7, display:'flex', alignItems:'center', gap:'6px'}}><i style={{width:'8px', height:'8px', borderRadius:'50%', background:'var(--clay-soft)', display:'inline-block'}}></i>แตะหมุดเพื่อดูรายละเอียด</span>
            </div>
          </div>

          {/* Info Panel */}
          <div>
            <div style={{background:'var(--paper)', border:'1px solid var(--line)', borderRadius:'18px', padding:'28px', minHeight:'260px', display:'flex', flexDirection:'column', boxShadow:'var(--shadow)'}}>
              {currentData && (
                <>
                  <div style={{fontSize:'11.5px', letterSpacing:'1.5px', color:'var(--clay)', textTransform:'uppercase', marginBottom:'10px'}}>{currentData.tag}</div>
                  <h3 style={{fontSize:'22px', marginBottom:'10px', fontFamily:'Noto Serif Thai, serif', fontWeight:700, color:'var(--indigo-deep)'}}>{currentData.title}</h3>
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
                const badge = id === '0' ? '★' : (Number(id)+1)
                return (
                  <div key={id} onClick={() => setSelectedId(id)} style={{display:'flex', alignItems:'center', gap:'14px', padding:'13px 14px', borderRadius:'12px', cursor:'pointer', transition:'background .2s', background:selectedId === id ? 'var(--plaster-warm)' : 'transparent'}} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--plaster-warm)'} onMouseLeave={(e) => e.currentTarget.style.background = selectedId === id ? 'var(--plaster-warm)' : 'transparent'}>
                    <div style={{width:'26px', height:'26px', borderRadius:'50%', background:selectedId === id ? 'var(--clay)' : 'var(--indigo)', color:'var(--plaster-warm)', fontFamily:'Noto Serif Thai,serif', fontSize:'12px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'background .2s'}}>{badge}</div>
                    <div style={{flex:1, minWidth:0}}>
                      <h5 style={{fontFamily:'Noto Serif Thai,serif', fontSize:'14px', color:'var(--indigo-deep)', marginBottom:'2px', margin:0}}>{d.title}</h5>
                      <span style={{fontSize:'11.5px', color:'#7a6b57'}}>{d.tag}</span>
                    </div>
                    <div style={{fontSize:'11px', color:'var(--clay)', flexShrink:0, textAlign:'right', whiteSpace:'nowrap'}}>{d.dist.replace('ห่างจากจุดเริ่มต้น ','').replace('จุดเริ่มต้นเส้นทาง','เริ่มที่นี่')}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections placeholder */}
      <div style={{textAlign:'center', padding:'120px 8vw', color:'#999', opacity:0.5}}>
        <p>ส่วนอื่น ๆ: มรดก · รสชาติ · ภูมิปัญญา · จิตรกรรม AR/VR · เกี่ยวกับโครงการ (กำลังพัฒนา)</p>
      </div>

      <footer style={{padding:'60px 8vw 40px', background:'var(--indigo-deep)', color:'rgba(237,227,208,0.55)', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'20px', fontSize:'13px', borderTop:'1px solid rgba(237,227,208,0.08)'}}>
        <div>รามัญวิถี โพธาราม<br/><b style={{color:'var(--plaster-warm)', fontFamily:'Noto Serif Thai,serif', fontWeight:600}}>โครงการสื่อดิจิทัลเพื่อการท่องเที่ยวเชิงวัฒนธรรมมอญอย่างยั่งยืน</b></div>
        <div>พื้นที่ศึกษา: อำเภอโพธาราม จังหวัดราชบุรี<br/>ต้นแบบเว็บแอปพลิเคชัน</div>
      </footer>

      <script>{`
        const reveals = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => { if(e.isIntersecting){ e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
        }, { threshold:0.15 });
        reveals.forEach(el => io.observe(el));
      `}</script>
    </>
  )
}
