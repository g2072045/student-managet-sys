package com.cool.modules.teach.controller.admin.clazz;

import cn.hutool.json.JSONObject;
import com.cool.core.annotation.CoolRestController;
import com.cool.core.base.BaseController;
import com.cool.modules.teach.entity.ClazzEntity;
import com.cool.modules.teach.service.ClazzService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 班级管理控制器
 */
@Tag(name = "班级管理", description = "班级管理")
@CoolRestController(api = {"add", "delete", "update", "page", "list", "info"})
public class ClazzController extends BaseController<ClazzService, ClazzEntity> {

    @Override
    protected void init(HttpServletRequest request, JSONObject requestParams) {
        // 初始化配置
    }
}