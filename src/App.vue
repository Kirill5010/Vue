<template>
      <DialogOpen :show="show" @closeDialog="CloseDialog ">
        <Form @newPost="createPost"></Form>
      </DialogOpen>
      <div class="menu">
        <Button style="margin-left: 5%; margin-bottom: 10px;" class="btn" @click="OpenDialog">Создать пост</Button>
        <input placeholder="Пойск..." v-model="sorch" type="text">
      </div>
      <PostsList v-if="!this.postsLoading"  @delete="PostDelete" :posts="sorchPost"></PostsList>
      <div v-else>Идет загрузка...</div>
      <Pagination :totalPages="totalPages" :page="page" @changPage="changPage"><slot></slot></Pagination>
</template>

<script>
import PostsList from './componens/PostsList.vue'
import Form from './componens/Form.vue';
import DialogOpen from './componens/UI/DialogOpen.vue';
import Button from './componens/UI/Button.vue';
import Pagination from './componens/Pagination.vue'
import axios from 'axios';

export default {
  components: {
    PostsList,
    Form,
    DialogOpen,
    Button,
    Pagination
},
data() {
      return {
         posts: [],
         show: false,
         postsLoading: false,
         sorch: '',
         page: 1,
         limit: 10,
         totalPages: 0,
      }
   },
   methods: {
    createPost(post) {
      if (post.title == '' || post.body == ''){
        return
      } else {
        this.show = false
        this.posts.push(post)
      }
    },
    PostDelete (post){
       this.posts = this.posts.filter(el => el.id !== post.id)
    },
    changPage (pageNumder){
        this.page = +pageNumder
        this.fetchPosts()
    },
    CloseDialog (){
        this.show = false
    },
    OpenDialog (){
      this.show = true
    },
    async fetchPosts (){
          try {
              this.postsLoading = true
              const respons = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                  _page: this.page,
                  _limit: this.limit
                }
              })
                this.totalPages = Math.ceil(respons.headers['x-total-count'] / this.limit)
                this.posts = respons.data
          } catch (e) {
            console.log('Error')
          } finally {
            this.postsLoading = false;
          }
    }
  },
  mounted() {
      this.fetchPosts()
    },
  computed: {
        sorchPost (){
          return [...this.posts].filter(post => post.title.toLocaleLowerCase().includes(this.sorch.toLocaleLowerCase()))
        }
    }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background: rgba(0, 0,0, 0.5);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 15px;
  }
  .menu {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>