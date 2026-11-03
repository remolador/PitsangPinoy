// PitsangPinoy - one JavaScript file shared by every page.
// All pages share their data through localStorage (same browser).

// ===== DATA (shared by all pages) =====
const DATA = [
{month:"January", items:[
  {name:"Bag-ong Tuig / New Year's Day", date:"Jan 1", type:"holiday", desc:"Regular holiday that marks the start of the new year."},
  {name:"Feast of the Black Nazarene", date:"Jan 9", type:"tradition", desc:"Millions of devotees join the Traslacion procession in Quiapo, Manila."},
  {name:"Sinulog Festival", date:"3rd Sun", type:"festival", desc:"A grand parade and dance in Cebu in honor of the Santo Niño."},
  {name:"Ati-Atihan Festival", date:"3rd Sun", type:"festival", desc:"The 'mother of all festivals' in Kalibo, Aklan, full of colorful street dancing."},
  {name:"Dinagyang Festival", date:"4th Sun", type:"festival", desc:"Iloilo's tribal dance festival, also in honor of the Santo Niño."}
]},
{month:"February", items:[
  {name:"Chinese New Year", date:"Date varies", type:"holiday", desc:"Special non-working day celebrated by Chinese-Filipinos across the country."},
  {name:"EDSA People Power Anniversary", date:"Feb 25", type:"holiday", desc:"Commemorates the 1986 revolution that restored democracy."},
  {name:"Panagbenga Flower Festival", date:"All month", type:"festival", desc:"Baguio City's month-long flower festival with a grand float parade."}
]},
{month:"March / April", items:[
  {name:"Maundy Thursday", date:"Date varies", type:"holiday", desc:"Start of the Holy Week observance nationwide."},
  {name:"Good Friday", date:"Date varies", type:"holiday", desc:"Regular holiday for the Passion and Death of Christ."},
  {name:"Black Saturday", date:"Date varies", type:"holiday", desc:"Special non-working day marking the end of the Holy Week observance."},
  {name:"Araw ng Kagitingan", date:"Apr 9", type:"holiday", desc:"Day of Valor, in memory of the Bataan Death March and the heroes of war."},
  {name:"Moriones Festival", date:"Holy Week", type:"festival", desc:"Marinduque's costumed reenactment of the story of Longinus."},
  {name:"Visita Iglesia", date:"Maundy Thursday", type:"tradition", desc:"Visiting seven churches to pray and follow the Stations of the Cross."},
  {name:"Pabasa", date:"Holy Week", type:"tradition", desc:"The sung reading of the Passion of Christ over many hours or days."},
  {name:"Salubong", date:"Easter Sunday", type:"tradition", desc:"Dawn reenactment of the meeting of Mary and the risen Christ."}
]},
{month:"May", items:[
  {name:"Araw ng Manggagawa / Labor Day", date:"May 1", type:"holiday", desc:"Regular holiday honoring workers."},
  {name:"Flores de Mayo & Santacruzan", date:"All month", type:"tradition", desc:"Daily flower offerings to the Virgin Mary, ending with the Santacruzan pageant."},
  {name:"Pahiyas Festival", date:"May 15", type:"festival", desc:"Lucban, Quezon decorates its houses with harvest produce and kiping."}
]},
{month:"June", items:[
  {name:"Araw ng Kalayaan / Independence Day", date:"Jun 12", type:"holiday", desc:"Commemorates the declaration of Philippine independence from Spain."}
]},
{month:"August", items:[
  {name:"Ninoy Aquino Day", date:"Aug 21", type:"holiday", desc:"Special non-working day remembering the assassination of Senator Ninoy Aquino."},
  {name:"National Heroes Day", date:"Last Monday", type:"holiday", desc:"Regular holiday honoring all Philippine heroes."},
  {name:"Kadayawan Festival", date:"3rd week", type:"festival", desc:"Davao City's harvest festival, giving thanks for abundant harvests and culture."}
]},
{month:"October", items:[
  {name:"MassKara Festival", date:"3rd week", type:"festival", desc:"Bacolod's 'Smile City' festival, full of smiling masks and color."}
]},
{month:"November", items:[
  {name:"Araw ng mga Santo / All Saints' Day", date:"Nov 1", type:"holiday", desc:"Special non-working day for visiting the graves of loved ones."},
  {name:"Araw ng mga Kaluluwa / All Souls' Day", date:"Nov 2", type:"holiday", desc:"A continuation of Undas, remembering the departed."},
  {name:"Bonifacio Day", date:"Nov 30", type:"holiday", desc:"Regular holiday, the birthday of Andres Bonifacio."},
  {name:"Higantes Festival", date:"Nov 22-23", type:"festival", desc:"Angono, Rizal parades giant papier-mâché figures through the streets."},
  {name:"Undas", date:"Nov 1-2", type:"tradition", desc:"Families gather, clean, and stay at the cemetery to remember the departed."}
]},
{month:"December", items:[
  {name:"Feast of the Immaculate Conception", date:"Dec 8", type:"holiday", desc:"A religious special non-working day."},
  {name:"Simbang Gabi", date:"Dec 16-24", type:"tradition", desc:"Nine dawn masses leading up to Christmas."},
  {name:"Giant Lantern Festival", date:"Mid-Dec", type:"festival", desc:"San Fernando, Pampanga, the 'Christmas Capital of the Philippines,' shows off giant parols."},
  {name:"Bisperas ng Pasko / Christmas Eve", date:"Dec 24", type:"holiday", desc:"Special non-working day with the Noche Buena feast at midnight."},
  {name:"Araw ng Pasko / Christmas Day", date:"Dec 25", type:"holiday", desc:"Regular holiday and the biggest celebration in the Philippines."},
  {name:"Araw ni Rizal / Rizal Day", date:"Dec 30", type:"holiday", desc:"Regular holiday remembering the death of Dr. Jose Rizal."},
  {name:"Bisperas ng Bagong Taon", date:"Dec 31", type:"tradition", desc:"Media Noche, a midnight dinner to welcome the new year."}
]},
{month:"Anytime (Life-Cycle)", items:[
  {name:"Binyag (Baptism)", date:"—", type:"tradition", desc:"Followed by a family celebration after the ceremony at church."},
  {name:"Debut", date:"—", type:"tradition", desc:"A girl's 18th birthday, with the tradition of 18 roses and 18 candles."},
  {name:"Kasal (Wedding)", date:"—", type:"tradition", desc:"A Catholic wedding includes the veil, cord (yugal), and coin (arrhae) ceremonies."},
  {name:"Pamamanhikan", date:"—", type:"tradition", desc:"A formal visit by the groom's family to ask for the bride's hand."},
  {name:"Lamay at Pasiyam", date:"—", type:"tradition", desc:"A multi-day wake, followed by nine days of prayer after a death."},
  {name:"Fiesta sa Barangay", date:"—", type:"tradition", desc:"Every town or barangay celebrates its own patron saint's feast day during the year."},
  {name:"Bayanihan", date:"—", type:"tradition", desc:"The spirit of community cooperation, from the tradition of carrying a house to a new site."}
]}
];

