package com.cool.modules.teach.entity;

import com.cool.core.base.BaseEntity;
import com.mybatisflex.annotation.Table;
import com.cool.core.annotation.ColumnDefine;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * 考勤实体类
 */
@Getter
@Setter
@Table(value = "teach_attendance", comment = "考勤管理")
public class AttendanceEntity extends BaseEntity<AttendanceEntity> {

    @ColumnDefine(comment = "学生ID", type = "bigint", notNull = true)
    private Long studentId;

    @ColumnDefine(comment = "课程ID", type = "bigint", notNull = true)
    private Long courseId;

    @ColumnDefine(comment = "教师ID", type = "bigint", notNull = true)
    private Long teacherId;

    @ColumnDefine(comment = "考勤日期", notNull = true)
    private Date attendanceDate;

    @ColumnDefine(comment = "考勤状态 0:正常 1:迟到 2:早退 3:旷课 4:请假", defaultValue = "0")
    private Integer status;

    @ColumnDefine(comment = "备注")
    private String remark;

    // 关联字段，不在数据库中存储
    private String studentName;
    private String studentNo;
    private String courseName;
    private String teacherName;
}