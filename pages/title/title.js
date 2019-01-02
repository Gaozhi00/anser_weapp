var app = getApp()
Page({
  data: {
    time: 20,
    timer: '',
    countDownNum: 20,
    question: '',
    questionnum: 0,
    surplusNum: 0,
    right_answer: [],
    check_answer: null,
    ifClick: false,
    tip: '',
    defen: 0,
    i: 0,
    userName: ''
  },

  onShow: function() {
    this.countDown();
  },

  countDown: function() {
    let that = this;
    var stock = setInterval(function() {
      that.setData({
        countDownNum: that.data.countDownNum - 1
      })
      if (that.data.countDownNum === 0) {
        that.nextQuestion();
      }
    }, 1000)
  },

  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：')
    console.log(e.detail.value)
    this.data.check_answer = e.detail.value
  },


  nextQuestion: function() {
    var that = this;
    if (that.data.ifClick === false) {
      var right_answer = that.data.right_answer;
      console.log(this.data.questionnum);
      console.log(that.data.check_answer)
      if (that.data.check_answer === that.data.right_answer[this.data.questionnum]) {
        this.data.i++;
        this.setData({
          questionnum: that.data.questionnum + 1,
          surplusNum: that.data.surplusNum - 1,
          i: this.data.i,
          tip: '',
          countDownNum: 20,
          defen: that.data.defen + 1
        })
      } else {
        console.log(that.data.right_answer[this.data.questionnum])
        this.data
        this.setData({
          ifClick: true,
          tip: '正确答案应是' + that.data.right_answer[this.data.questionnum] + '',
          countDownNum: 5
        })
      }
    } else {
      this.data.i++;
      this.setData({
        questionnum: that.data.questionnum + 1,
        surplusNum: that.data.surplusNum - 1,
        i: this.data.i,
        ifClick: false,
        tip: '',
        countDownNum: 20
      })
    }
    if (that.data.questionnum === 10) {
      wx.navigateTo({
        url: '../rank/rank?name=that.data.userName&defen=that.data.defen'
     })
    }
  },

  onload: function (options) {
    var userName = option.userName;
    var mobile = option.mobile;
    this.setData({
      userName: userName,
      mobile: mobile
    })
  },

  onLoad: function() {
    console.log('onLoad')
    var that = this;
    wx.request({
      url: 'https://www.nannanwj.top/php/api.php',
      data: {
        action: 'get_question',
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        for (let i = 0; i < res.data.length; i++) {
          var obj = Object.assign({}, res.data[i]);
          console.log(res.data[i])
          that.data.right_answer[i] = res.data[i].right_answer
        }
        that.setData({
          question: res.data
        });
      }
    })
  }

})