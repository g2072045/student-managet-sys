package com.cool.modules.teach.entity;

import com.cool.core.base.BaseEntity;
import com.mybatisflex.annotation.Table;
import com.cool.core.annotation.ColumnDefine;
import lombok.Getter;
import lombok.Setter;

/**
 * 学生实体类
 */
@Getter
@Setter
@Table(value = "teach_student", comment = "学生管理")
public class StudentEntity extends BaseEntity<StudentEntity> {

    @ColumnDefine(comment = "学号", notNull = true)
    private String studentNo;

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

    @ColumnDefine(comment = "地址")
    private String address;

    @ColumnDefine(comment = "班级ID", type = "bigint", notNull = true)
    private Long clazzId;

    @ColumnDefine(comment = "关联用户ID", type = "bigint")
    private Long userId;

    @ColumnDefine(comment = "用户名", notNull = true)
    private String username;

    @ColumnDefine(comment = "密码", notNull = true)
    private String password;

    @ColumnDefine(comment = "状态 0:正常 1:休学 2:毕业 3:其他", defaultValue = "0")
    private Integer status;

    // 关联字段，不在数据库中存储
    private String clazzName;
    private String departmentName;
}