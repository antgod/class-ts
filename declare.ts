declare type Article = {
  title: string;
  count: number;
  content:string;
  fromSite: string;
}

const article: Article = {
  title: '为vue3学点typescript(2), 类型',
  count: 9999,
  content: 'xxx...',
  fromSite: 'baidu.com'
}

console.log('Article :>> ', article);