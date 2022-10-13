<template lang="">
   <div>
      <form  @submit.prevent class="form">
         <p>Создать пост</p>
         <input v-model="title" class="inp" type="text" placeholder="Название поста">
         <input v-model="body" class="inp" type="text" placeholder="Описание поста">
         <Button style="margin-top: 20px;" @click="createPost" class="btn">Добавить пост</Button>
      </form>
   </div>
</template>
<script>
export default {
   data() {
      return {
         title: '',
         body: '',
      }
   },
   methods: {
       createPost () {
          const post = {
            id: Math.floor(Math.random() * 100),
            title: this.title,
            body: this.body,
          }
          this.$emit('newPost', post)
          this.title = ''
          this.body = ''
       }
   },
}
</script>
<style scoped>
   .inp {
      border-radius: 3px;
      outline: none;
      padding: 5px;
   }
   .form {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      gap: 10px;
   }
   .form > p {
      color: #fff;
      font-size: 20px;
   }
</style>