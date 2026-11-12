<script setup lang="ts">
defineProps<{ lang?: 'ja' | 'en' }>()

type Track = { title: string; note: string }
type Block = {
  day: number
  start: string
  end: string
  kind: 'lecture' | 'hack' | 'event' | 'plain' | 'away'
  title?: string
  note?: string
  tracks?: [Track, Track]
}

const copy = {
  ja: {
    days: ['2/28（日）', '3/1（月）', '3/2（火）', '3/3（水）', '3/4（木）'],
    legend: [
      ['lecture', '講義（日本語）'],
      ['hack', 'CompPhysHack（英語）'],
      ['event', '全体の行事'],
      ['plain', '昼休憩・移動'],
    ],
    caption: '色の違う枠が横に並んでいる時間は、個別講義と CompPhysHack が同時です。初日に CompPhysHack はありません。講義のあいだには適宜休憩を入れます。',
    blocks: [
      { day: 0, start: '9:00', end: '12:00', kind: 'lecture', title: '開会\nグループセミナー\n企業紹介', note: '日本語' },
      { day: 0, start: '12:00', end: '13:20', kind: 'plain', title: '昼休憩' },
      { day: 0, start: '13:20', end: '18:00', kind: 'lecture', title: '共通講義', note: '日本語' },
      { day: 0, start: '18:00', end: '20:00', kind: 'event', title: 'ポスター 1部\n（軽食付き）', note: '日本語＋英語' },
      { day: 1, start: '9:00', end: '12:00', kind: 'lecture', tracks: [{ title: '個別講義', note: '日本語' }, { title: 'CompPhys\nHack', note: '英語' }] },
      { day: 1, start: '12:00', end: '13:20', kind: 'plain', title: '昼休憩' },
      { day: 1, start: '13:20', end: '16:20', kind: 'lecture', tracks: [{ title: '個別講義', note: '日本語' }, { title: 'CompPhys\nHack', note: '英語' }] },
      { day: 1, start: '16:30', end: '18:00', kind: 'event', title: '企業講演', note: '日本語' },
      { day: 1, start: '18:00', end: '20:00', kind: 'event', title: 'ポスター 2部\n（軽食付き）', note: '日本語＋英語' },
      { day: 2, start: '9:00', end: '12:00', kind: 'lecture', tracks: [{ title: '個別講義', note: '日本語' }, { title: 'CompPhys\nHack', note: '英語' }] },
      { day: 2, start: '12:00', end: '13:20', kind: 'plain', title: '昼休憩' },
      { day: 2, start: '13:20', end: '16:20', kind: 'lecture', tracks: [{ title: '個別講義', note: '日本語' }, { title: 'CompPhys\nHack', note: '英語' }] },
      { day: 2, start: '17:00', end: '20:00', kind: 'event', title: '企業講演\n企業座談会', note: '日本語' },
      { day: 3, start: '9:00', end: '12:00', kind: 'lecture', tracks: [{ title: '個別講義', note: '日本語' }, { title: 'CompPhys\nHack', note: '英語' }] },
      { day: 3, start: '12:00', end: '13:20', kind: 'plain', title: '昼休憩' },
      { day: 3, start: '13:20', end: '16:20', kind: 'lecture', tracks: [{ title: '個別講義', note: '日本語' }, { title: 'CompPhys\nHack', note: '英語' }] },
      { day: 3, start: '16:30', end: '18:00', kind: 'plain', title: '会場への移動' },
      { day: 3, start: '18:00', end: '20:00', kind: 'event', title: '懇親会' },
      { day: 4, start: '9:00', end: '10:00', kind: 'event', title: 'フリーディスカッション', note: '日本語' },
      { day: 4, start: '10:00', end: '11:00', kind: 'event', title: '総会・閉会式', note: '日本語' },
      { day: 4, start: '13:00', end: '15:00', kind: 'away', title: '午後：解散' },
    ] as Block[],
  },
  en: {
    days: ['Feb 28\nSun', 'Mar 1\nMon', 'Mar 2\nTue', 'Mar 3\nWed', 'Mar 4\nThu'],
    legend: [
      ['lecture', 'Lectures (Japanese)'],
      ['hack', 'CompPhysHack (English)'],
      ['event', 'Whole-school sessions'],
      ['plain', 'Lunch and travel'],
    ],
    caption: 'Where two colors sit side by side, the individual lectures and CompPhysHack run at the same time. There is no CompPhysHack on the first day. Lectures include breaks.',
    blocks: [
      { day: 0, start: '9:00', end: '12:00', kind: 'lecture', title: 'Opening\nGroup seminar\nCompany introductions', note: 'Japanese' },
      { day: 0, start: '12:00', end: '13:20', kind: 'plain', title: 'Lunch' },
      { day: 0, start: '13:20', end: '18:00', kind: 'lecture', title: 'Common lecture', note: 'Japanese' },
      { day: 0, start: '18:00', end: '20:00', kind: 'event', title: 'Poster 1\n(light food)', note: 'Japanese + English' },
      { day: 1, start: '9:00', end: '12:00', kind: 'lecture', tracks: [{ title: 'Individual\nlectures', note: 'Japanese' }, { title: 'CompPhys\nHack', note: 'English' }] },
      { day: 1, start: '12:00', end: '13:20', kind: 'plain', title: 'Lunch' },
      { day: 1, start: '13:20', end: '16:20', kind: 'lecture', tracks: [{ title: 'Individual\nlectures', note: 'Japanese' }, { title: 'CompPhys\nHack', note: 'English' }] },
      { day: 1, start: '16:30', end: '18:00', kind: 'event', title: 'Company lecture', note: 'Japanese' },
      { day: 1, start: '18:00', end: '20:00', kind: 'event', title: 'Poster 2\n(light food)', note: 'Japanese + English' },
      { day: 2, start: '9:00', end: '12:00', kind: 'lecture', tracks: [{ title: 'Individual\nlectures', note: 'Japanese' }, { title: 'CompPhys\nHack', note: 'English' }] },
      { day: 2, start: '12:00', end: '13:20', kind: 'plain', title: 'Lunch' },
      { day: 2, start: '13:20', end: '16:20', kind: 'lecture', tracks: [{ title: 'Individual\nlectures', note: 'Japanese' }, { title: 'CompPhys\nHack', note: 'English' }] },
      { day: 2, start: '17:00', end: '20:00', kind: 'event', title: 'Company lecture\nand roundtable', note: 'Japanese' },
      { day: 3, start: '9:00', end: '12:00', kind: 'lecture', tracks: [{ title: 'Individual\nlectures', note: 'Japanese' }, { title: 'CompPhys\nHack', note: 'English' }] },
      { day: 3, start: '12:00', end: '13:20', kind: 'plain', title: 'Lunch' },
      { day: 3, start: '13:20', end: '16:20', kind: 'lecture', tracks: [{ title: 'Individual\nlectures', note: 'Japanese' }, { title: 'CompPhys\nHack', note: 'English' }] },
      { day: 3, start: '16:30', end: '18:00', kind: 'plain', title: 'Travel to\nthe venue' },
      { day: 3, start: '18:00', end: '20:00', kind: 'event', title: 'Banquet' },
      { day: 4, start: '9:00', end: '10:00', kind: 'event', title: 'Free discussion', note: 'Japanese' },
      { day: 4, start: '10:00', end: '11:00', kind: 'event', title: 'General meeting\nand closing', note: 'Japanese' },
      { day: 4, start: '13:00', end: '15:00', kind: 'away', title: 'Afternoon:\ndeparture' },
    ] as Block[],
  },
}

