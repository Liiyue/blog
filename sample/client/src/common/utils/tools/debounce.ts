export default function debounce(fn, idleTime = .5e3, ctx = null) {
    let lastTimer
    return (...args) => {
        clearTimeout(lastTimer)
        lastTimer = setTimeout(() => {
            fn.call(ctx, ...args)
        }, idleTime)
    } 
}
