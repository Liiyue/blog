<template>
  <div class="n-companyInfo">
    <header class="f-cb">
      <h1><i class="v-icon v-icon-square"></i>&nbsp;''网店食品经营者证照信息&nbsp;<i class="v-icon v-icon-square"></i></h1>
      <p>根据《网络食品安全违法行为查处办法》要求对网店食品证照信息公示如下</p>
    </header>
    <article>
      <div class="v-licenseWrap">
        <img class="logo" :src="info.foodBusinessLicense|thumbnailFiter({width:572})" alt="">
      </div>
    </article>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { hideShareButton } from '@/common/mixins/jsbridge'

const { mapState, mapActions } = createNamespacedHelpers('infoFoodBusiness');

export default {
  mixins: [hideShareButton],
  computed: {
    ...mapState([            
      'info'
    ]),
  },
  created(){
    let {businessId} = this.$route.params;

    this.getLicenseInfo({businessId});
  },

  methods: {
    ...mapActions([
      'getLicenseInfo'
    ])
  }

}
</script>

<style lang="scss">
.v-icon{
  display: inline-block;
  background: url("../../../assets/info/icon.png");background-size: 100px 100px;
  vertical-align: middle;

  &-square{
    width: 5px;height: 5px;
    background-position: 0 -52px;
  }
}
.n-companyInfo{
  overflow-x: hidden;
  -webkit-user-select: none; /* for Chrome */
  &>header{
    padding: 0 15px 10px 18px;
    &>h1{
      padding: 18px 0 15px 0;
      font-size: 15px;text-align: center;vertical-align: middle;

      &>i{
        vertical-align:20%;
      }
    }
    &>p:first-of-type{
      font-size: 12px;color: #666666;line-height: 17px;
    }
  }
  .v-licenseWrap{
    margin: 0 auto;width: 286px;border: 1px solid #dcdcdc;
    img{
      display: block;margin: 0 auto;max-width :100%;
    }
  }
  .v-licenseFoot{
    padding-top: 10px;
    padding-bottom: 32px;
    text-align: center;font-size: 12px; color:#999999;
  }
}
</style>

