<template>
  <div class="gridlist-container">
    <mu-grid-list class="gridlist">
      <mu-sub-header> 生活不止眼前的苟且, 还有诗和远方 </mu-sub-header>
      <mu-grid-tile v-for="tile in list" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1"
                    :cols="tile.featured ? 2 : 1">
        <router-link :to="{ path: tile.link }"><img :src="tile.image"/></router-link>
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle">by <b>{{tile.author}}</b></span>
        <mu-icon-button icon="star_border" slot="action"/>
      </mu-grid-tile>
      <footer class="box-footer">
        <div class="box-footer-copyright">Copyright © 2016-2017 business.com 版权所有</div>
      </footer>
    </mu-grid-list>
  </div>
</template>
<style scope>
  .gridlist-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .gridlist {
    width: 100%;
    /*height: 500px;*/
    height: 100%;
    overflow-y: auto;
  }
  .mu-grid-tile img {
    height: 100%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    position: relative;
    left: 50%;
  }
  .box-footer {
    width: 100%;
    height: 100px;
  }

  .box-footer-copyright {
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #848689;
    width: 100%;
    /*font-size: 12px;*/
  }
</style>
<script>
  import breakfast from '../assets/images/breakfast.f109829.jpg'
  import burger from '../assets/images/burger.532a051.jpg'
  import camera from '../assets/images/camera.1c54930.jpg'
  import hats from '../assets/images/hats.04a08b2.jpg'
  import honey from '../assets/images/honey.6810375.jpg'
  import morning from '../assets/images/morning.6e04e04.jpg'
  import vegetables from '../assets/images/vegetables.30f55d5.jpg'
  import water from '../assets/images/water-plant.97ca350.jpg'

  /* import muse-ui component */
  import { gridList as muGridList, gridTile as muGridTile } from 'muse-ui/src/gridList'
  import muSubHeader from 'muse-ui/src/subHeader'
  import muIconButton from 'muse-ui/src/iconButton'
  export default{
    name: 'home-page',
    data(){
      return {
        list: [{
          image: breakfast,
          title: '类型一',
          author: 'Myron',
          featured: true,
          link: 'search'
        }, {
          image: burger,
          title: 'Burger',
          author: 'Linyu',
          link: 'search'
        }, {
          image: camera,
          title: 'Camera',
          author: 'ruolin',
          link: 'search'
        }, {
          image: hats,
          title: 'Hats',
          author: 'kakali',
          link: 'search'
        }, {
          image: honey,
          title: 'Honey',
          author: 'yuyang',
          link: 'search'
        }, {
          image: morning,
          title: '类型二',
          author: 'mokayi',
          featured: true,
          link: 'search'
        }, {
          image: vegetables,
          title: 'Vegetables',
          author: 'NUyyyyyyy',
          link: 'search'
        }, {
          image: camera,
          title: 'Camera',
          author: 'ruolin',
          link: 'search'
        }, {
          image: hats,
          title: 'Hats',
          author: 'kakali',
          link: 'search'
        }, {
          image: honey,
          title: 'Honey',
          author: 'yuyang',
          link: 'search'
        }, {
          image: morning,
          title: '类型二',
          author: 'mokayi',
          featured: true,
          link: 'search'
        }, {
          image: vegetables,
          title: 'Vegetables',
          author: 'NUyyyyyyy',
          link: 'search'
        }, {
          image: water,
          title: 'water',
          author: 'TDDyyyyyyy',
          link: 'search'
        }]
      }
    },
    components: {
      muGridList,
      muGridTile,
      muSubHeader,
      muIconButton
    },
    methods: {}
  }
</script>
