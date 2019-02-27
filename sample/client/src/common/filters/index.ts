/**
 * 公共filters,已在入口处引用
 */
import thumbnail from '@kaola-core/util/lib/tools/thumbnail';

const filters = {

    /**
     * 获取nos压缩处理后图片的链接
     * 默认：thumbnail=0x0：保持图片完整，图片大小按大的那个边等比缩放，相当于：backgrount-size: contain；
     * @params options:
     *  @param {Number} options.width 宽度 (optional, default 0)
     *  @param {Number} options.height 高度 (optional, default 0)
     *  @param {Number} options.quality 压缩质量  (optional, default 95)
     *  @param {Number} options.scaleType  0：图片的所有边小于等于所设置的最小边长； 1：若图片超出限制大小，则图片大小按按小的那个边等比缩放，超出部分做一次剪切，相当于：background-size: cover； 2：图片的所有边大于等于所设置的最长边长，因此可能会得到超出限制大小的图片，没有对应的background-size (optional, default 0)
     *  @param {Boolean} options.needDomainConverge 受否按照 constants.CONVERGE_DOMAIN 进行域名收敛 (optional, default true)
     */
    thumbnailFiter(value, options:any={needDomainConverge: false}) {
        if(!value){return null}
        
        return thumbnail(value, options)
    }

}

export default {
    install(Vue) {
        
        Object.entries(filters).map(([name, fn]) => {
            Vue.filter(name, fn)
        })
    }
}
