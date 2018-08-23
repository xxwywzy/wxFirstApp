//index.js
Page({
  data:{
    hint:'请输入信息',
    buttonInfo:'发送',
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  }
})
