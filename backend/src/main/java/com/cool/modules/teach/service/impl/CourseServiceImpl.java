package com.cool.modules.teach.service.impl;

import cn.hutool.json.JSONObject;
import com.cool.core.base.BaseServiceImpl;
import com.cool.modules.base.entity.sys.BaseSysDepartmentEntity;
import com.cool.modules.base.service.sys.BaseSysDepartmentService;
import com.cool.modules.teach.entity.CourseEntity;
import com.cool.modules.teach.entity.TeacherEntity;
import com.cool.modules.teach.mapper.CourseMapper;
import com.cool.modules.teach.service.CourseService;
import com.cool.modules.teach.service.TeacherService;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * 课程Service实现类
 */
@Service
@RequiredArgsConstructor
public class CourseServiceImpl extends BaseServiceImpl<CourseMapper, CourseEntity> implements CourseService {

    private final BaseSysDepartmentService baseSysDepartmentService;
    private final TeacherService teacherService;

    @Override
    public Object page(JSONObject requestParams, Page<CourseEntity> page, QueryWrapper queryWrapper) {
        // 调用父类分页方法获取数据
        Page<CourseEntity> result = (Page<CourseEntity>) super.page(requestParams, page, queryWrapper);
        
        // 处理关联数据
        for (CourseEntity course : result.getRecords()) {
            // 设置院系名称
            if (course.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(course.getDepartmentId());
                if (department != null) {
                    course.setDepartmentName(department.getName());
                }
            }
            
            // 设置教师名称
            if (course.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(course.getTeacherId());
                if (teacher != null) {
                    course.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object list(JSONObject requestParams, QueryWrapper queryWrapper) {
        // 调用父类列表方法获取数据
        java.util.List<CourseEntity> result = (java.util.List<CourseEntity>) super.list(requestParams, queryWrapper);
        
        // 处理关联数据
        for (CourseEntity course : result) {
            // 设置院系名称
            if (course.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(course.getDepartmentId());
                if (department != null) {
                    course.setDepartmentName(department.getName());
                }
            }
            
            // 设置教师名称
            if (course.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(course.getTeacherId());
                if (teacher != null) {
                    course.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object info(JSONObject requestParams, Long id) {
        // 调用父类详情方法获取数据
        CourseEntity course = (CourseEntity) super.info(requestParams, id);
        
        // 处理关联数据
        if (course != null) {
            // 设置院系名称
            if (course.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(course.getDepartmentId());
                if (department != null) {
                    course.setDepartmentName(department.getName());
                }
            }
            
            // 设置教师名称
            if (course.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(course.getTeacherId());
                if (teacher != null) {
                    course.setTeacherName(teacher.getName());
                }
            }
        }
        
        return course;
    }
}