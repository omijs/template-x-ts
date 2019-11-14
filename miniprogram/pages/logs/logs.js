"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var create_1 = require("../../utils/create");
var index_1 = require("../../store/index");
create_1.default.Page(index_1.default, {
    use: ['logs'],
    onLoad: function () {
        this.store.data.logs = (wx.getStorageSync('logs') || []).map(function (log) {
            return util_1.formatTime(new Date(log));
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNkM7QUFDN0MsNkNBQXVDO0FBQ3ZDLDJDQUFxQztBQUVyQyxnQkFBTSxDQUFDLElBQUksQ0FBQyxlQUFLLEVBQUU7SUFDakIsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2IsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO1lBQ3ZFLE9BQU8saUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vbG9ncy5qc1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgY3JlYXRlIGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9pbmRleCdcblxuY3JlYXRlLlBhZ2Uoc3RvcmUsIHtcbiAgdXNlOiBbJ2xvZ3MnXSxcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdG9yZS5kYXRhLmxvZ3MgPSAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSlcbiAgICB9KVxuICB9XG59KVxuIl19