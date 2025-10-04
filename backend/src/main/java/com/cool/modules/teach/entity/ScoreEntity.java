package com.cool.modules.teach.entity;

import com.cool.core.base.BaseEntity;
import com.mybatisflex.annotation.Table;
import com.cool.core.annotation.ColumnDefine;
import lombok.Getter;
import lombok.Setter;

/**
 * 成绩实体类
 */
@Getter
@Setter
@Table(value = "teach_score", comment = "成绩管理")
public class ScoreEntity extends BaseEntity<ScoreEntity> {

    @ColumnDefine(comment = "学生ID", type = "bigint", notNull = true)
    private Long studentId;

    @ColumnDefine(comment = "课程ID", type = "bigint", notNull = true)
    private Long courseId;

    @ColumnDefine(comment = "教师ID", type = "bigint", notNull = true)
    private Long teacherId;

    @ColumnDefine(comment = "分数")
    private Double score;

    @ColumnDefine(comment = "学期", notNull = true)
    private String semester;

    @ColumnDefine(comment = "状态 0:正常 1:重修", defaultValue = "0")
    private Integer status;

    // 关联字段，不在数据库中存储
    private String studentName;
    private String studentNo;
    private String courseName;
    private String teacherName;
}