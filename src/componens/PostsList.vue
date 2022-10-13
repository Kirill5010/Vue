<template lang="">
   <div v-show="this.posts.length > 0">
      <h3 class="title">Список постов:</h3>
      <transition-group name="list">
         <Post v-for="post in posts" :key="post.id" @delete="$emit('delete', post)" :posts="post"></Post>
      </transition-group>
   </div>
   <div v-show="this.posts.length === 0" class="empty">Cписок постов пуст :)</div>
</template>
<script>
import Post from './Post.vue'
export default {
   components: {
    Post,
},
   props: {
      posts: {
         type: Array,
         required: true
      }
   },
   methods: {
   }
}
</script>
<style scoped>
   .title {
      width: 89%;
      margin: 0 auto;
      color: #fff;
      text-align: start;
   }
   .empty {
      color: black; 
      font-size: 25px; 
      text-align: center;
      margin-top: 50px;
   }
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all .3s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50%);
}
</style>