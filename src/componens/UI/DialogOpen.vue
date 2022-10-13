<template>
   <div class="dialog" v-if="this.show" @click.sptop="CloseDialog">
      <div @click.stop class="dialog__conteiner">
         <slot></slot>
      </div>
   </div>
</template>
<script>
export default {
   name: 'my-dialog',
   props: {
      show: {
         true: Boolean,
         default: false
      }
   },
   methods: {
      CloseDialog () {
         this.$emit('closeDialog', false)
      }
   }
}
</script>
<style scoped>
   .dialog {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0,0, 0.5);
      position: fixed;
      display: flex;
   }
   .dialog__conteiner {
      margin: auto;
      background-color: #fff;
      border-radius: 10px;
      padding: 50px;
      border: 2px solid #fff;
      background-color: rgba(0, 0,0, 1);
   }
</style>