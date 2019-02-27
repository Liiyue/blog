// 公共mixins
import App from '@kaola-core/app/lib'
import { queryShopForbid } from '@/api/global';

/**
 * 设置分享信息
 * @param options 
 */
function setShareConfig(options:any = {}){
    let defaultOption = {
        link: location.href,
        desc: '我在传说中最靠谱的''''发现一个不错的店铺，快来一起买吧！',
        title: '''''',               
        img_url: '//haitao.nos.netease.com/c1dae364800148d88a29d52f946fc6f2.jpg',
        timeLineTitle: ''''''
    }

    let shareConfig = Object.assign(defaultOption, options)

    shareConfig.img_url += '?imageView&thumbnail=150x0'
    shareConfig.wbpost = `${shareConfig.desc}${shareConfig.link} @''''官方微博`
    shareConfig.timeLineTitle = `${shareConfig.timeLineTitle}-${shareConfig.desc}`

    window['shareConfig'] = shareConfig
}

/**
 * 查询本页面是否被禁用
 * @param {Object} to
 */

async function handleShopForbid(to) {
    let { params, query, params: {businessId, categoryId1} } = to
    let shopId = params.shopId || query.shopId
    try{
        await queryShopForbid({shopId, businessId, categoryId1})
        return Promise.resolve()
    }catch(error){
        return Promise.reject()
    }
}

export default {
    beforeRouteEnter (to, from, next) {
        //在导航前，先查询本页面是否被禁用，如果被禁用，跳转404页面
        handleShopForbid(to).then((res: any) => {
            next()
        }).catch((e) => {
            next(vm => vm.$router.push('/404'))
        })      
    },
    beforeCreate(){
        // 初始化jsbridge
        App.init()

        // 初始化分享信息
        setShareConfig()
    },

    methods: {
        setShareConfig
    }
}