package com.cool.modules.teach.entity;

import com.cool.core.base.BaseEntity;
import com.mybatisflex.annotation.Table;
import com.cool.core.annotation.ColumnDefine;
import lombok.Getter;
import lombok.Setter;

/**
 * 教师实体类
 */
@Getter
@Setter
@Table(value = "teach_teacher", comment = "教师管理")
public class TeacherEntity extends BaseEntity<TeacherEntity> {

    @ColumnDefine(comment = "工号", notNull = true)
    private String teacherNo;

    @ColumnDefine(comment = "姓名", notNull = true)
    private String name;

    @ColumnDefine(comment = "性别 0:男 1:女 2:未知", defaultValue = "2")
    private Integer gender;

    @ColumnDefine(comment = "年龄")
    private Integer age;

    @ColumnDefine(comment = "电话")
    private String phone;

    @ColumnDefine(comment = "邮箱")
    private String email;

    @ColumnDefine(comment = "职称")
    private String title;

    @ColumnDefine(comment = "关联用户ID", type = "bigint")
    private Long userId;

    @ColumnDefine(comment = "用户名", notNull = true)
    private String username;

    @ColumnDefine(comment = "密码", notNull = true)
    private String password;

    @ColumnDefine(comment = "所属院系ID", type = "bigint", notNull = true)
    private Long departmentId;

    @ColumnDefine(comment = "状态 0:正常 1:离职", defaultValue = "0")
    private Integer status;

    // 关联字段，不在数据库中存储
    private String departmentName;
}