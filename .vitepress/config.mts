import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/2027/',
  srcDir: 'src',
  title: "計算物理春の学校 2027",
  description: "計算物理春の学校 2027。期間：2027年2月28日〜3月4日。会場：沖縄県青年会館。",
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-QC736FLTQE' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QC736FLTQE');
      `
    ],
    ["link", { rel: "icon", href: "https://compphysschool.github.io/2027/images/compphys_icon.jpg" }],
    ["meta", { property: "og:image", content: "https://compphysschool.github.io/2027/images/compphys_hp_top_1200.jpg" }],
    ["meta", { property: "og:site_name", content: "計算物理春の学校2027" }],
    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@compphysschool"}],
    ["meta", { property: "twitter:title", content: "計算物理春の学校2027"}],
    ["meta", { property: "twitter:description", content: "計算物理春の学校 2027。2027年2月28日〜3月4日、沖縄県青年会館。"}],
    ["meta", { property: "twitter:image", content: "https://compphysschool.github.io/2027/images/compphys_hp_top_1200.jpg" }]
  ],
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      title: '計算物理春の学校 2027',
      description: '計算物理春の学校 2027。期間：2027年2月28日〜3月4日。会場：沖縄県青年会館。',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: '仮スケジュール', link: '/timetable' },
          { text: '講義', link: '/lectures' },
          { text: 'Hackathon', link: '/hackathon' },
          { text: 'お問い合わせ', link: 'mailto:compphysschool2027@googlegroups.com'},
        ],
        footer: {
          message: '過去の開催: <a href="https://compphysschool.github.io/2026/">2026</a> · <a href="https://compphysschool.github.io/homepage2025/index.html">2025</a> · <a href="https://compphysspringschool2024.github.io/homepage2024/">2024</a> · <a href="https://hohno0223.github.io/comp_phys_spring_school2023/">2023</a>',
          copyright: '© 2027 計算物理春の学校',
        },
        langMenuLabel: '言語',
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Computational Physics Spring School 2027',
      description: 'Computational Physics Spring School 2027, February 28–March 4 at Okinawa Ken Seinen Kaikan.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Provisional schedule', link: '/en/timetable' },
          { text: 'Lectures', link: '/en/lectures' },
          { text: 'Hackathon', link: '/en/hackathon' },
          { text: 'Contact', link: 'mailto:compphysschool2027@googlegroups.com'},
        ],
        footer: {
          message: 'Past schools: <a href="https://compphysschool.github.io/2026/">2026</a> · <a href="https://compphysschool.github.io/homepage2025/index.html">2025</a> · <a href="https://compphysspringschool2024.github.io/homepage2024/">2024</a> · <a href="https://hohno0223.github.io/comp_phys_spring_school2023/">2023</a>',
          copyright: '© 2027 Computational Physics Spring School',
        },
        langMenuLabel: 'Language',
      }
    }
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CompPhysSchool/2027' }
    ],
  },

  // https://vitepress.dev/guide/extending-default-theme#overriding-internal-components
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHome.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBarHamburger\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBarHamburger.vue', import.meta.url)
          )
        }

      ]
    }
  },

})
