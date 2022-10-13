<template>
   <div>
      <div class="page__wrapper">
         <Button @click="changePage" class="btn" :class="{'page_active': page === pageN}" v-for="pageN in totalPages" :key="page">{{ pageN }}</Button>
      </div>
   </div>
</template>
<script>
import Button from './UI/Button.vue'
export default {
   components: { Button },
   props: {
            totalPages: {
               type: Number,
               required: true
            },
            page: {
               type: Number,
               required: true
            }
    },
    methods: {
        changePage (e) {
           let pageNumder = e.target.innerHTML
           this.$emit('changPage', pageNumder)
        }
    }
}
</script>
<style scoped>
.page__wrapper {
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin: 20px auto;
   padding: 10px;
}
.page_active {
   border: 3px solid rgb(41, 218, 132);
}
</style>