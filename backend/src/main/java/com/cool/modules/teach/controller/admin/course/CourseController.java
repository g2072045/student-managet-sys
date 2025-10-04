package com.cool.modules.teach.controller.admin.course;

import cn.hutool.json.JSONObject;
import com.cool.core.annotation.CoolRestController;
import com.cool.core.base.BaseController;
import com.cool.modules.teach.entity.CourseEntity;
import com.cool.modules.teach.service.CourseService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 课程管理控制器
 */
@Tag(name = "课程管理", description = "课程管理")
@CoolRestController(api = {"add", "delete", "update", "page", "list", "info"})
public class CourseController extends BaseController<CourseService, CourseEntity> {

    @Override
    protected void init(HttpServletRequest request, JSONObject requestParams) {
        // 初始化配置
    }
}