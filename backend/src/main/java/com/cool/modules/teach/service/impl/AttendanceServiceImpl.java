package com.cool.modules.teach.service.impl;

import cn.hutool.json.JSONObject;
import com.cool.core.base.BaseServiceImpl;
import com.cool.modules.teach.entity.AttendanceEntity;
import com.cool.modules.teach.entity.ClazzEntity;
import com.cool.modules.teach.entity.CourseEntity;
import com.cool.modules.teach.entity.StudentEntity;
import com.cool.modules.teach.entity.TeacherEntity;
import com.cool.modules.teach.mapper.AttendanceMapper;
import com.cool.modules.teach.service.AttendanceService;
import com.cool.modules.teach.service.ClazzService;
import com.cool.modules.teach.service.CourseService;
import com.cool.modules.teach.service.StudentService;
import com.cool.modules.teach.service.TeacherService;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * 考勤Service实现类
 */
@Service
@RequiredArgsConstructor
public class AttendanceServiceImpl extends BaseServiceImpl<AttendanceMapper, AttendanceEntity> implements AttendanceService {

    private final StudentService studentService;
    private final CourseService courseService;
    private final TeacherService teacherService;

    @Override
    public Object page(JSONObject requestParams, Page<AttendanceEntity> page, QueryWrapper queryWrapper) {
        // 调用父类分页方法获取数据
        Page<AttendanceEntity> result = (Page<AttendanceEntity>) super.page(requestParams, page, queryWrapper);
        
        // 处理关联数据
        for (AttendanceEntity attendance : result.getRecords()) {
            // 设置学生信息
            if (attendance.getStudentId() != null) {
                StudentEntity student = studentService.getById(attendance.getStudentId());
                if (student != null) {
                    attendance.setStudentName(student.getName());
                    attendance.setStudentNo(student.getStudentNo());
                }
            }
            
            // 设置课程信息
            if (attendance.getCourseId() != null) {
                CourseEntity course = courseService.getById(attendance.getCourseId());
                if (course != null) {
                    attendance.setCourseName(course.getName());
                }
            }
            
            // 设置教师信息
            if (attendance.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(attendance.getTeacherId());
                if (teacher != null) {
                    attendance.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object list(JSONObject requestParams, QueryWrapper queryWrapper) {
        // 调用父类列表方法获取数据
        java.util.List<AttendanceEntity> result = (java.util.List<AttendanceEntity>) super.list(requestParams, queryWrapper);
        
        // 处理关联数据
        for (AttendanceEntity attendance : result) {
            // 设置学生信息
            if (attendance.getStudentId() != null) {
                StudentEntity student = studentService.getById(attendance.getStudentId());
                if (student != null) {
                    attendance.setStudentName(student.getName());
                    attendance.setStudentNo(student.getStudentNo());
                }
            }
            
            // 设置课程信息
            if (attendance.getCourseId() != null) {
                CourseEntity course = courseService.getById(attendance.getCourseId());
                if (course != null) {
                    attendance.setCourseName(course.getName());
                }
            }
            
            // 设置教师信息
            if (attendance.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(attendance.getTeacherId());
                if (teacher != null) {
                    attendance.setTeacherName(teacher.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object info(JSONObject requestParams, Long id) {
        // 调用父类详情方法获取数据
        AttendanceEntity attendance = (AttendanceEntity) super.info(requestParams, id);
        
        // 处理关联数据
        if (attendance != null) {
            // 设置学生信息
            if (attendance.getStudentId() != null) {
                StudentEntity student = studentService.getById(attendance.getStudentId());
                if (student != null) {
                    attendance.setStudentName(student.getName());
                    attendance.setStudentNo(student.getStudentNo());
                }
            }
            
            // 设置课程信息
            if (attendance.getCourseId() != null) {
                CourseEntity course = courseService.getById(attendance.getCourseId());
                if (course != null) {
                    attendance.setCourseName(course.getName());
                }
            }
            
            // 设置教师信息
            if (attendance.getTeacherId() != null) {
                TeacherEntity teacher = teacherService.getById(attendance.getTeacherId());
                if (teacher != null) {
                    attendance.setTeacherName(teacher.getName());
                }
            }
        }
        
        return attendance;
    }
}