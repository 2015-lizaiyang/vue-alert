<template>
  <div class="alertBox" transition="bounce">{{message}}
  </div>
</template>

<style scope>
  .alertBox {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 15px 20px;
    background-color: rgba(0,0,0,0.75);
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
    text-align: center;
    max-width: 80%;
    -webkit-user-select: none;
  }
  .bounce-transition {
    transition: all .3s ease;
    transform: translate(-50%, -50%) scale(1, 1);
    opacity: 1;
  }
  .bounce-enter {
    transform: translate(-50%, -50%) scale(0.25, 0.25);
    opacity: 0;
  }
  .bounce-leave {
    transition: all .8s ease;
    opacity: 0;
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
