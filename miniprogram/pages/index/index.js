"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("../../utils/create");
var index_1 = require("../../store/index");
var app = getApp();
create_1.default.Page(index_1.default, {
    use: [
        'motto',
        'userInfo',
        'hasUserInfo',
        'canIUse'
    ],
    computed: {
        reverseMotto: function () {
            return this.motto.split('').reverse().join('');
        }
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.store.data.userInfo = app.globalData.userInfo;
            this.store.data.hasUserInfo = true;
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.store.data.userInfo = res;
                _this.store.data.hasUserInfo = true;
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.store.data.userInfo = res.userInfo;
                    _this.store.data.hasUserInfo = true;
                }
            });
        }
        setTimeout(function () {
            _this.store.data.logs.push('abc');
            _this.store.data.motto = '123456';
        }, 1000);
        setTimeout(function () {
            _this.store.data.motto = 'abcdefg';
        }, 2000);
    },
    getUserInfo: function (e) {
        this.store.data.userInfo = e.detail.userInfo;
        this.store.data.hasUserInfo = true;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF1QztBQUN2QywyQ0FBcUM7QUFLckMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsZUFBSyxFQUFFO0lBQ2pCLEdBQUcsRUFBRTtRQUNILE9BQU87UUFDUCxVQUFVO1FBQ1YsYUFBYTtRQUNiLFNBQVM7S0FDVjtJQUNELFFBQVEsRUFBRTtRQUNSLFlBQVk7WUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNoRCxDQUFDO0tBQ0Y7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQU4saUJBK0JDO1FBOUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFBO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7U0FFbkM7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFBLEdBQUc7Z0JBQzdCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7Z0JBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7WUFDcEMsQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtnQkFDcEMsQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO1FBRUQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVSLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7UUFDbkMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO0lBRXBDLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlIGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9pbmRleCdcblxuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5jcmVhdGUuUGFnZShzdG9yZSwge1xuICB1c2U6IFtcbiAgICAnbW90dG8nLFxuICAgICd1c2VySW5mbycsXG4gICAgJ2hhc1VzZXJJbmZvJyxcbiAgICAnY2FuSVVzZSdcbiAgXSxcbiAgY29tcHV0ZWQ6IHtcbiAgICByZXZlcnNlTW90dG8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb3R0by5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpXG4gICAgfVxuICB9LFxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLnN0b3JlLmRhdGEudXNlckluZm8gPSBhcHAuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgdGhpcy5zdG9yZS5kYXRhLmhhc1VzZXJJbmZvID0gdHJ1ZVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLmRhdGEudXNlckluZm8gPSByZXNcbiAgICAgICAgdGhpcy5zdG9yZS5kYXRhLmhhc1VzZXJJbmZvID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zdG9yZS5kYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zdG9yZS5kYXRhLmhhc1VzZXJJbmZvID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kYXRhLmxvZ3MucHVzaCgnYWJjJylcbiAgICAgIHRoaXMuc3RvcmUuZGF0YS5tb3R0byA9ICcxMjM0NTYnXG4gICAgfSwgMTAwMClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kYXRhLm1vdHRvID0gJ2FiY2RlZmcnXG4gICAgfSwgMjAwMClcbiAgfSxcblxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICB0aGlzLnN0b3JlLmRhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuICAgIHRoaXMuc3RvcmUuZGF0YS5oYXNVc2VySW5mbyA9IHRydWVcblxuICB9XG59KVxuIl19