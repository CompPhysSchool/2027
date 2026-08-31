import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/2027/',
  srcDir: 'src',
  title: "計算物理春の学校 2027",
  description: "計算物理春の学校 2027。期間：2027年2月28日〜3月4日。会場：沖縄県青年会館。内容は若手世話人が中心となって決めます。",
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
    ["meta", { property: "twitter:description", content: "計算物理春の学校 2027。2027年2月28日〜3月4日、沖縄県青年会館。内容は若手世話人が中心となって決めます。"}],
    ["meta", { property: "twitter:image", content: "https://compphysschool.github.io/2027/images/compphys_hp_top_1200.jpg" }]
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '若手世話人募集', link: '/recruitment' },
      { text: '過去の様子', items: [
          { text: '2026年', link: 'https://compphysschool.github.io/2026/'},
          { text: '2025年', link: 'https://compphysschool.github.io/homepage2025/index.html'},
          { text: '2024年', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
      ]},
      { text: 'お問い合わせ', link: 'https://forms.gle/bgMe27Dwzry9ARBP7'},
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: '若手世話人募集', link: '/recruitment' },
      { text: '過去の様子', items: [
          { text: '2026年', link: 'https://compphysschool.github.io/2026/' },
          { text: '2025年', link: 'https://compphysschool.github.io/homepage2025/index.html' },
          { text: '2024年', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
      ]},
      { text: 'お問い合わせ', link: 'https://forms.gle/bgMe27Dwzry9ARBP7'},
    ],
    socialLinks: [
      { icon: 'x', link: 'https://x.com/compphysschool' },
      { icon: 'github', link: 'https://github.com/CompPhysSchool/2027' }
    ],
    footer: {
      copyright: '© 2027 Spring School on Computational Physics',
    },
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
