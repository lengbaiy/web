import http from "@/utils/http";

export function getBanerAPI() {
  return http({
    url: '/home/banner'
  })
}
