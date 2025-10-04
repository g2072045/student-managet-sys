package com.cool.modules.teach.service.impl;

import cn.hutool.json.JSONObject;
import com.cool.core.base.BaseServiceImpl;
import com.cool.modules.base.entity.sys.BaseSysDepartmentEntity;
import com.cool.modules.base.service.sys.BaseSysDepartmentService;
import com.cool.modules.teach.entity.ClazzEntity;
import com.cool.modules.teach.entity.TeacherEntity;
import com.cool.modules.teach.mapper.ClazzMapper;
import com.cool.modules.teach.service.ClazzService;
import com.cool.modules.teach.service.TeacherService;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * 班级Service实现类
 */
@Service
@RequiredArgsConstructor
public class ClazzServiceImpl extends BaseServiceImpl<ClazzMapper, ClazzEntity> implements ClazzService {

    private final BaseSysDepartmentService baseSysDepartmentService;
    private final TeacherService teacherService;

    @Override
    public Object page(JSONObject requestParams, Page<ClazzEntity> page, QueryWrapper queryWrapper) {
        // 调用父类分页方法获取数据
        Page<ClazzEntity> result = (Page<ClazzEntity>) super.page(requestParams, page, queryWrapper);
        
        // 处理关联数据
        for (ClazzEntity clazz : result.getRecords()) {
            // 设置院系名称
            if (clazz.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(clazz.getDepartmentId());
                if (department != null) {
                    clazz.setDepartmentName(department.getName());
                }
            }
            
            // 设置班主任名称
            if (clazz.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(clazz.getTeacherId());
                if (teacher != null) {
                    clazz.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object list(JSONObject requestParams, QueryWrapper queryWrapper) {
        // 调用父类列表方法获取数据
        java.util.List<ClazzEntity> result = (java.util.List<ClazzEntity>) super.list(requestParams, queryWrapper);
        
        // 处理关联数据
        for (ClazzEntity clazz : result) {
            // 设置院系名称
            if (clazz.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(clazz.getDepartmentId());
                if (department != null) {
                    clazz.setDepartmentName(department.getName());
                }
            }
            
            // 设置班主任名称
            if (clazz.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(clazz.getTeacherId());
                if (teacher != null) {
                    clazz.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object info(JSONObject requestParams, Long id) {
        // 调用父类详情方法获取数据
        ClazzEntity clazz = (ClazzEntity) super.info(requestParams, id);
        
        // 处理关联数据
        if (clazz != null) {
            // 设置院系名称
            if (clazz.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(clazz.getDepartmentId());
                if (department != null) {
                    clazz.setDepartmentName(department.getName());
                }
            }
            
            // 设置班主任名称
            if (clazz.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(clazz.getTeacherId());
                if (teacher != null) {
                    clazz.setTeacherName(teacher.getName());
                }
            }
        }
        
        return clazz;
    }
}