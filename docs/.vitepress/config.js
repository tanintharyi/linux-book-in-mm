const pkg = require('vitepress/package.json')

export default {
  lang: 'my-MM',
  title: 'Linux Book in Myanmar',
  description: 'မြန်မာအိုင်တီအင်ဂျင်နီယာများ အိုင်တီလောကရဲ့ စိတ်ဝင်စားဖို့ကောင်းတဲ့ ဖိုင်တွေနဲ့တည်ဆောက်ထားတဲ့ Linux နဲ့ပတ်သတ်ပြီး ပိုပြီးသိ ပိုပြီးနားလည်လာပြီး အလုပ်ခွင်မှာ ပိုမိုအဆင်ပြေလာကြစေရန်နှင့် ကိုယ်တိုင်ဖတ်ရန်အတွက်လည်း ရည်ရွယ်၍ ဘာသာပြန်ပါသည်',

  lastUpdated: true,
  cleanUrls: true,

  base: "/linux-book-in-mm/",

  themeConfig: {
    nav: [
      { text: 'Sample file download', link: '/guide' },
    ],
    sidebar: [
      { text: 'မိတ်ဆက်', link: '/getting-started' },
      {
        text: 'Chapter 1: Linux ကိုသုံးကြည့်ကြရအောင်', link: '/chapter1/',
        collapsed: false,
        items: [
          {
            text: '01: Linux ဆိုသည်မှာ', link: '/chapter1/01/',
            collapsed: false,
            items: [
              { text: 'Linux ရဲ့ အားသာချက်', link: '/chapter1/01/linux-advantages' },
              { text: 'Linux ရဲ့ အားနည်းချက်', link: '/chapter1/01/linux-disadvantages' },
            ]
          },
          {
            text: '02: Linux Environment တစ်ခုဆောက်ကြည့်ခြင်း',
            collapsed: false,
            items: [
              { text: 'Distribution ဆိုသည်မှာ', link: '/#' },
            ]
          },
          {
            text: '03: Login, Logout, Shutdown',
            collapsed: false,
            items: [
              { text: 'Login', link: '/#' },
              { text: 'GUI vs CLI', link: '/#' },
              { text: 'Logout', link: '/#' },
              { text: 'Shutdown', link: '/#' },
            ]
          },
        ]
      },
      {
        text: 'Chapter 2: Shell ဆိုတာဘာလဲ?',
        collapsed: true,
        items: [
          {
            text: '01: Shell နှင့် Command',
            collapsed: false,
            items: [
              { text: 'Error နှင့်ပတ်သတ်ပြီး', link: '/#' },
            ]
          },
          {
            text: '02: Prompt',
            collapsed: false,
            items: [
              { text: 'Prompt symbol', link: '/#' },
            ]
          },
        ]
      },
    ],
    editLink: {
      pattern: 'https://github.com/thuraucsy/linux-book-in-mm/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
