package com.cool.modules.teach.service.impl;

import cn.hutool.json.JSONObject;
import com.cool.core.base.BaseServiceImpl;
import com.cool.modules.teach.entity.CourseEntity;
import com.cool.modules.teach.entity.ScoreEntity;
import com.cool.modules.teach.entity.StudentEntity;
import com.cool.modules.teach.entity.TeacherEntity;
import com.cool.modules.teach.mapper.ScoreMapper;
import com.cool.modules.teach.service.CourseService;
import com.cool.modules.teach.service.ScoreService;
import com.cool.modules.teach.service.StudentService;
import com.cool.modules.teach.service.TeacherService;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * 成绩Service实现类
 */
@Service
@RequiredArgsConstructor
public class ScoreServiceImpl extends BaseServiceImpl<ScoreMapper, ScoreEntity> implements ScoreService {

    private final StudentService studentService;
    private final CourseService courseService;
    private final TeacherService teacherService;

    @Override
    public Object page(JSONObject requestParams, Page<ScoreEntity> page, QueryWrapper queryWrapper) {
        // 调用父类分页方法获取数据
        Page<ScoreEntity> result = (Page<ScoreEntity>) super.page(requestParams, page, queryWrapper);
        
        // 处理关联数据
        for (ScoreEntity score : result.getRecords()) {
            // 设置学生信息
            if (score.getStudentId() != null) {
                StudentEntity student = studentService.getById(score.getStudentId());
                if (student != null) {
                    score.setStudentName(student.getName());
                    score.setStudentNo(student.getStudentNo());
                }
            }
            
            // 设置课程信息
            if (score.getCourseId() != null) {
                CourseEntity course = courseService.getById(score.getCourseId());
                if (course != null) {
                    score.setCourseName(course.getName());
                }
            }
            
            // 设置教师信息
            if (score.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(score.getTeacherId());
                if (teacher != null) {
                    score.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object list(JSONObject requestParams, QueryWrapper queryWrapper) {
        // 调用父类列表方法获取数据
        java.util.List<ScoreEntity> result = (java.util.List<ScoreEntity>) super.list(requestParams, queryWrapper);
        
        // 处理关联数据
        for (ScoreEntity score : result) {
            // 设置学生信息
            if (score.getStudentId() != null) {
                StudentEntity student = studentService.getById(score.getStudentId());
                if (student != null) {
                    score.setStudentName(student.getName());
                    score.setStudentNo(student.getStudentNo());
                }
            }
            
            // 设置课程信息
            if (score.getCourseId() != null) {
                CourseEntity course = courseService.getById(score.getCourseId());
                if (course != null) {
                    score.setCourseName(course.getName());
                }
            }
            
            // 设置教师信息
            if (score.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(score.getTeacherId());
                if (teacher != null) {
                    score.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object info(JSONObject requestParams, Long id) {
        // 调用父类详情方法获取数据
        ScoreEntity score = (ScoreEntity) super.info(requestParams, id);
        
        // 处理关联数据
        if (score != null) {
            // 设置学生信息
            if (score.getStudentId() != null) {
                StudentEntity student = studentService.getById(score.getStudentId());
                if (student != null) {
                    score.setStudentName(student.getName());
                    score.setStudentNo(student.getStudentNo());
                }
            }
            
            // 设置课程信息
            if (score.getCourseId() != null) {
                CourseEntity course = courseService.getById(score.getCourseId());
                if (course != null) {
                    score.setCourseName(course.getName());
                }
            }
            
            // 设置教师信息
            if (score.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(score.getTeacherId());
                if (teacher != null) {
                    score.setTeacherName(teacher.getName());
                }
            }
        }
        
        return score;
    }
}