// ===== STORAGE (shared by every page) =====
const KEY_EVENTS  = 'pp_events';    // events added by the admin / approved requests
const KEY_DELETED = 'pp_deleted';   // built-in items deleted on the Homepage
const KEY_STARS   = 'pp_stars';     // starred items
const KEY_USERS   = 'pp_users';     // accounts
const KEY_SESSION = 'pp_session';   // who is logged in
const KEY_REQ     = 'pp_requests';  // user requests
const KEY_PICS    = 'pp_pics';      // pictures for built-in events
const PAGE = [...document.body.classList].find(c => c.startsWith('page-')) || '';
const $ = id => document.getElementById(id);

function load(key, fallback){
  try{ const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
  catch(e){ return fallback; }
}
function save(key, value){
  try{ localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch(e){ toast('Browser storage is full. Use a smaller picture.', true); return false; }
}
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function itemKey(item){ return item.name + '|' + item.date; }
function typeLabel(t){ return t === 'holiday' ? 'Holiday' : t === 'festival' ? 'Festival' : 'Tradition'; }

function toast(msg, err, ms){
  let t = $('toast');
  if(!t){ t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'on' + (err ? ' err' : '');
  clearTimeout(t.h);
  t.h = setTimeout(() => { t.className = ''; }, ms || 2800);
}

// ===== ACCOUNTS =====
function getUsers(){
  let u = load(KEY_USERS, null);
  if(!u){
    u = [
      {u:'admin', p:'admin123', role:'admin', email:'admin@pitsangpinoy.ph'},
      {u:'user',  p:'user123',  role:'user',  email:'user@pitsangpinoy.ph'}
    ];
    save(KEY_USERS, u);
  }
  return u;
}
function currentUser(){
  const s = load(KEY_SESSION, null);
  return s ? (getUsers().find(x => x.u === s) || null) : null;
}
function logout(){
  localStorage.removeItem(KEY_SESSION);
  try{ sessionStorage.removeItem('pp_ann'); }catch(e){}
  location.href = 'LOGIN.html';
}
function confirmLogout(){
  openModal(`<div class="md-body">
    <h2>Log out?</h2>
    <p>Are you sure you want to log out of PitsangPinoy?</p>
    <div class="md-act" style="gap:8px"><button class="act-btn gh" onclick="closeModal()">Cancel</button><button class="act-btn red" onclick="logout()">Yes, log out</button></div>
  </div>`);
}
const ME = currentUser();
if(!ME && PAGE !== 'page-login'){ location.replace('LOGIN.html'); }

// ===== DATES (for notifications) =====
const MON = {ene:0, peb:1, mar:2, abr:3, may:4, hun:5, hul:6, ago:7, set:8, okt:9, nob:10, dis:11,
             jan:0, feb:1, apr:3, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11};
const WD  = {sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6};
const MONTH_RE = /\b(ene|peb|mar|abr|may|hun|hul|ago|set|okt|nob|dis|jan|feb|apr|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+(\d{1,2})/;
function monthOfGroup(g){ const k = String(g || '').toLowerCase().slice(0, 3); return k in MON ? MON[k] : null; }
function today(){ const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }

function parseWhen(txt, gm, year){
  const t = String(txt || '').toLowerCase();
  let m = t.match(/(\d{4})-(\d{2})-(\d{2})/);
  if(m) return new Date(year, +m[2] - 1, +m[3]);
  m = t.match(MONTH_RE);
  if(m) return new Date(year, MON[m[1]], +m[2]);
  if(gm == null) return null;
  m = t.match(/(\d)(?:st|nd|rd|th)\s+(sun|mon|tue|wed|thu|fri|sat)/);
  if(m){
    const off = (WD[m[2]] - new Date(year, gm, 1).getDay() + 7) % 7;
    return new Date(year, gm, 1 + off + (+m[1] - 1) * 7);
  }
  if(/(huling|last)\s+(lunes|monday)/.test(t)){
    const last = new Date(year, gm + 1, 0);
    return new Date(year, gm, last.getDate() - ((last.getDay() - 1 + 7) % 7));
  }
  m = t.match(/(\d)(?:st|nd|rd|th)\s+week/);
  if(m) return new Date(year, gm, (+m[1] - 1) * 7 + 1);
  if(/(buong buwan|all month)/.test(t)) return new Date(year, gm, 1);
  if(/\b(kalagitnaan|mid)\b/.test(t)) return new Date(year, gm, 15);
  return null;
}
function nextOcc(text, gm){
  const t = today();
  for(const y of [t.getFullYear(), t.getFullYear() + 1]){
    const d = parseWhen(text, gm, y);
    if(d && d >= t) return {date:d, diff:Math.round((d - t) / 864e5)};
  }
  return null;
}
function whenLabel(diff){ return diff === 0 ? 'Today!' : diff === 1 ? 'Tomorrow!' : 'In ' + diff + ' days'; }

// ===== EVENTS =====
function getCustomEvents(){ return load(KEY_EVENTS, []); }

// All groups: built-in DATA (minus deleted items) + events added from the Dashboard
function getGroups(){
  const deleted = load(KEY_DELETED, []);
  const groups = DATA.map(g => ({
    month: g.month,
    items: g.items.filter(i => !deleted.includes(itemKey(i))).map(i => ({...i, gm: monthOfGroup(g.month)}))
  }));
  const custom = getCustomEvents().map(e => ({
    id: e.id, custom: true,
    name: e.name, date: e.when, type: e.type,
    desc: e.desc || 'Newly added celebration.',
    img: e.img || '', remind: e.remind || 7, gm: e.gm == null ? null : e.gm
  }));
  if(custom.length) groups.unshift({ month: 'Your Additions', items: custom });
  return groups;
}
function withOcc(){
  const out = [];
  getGroups().forEach(g => {
    g.items.forEach(i => {
      const o = nextOcc(i.date, i.gm);
      if(o) out.push({...i, remind: i.remind || 7, diff: o.diff});
    });
  });
  return out.sort((a, b) => a.diff - b.diff);
}
function getStars(){
  let stars = load(KEY_STARS, null);
  if(stars === null){
    const defaults = ['Sinulog Festival', 'Simbang Gabi', 'Undas'];
    stars = [];
    DATA.forEach(g => g.items.forEach(i => { if(defaults.includes(i.name)) stars.push(itemKey(i)); }));
    save(KEY_STARS, stars);
  }
  return stars;
}

// ===== PICTURE =====
const EMO = [
  [/pasko|christmas/i,'🎄'], [/bagong taon|new year/i,'🎆'], [/undas|santo|kaluluwa/i,'🕯️'],
  [/simbang/i,'⛪'], [/flower|flores|panagbenga|pahiyas/i,'🌸'], [/mask|moriones|higantes/i,'🎭'],
  [/lantern|parol/i,'🏮'], [/friday|maundy|saturday|visita|pabasa|salubong/i,'✝️'],
  [/labor|manggagawa/i,'🛠️'], [/kasal|wedding/i,'💍'], [/binyag/i,'👶'], [/debut/i,'🌹'],
  [/sinulog|dinagyang|ati-atihan/i,'💃'], [/kadayawan/i,'🌺'], [/chinese/i,'🧧'], [/immaculate|nazarene|feast/i,'⛪'],
  [/rizal/i,'🖋️'], [/bonifacio|kagitingan/i,'⚔️'], [/kalayaan|independence|heroes|edsa|aquino/i,'🎌']
];
function emojiFor(i){
  for(const [r, e] of EMO) if(r.test(i.name)) return e;
  return i.type === 'holiday' ? '🎌' : i.type === 'festival' ? '🎊' : '🕯️';
}
function getPic(i){ return i.img || load(KEY_PICS, {})[itemKey(i)] || ''; }
const MABB = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
function dateBadge(i){
  const o = i.date ? nextOcc(i.date, i.gm == null ? null : i.gm) : null;
  return o ? `<span class="thumb-m ${i.type}">${MABB[o.date.getMonth()]}<b>${o.date.getDate()}</b></span>` : '';
}
function thumb(i){
  const p = getPic(i);
  return `<div class="thumb ${i.type}"${p ? ` style="background-image:url('${p}')"` : ''}>${p ? '' : emojiFor(i)}${dateBadge(i)}</div>`;
}
function readImg(file, cb){
  const r = new FileReader();
  r.onload = () => {
    const im = new Image();
    im.onload = () => {
      const k = Math.min(1, 480 / im.width), c = document.createElement('canvas');
      c.width = Math.round(im.width * k); c.height = Math.round(im.height * k);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      cb(c.toDataURL('image/jpeg', .75));
    };
    im.onerror = () => toast('Could not read the picture.', true);
    im.src = r.result;
  };
  r.readAsDataURL(file);
}

const RANGE_RE = /\b(?:ene|peb|mar|abr|may|hun|hul|ago|set|okt|nob|dis|jan|feb|apr|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+(\d{1,2})\s*[-–]\s*(\d{1,2})/;
function daysOf(txt, gm, year){
  const d = parseWhen(txt, gm, year);
  if(!d) return [];
  const out = [d], r = String(txt).toLowerCase().match(RANGE_RE);
  if(r && +r[2] > +r[1]){
    for(let k = +r[1] + 1; k <= +r[2]; k++){
      const x = new Date(year, d.getMonth(), k);
      if(x.getMonth() === d.getMonth()) out.push(x);
    }
  }
  return out;
}

// ===== POPUP (event details) =====
function openModal(html){
  let m = $('mo');
  if(!m){
    m = document.createElement('div'); m.id = 'mo';
    m.addEventListener('click', e => { if(e.target.id === 'mo') closeModal(); });
    document.body.appendChild(m);
  }
  m.innerHTML = `<div class="md">${html}</div>`;
  m.classList.add('on');
}
function closeModal(){ const m = $('mo'); if(m) m.classList.remove('on'); }
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
function openDetail(item){
  const o = nextOcc(item.date, item.gm), p = getPic(item);
  openModal(`<div class="md-pic ${item.type}"${p ? ` style="background-image:url('${p}')"` : ''}>${p ? '' : emojiFor(item)}</div>
    <div class="md-body">
      <span class="tag ${item.type}" style="margin:0">${typeLabel(item.type)}</span>
      <h2>${esc(item.name)}</h2>
      <p class="md-date">📅 ${esc(item.date)}${o ? ' · ' + whenLabel(o.diff) : ''}</p>
      <p>${esc(item.desc)}</p>
      ${o ? `<p>⏰ Reminder: ${item.remind || 7} days before</p>` : '<p>No fixed date; it changes every year.</p>'}
      <div class="md-act"><button class="act-btn ok" onclick="closeModal()">Sira</button></div>
    </div>`);
}

// ===== NAVBAR + ALERTS =====
function browserNotify(msg){
  if('Notification' in window && Notification.permission === 'granted'){
    try{ new Notification('PitsangPinoy', {body: msg}); }catch(e){}
  }
}
function buildNav(){
  const nl = document.querySelector('.nav-links');
  if(!nl) return;
  const file = location.pathname.split('/').pop().toUpperCase();
  const n = withOcc().filter(i => i.diff <= 7).length;
  const links = [['HOMEPAGE.html','Homepage'], ['NOTIFICATIONS.html','Notifications'], ['REQUEST.html','Request an Event'], ['DASHBOARD.html','Dashboard']];
  nl.innerHTML = links.map(([h, t]) =>
    `<a href="${h}"${h.toUpperCase() === file ? ' class="active"' : ''}>${t}${h === 'NOTIFICATIONS.html' && n ? `<span class="badge">${n}</span>` : ''}</a>`
  ).join('') + `<span class="who">👤 ${esc(ME.u)} · ${ME.role === 'admin' ? 'Admin' : 'User'}</span><a href="#" id="logoutBtn">Log out</a>`;
  $('logoutBtn').addEventListener('click', e => { e.preventDefault(); confirmLogout(); });
}
function announce(){
  try{ if(sessionStorage.getItem('pp_ann')) return; sessionStorage.setItem('pp_ann', '1'); }catch(e){}
  const s = withOcc().filter(i => i.diff <= 1);
  if(!s.length) return;
  const msg = '🔔 ' + s.map(i => i.name + (i.diff ? ' (tomorrow)' : ' (today)')).join(' · ');
  setTimeout(() => toast(msg, false, 7000), 400);
  browserNotify(msg);
}
if(ME){ buildNav(); announce(); }

// ===== LOGIN (LOGIN.html) =====
if (PAGE === 'page-login') {
  if(ME) location.replace('HOMEPAGE.html');
  const show = reg => {
    $('loginForm').hidden = reg; $('regForm').hidden = !reg;
    $('tabIn').classList.toggle('on', !reg); $('tabUp').classList.toggle('on', reg);
    $('lgErr').textContent = ''; $('rgErr').textContent = '';
  };
  $('tabIn').addEventListener('click', () => show(false));
  $('tabUp').addEventListener('click', () => show(true));

  $('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const x = getUsers().find(a => a.u === $('lgU').value.trim() && a.p === $('lgP').value);
    if(!x){ $('lgErr').textContent = 'Incorrect username or password.'; return; }
    save(KEY_SESSION, x.u);
    location.href = 'HOMEPAGE.html';
  });

  $('regForm').addEventListener('submit', e => {
    e.preventDefault();
    const u = $('rgU').value.trim(), m = $('rgE').value.trim(), p = $('rgP').value, p2 = $('rgP2').value, er = $('rgErr');
    if(u.length < 3){ er.textContent = 'Username must be at least 3 characters.'; return; }
    if(!/^\S+@\S+\.\S+$/.test(m)){ er.textContent = 'Invalid email address.'; return; }
    if(p.length < 6){ er.textContent = 'Password must be at least 6 characters.'; return; }
    if(p !== p2){ er.textContent = 'Passwords do not match.'; return; }
    const list = getUsers();
    if(list.some(a => a.u.toLowerCase() === u.toLowerCase())){ er.textContent = 'Username is already taken.'; return; }
    list.push({u, p, role:'user', email:m});
    save(KEY_USERS, list); save(KEY_SESSION, u);
    location.href = 'HOMEPAGE.html';
  });
}

// ===== HOMEPAGE (HOMEPAGE.html) =====
if (PAGE === 'page-home' && ME) {
  const mainList = $('mainList');
  const isAdmin = ME.role === 'admin';
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DN = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let activeFilter = 'all', query = '', view = 'list', sel = null;
  let cy = new Date().getFullYear(), cm = new Date().getMonth();

  const matches = item =>
    (activeFilter === 'all' || item.type === activeFilter) &&
    (query === '' || item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query));

  function makeCard(item){
    const starred = getStars().includes(itemKey(item));
    const o = nextOcc(item.date, item.gm);
    const soon = o && o.diff <= 7 ? `<span class="soon">${whenLabel(o.diff)}</span>` : '';
    const card = document.createElement('div');
    card.className = `card ${item.type}`;
    card.innerHTML = `
      ${thumb(item)}
      <div class="card-main">
        <div class="card-name">${esc(item.name)}${soon}</div>
        <div class="card-desc">${esc(item.desc)}</div>
        <span class="tag ${item.type}">${typeLabel(item.type)}</span>
      </div>
      <div class="card-side">
        <div class="card-date">${esc(item.date)}</div>
        <button class="star-btn${starred ? ' on' : ''}" aria-label="Star" aria-pressed="${starred}">${starred ? '★' : '☆'}</button>
        ${isAdmin ? '<button class="pic-btn" aria-label="Add a picture" title="Add a picture">📷</button><button class="del-btn" aria-label="Delete">✕</button>' : ''}
      </div>
    `;

    card.querySelector('.card-main').addEventListener('click', () => openDetail(item));
    card.querySelector('.thumb').addEventListener('click', () => openDetail(item));

    card.querySelector('.star-btn').addEventListener('click', () => {
      const cur = getStars();
      const k = itemKey(item);
      save(KEY_STARS, cur.includes(k) ? cur.filter(x => x !== k) : [...cur, k]);
      render();
    });

    const del = card.querySelector('.del-btn');
    if(del) del.addEventListener('click', () => {
      if(!confirm('Are you sure you want to delete this? The data for this month may become incomplete or wrong once it is deleted.')) return;
      if(item.custom){
        save(KEY_EVENTS, getCustomEvents().filter(e => e.id !== item.id));
      }else{
        save(KEY_DELETED, [...load(KEY_DELETED, []), itemKey(item)]);
      }
      save(KEY_STARS, getStars().filter(x => x !== itemKey(item)));
      toast('Celebration deleted.');
      render();
    });

    const pb = card.querySelector('.pic-btn');
    if(pb) pb.addEventListener('click', () => {
      const inp = document.createElement('input');
      inp.type = 'file'; inp.accept = 'image/*';
      inp.onchange = () => {
        const f = inp.files[0];
        if(!f) return;
        readImg(f, d => {
          if(item.custom){
            save(KEY_EVENTS, getCustomEvents().map(e => e.id === item.id ? {...e, img:d} : e));
          }else{
            const p = load(KEY_PICS, {}); p[itemKey(item)] = d; save(KEY_PICS, p);
          }
          toast('Picture saved!');
          render();
        });
      };
      inp.click();
    });
    return card;
  }

  function renderList(){
    mainList.innerHTML = '';
    let totalShown = 0;
    getGroups().forEach(group => {
      const items = group.items.filter(matches);
      if(items.length === 0) return;
      totalShown += items.length;
      const section = document.createElement('div');
      section.className = 'month-group';
      const title = document.createElement('div');
      title.className = 'month-title';
      title.innerHTML = `${esc(group.month)} <span class="count">${items.length} item${items.length>1?'s':''}</span>`;
      section.appendChild(title);
      items.forEach(item => section.appendChild(makeCard(item)));
      mainList.appendChild(section);
    });
    if(totalShown === 0){
      mainList.innerHTML = '<div class="empty">No results match your search.</div>';
    }
  }

  function renderCal(){
    const td = today(), first = new Date(cy, cm, 1).getDay(), n = new Date(cy, cm + 1, 0).getDate(), byDay = {};
    getGroups().forEach(g => g.items.forEach(item => {
      if(!matches(item)) return;
      daysOf(item.date, item.gm, cy).forEach(d => {
        if(d.getMonth() === cm) (byDay[d.getDate()] = byDay[d.getDate()] || []).push(item);
      });
    }));
    let h = `<div class="cal-head"><button class="chip" data-nav="-1" aria-label="Previous month">◀</button><div class="cal-title">${MONTHS[cm]} ${cy}</div><button class="chip" data-nav="1" aria-label="Next month">▶</button><button class="chip" data-nav="0">Today</button></div><div class="cal-grid">`
      + DN.map(d => `<div class="cal-dh">${d}</div>`).join('') + '<div></div>'.repeat(first);
    for(let d = 1; d <= n; d++){
      const es = byDay[d] || [];
      const isT = td.getFullYear() === cy && td.getMonth() === cm && td.getDate() === d;
      h += `<button class="cal-day${isT ? ' today' : ''}${sel === d ? ' sel' : ''}" data-day="${d}" aria-label="${MONTHS[cm]} ${d}, ${es.length} celebration(s)"><span>${d}</span><span class="cal-dots">${es.slice(0, 4).map(e => `<i class="cal-dot ${e.type}"></i>`).join('')}</span></button>`;
    }
    h += '</div><div class="cal-legend"><span><i class="cal-dot holiday"></i>Holiday</span><span><i class="cal-dot festival"></i>Festival</span><span><i class="cal-dot tradition"></i>Tradition</span><span>· Celebrations without a fixed date appear in the List view.</span></div>';
    mainList.innerHTML = h;

    let list = [];
    if(sel){ list = byDay[sel] || []; }
    else{
      const seen = new Set();
      Object.keys(byDay).map(Number).sort((a, b) => a - b).forEach(d => byDay[d].forEach(i => {
        if(!seen.has(itemKey(i))){ seen.add(itemKey(i)); list.push(i); }
      }));
    }
    const section = document.createElement('div');
    section.className = 'month-group';
    section.innerHTML = `<div class="month-title">${sel ? MONTHS[cm] + ' ' + sel : 'Celebrations in ' + MONTHS[cm]} <span class="count">${list.length} item${list.length === 1 ? '' : 's'}</span></div>`;
    if(list.length) list.forEach(i => section.appendChild(makeCard(i)));
    else section.insertAdjacentHTML('beforeend', '<div class="empty" style="padding:30px">No celebrations on this day.</div>');
    mainList.appendChild(section);
  }

  function render(){ view === 'cal' ? renderCal() : renderList(); }

  mainList.addEventListener('click', e => {
    const b = e.target.closest('[data-nav],[data-day]');
    if(!b) return;
    if(b.dataset.nav !== undefined){
      const v = +b.dataset.nav;
      if(v === 0){ const t = new Date(); cy = t.getFullYear(); cm = t.getMonth(); }
      else{ cm += v; if(cm < 0){ cm = 11; cy--; } if(cm > 11){ cm = 0; cy++; } }
      sel = null;
    }else{
      sel = sel === +b.dataset.day ? null : +b.dataset.day;
    }
    render();
  });

  $('viewRow').addEventListener('click', e => {
    const b = e.target.closest('[data-view]');
    if(!b) return;
    view = b.dataset.view; sel = null;
    $('viewRow').querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === b));
    render();
  });

  $('chipRow').addEventListener('click', (e) => {
    if(e.target.classList.contains('chip')){
      $('chipRow').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.dataset.filter;
      render();
    }
  });

  $('searchInput').addEventListener('input', (e) => {
    query = e.target.value.toLowerCase().trim();
    render();
  });

  window.addEventListener('storage', render);
  render();
}

// ===== NOTIFICATIONS (NOTIFICATIONS.html) =====
if (PAGE === 'page-notif' && ME) {
  const G = [
    ['🔴 Today', x => x.diff === 0],
    ['🟠 This Week (within 7 days)', x => x.diff > 0 && x.diff <= 7],
    ['🟡 This Month (within 30 days)', x => x.diff > 7 && x.diff <= 30],
    ['🔵 Later', x => x.diff > 30]
  ];
  const list = withOcc();
  $('notifList').innerHTML = G.map(([title, f]) => {
    const l = list.filter(f);
    return `<div class="month-group"><div class="month-title">${title} <span class="count">${l.length} item${l.length === 1 ? '' : 's'}</span></div>` +
      (l.length ? l.map(i => `
        <div class="card ${i.type}" data-i="${list.indexOf(i)}">
          ${thumb(i)}
          <div class="card-main">
            <div class="card-name">${esc(i.name)}${i.diff <= i.remind ? ' ⏰' : ''}</div>
            <div class="card-desc">${esc(i.desc)}</div>
            <span class="tag ${i.type}">${typeLabel(i.type)}</span>
          </div>
          <div class="card-side"><div class="card-date">${whenLabel(i.diff)}<br>${esc(i.date)}</div></div>
        </div>`).join('') : '<div class="empty" style="padding:22px">No celebrations in this category.</div>') + '</div>';
  }).join('');

  $('notifList').addEventListener('click', e => { const c = e.target.closest('.card'); if(c) openDetail(list[+c.dataset.i]); });

  $('notifBtn').addEventListener('click', () => {
    if(!('Notification' in window)){ toast('Your browser does not support notifications.', true); return; }
    Notification.requestPermission().then(p => {
      if(p === 'granted'){
        toast('Browser notifications are on!');
        const s = list.filter(i => i.diff <= 1);
        if(s.length) browserNotify(s.map(i => i.name + (i.diff ? ' (tomorrow)' : ' (today)')).join(' · '));
      }else toast('Notifications were not allowed.', true);
    });
  });
}

// ===== REQUEST (REQUEST.html) =====
if (PAGE === 'page-request' && ME) {
  function renderMine(){
    const l = load(KEY_REQ, []).filter(r => r.by === ME.u).reverse();
    $('myReq').innerHTML = l.length ? l.map(r => `
      <div class="card ${r.type}">
        ${thumb({name:r.name, type:r.type, img:r.img, date:r.when})}
        <div class="card-main">
          <div class="card-name">${esc(r.name)}</div>
          <div class="card-desc">${esc(r.desc)}</div>
          <span class="tag ${r.type}">${typeLabel(r.type)}</span>
        </div>
        <div class="card-side"><div class="card-date">${esc(r.when)}</div><span class="status ${r.status}">${r.status}</span>${r.status === 'Pending' ? `<button type="button" class="act-btn no cancel-req" data-cancel="${r.id}">Cancel</button>` : ''}</div>
      </div>`).join('') : '<div class="empty" style="padding:30px">You have not sent any requests yet.</div>';
  }

  // Cancel button: the user can cancel only their OWN request while it is still Pending
  $('myReq').addEventListener('click', e => {
    const id = e.target.dataset.cancel;
    if(!id) return;
    if(!confirm('Are you sure you want to cancel this request? The admin will no longer be able to approve it.')) return;
    const l = load(KEY_REQ, []);
    const r = l.find(x => x.id === +id && x.by === ME.u);
    if(!r) return;
    if(r.status !== 'Pending'){
      toast('This request can no longer be cancelled (it is already ' + r.status.toLowerCase() + ').', true);
      renderMine();
      return;
    }
    r.status = 'Cancelled';
    save(KEY_REQ, l);
    toast('Request cancelled.');
    renderMine();
  });

  // Refresh when the admin approves/rejects from another tab
  window.addEventListener('storage', renderMine);

  $('reqForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('rqName').value.trim(), when = $('rqWhen').value.trim(), desc = $('rqDesc').value.trim(), type = $('rqType').value;
    if(name.length < 3){ toast('Celebration name must be at least 3 characters.', true); return; }
    if(!parseWhen(when, null, 2000)){ toast("Could not read the date. Use a format like 'March 15'.", true); return; }
    if(desc.length < 10){ toast('Description is too short (at least 10 characters).', true); return; }
    const send = img => {
      const l = load(KEY_REQ, []);
      l.push({id:Date.now(), by:ME.u, email:ME.email, name, type, when, desc, img:img || '', status:'Pending'});
      if(save(KEY_REQ, l)){
        $('reqForm').reset();
        toast('Request sent! Please wait for the admin to approve it.');
        renderMine();
      }
    };
    const f = $('rqPic').files[0];
    f ? readImg(f, send) : send('');
  });
  renderMine();
}

