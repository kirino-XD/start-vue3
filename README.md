注意事项：
1.node 版本需要 16+ 2.需要自己安装 ts 3.需要问题时,建议先看以下解答,如不满足再百度和问人,解决完问题后麻烦及时补充

问题：
Q:新建文件时字段爆红,提示：解决 error delete ·CR· (prettier/prettier)
A: 1.文件->首选项->设置->找到 setting.json 文件输入
"setting":{
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
}, 2.文件->首选项->设置->搜索框输入"行尾"->默认行尾字符改成\n
