<template>
  <!-- 인트로 페이지 -->
  <main v-if="page === 0">
    <img src="/start.jpg" alt="characters" />
    <h1>/SLASH MBTI</h1>
    <h2>“It’s so incredible to finally be understood.”</h2>
    <Button text="테스트 시작" :clickEvent="startTest" />
  </main>
  <!-- 질문 페이지 -->
  <main v-else-if="page < 5">
    <Question />
  </main>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page
    },
  },
  methods: {
    startTest() {
      this.$store.commit('SET_PAGE', 1)
    },
  },
}
</script>
