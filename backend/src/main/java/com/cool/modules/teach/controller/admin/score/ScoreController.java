package com.cool.modules.teach.controller.admin.score;

import cn.hutool.json.JSONObject;
import com.cool.core.annotation.CoolRestController;
import com.cool.core.base.BaseController;
import com.cool.modules.teach.entity.ScoreEntity;
import com.cool.modules.teach.service.ScoreService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 成绩管理控制器
 */
@Tag(name = "成绩管理", description = "成绩管理")
@CoolRestController(api = {"add", "delete", "update", "page", "list", "info"})
public class ScoreController extends BaseController<ScoreService, ScoreEntity> {

    @Override
    protected void init(HttpServletRequest request, JSONObject requestParams) {
        // 初始化配置
    }
}