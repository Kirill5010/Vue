<template lang="">
   <div>
      <div class="post">
         <div>
            <div><strong>Название: </strong>{{ posts.title }}</div>
            <div><strong>Описание: </strong>{{ posts.body }}</div>
         </div>
         <Button style="border: 1px solid grey" @click="$emit('delete', post)" class="btn">Удалить</Button>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      posts: {
         type: Object,
         required: true
      }
   },
   methods: {

   }
}
</script>
<style scoped>
   .post {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      padding: 15px;
      border: 2px solid #fff;
      border-radius: 10px;
      background-color: rgba(0, 0,0, 0.8);
      color: #fff;
      margin-top: 15px;
   }
</style>