const hours = Array.from({ length: 12 }, (_, i) => 9 + i)

function minutes(clock: string) {
  const [h, m] = clock.split(':').map(Number)
  return (h - 9) * 60 + m
}

function place(block: Block) {
  const start = 2 + minutes(block.start) / 10
  const end = 2 + minutes(block.end) / 10
  return {
    gridColumn: String(block.day + 2),
    gridRow: `${start} / ${end}`,
  }
}

function hourStyle(hour: number) {
  const row = 2 + (hour - 9) * 6
  return { gridColumn: '1', gridRow: `${row} / ${row + 1}` }
}
</script>

<template>
  <figure class="sched-figure">
    <div class="sched-scroll">
      <div class="sched" :lang="lang || 'ja'">
        <div class="corner" />
        <div v-for="(day, i) in copy[lang || 'ja'].days" :key="day" class="day" :style="{ gridColumn: i + 2 }">
          {{ day }}
        </div>
        <div v-for="hour in hours" :key="hour" class="hour" :style="hourStyle(hour)">
          {{ hour }}:00
        </div>
        <div
          v-for="day in 5"
          :key="'wash' + day"
          class="wash"
          :style="{ gridColumn: day + 1, gridRow: '2 / 68' }"
        />
        <div
          v-for="block in copy[lang || 'ja'].blocks"
          :key="block.day + block.start + (block.title || block.tracks?.[0].title)"
          class="block"
          :class="block.kind"
          :style="place(block)"
        >
          <template v-if="block.tracks">
            <div class="track lecture">
              <strong>{{ block.tracks[0].title }}</strong>
              <span>{{ block.tracks[0].note }}</span>
              <time>{{ block.start }}–{{ block.end }}</time>
            </div>
            <div class="track hack">
              <strong>{{ block.tracks[1].title }}</strong>
              <span>{{ block.tracks[1].note }}</span>
              <time>{{ block.start }}–{{ block.end }}</time>
            </div>
          </template>
          <template v-else>
            <strong>{{ block.title }}</strong>
            <span v-if="block.note">{{ block.note }}</span>
            <time v-if="block.kind !== 'away'">{{ block.start }}–{{ block.end }}</time>
          </template>
        </div>
      </div>
    </div>
    <figcaption>
      <ul class="legend">
        <li v-for="item in copy[lang || 'ja'].legend" :key="item[0]">
          <i :class="item[0]" />{{ item[1] }}
        </li>
      </ul>
      <p>{{ copy[lang || 'ja'].caption }}</p>
    </figcaption>
  </figure>
