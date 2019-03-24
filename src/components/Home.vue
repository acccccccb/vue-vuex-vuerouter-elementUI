<template>
  <div>
    <el-button>count1 (this.$store.state) 更新：{{count1.count}}</el-button>
    <el-button>count2 (this.$store.state.count) 不更新：{{count2}}</el-button>
    <el-button>this.$store.state.count 更新：{{this.$store.state.count}}</el-button>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        count1:this.$store.state,
        count2:this.$store.state.count,
      }
    },
    created:function(){
      let _this = this;
      let n = 0;
      setInterval(function(){
        n++;
        _this.$store.commit('increment',n);
        console.info('this.$store.state.count',_this.$store.state.count);
      },1000)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
