<template>
  <div id="search_land_searchland" class="search-land">
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      class="association-normal"
    >
      <li
        v-for="(item, index) in searchResults"
        v-bind:key="item.associationProductName"
        v-bind:data-index="index"
      >
        <span class="association-product-name" @click="goToSearchPage(item.associationProductName)">{{ item.associationProductName }}</span>
        <span pingparam="1"
              class="association-product-btn" v-for="(otherItem, index) in item.associationOtherProducts"
              @click="goToSearchPage(otherItem.name)"
        >{{ otherItem.name }}</span>
      </li>
    </transition-group>
  </div>
</template>
<style scpoed>
  .association-normal {
    width: 100%;
    padding: 0;
    padding-left: 12px;
    margin: 0;
    background-color: #fff;
  }

  .association-normal li {
    height: 42px;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    /*-webkit-justify-content: center;*/
    /*justify-content: center;*/
    border-bottom: 1px solid #F8F8F8;
    padding-right: 12px;
  }

  ul, ol, li {
    list-style: none outside none;
  }

  a {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  .association-product-name {
    -webkit-flex-grow:1;
    flex-grow:1;
  }

  .association-product-btn {
    padding-left: 10px;
    padding-right: 10px;
    background-color: #f0f2f5;
    margin-right: 10px;
  }
</style>
<script>
  import Velocity from 'velocity-animate'
  export default{
    data(){
      return {}
    },
    components: {},
    computed: {
      searchResults() {
        return this.$store.getters.searchResults
      }
    },
    mounted() {
//      console.log(this.searchResults)
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter: function (el, done) {
        let delay = el.dataset.index * 50
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1, height: '42px' },
            { complete: done }
          )
        }, delay)
      },
      leave: function (el, done) {
        let delay = el.dataset.index * 50
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
          )
        }, delay)
      },
      goToSearchPage(query) {
        this.$router.push({ name: 'search', params: { query: query }})
        this.$store.dispatch('closeSearchBox')
//        this.$refs.textField.inputValue = ''
      }
    }
  }
</script>
