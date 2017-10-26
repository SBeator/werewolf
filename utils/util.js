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

const formatLog = (log) => {
  return `${formatTime(new Date(log.time))} [${log.tag}] ${log.message}`
}

const addLog = (tag, message) => {
  var logs = wx.getStorageSync('logs') || []

  var log = {
    tag,
    message,
    time: Date.now()
  }

  logs.unshift(log)

  console.log(formatLog(log))

  wx.setStorageSync('logs', logs)
}

const getLogs = () => {
  return (wx.getStorageSync('logs') || []).map((log) => {
    return formatLog(log)
  })
}

module.exports = {
  formatTime,
  addLog,
  getLogs
}
