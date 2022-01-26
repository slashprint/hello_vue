<template>
  <main>
    <img :src="result[mbti].img" :alt="result[mbti].title" />
    <h1>{{ result[mbti].title }}</h1>
    <p>{{ result[mbti].description }}</p>
    <Button text="다시 테스트하기" :clickEvent="resetPage" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      mbti: null,
      result: {
        entj: {
          img: '/entj.jpg',
          title: '밸류 쇼퍼 (Value Shopper)',
          description:
            '결과보단 생활에서 경험하는 과정을 중시하는 이들은 사물의 외적 매력보다는 그것이 가진 배경과 지향하는 가치를 중요하게 여기는 사람들입니다. 패션도 유행보단 브랜드나 제품이 주는 가치에 집중해서 단순히 네임밸류나 인지도보다는 그것이 지향하는 바가 무엇인지, 어떤 과정을 거쳐 만들어졌는지를 중요시합니다. 커피를 마실 때도 유명 프랜차이즈보단 질 좋은 원두를 직접 로스팅 해주는 작은 카페를 즐겨 찾을 때가 많습니다.',
        },
      },
    }
  },
  created() {
    // this.mbti = this.$route.params.mbti
    this.mbti = 'entj'

    // 예외 처리
    if (this.result[this.$route.params.mbti] === undefined) {
      this.$router.push({ name: 'index' })
    }
  },
  methods: {
    resetPage() {
      this.$store.dispatch('clickResetButton')
      this.$router.push({ name: 'index' })
    },
  },
}
</script>
<style></style>
