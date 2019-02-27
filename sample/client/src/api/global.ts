import ajax from '@/common/utils/ajax';

// 查询本页面是否被禁用
export function queryShopForbid(params: any){
    return ajax.get('/api/shopForbid', {params})
}