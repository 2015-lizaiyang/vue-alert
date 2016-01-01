<template>
  <div class="msgbox" transition="pop-bounce">{{message}}
  </div>
</template>

<style scope>
  .msgbox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 20px;
    background-color: rgba(0,0,0,0.75);
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
    -webkit-user-select: none;
  }
</style>

<script type="text/ecmascript-6" lang="babel">

  export default {

    methods: {
      
    },

    data() {
      return {
        message: ''
      };
    }
  }
</script>
