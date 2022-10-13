<template lang="">
   <button><slot></slot></button>
</template>
<script>
export default {
    name: 'Button'
}
</script>
<style>
   .btn {
      padding: 10px 20px 10px 20px;
      color: black;
      background-color: white;
      border-radius: 10px;
      font-size: 15px;
      align-self: flex-end;
   }
   .btn:hover {
      cursor: pointer;
   }
</style>