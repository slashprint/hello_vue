/**
 * 메인 페이지 안에 들어갈 것
 * 1. 인트로 페이지
 * 2. 조건부 렌더링을 통해 퀴즈 컴포넌트
 * 3. 결과는 페이지 이동 발생 /result/_mbti
 */

export default {
  head: {
    title: 'fastcampus',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/global.css'],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [],

  build: {},
}
