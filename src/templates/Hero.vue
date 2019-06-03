<template>
  <div id="hero">
    <div id="titleWrapper">
      <h1>
        Usługi <br />
        Remontowe <br />
        Arkadiusz Siekierski <br />
      </h1>
    </div>
    <div id="heroImageWrapper">
      <img src="../assets/images/narzedzia.png" id="heroImage" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'hero',
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/Theme.scss";

#hero {
  height: 100vh;
  width: 100%;
  display: flex;
  background: linear-gradient(65deg, $white 55%, $blue 45%);

  #heroImageWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;
    height: 100vh;

    #heroImage {
      height: 80vh;
    }
  }

  #titleWrapper {
    display: flex;
    align-items: center;
    width: 60%;
    height: 100vh;
    color: $blue-darker;
    padding-left: 50px;

    h1 {
      font-size: 4em;
    }
  }

  @media #{$mq-small} {
    background: $blue-darker;

    #titleWrapper {
      color: $white;

      h1 {
        font-size: 3em;
        line-height: 1.5em;
      }
    }
  }

  @media #{$mq-mobile} {
    #heroImageWrapper {
      display: none;
    }

    #titleWrapper {
      width: 100%;
      padding-left: 20px;
    }
  }
}
</style>
