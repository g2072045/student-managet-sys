package com.cool.modules.teach.controller.admin.attendance;

import cn.hutool.json.JSONObject;
import com.cool.core.annotation.CoolRestController;
import com.cool.core.base.BaseController;
import com.cool.modules.teach.entity.AttendanceEntity;
import com.cool.modules.teach.service.AttendanceService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 考勤管理控制器
 */
@Tag(name = "考勤管理", description = "考勤管理")
@CoolRestController(api = {"add", "delete", "update", "page", "list", "info"})
public class AttendanceController extends BaseController<AttendanceService, AttendanceEntity> {

    @Override
    protected void init(HttpServletRequest request, JSONObject requestParams) {
        // 初始化配置
    }
}