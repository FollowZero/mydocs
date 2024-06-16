---
title: 如何能使用 phpstorm 2023.2.x
author: 张朋
date: 2024/04/18 21:30
tags:
 - phpstorm
---

# 如何能使用 phpstorm 2023.2.x

感谢 知了大佬 [Jetbrains系列产品重置试用方法](https://zhile.io/2020/11/18/jetbrains-eval-reset-deprecated.html)

感谢 热心大佬 [jetbra](https://3.jetbra.in/)

🇷🇺 下载jetbra.zip（240218），并按照readme.txt中的说明进行配置！仅用于测试目的，不用于商业用途！

🇷🇺 请注意，这只是一个个人页面，而不是官方网站！

链接: https://pan.baidu.com/s/1ORWpIV1F11beGNx4CAldxg  

密码: di1w

1.自动配置 vmoptions：
macOS 或 Linux：执行 "scripts/install.sh"
Windows:双击执行 "scripts\install-current-user.vbs"（对于当前用户）
"scripts\install-all-users.vbs"（适用于所有用户）

打开 /jetbra/vmoptions/ 文件夹下对应的 phpstorm.vmoptions 最后三行复制到 vmoptions文件最下边 (可右键 phpstorm 图标，打开文件所在的位置右下边有对应的如phpstorm64.exe.vmoptions文件  )

```
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED

-javaagent:C:\jetbra\ja-netfilter.jar=jetbrains

```

2.在 “Licenses” 窗口中注销jb帐户

3.使用页面上的 [key](https://jetbra.in/5d84466e31722979266057664941a71893322460)  

4.插件“mymap”自2022.1版本以来一直被弃用

5.不在乎激活时间，这是一个后备许可证，不会过期

﻿
