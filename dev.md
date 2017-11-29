##Todo List

> 列出初步设想，本文档会随开发进度和思路的更新而更新

---

####Design

> 基本思路： 每个编辑器维护一个 store，store 中存储数据流和行为流，通过  行为流
> 的变化，改变数据流，通过  映射数据流到 props 实现界面更新 

* [ ] 使用 rxjs 构建 store
* [ ] 将 strem 转化为 props，将 handler 转化为 stream

####Progress

* [ ] 构建基本环境
* [ ] 使用 store 初始化 Editor
* [ ] 编程测试 editorState 和 action 的流转
* [ ] TODO
