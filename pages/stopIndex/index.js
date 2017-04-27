/**
 *	HMT Bus GO! (WXSS VER.)
 *
 *	@author CRH380A-2722 <609657831@qq.com>
 *	@copyright 2016-2017 CRH380A-2722
 *	@license MIT
 *	@note 页面逻辑
 */

Page({

	data: {},

	onLoad: function(options) {
		wx.showLoading({
			title: 'Loading',
			mask: true
		});
		var instance = this;
		wx.request({
			url: 'https://hbus.scau.edu.cn/wxss/wxss.getStopList.php',
			method: 'GET',
			success: function(res) {
				instance.setData({stopList: res.data.stopList});
				wx.hideLoading();
			}
		});
		console.log(this.data);
	},

	onReady: function() {},

	onShow: function() {},

	onHide: function() {},

	onUnload: function() {},

	onPullDownRefresh: function() {},

	onReachBottom: function() {},

	onShareAppMessage: function() {},

	formSubmit: function(e) {
		var formData = e.detail.value;
		var link = '/pages/stopSearch/index?name=' + formData.name;
		wx.navigateTo({url: link});
	}

});