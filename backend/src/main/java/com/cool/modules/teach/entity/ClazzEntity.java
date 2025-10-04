package com.cool.modules.teach.entity;

import com.cool.core.base.BaseEntity;
import com.mybatisflex.annotation.Table;
import com.cool.core.annotation.ColumnDefine;
import lombok.Getter;
import lombok.Setter;

/**
 * 班级实体类
 */
@Getter
@Setter
@Table(value = "teach_clazz", comment = "班级管理")
public class ClazzEntity extends BaseEntity<ClazzEntity> {

    @ColumnDefine(comment = "班级名称", notNull = true)
    private String name;

    @ColumnDefine(comment = "年级", notNull = true)
    private String grade;

    @ColumnDefine(comment = "班级人数", defaultValue = "0")
    private Integer number;

    @ColumnDefine(comment = "班主任ID", type = "bigint")
    private Long teacherId;

    @ColumnDefine(comment = "所属院系ID", type = "bigint", notNull = true)
    private Long departmentId;

    @ColumnDefine(comment = "状态 0:正常 1:停用", defaultValue = "0")
    private Integer status;

    // 关联字段，不在数据库中存储
    private String teacherName;
    private String departmentName;
}