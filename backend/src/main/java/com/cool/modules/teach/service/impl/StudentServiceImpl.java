package com.cool.modules.teach.service.impl;

import cn.hutool.json.JSONObject;
import com.cool.core.base.BaseServiceImpl;
import com.cool.core.base.ModifyEnum;
import com.cool.modules.base.entity.sys.BaseSysUserEntity;
import com.cool.modules.base.service.sys.BaseSysUserService;
import com.cool.modules.teach.entity.ClazzEntity;
import com.cool.modules.teach.entity.StudentEntity;
import com.cool.modules.teach.mapper.StudentMapper;
import com.cool.modules.teach.service.ClazzService;
import com.cool.modules.teach.service.StudentService;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;

/**
 * 学生Service实现类
 */
@Service
@RequiredArgsConstructor
public class StudentServiceImpl extends BaseServiceImpl<StudentMapper, StudentEntity> implements StudentService {

    private final BaseSysUserService baseSysUserService;
    private final ClazzService clazzService;

    @Override
    public Object page(JSONObject requestParams, Page<StudentEntity> page, QueryWrapper queryWrapper) {
        // 调用父类分页方法获取数据
        Page<StudentEntity> result = (Page<StudentEntity>) super.page(requestParams, page, queryWrapper);
        
        // 处理关联数据
        for (StudentEntity student : result.getRecords()) {
            // 设置班级名称
            if (student.getClazzId() != null) {
                ClazzEntity clazz = clazzService.getById(student.getClazzId());
                if (clazz != null) {
                    student.setClazzName(clazz.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object list(JSONObject requestParams, QueryWrapper queryWrapper) {
        // 调用父类列表方法获取数据
        java.util.List<StudentEntity> result = (java.util.List<StudentEntity>) super.list(requestParams, queryWrapper);
        
        // 处理关联数据
        for (StudentEntity student : result) {
            // 设置班级名称
            if (student.getClazzId() != null) {
                ClazzEntity clazz = clazzService.getById(student.getClazzId());
                if (clazz != null) {
                    student.setClazzName(clazz.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object info(JSONObject requestParams, Long id) {
        // 调用父类详情方法获取数据
        StudentEntity student = (StudentEntity) super.info(requestParams, id);
        
        // 处理关联数据
        if (student != null) {
            // 设置班级名称
            if (student.getClazzId() != null) {
                ClazzEntity clazz = clazzService.getById(student.getClazzId());
                if (clazz != null) {
                    student.setClazzName(clazz.getName());
                }
            }
        }
        
        return student;
    }

    @Override
    public Object add(JSONObject requestParams, StudentEntity entity) {
        // 创建关联用户
        BaseSysUserEntity userEntity = new BaseSysUserEntity();
        userEntity.setUsername(entity.getUsername());
        userEntity.setPassword(entity.getPassword());
        userEntity.setName(entity.getName());
        userEntity.setDepartmentId(entity.getClazzId()); // 学生所属部门暂时设置为班级ID
        userEntity.setStatus(1); // 默认启用
        userEntity.setNickName(entity.getName());
        
        // 保存用户并获取ID
        Long userId = baseSysUserService.add(userEntity);
        
        // 设置学生关联的用户ID
        entity.setUserId(userId);
        
        // 关联学生角色（角色ID为10）
        requestParams.set("roleIdList", new Long[]{10L});
        
        return super.add(requestParams, entity);
    }

    @Override
    public boolean update(JSONObject requestParams, StudentEntity entity) {
        // 更新学生信息时，同时更新关联用户信息
        if (entity.getUserId() != null) {
            BaseSysUserEntity userEntity = baseSysUserService.getById(entity.getUserId());
            if (userEntity != null) {
                userEntity.setUsername(entity.getUsername());
                userEntity.setName(entity.getName());
                userEntity.setDepartmentId(entity.getClazzId());
                
                // 如果密码不为空则更新密码
                if (entity.getPassword() != null && !entity.getPassword().isEmpty()) {
                    userEntity.setPassword(entity.getPassword());
                }
                
                baseSysUserService.update(userEntity);
            }
        }
        
        return super.update(requestParams, entity);
    }

    @Override
    public void modifyAfter(JSONObject requestParams, StudentEntity studentEntity, ModifyEnum type) {
        // 删除学生时，同时删除关联用户
        if (type == ModifyEnum.DELETE && studentEntity.getUserId() != null) {
            baseSysUserService.delete(studentEntity.getUserId());
        }
    }
}