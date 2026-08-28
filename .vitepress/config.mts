import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/2027/',
  srcDir: 'src',
  title: "計算物理春の学校 2027",
  description: "計算物理春の学校 2027は、大学院生や若手研究者を対象に、計算物理の基礎から最先端技術までを幅広く学ぶ場を提供します。モンテカルロ法、第一原理計算、テンソルネットワーク、機械学習、量子計算など、多彩なトピックを専門家の講義や参加者同士の交流を通じて深く理解します。分野を超えた議論や共同研究の機会を促進し、計算物理に関心のある皆様の研究発展をサポートします。皆様の積極的なご参加をお待ちしております。",
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
    ["meta", { property: "twitter:description", content: "「計算物理春の学校」では様々な分野の専門家による講義や、参加者同士の交流を通じて計算物理の理論と実践を広く深く学ぶ場を提供します。大学院生や若手研究者を主な対象とし、計算物理に関する基礎から最先端技術、その応用まで幅広いトピックを取り上げます"}],
    ["meta", { property: "twitter:image", content: "https://compphysschool.github.io/2027/images/compphys_hp_top_1200.jpg" }]
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '若手世話人募集', link: '/recruitment' },
      { text: '過去の様子', items: [
          { text: '2026年度', link: 'https://compphysschool.github.io/2026/'},
          { text: '2025年度', link: 'https://compphysschool.github.io/homepage2025/index.html'},
          { text: '2024年度', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年度', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
      ]},
      { text: 'お問い合わせ', link: 'https://forms.gle/bgMe27Dwzry9ARBP7'},
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: '若手世話人募集', link: '/recruitment' },
      { text: '過去の様子', items: [
          { text: '2026年度', link: 'https://compphysschool.github.io/2026/' },
          { text: '2025年度', link: 'https://compphysschool.github.io/homepage2025/index.html' },
          { text: '2024年度', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年度', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
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
