const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const addLog = (tag, message) => {
  var logs = wx.getStorageSync('logs') || []

  logs.unshift({
    tag,
    message,
    time: Date.now()
  })
  wx.setStorageSync('logs', logs)
}

const getLogs = () => {
  return wx.getStorageSync('logs') || []
}

module.exports = {
  formatTime,
  addLog,
  getLogs
}
