//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (util.getLogs()).map(log => {
        return `${util.formatTime(new Date(log.time))} [${log.tag}] ${log.message}`
      })
    })
  }
})
