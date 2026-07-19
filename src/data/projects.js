// `artist` is bilingual: { en, he } — resolved from the active language.
// `title` (the song name) stays as released, in its original language.
const projects = [

  {
    id: 1,
    title: 'Jar Jar',
    artist: { en: 'Jet Vazana', he: 'ג׳ט ואזאנה' },
    thumbnail: '/thumbnails/JET VAZANA - JAR JAR.jpg',
    youtubeId: 'sTs7dgtpGL4',
  },

  {
    id: 2,
    title: 'Seo Anthem',
    artist: { en: 'Jet Vazana', he: 'ג׳ט ואזאנה' },
    thumbnail: '/thumbnails/JET VAZANA – SEO ANTHEM.jpg',
    youtubeId: 'TtQNcu_dTGw',
  },

  {
    id: 3,
    title: 'How You Like',
    artist: { en: 'Niña', he: 'נינה' },
    thumbnail: '/thumbnails/Ni_a.jpg',
    youtubeId: 'gIlnsSF94fs',
  },

  {
    id: 4,
    title: 'ילד שמנת',
    artist: { en: 'Anna Zak', he: 'אנה זק' },
    thumbnail: '/thumbnails/annaZack.jpg',
    thumbPositionMobile: '35% center',
    youtubeId: 'PQEoOvwX6hs',
  },

  {
    id: 5,
    title: 'Bad Bitch',
    artist: { en: 'Liad Meir', he: 'ליעד מאיר' },
    thumbnail: '/thumbnails/badbitch.jpg',
    youtubeId: 'L86-I2MafOA',
  },

  {
    id: 6,
    title: 'בסטיז',
    artist: { en: 'May Twtik', he: 'מאי טוויק' },
    thumbnail: '/thumbnails/bestiz.jpg',
    youtubeId: '_QpOQRI79aU',
  },

  {
    id: 7,
    title: 'עיניים דם',
    artist: { en: 'Hagar Yefet & Chen Porati', he: 'הגר יפת וחן פורתי' },
    thumbnail: '/thumbnails/bloodEyes.jpg',
    youtubeId: 'cDRla28uN9k',
  },

  {
    id: 8,
    title: 'פוטנציאל + זה זה',
    artist: { en: 'Eden Derso', he: 'עדן דרסו' },
    thumbnail: '/thumbnails/edenDarso.jpg',
    youtubeId: '0vzLuc6U5J0',
  },

  {
    id: 9,
    title: 'FIT',
    artist: { en: 'Ron Hayun', he: 'רון חיון' },
    thumbnail: '/thumbnails/fit.jpg',
    youtubeId: 'jSvbsndk4Jk',
  },

  {
    id: 10,
    title: 'כל החבילה קומפלט',
    artist: { en: 'Chen Porati', he: 'חן פורתי' },
    thumbnail: '/thumbnails/hen.jpg',
    youtubeId: 'ocCZlamDX5M',
  },

  {
    id: 11,
    title: 'Hila',
    artist: { en: 'Ron Hayun & Liad Meir', he: 'רון חיון & ליעד מאיר' },
    thumbnail: '/thumbnails/hila.png',
    youtubeId: 'J8UtBOyDj-c',
  },

  {
    id: 12,
    title: 'פלואו של טמבל 2',
    artist: { en: 'Ron Hayun & Liad Meir', he: 'רון חיון & ליעד מאיר' },
    thumbnail: '/thumbnails/liadclipimg.jpg',
    youtubeId: 'p1Nhx-Dn3yw',
  },

  {
    id: 13,
    title: 'אוהב או שונא',
    artist: { en: 'Liam Golan', he: 'ליאם גולן' },
    thumbnail: '/thumbnails/liamGOlan.jpg',
    thumbPositionMobile: '44% center',
    youtubeId: 'eeGdz1Xjr2U',
  },

  {
    id: 14,
    title: 'לא אמין',
    artist: { en: 'Orel Rahamim', he: 'אוראל רחמים' },
    thumbnail: '/thumbnails/loAmin.jpg',
    thumbPositionMobile: '33% center',
    youtubeId: 'cf8VBkMYZ2M',
  },

  {
    id: 15,
    title: 'סוגרת פינה',
    artist: { en: 'May Twtik', he: 'מאי טוויק' },
    thumbnail: '/thumbnails/mayTwtik.jpg',
    youtubeId: 'N2pGGDqUnrc',
  },

  {
    id: 16,
    title: 'אחת ממיליון',
    artist: { en: 'Ron Hayun', he: 'רון חיון' },
    thumbnail: '/thumbnails/milion.jpg',
    youtubeId: 'c_Uq3XnjzOc',
  },

  {
    id: 17,
    title: 'מיס עולם',
    artist: { en: 'May Twtik', he: 'מאי טוויק' },
    thumbnail: '/thumbnails/missOlam.jpg',
    youtubeId: '-jVTTw5ge9M',
  },

  {
    id: 18,
    title: 'יהלום מעבדה',
    artist: { en: 'Nasrin', he: 'נסרין' },
    thumbnail: '/thumbnails/nasrin1.jpg',
    thumbPosition: '32% center',
    youtubeId: 'p6-eaS3BiTo',
  },

  {
    id: 19,
    title: 'שיר באוטו',
    artist: { en: 'Nasrin', he: 'נסרין' },
    thumbnail: '/thumbnails/nasrin2.jpg',
    thumbPositionMobile: '40% center',
    youtubeId: 'qfgojhJ70kY',
  },

  {
    id: 20,
    title: 'לא נשאר לבד',
    artist: { en: 'Raviv Kaner', he: 'רביב כנר' },
    thumbnail: '/thumbnails/notAlone.jpg',
    youtubeId: '_mxzi5hGALA',
  },

  {
    id: 21,
    title: 'אמאלה אבאלה',
    artist: { en: 'Ori Saban', he: 'אורי סבן' },
    thumbnail: '/thumbnails/oriSabanjpg.jpg',
    thumbPositionMobile: '76% center',
    youtubeId: 'S0wLw9S4vMw',
  },

  {
    id: 22,
    title:'אוי ואבוי',
    artist: { en: 'Ravid Plotnik & Duda Gang', he: 'רביד פלוטניק דודא גאנג' },
    thumbnail: '/thumbnails/oy.jpg',
    youtubeId: 'sQI5GRj9m6g',
  },

  {
    id: 23,
    title: 'פרפרים בבטן',
    artist: { en: 'Liad Meir & Moran Mazor', he: 'ליעד מאיר ומורן מזור' },
    thumbnail: '/thumbnails/parparim.jpg',
    youtubeId: 'GuVdnFfIriQ',
  },

  {
    id: 24,
    title:'בלי פאניקה' ,
    artist: { en: 'Chen Porati, Shrek & Gefen Greenberg', he: 'חן פורתי שרק וגפן גרינברג' },
    thumbnail: '/thumbnails/shrek.jpg',
    youtubeId: 'u3TeZXN3qcM',
  },

  {
    id: 25,
    title: 'כיסופים',
    artist: { en: 'Raviv Kaner', he: 'רביב כנר' },
    thumbnail: '/thumbnails/soldier.jpg',
    youtubeId: 'bDFfm-VEcp0',
  },

  {
    id: 26,
    title: 'טיל פצמר',
    artist: { en: 'Liad Meir', he: 'ליעד מאיר' },
    thumbnail: '/thumbnails/tilPatzmar.png',
    youtubeId: 'MbNffFMvmjQ',
  },

  {
    id: 27,
    title: 'וורסים',
    artist: { en: 'Liad Meir', he: 'ליעד מאיר' },
    thumbnail: '/thumbnails/versim.jpg',
    youtubeId: 'QsKyG7MiXjM',
  },

]

// Fixed display order for the first releases, by project id:
// 1. ליעד מאיר – וורסים, 2. רון חיון – אחת ממיליון, 3. אנה זק – ילד שמנת,
// 4. ליאם גולן – אוהב או שונא, 5. Jet Vazana – Seo Anthem, 6. Jet Vazana – Jar Jar,
// 7. ליעד מאיר – Bad Bitch, 8. דודא גאנג – אוי ואבוי. The rest are shuffled on each load.
const pinnedIds = [27, 16, 4, 13, 2, 1, 5, 22]

const pinned = pinnedIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean)

const rest = projects.filter((p) => !pinnedIds.includes(p.id))

for (let i = rest.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  ;[rest[i], rest[j]] = [rest[j], rest[i]]
}

export default [...pinned, ...rest]
