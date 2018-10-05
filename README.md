# 一个非常简单的Redux使用范例 基于Angular6

本项目在Angular6项目上展示Redux的用法 ，Rudex的使用步骤分为：

第一步： 安装@ngrx/store 

第二步： 在app.module中 import { StoreModule } from '@ngrx/store' 

第三步：创建store文件夹 设置reducer和action

第四步：创建业务代码 对store进行select或者dispatch操作

第五步：在不同的组建中调用业务代码对state进行获取或者更新


## 演示命令
`npm install` 
`ng serve` 

## 演示效果

当点击app-main组件中的登录按钮 ，app-header组件中的信息发生变化

当点击app-main组件中的登出按钮 ，app-header组件中的信息发生变化

同理 
如果在app-header中修改state数据 ，app-main中的数据也会做响应的变化，本Demo中没有实现，你可以随意实现不同组件间的数据变动
