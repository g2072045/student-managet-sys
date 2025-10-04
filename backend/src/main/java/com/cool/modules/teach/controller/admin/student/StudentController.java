package com.cool.modules.teach.controller.admin.student;

import cn.hutool.json.JSONObject;
import com.cool.core.annotation.CoolRestController;
import com.cool.core.base.BaseController;
import com.cool.modules.teach.entity.StudentEntity;
import com.cool.modules.teach.service.StudentService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 学生管理控制器
 */
@Tag(name = "学生管理", description = "学生管理")
@CoolRestController(api = {"add", "delete", "update", "page", "list", "info"})
public class StudentController extends BaseController<StudentService, StudentEntity> {

    @Override
    protected void init(HttpServletRequest request, JSONObject requestParams) {
        // 初始化配置
    }
}