package com.cool.modules.teach.entity;

import com.cool.core.base.BaseEntity;
import com.mybatisflex.annotation.Table;
import com.cool.core.annotation.ColumnDefine;
import lombok.Getter;
import lombok.Setter;

/**
 * 课程实体类
 */
@Getter
@Setter
@Table(value = "teach_course", comment = "课程管理")
public class CourseEntity extends BaseEntity<CourseEntity> {

    @ColumnDefine(comment = "课程代码", notNull = true)
    private String courseCode;

    @ColumnDefine(comment = "课程名称", notNull = true)
    private String name;

    @ColumnDefine(comment = "学分")
    private Double credit;

    @ColumnDefine(comment = "学时")
    private Integer hours;

    @ColumnDefine(comment = "课程类型 0:必修 1:选修", defaultValue = "0")
    private Integer type;

    @ColumnDefine(comment = "所属院系ID", type = "bigint", notNull = true)
    private Long departmentId;

    @ColumnDefine(comment = "授课教师ID", type = "bigint")
    private Long teacherId;

    @ColumnDefine(comment = "状态 0:正常 1:停用", defaultValue = "0")
    private Integer status;

    // 关联字段，不在数据库中存储
    private String departmentName;
    private String teacherName;
}