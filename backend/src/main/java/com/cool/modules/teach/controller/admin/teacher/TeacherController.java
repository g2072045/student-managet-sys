package com.cool.modules.teach.controller.admin.teacher;

import cn.hutool.json.JSONObject;
import com.cool.core.annotation.CoolRestController;
import com.cool.core.base.BaseController;
import com.cool.modules.teach.entity.TeacherEntity;
import com.cool.modules.teach.service.TeacherService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 教师管理控制器
 */
@Tag(name = "教师管理", description = "教师管理")
@CoolRestController(api = {"add", "delete", "update", "page", "list", "info"})
public class TeacherController extends BaseController<TeacherService, TeacherEntity> {

    @Override
    protected void init(HttpServletRequest request, JSONObject requestParams) {
        // 初始化配置
    }
}