</template>

<style scoped>
.sched-figure {
  margin: 1.25rem 0 0;
}
.sched-scroll {
  overflow: hidden;
  border: 1px solid #d0d8e0;
  border-radius: 8px;
  background: #fff;
}
.sched {
  width: 100%;
  display: grid;
  grid-template-columns: 2.15rem repeat(5, minmax(0, 1fr));
  grid-template-rows: auto repeat(66, 12px);
  color: #172c40;
  font-size: 11px;
  line-height: 1.2;
}
.corner,
.day,
.hour,
.wash,
.block {
  min-width: 0;
}
.day {
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-line;
  font-weight: 700;
  font-size: 11px;
  background: #eaf0f6;
  border-bottom: 1px solid #d0d8e0;
  border-left: 1px solid #d0d8e0;
  padding: 6px 2px;
}
.hour {
  z-index: 2;
  align-self: start;
  justify-self: end;
  margin-top: -0.7em;
  padding-right: 3px;
  background: #fff;
  font-size: 10px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
.wash {
  background:
    repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 71px,
      #e6edf3 71px,
      #e6edf3 72px
    );
  border-left: 1px solid #d0d8e0;
}
.block {
  z-index: 1;
  display: flex;
  margin: 2px;
  overflow: hidden;
  border-radius: 4px;
  text-align: center;
}
.block > strong,
.track strong {
  font-weight: 700;
  white-space: pre-line;
  word-break: keep-all;
}
.block:not(:has(.track)) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 2px 1px;
}
.block.lecture:not(:has(.track)) { background: #e4effa; }
.block.event { background: #fff0d5; }
.block.plain { background: #f1f2f4; }
.block.away { background: #edf0f3; }
.block span,
.track span,
.block time,
.track time {
  display: block;
  font-size: 9px;
  font-weight: 400;
}
.track {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 2px 1px;
}
.track.lecture { background: #e4effa; }
.track.hack {
  background: #e5f2ec;
  box-shadow: inset 1px 0 0 #d0d8e0;
}
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}
.legend li {
  display: flex;
  align-items: center;
  gap: 6px;
}
.legend i {
  width: 14px;
  height: 14px;
  border: 1px solid #d0d8e0;
  border-radius: 2px;
}
.legend .lecture { background: #e4effa; }
.legend .hack { background: #e5f2ec; }
.legend .event { background: #fff0d5; }
.legend .plain { background: #f1f2f4; }
.sched-figure p {
  margin: 8px 0 0;
}
</style>
