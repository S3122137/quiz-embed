# 互动测验组件

这是一个简单的、可嵌入的互动测验组件，可以轻松集成到任何网站中。

## 特点

- 响应式设计
- 即时反馈
- 进度显示
- 结果统计
- 重新开始功能

## 使用方法

1. 将以下代码嵌入到您的网站中：

```html
<iframe src="您的Netlify域名" width="100%" height="500px" frameborder="0"></iframe>
```

2. 自定义问题：
   - 打开 `js/quiz.js`
   - 修改 `quizData` 数组中的问题和答案

## 文件结构

- `index.html` - 主页面
- `css/style.css` - 样式文件
- `js/quiz.js` - 测验逻辑和问题数据

## 自定义样式

您可以通过修改 `css/style.css` 来自定义测验的外观。 