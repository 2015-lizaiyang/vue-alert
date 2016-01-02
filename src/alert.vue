<template>
  <div class="alert-wrapper" transition="bounceIn">
    <div class="alertBox">{{message}}
    </div>
  </div>
</template>

<style scope>
  .alert-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    text-align: center;
    width: 100%;
    transform: translate(0, -50%);
    animation-duration: .75s;
  }
  .alertBox {
    padding: 15px 20px;
    display: inline-block;
    background-color: rgba(0,0,0,0.75);
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
    max-width: 80%;
    -webkit-user-select: none;
  }
  .bounceIn-transition {
    animation-name: bounceIn;
  }
  .bounceIn-leave {
    opacity: 0;
    transition: all .75s ease;
  }
  @keyframes bounceIn {
    0%,100%,20%,40%,60%,80% {
        animation-timing-function: cubic-bezier(0.215,.61,.355,1)
    }

    0% {
        opacity: 0;
        transform: translate(0, -50%) scale3d(.3,.3,.3);
    }

    20% {
        transform: translate(0, -50%) scale3d(1.1,1.1,1.1);
    }

    40% {
        transform: translate(0, -50%) scale3d(.9,.9,.9);
    }

    60% {
        opacity: 1;
        transform: translate(0, -50%) scale3d(1.03,1.03,1.03);
    }

    80% {
        transform: translate(0, -50%) scale3d(.97,.97,.97);
    }

    100% {
        opacity: 1;
        transform: translate(0, -50%) scale3d(1,1,1);
    }
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
