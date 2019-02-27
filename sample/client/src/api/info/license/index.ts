import ajax from '@/common/utils/ajax';

// 获取店铺营业执照页面数据
export function getLicenseInfo(params: any) {
    return ajax.get('/api/app/info/license', { params });
}