// ===== DASHBOARD (DASHBOARD.html) =====
if (PAGE === 'page-dashboard' && ME) {
  const isAdmin = ME.role === 'admin';
  const STAR_SVG = '<svg class="fav-star" width="16" height="16" viewBox="0 0 24 24" fill="#D9A441"><polygon points="12,2 15,9 22,9.5 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9.5 9,9"/></svg>';
  let edit = null;   // {key, id, gm, when} while editing

  $('hello').textContent = ME.u;
  document.querySelectorAll('[data-role="admin"]').forEach(el => { el.hidden = !isAdmin; });
  document.querySelectorAll('[data-role="user"]').forEach(el => { el.hidden = isAdmin; });

  function findByKey(k){
    for(const g of getGroups()) for(const i of g.items) if(itemKey(i) === k) return i;
    return null;
  }

  function renderStats(){
    const count = {holiday:0, festival:0, tradition:0};
    getGroups().forEach(g => g.items.forEach(i => { if(i.type in count) count[i.type]++; }));
    $('statHoliday').textContent   = count.holiday;
    $('statFestival').textContent  = count.festival;
    $('statTradition').textContent = count.tradition;
  }

  function renderUpcoming(){
    const l = withOcc().slice(0, 5);
    $('upList').innerHTML = l.length ? l.map(i => `
      <div class="up-card ${i.type === 'festival' ? '' : i.type}">
        ${thumb(i)}
        <div class="up-main">
          <div class="up-name">${esc(i.name)}</div>
          <div class="up-desc">${esc(i.desc)}</div>
        </div>
        <div class="up-when">${whenLabel(i.diff)}<br>${esc(i.date)}</div>
      </div>`).join('') : '<div class="fav-empty">No upcoming celebrations with a fixed date.</div>';
  }

  function renderFavs(){
    const grid = $('favGrid');
    const stars = getStars();
    const items = [];
    getGroups().forEach(g => g.items.forEach(i => { if(stars.includes(itemKey(i))) items.push(i); }));
    if(items.length === 0){
      grid.innerHTML = '<div class="fav-empty">Nothing starred yet. Go to the Homepage and tap ☆.</div>';
      return;
    }
    grid.innerHTML = items.map(i => `
      <div class="fav-card">
        ${STAR_SVG}
        <div class="fav-name">${esc(i.name)}</div>
        <span class="fav-tag ${i.type}">${typeLabel(i.type)}</span>
      </div>`).join('');
  }

  function renderReq(){
    const l = load(KEY_REQ, []).slice().reverse();
    const p = l.filter(r => r.status === 'Pending').length;
    $('reqCount').textContent = p ? `(${p} pending)` : '';
    $('reqList').innerHTML = l.length ? l.map(r => `
      <div class="up-card ${r.type === 'festival' ? '' : r.type}">
        ${thumb({name:r.name, type:r.type, img:r.img, date:r.when})}
        <div class="up-main">
          <div class="up-name">${esc(r.name)} <span class="status ${r.status}">${r.status}</span></div>
          <div class="up-desc">${esc(r.when)} · ${typeLabel(r.type)} · from ${esc(r.by)} (${esc(r.email)})<br>${esc(r.desc)}</div>
        </div>
        ${r.status === 'Pending' ? `<div class="row-act"><button class="act-btn ok" data-ok="${r.id}">✔ Approve</button><button class="act-btn no" data-no="${r.id}">✖ Reject</button></div>` : ''}
      </div>`).join('') : '<div class="fav-empty">No requests from users yet.</div>';
  }

  function renderTable(){
    const q = $('tbSearch').value.toLowerCase().trim(), t = $('tbType').value, rows = [];
    getGroups().forEach(g => g.items.forEach(i => {
      if((!t || i.type === t) && (!q || i.name.toLowerCase().includes(q))) rows.push({i, g:g.month});
    }));
    $('tbBody').innerHTML = rows.length ? rows.map(({i, g}) => `
      <tr>
        <td><b>${esc(i.name)}</b><br><small>${esc(g)}</small></td>
        <td>${esc(i.date)}</td>
        <td><span class="tag ${i.type}" style="margin:0">${typeLabel(i.type)}</span></td>
        <td><div class="row-act"><button class="act-btn ok" data-a="edit" data-k="${esc(itemKey(i))}">✏️ Edit</button><button class="act-btn no" data-a="del" data-k="${esc(itemKey(i))}">🗑️ Delete</button></div></td>
      </tr>`).join('') : '<tr><td colspan="4" style="text-align:center;padding:24px;color:var(--abaca)">No celebrations found.</td></tr>';
  }

  function renderAll(){
    renderStats(); renderUpcoming(); renderFavs();
    if(isAdmin){ renderReq(); renderTable(); }
    buildNav();
  }

  function resetForm(){
    $('eventForm').reset(); edit = null;
    $('formTitle').textContent = 'Add a New Celebration';
    $('evSubmit').textContent = 'Add to List';
    $('evCancel').hidden = true;
  }

  if(isAdmin){
    $('reqList').addEventListener('click', e => {
      const ok = e.target.dataset.ok, no = e.target.dataset.no;
      if(!ok && !no) return;
      const l = load(KEY_REQ, []);
      const r = l.find(x => x.id === +(ok || no));
      if(!r) return;
      if(r.status !== 'Pending'){
        toast('This request was cancelled or already handled.', true);
        renderAll();
        return;
      }
      if(ok){
        r.status = 'Approved';
        save(KEY_EVENTS, [{id:Date.now(), name:r.name, type:r.type, when:r.when, desc:r.desc, img:r.img, remind:7}, ...getCustomEvents()]);
        toast('Approved! Added to the calendar.');
      }else{
        r.status = 'Rejected';
        toast('Request rejected.');
      }
      save(KEY_REQ, l);
      renderAll();
    });

    $('tbBody').addEventListener('click', e => {
      const a = e.target.dataset.a, k = e.target.dataset.k;
      if(!a) return;
      const item = findByKey(k);
      if(!item) return;
      if(a === 'edit'){
        edit = {key:k, id:item.custom ? item.id : null, gm:item.gm, when:item.date};
        $('evName').value = item.name; $('evType').value = item.type; $('evWhen').value = item.date;
        $('evDesc').value = item.desc || ''; $('evRemind').value = String(item.remind || 7);
        $('formTitle').textContent = 'Edit Celebration';
        $('evSubmit').textContent = 'Save Changes';
        $('evCancel').hidden = false;
        $('adminAdd').scrollIntoView({behavior:'smooth'});
      }else{
        if(!confirm('Are you sure you want to delete this celebration?')) return;
        if(item.custom) save(KEY_EVENTS, getCustomEvents().filter(v => v.id !== item.id));
        else save(KEY_DELETED, [...load(KEY_DELETED, []), k]);
        save(KEY_STARS, getStars().filter(x => x !== k));
        toast('Celebration deleted.');
        renderAll();
      }
    });

    $('tbSearch').addEventListener('input', renderTable);
    $('tbType').addEventListener('change', renderTable);
    $('evCancel').addEventListener('click', resetForm);

    $('eventForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = $('evName').value.trim(), type = $('evType').value, when = $('evWhen').value.trim();
      const desc = $('evDesc').value.trim(), remind = +$('evRemind').value;
      if(!name || !when) return;
      const gm = edit ? edit.gm : null;
      const unchanged = edit && when === edit.when;
      if(!parseWhen(when, gm, 2000) && !unchanged){ toast("Could not read the date. Use a format like 'March 15'.", true); return; }
      const done = img => {
        let l = getCustomEvents(), ok = true;
        if(edit && edit.id){
          l = l.map(x => x.id === edit.id ? {...x, name, type, when, desc, remind, img: img || x.img} : x);
        }else if(edit){
          // built-in event: save an edited copy and hide the original
          const old = findByKey(edit.key);
          l = [{id:Date.now(), name, type, when, desc, remind, gm, img: img || (old ? getPic(old) : '')}, ...l];
          save(KEY_DELETED, [...load(KEY_DELETED, []), edit.key]);
          save(KEY_STARS, getStars().map(k => k === edit.key ? name + '|' + when : k));
        }else{
          l = [{id:Date.now(), name, type, when, desc, remind, img: img || ''}, ...l];
        }
        if(save(KEY_EVENTS, l)){
          toast(edit ? 'Celebration updated!' : 'Celebration added!');
          resetForm(); renderAll();
        }
      };
      const f = $('evPic').files[0];
      f ? readImg(f, done) : done('');
    });
  }

  window.addEventListener('storage', renderAll);
  renderAll();
}
