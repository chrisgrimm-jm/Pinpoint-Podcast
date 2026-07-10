const TEAMS = [
  {id:109,abbr:'ARI',city:'Arizona',    name:'Arizona Diamondbacks',  color:'#A71930',alt:'#E3D4AD'},
  {id:133,abbr:'ATH',city:'Oakland',    name:'Athletics',             color:'#003831',alt:'#EFB21E'},
  {id:144,abbr:'ATL',city:'Atlanta',    name:'Atlanta Braves',        color:'#CE1141',alt:'#13274F'},
  {id:110,abbr:'BAL',city:'Baltimore',  name:'Baltimore Orioles',     color:'#DF4601',alt:'#000000'},
  {id:111,abbr:'BOS',city:'Boston',     name:'Boston Red Sox',        color:'#BD3039',alt:'#0D2B56'},
  {id:112,abbr:'CHC',city:'Chicago',    name:'Chicago Cubs',          color:'#0E3386',alt:'#CC3433'},
  {id:145,abbr:'CWS',city:'Chicago',    name:'Chicago White Sox',     color:'#27251F',alt:'#C4CED4'},
  {id:113,abbr:'CIN',city:'Cincinnati', name:'Cincinnati Reds',       color:'#C6011F',alt:'#000000'},
  {id:114,abbr:'CLE',city:'Cleveland',  name:'Cleveland Guardians',   color:'#00385D',alt:'#E31937'},
  {id:115,abbr:'COL',city:'Colorado',   name:'Colorado Rockies',      color:'#33006F',alt:'#C4CED4'},
  {id:116,abbr:'DET',city:'Detroit',    name:'Detroit Tigers',        color:'#0C2340',alt:'#FA4616'},
  {id:117,abbr:'HOU',city:'Houston',    name:'Houston Astros',        color:'#002D62',alt:'#EB6E1F'},
  {id:118,abbr:'KC', city:'Kansas City',name:'Kansas City Royals',    color:'#004687',alt:'#C09A5B'},
  {id:108,abbr:'LAA',city:'Los Angeles',name:'Los Angeles Angels',    color:'#BA0021',alt:'#003263'},
  {id:119,abbr:'LAD',city:'Los Angeles',name:'Los Angeles Dodgers',   color:'#005A9C',alt:'#EF3E42'},
  {id:146,abbr:'MIA',city:'Miami',      name:'Miami Marlins',         color:'#00A3E0',alt:'#EF3340'},
  {id:158,abbr:'MIL',city:'Milwaukee',  name:'Milwaukee Brewers',     color:'#12284B',alt:'#FFC52F'},
  {id:142,abbr:'MIN',city:'Minnesota',  name:'Minnesota Twins',       color:'#002B5C',alt:'#D31145'},
  {id:121,abbr:'NYM',city:'New York',   name:'New York Mets',         color:'#002D72',alt:'#FF5910'},
  {id:147,abbr:'NYY',city:'New York',   name:'New York Yankees',      color:'#132448',alt:'#C4CED4'},
  {id:143,abbr:'PHI',city:'Philadelphia',name:'Philadelphia Phillies',color:'#E81828',alt:'#002D72'},
  {id:134,abbr:'PIT',city:'Pittsburgh', name:'Pittsburgh Pirates',    color:'#27251F',alt:'#FDB827'},
  {id:135,abbr:'SD', city:'San Diego',  name:'San Diego Padres',      color:'#2F241D',alt:'#FFC425'},
  {id:137,abbr:'SF', city:'San Francisco',name:'San Francisco Giants',color:'#FD5A1E',alt:'#27251F'},
  {id:136,abbr:'SEA',city:'Seattle',    name:'Seattle Mariners',      color:'#0C2C56',alt:'#005C5C'},
  {id:138,abbr:'STL',city:'St. Louis',  name:'St. Louis Cardinals',   color:'#C41E3A',alt:'#FEDB00'},
  {id:139,abbr:'TB', city:'Tampa Bay',  name:'Tampa Bay Rays',        color:'#092C5C',alt:'#8FBCE6'},
  {id:140,abbr:'TEX',city:'Texas',      name:'Texas Rangers',         color:'#003278',alt:'#C0111F'},
  {id:141,abbr:'TOR',city:'Toronto',    name:'Toronto Blue Jays',     color:'#134A8E',alt:'#E8291C'},
  {id:120,abbr:'WSH',city:'Washington', name:'Washington Nationals',  color:'#AB0003',alt:'#14225A'},
];

