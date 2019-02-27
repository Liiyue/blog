import App from '@kaola-core/app/lib'

/**
 * 隐藏 App 右上角的分享按钮
 */
const hideShareButton ={
    created(){
        App.hideShareButton();
    }
}

export {
    hideShareButton
}