import ajax from '@/common/utils/ajax';

// 获取食品经营许可证页面数据
export function getLicenseInfo(params: any) {
    return ajax.get('/api/app/info/foodBusinessLicense', { params });
}