const HITTING_STATS = [
  // ── Counting stats ────────────────────────────────────────────────────────
  {key:'homeRuns',            label:'Home Runs',               type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'rbi',                 label:'RBI',                     type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hits',                label:'Hits',                    type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'runs',                label:'Runs Scored',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'stolenBases',         label:'Stolen Bases',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'strikeOuts',          label:'Strikeouts (Batter)',     type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'baseOnBalls',         label:'Walks',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'doubles',             label:'Doubles',                 type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'triples',             label:'Triples',                 type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'totalBases',          label:'Total Bases',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'plateAppearances',    label:'Plate Appearances',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'atBats',              label:'At Bats',                 type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesPlayed',         label:'Games Played',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'sacFlies',            label:'Sacrifice Flies',         type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'sacBunts',            label:'Sacrifice Bunts',         type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hitByPitch',          label:'Hit By Pitch',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'intentionalWalks',    label:'Intentional Walks',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'caughtStealing',      label:'Caught Stealing',         type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'groundIntoDoublePlay',label:'Ground Into DP',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'leftOnBase',          label:'Left On Base',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'numberOfPitches',     label:'Pitches Seen',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'groundOuts',          label:'Ground Outs',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  // ── Rate / ratio stats ────────────────────────────────────────────────────
  {key:'avg',                 label:'Batting Average',         type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'ops',                 label:'OPS',                     type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'slg',                 label:'Slugging %',              type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'obp',                 label:'On-Base %',               type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'babip',               label:'BABIP',                   type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'stolenBasePercentage',label:'Stolen Base %',           type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'atBatsPerHomeRun',    label:'AB Per Home Run',         type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(1),         order:'asc',  pool:'Qualified'},
  {key:'groundOutsToAirouts', label:'GB/FB Ratio',             type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'desc', pool:'Qualified'},
  // ── Advanced (season) ─────────────────────────────────────────────────────
  {key:'war',                 label:'WAR',                     type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc'},
  {key:'woba',                label:'wOBA',                    type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  {key:'wRcPlus',             label:'wRC+',                    type:'sabermetrics',careerOk:false, fmt:v=>Math.round(v)+'',                 order:'desc', pool:'Qualified'},
  // ── All-Time only (careerAdvanced) ────────────────────────────────────────
  {key:'extraBaseHits',               label:'Extra Base Hits',          type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'flyOuts',                     label:'Fly Outs',                 type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'reachedOnError',              label:'Reached On Error',         type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'walkOffs',                    label:'Walk-Off Hits',            type:'careerAdvanced',careerOk:true,  fmt:v=>+v,                           order:'desc'},
  {key:'iso',                         label:'ISO (Isolated Power)',     type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'walksPerPlateAppearance',     label:'BB/PA',                    type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'strikeoutsPerPlateAppearance',label:'K/PA',                     type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'homeRunsPerPlateAppearance',  label:'HR/PA',                    type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(4),     order:'desc', pool:'Qualified'},
  {key:'walksPerStrikeout',           label:'BB/K Ratio',               type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),     order:'desc', pool:'Qualified'},
  {key:'pitchesPerPlateAppearance',   label:'Pitches Per PA',           type:'careerAdvanced',careerOk:true,  fmt:v=>parseFloat(v).toFixed(2),     order:'desc', pool:'Qualified'},
];
const PITCHING_STATS = [
  // ── Counting stats ────────────────────────────────────────────────────────
  {key:'strikeOuts',          label:'Strikeouts',              type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'wins',                label:'Wins',                    type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'saves',               label:'Saves',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'saveOpportunities',   label:'Save Opportunities',      type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'holds',               label:'Holds',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'homeRuns',            label:'Home Runs Allowed',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'baseOnBalls',         label:'Walks Allowed',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hits',                label:'Hits Allowed',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesStarted',        label:'Games Started',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesPitched',        label:'Games Pitched',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'gamesFinished',       label:'Games Finished',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'losses',              label:'Losses',                  type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'battersFaced',        label:'Batters Faced',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'blownSaves',          label:'Blown Saves',             type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'completeGames',       label:'Complete Games',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'shutouts',            label:'Shutouts',                type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'wildPitches',         label:'Wild Pitches',            type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'hitBatsmen',          label:'Hit Batters (HBP)',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'balks',               label:'Balks',                   type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'pickoffs',            label:'Pickoffs',                type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'inheritedRunners',    label:'Inherited Runners',       type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'inheritedRunnersScored',label:'Inherited Runs Scored', type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'earnedRuns',          label:'Earned Runs Allowed',     type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'outs',                label:'Outs Recorded',           type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  {key:'strikes',             label:'Strikes Thrown',          type:'season',      careerOk:true,  fmt:v=>+v,                               order:'desc'},
  // ── Rate stats ───────────────────────────────────────────────────────────
  {key:'era',                 label:'ERA',                     type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'whip',                label:'WHIP',                    type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'strikeoutsPer9Inn',   label:'K/9',                     type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc', pool:'Qualified'},
  {key:'walksPer9Inn',        label:'BB/9',                    type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'asc',  pool:'Qualified'},
  {key:'hitsPer9Inn',         label:'H/9',                     type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'asc',  pool:'Qualified'},
  {key:'strikeoutWalkRatio',  label:'K/BB Ratio',              type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'desc', pool:'Qualified'},
  {key:'pitchesPerInning',    label:'Pitches Per Inning',      type:'season',      careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'winPercentage',       label:'Win %',                   type:'season',      careerOk:true,  fmt:v=>parseFloat(v).toFixed(3),         order:'desc', pool:'Qualified'},
  // ── Advanced ─────────────────────────────────────────────────────────────
  {key:'war',                 label:'WAR',                     type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc'},
  {key:'fip',                 label:'FIP',                     type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'xfip',                label:'xFIP',                    type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'asc',  pool:'Qualified'},
  {key:'eraMinus',            label:'ERA-',                    type:'sabermetrics',careerOk:false, fmt:v=>Math.round(v)+'',                 order:'asc',  pool:'Qualified'},
  {key:'fipMinus',            label:'FIP-',                    type:'sabermetrics',careerOk:false, fmt:v=>Math.round(v)+'',                 order:'asc',  pool:'Qualified'},
  {key:'ra9War',              label:'RA9-WAR',                 type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(1),         order:'desc'},
  {key:'pli',                 label:'Leverage Index (pLI)',    type:'sabermetrics',careerOk:false, fmt:v=>parseFloat(v).toFixed(2),         order:'desc'},
];

function logoUrl(id){ return `https://www.mlbstatic.com/team-logos/${id}.svg`; }

function logoImg(teamId, color, alt, abbr, size=36){
  return `<img src="${logoUrl(teamId)}" width="${size}" height="${size}" style="object-fit:contain;flex-shrink:0"
    onerror="this.outerHTML='<div style=\\'width:${size}px;height:${size}px;border-radius:50%;background:${color};color:${alt};display:flex;align-items:center;justify-content:center;font-family:Barlow Condensed,sans-serif;font-size:${Math.max(7,size/3.2)|0}px;\\'>${abbr}</div>'" alt="${abbr}"/>`;
}

function norm(s){
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9\s]/g,'').trim();
}
function isMatch(guess, playerName){
  const g=norm(guess), full=norm(playerName);
  if(full===g) return true;
  const tokens=full.split(/\s+/), last=tokens[tokens.length-1];
  if(last.length>=4 && last===g) return true;
  const noSfx=tokens.filter(t=>!['jr','sr','ii','iii','iv'].includes(t));
  if(noSfx.join(' ')===g) return true;
  if(noSfx[noSfx.length-1]?.length>=4 && noSfx[noSfx.length-1]===g) return true;
  return false;
}

const MLB = 'https://statsapi.mlb.com/api/v1';

// Assigns dense ranks: ties share a rank, next distinct value increments by 1 (not skipped)
// e.g. raw values [10, 9, 9, 8] -> ranks [1, 2, 2, 3]
function assignDenseRanks(items, rawKey){
  let rank = 0;
  let lastVal = null;
  return items.map((item) => {
    const val = item[rawKey];
    if(lastVal === null || val !== lastVal){
      rank++;
      lastVal = val;
    }
    return { ...item, rank };
  });
}

async function fetchOneSeason(group, statDef, season, pool, position){
  const order = statDef.order||'desc';
  const playerPool = statDef.pool||pool||'ALL';
  const params = new URLSearchParams({
    stats: statDef.type, group, gameType:'R',
    season, playerPool, limit:300,
    sortStat:statDef.key, order
  });
  if(position && position !== 'ALL') params.set('position', position);
  const r = await fetch(`${MLB}/stats?${params}`);
  if(!r.ok) throw new Error(`MLB API error ${r.status}`);
  const d = await r.json();
  return d.stats?.[0]?.splits || [];
}

async function fetchPlayers(group, statDef, season, pool, position){
  const isCareer = season==='career';
  const order = statDef.order||'desc';

  let years = [];
  if(isCareer){
    // career endpoint
  } else if(String(season).startsWith('range:')){
    const [,range] = season.split(':');
    const [start, end] = range.split('-').map(Number);
    for(let y=start; y<=end; y++) years.push(y);
  } else if(String(season).startsWith('decade:')){
    const start = Number(season.split(':')[1]);
    const end = start === 2020 ? 2025 : start + 9;
    for(let y=start; y<=end; y++) years.push(y);
  } else {
    years = [season];
  }

  if(isCareer){
    const playerPool = 'ALL';
    const statType = statDef.type === 'sabermetrics' ? 'sabermetrics' : 'career';
    const params = new URLSearchParams({
      stats: statType, group, gameType:'R',
      playerPool, limit:300,
      sortStat:statDef.key, order:'desc'
    });
    if(position && position !== 'ALL') params.set('position', position);
    const r = await fetch(`${MLB}/stats?${params}`);
    if(!r.ok) throw new Error(`MLB API error ${r.status}`);
    const d = await r.json();
    const splits = d.stats?.[0]?.splits || [];
    if(!splits.length) throw new Error('No data returned. Try a different season or category.');
    const mapped = splits.map((s)=>({
      rawVal: parseFloat(s.stat[statDef.key]),
      name:s.player?.fullName||'?',
      team:s.team?.name||'',
      value:String(statDef.fmt(s.stat[statDef.key])),
      nameLower:(s.player?.fullName||'').toLowerCase()
    }));
    return assignDenseRanks(mapped, 'rawVal');
  }

  if(years.length === 1){
    const playerPool = statDef.pool||pool||'ALL';
    const params = new URLSearchParams({
      stats: statDef.type, group, gameType:'R',
      season: years[0], playerPool, limit:300,
      sortStat:statDef.key, order
    });
    if(position && position !== 'ALL') params.set('position', position);
    const r = await fetch(`${MLB}/stats?${params}`);
    if(!r.ok) throw new Error(`MLB API error ${r.status}`);
    const d = await r.json();
    const splits = d.stats?.[0]?.splits || [];
    if(!splits.length) throw new Error('No data returned. Try a different season or category.');
    const mapped = splits.map((s)=>({
      rawVal: parseFloat(s.stat[statDef.key]),
      name:s.player?.fullName||'?',
      team:s.team?.name||'',
      value:String(statDef.fmt(s.stat[statDef.key])),
      nameLower:(s.player?.fullName||'').toLowerCase()
    }));
    return assignDenseRanks(mapped, 'rawVal');
  }

  const allSplits = await Promise.all(
    years.map(y => fetchOneSeason(group, statDef, y, pool, position).catch(()=>[]))
  );

  const totals = {};
  for(const seasonSplits of allSplits){
    for(const s of seasonSplits){
      const id = s.player?.id;
      if(!id) continue;
      const raw = parseFloat(s.stat[statDef.key]);
      if(isNaN(raw)) continue;
      if(!totals[id]){
        totals[id] = {name: s.player?.fullName||'?', team: s.team?.name||'—', total: 0};
      }
      totals[id].total += raw;
    }
  }

  if(!Object.keys(totals).length) throw new Error('No data returned for this range.');

  const isAsc = order === 'asc';
  const sorted = Object.values(totals).sort((a,b) => isAsc ? a.total-b.total : b.total-a.total);
  const top300 = sorted.slice(0, 300);

  const mapped = top300.map((p)=>({
    rawVal: p.total,
    name:p.name,
    team:p.team,
    value:String(statDef.fmt(p.total)),
    nameLower:p.name.toLowerCase()
  }));
  return assignDenseRanks(mapped, 'rawVal');
}
