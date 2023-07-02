import http from "@/utils/http";

export function getBanerAPI() {
  return http({
    url: '/home/banner'
  })
}
export const findNewAPI = () => {
  return http({
    url: '/home/new'
  })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return http({
    url: '/home/hot'
  })
}