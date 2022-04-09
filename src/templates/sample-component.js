module.exports = `<template>
  <div class="<%NAME_KEBAB%>" id="<%NAME_KEBAB%>">
     <h1>Title</h1>
  </div>
</template>
<script>
export default  {
    name: "<%NAME%>",
    props: [],
    emits: [], // Nueva manera de declara eventos personalizados den vue 3.
    inject: [],
    mounted() {
      
    },
    data() {
      return {
        
      }
    },
    components: {

    },
    methods: {
     
    },
    computed: {
  
    }
}
</script>
<style lang="scss" scoped>
.<%NAME_KEBAB%> {

}
</style>
`;
