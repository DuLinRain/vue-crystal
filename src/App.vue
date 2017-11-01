<template>
  <div id="app">
    <TegRotate :data='tags' :radius='300'></TegRotate>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags : [{
          name: 'HTML',
          href: 'http://www.baidu.com'
      },{
          name: 'CSS',
          href: 'http://www.baidu.com'
      },{
          name: 'JAVASCRIPT',
          href: 'http://www.baidu.com'
      },{
          name: 'VUE',
          href: 'http://www.baidu.com'
      },{
          name: 'REACT',
          href: 'http://www.baidu.com'
      },{
          name: 'JQUERY',
          href: 'http://www.baidu.com'
      },{
          name: 'NODE',
          href: 'http://www.baidu.com'
      },{
          name: 'HIGHTCHARTS',
          href: 'http://www.baidu.com'
      },{
          name: 'ECHARTS',
          href: 'http://www.baidu.com'
      },{
          name: 'D3',
          href: 'http://www.baidu.com'
      },{
          name: 'AXIOS',
          href: 'http://www.baidu.com'
      },{
          name: 'HTTP',
          href: 'http://www.baidu.com'
      },{
          name: 'HTTP2',
          href: 'http://www.baidu.com'
      },{
          name: 'PROMISE',
          href: 'http://www.baidu.com'
      },{
          name: 'ES6',
          href: 'http://www.baidu.com'
      },{
          name: 'ES7',
          href: 'http://www.baidu.com'
      },{
          name: 'ES8',
          href: 'http://www.baidu.com'
      },{
          name: 'TYPESCRIPT',
          href: 'http://www.baidu.com'
      },{
          name: 'COFFESCRIPT',
          href: 'http://www.baidu.com'
      },{
          name: 'LODASH',
          href: 'http://www.baidu.com'
      },{
          name: 'REACT NATIVE',
          href: 'http://www.baidu.com'
      },{
          name: 'WEEX',
          href: 'http://www.baidu.com'
      },{
          name: 'VUEX',
          href: 'http://www.baidu.com'
      },{
          name: 'VUE-ROUTER',
          href: 'http://www.baidu.com'
      },{
          name: 'NUXT',
          href: 'http://www.baidu.com'
      },{
          name: 'VUE-LOADER',
          href: 'http://www.baidu.com'
      },{
          name: 'WEBPACK',
          href: 'http://www.baidu.com'
      },{
          name: 'GRUNT',
          href: 'http://www.baidu.com'
      },{
          name: 'GULP',
          href: 'http://www.baidu.com'
      },{
          name: 'GOOGLE',
          href: 'http://www.baidu.com'
      },{
          name: 'BAIDU',
          href: 'http://www.baidu.com'
      },{
          name: '58',
          href: 'http://www.baidu.com'
      },{
          name: 'SOGOU',
          href: 'http://www.baidu.com'
      },{
          name: 'ALIBABA',
          href: 'http://www.baidu.com'
      },{
          name: 'TECENT',
          href: 'http://www.baidu.com'
      },{
          name: 'CHROME',
          href: 'http://www.baidu.com'
      },{
          name: 'APPLE',
          href: 'http://www.baidu.com'
      },{
          name: 'FIREFOX',
          href: 'http://www.baidu.com'
      },{
          name: 'OPERA',
          href: 'http://www.baidu.com'
      },{
          name: 'MICROSOFT',
          href: 'http://www.baidu.com'
      },{
          name: 'MICROCON',
          href: 'http://www.baidu.com'
      },{
          name: 'GO',
          href: 'http://www.baidu.com'
      },{
          name: 'C++',
          href: 'http://www.baidu.com'
      },{
          name: 'C',
          href: 'http://www.baidu.com'
      },{
          name: 'GO',
          href: 'http://www.baidu.com'
      },{
          name: 'MICROCON',
          href: 'http://www.baidu.com'
      },{
          name: 'PYTHON',
          href: 'http://www.baidu.com'
      },{
          name: 'JAVA',
          href: 'http://www.baidu.com'
      },{
          name: 'SWIFT',
          href: 'http://www.baidu.com'
      },{
          name: 'PHP',
          href: 'http://www.baidu.com'
      },{
          name: 'QT',
          href: 'http://www.baidu.com'
      },{
          name: 'WINDOW',
          href: 'http://www.baidu.com'
      },{
          name: 'IOS',
          href: 'http://www.baidu.com'
      },{
          name: 'LINUX',
          href: 'http://www.baidu.com'
      },{
          name: 'UNIX',
          href: 'http://www.baidu.com'
      },{
          name: 'ANDROID',
          href: 'http://www.baidu.com'
      },{
          name: 'GIT',
          href: 'http://www.baidu.com'
      },{
          name: 'GITLAB',
          href: 'http://www.baidu.com'
      }],
      tags1 : [{
          name: '野娜',
          href: 'http://www.baidu.com'
      },{
          name: '李',
          href: 'http://www.baidu.com'
      },{
          name: 'yena',
          href: 'http://www.baidu.com'
      },{
          name: 'li',
          href: 'http://www.baidu.com'
      },{
          name: '李野娜',
          href: 'http://www.baidu.com'
      },{
          name: 'liyena',
          href: 'http://www.baidu.com'
      },{
          name: 'yena',
          href: 'http://www.baidu.com'
      },{
          name: 'na888',
          href: 'http://www.baidu.com'
      },{
          name: '野娜快乐',
          href: 'http://www.baidu.com'
      },{
          name: '越来越漂亮',
          href: 'http://www.baidu.com'
      },{
          name: '野娜高兴',
          href: 'http://www.baidu.com'
      },{
          name: '野娜开开心心',
          href: 'http://www.baidu.com'
      },{
          name: '万事如意',
          href: 'http://www.baidu.com'
      },{
          name: '每天快乐',
          href: 'http://www.baidu.com'
      },{
          name: '心想事成',
          href: 'http://www.baidu.com'
      },{
          name: '笑口常开',
          href: 'http://www.baidu.com'
      },{
          name: '笑逐颜开',
          href: 'http://www.baidu.com'
      },{
          name: '早点下班',
          href: 'http://www.baidu.com'
      },{
          name: '喜气洋洋',
          href: 'http://www.baidu.com'
      },{
          name: '少点烦恼',
          href: 'http://www.baidu.com'
      },{
          name: '生活如意',
          href: 'http://www.baidu.com'
      },{
          name: '美梦成真',
          href: 'http://www.baidu.com'
      },{
          name: '事业有成',
          href: 'http://www.baidu.com'
      },{
          name: '事业高升',
          href: 'http://www.baidu.com'
      },{
          name: '幸福快乐',
          href: 'http://www.baidu.com'
      },{
          name: '没有bug',
          href: 'http://www.baidu.com'
      },{
          name: '不断加薪',
          href: 'http://www.baidu.com'
      },{
          name: '早日升T',
          href: 'http://www.baidu.com'
      },{
          name: '吃好',
          href: 'http://www.baidu.com'
      },{
          name: '喝好',
          href: 'http://www.baidu.com'
      },{
          name: '玩好',
          href: 'http://www.baidu.com'
      },{
          name: '睡好',
          href: 'http://www.baidu.com'
      },{
          name: '笑口常开',
          href: 'http://www.baidu.com'
      },{
          name: '笑靥如花',
          href: 'http://www.baidu.com'
      },{
          name: '笑容满面',
          href: 'http://www.baidu.com'
      },{
          name: '笑呵呵',
          href: 'http://www.baidu.com'
      },{
          name: '笑嘻嘻',
          href: 'http://www.baidu.com'
      },{
          name: '眉开眼笑',
          href: 'http://www.baidu.com'
      },{
          name: '嫣然一笑',
          href: 'http://www.baidu.com'
      },{
          name: '春风满面',
          href: 'http://www.baidu.com'
      },{
          name: '少加班',
          href: 'http://www.baidu.com'
      },{
          name: '多休假',
          href: 'http://www.baidu.com'
      },{
          name: '少需求',
          href: 'http://www.baidu.com'
      },{
          name: '多成长',
          href: 'http://www.baidu.com'
      },{
          name: '多吃',
          href: 'http://www.baidu.com'
      },{
          name: '多睡',
          href: 'http://www.baidu.com'
      },{
          name: '多玩',
          href: 'http://www.baidu.com'
      },{
          name: '多笑',
          href: 'http://www.baidu.com'
      },{
          name: '多乐',
          href: 'http://www.baidu.com'
      },{
          name: '编不下去了',
          href: 'http://www.baidu.com'
      },{
          name: '不生气',
          href: 'http://www.baidu.com'
      },{
          name: '高兴最好了',
          href: 'http://www.baidu.com'
      },{
          name: 'PC端体验更佳',
          href: 'http://www.baidu.com'
      }]
    }
  }
}
</script>

<style>
*{
  font-family: '楷体';
}
</style>
