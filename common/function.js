import { serverApiUrl } from './endpoint'

export function getUrlImage(listShortUrl) {
  var listFullUrl = new Array()
  if (!listShortUrl) return
  if (listShortUrl && listShortUrl.length > 0) {
    listShortUrl.map(async (item, key) => {
      let imageUrl = item.imagethumbUrl
      let fullUrl = serverApiUrl.concat(imageUrl).toString()
      await listFullUrl.push(fullUrl)
    })
  }

  return listFullUrl
}

export function getCustomTime(time) {
  if (!time) return
  var moment = require('moment')
  moment.locale('vi')
  let fromNow = moment(time).parseZone().fromNow()
  return fromNow
}