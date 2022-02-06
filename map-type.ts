interface Artist {
  id: number;
  name: string;
  bio: string;
}

type ReduceObject<Type> = {
  [Property in keyof Type]?: Type[Property];
} & { id: number };

// 这将获取映射类型的结果，并且与设置了 { id: number } 的对象类型合并，
// 有效的在类型中确保了 id 的存在。

type ArtistEdit = ReduceObject<Artist>;

const mre: ArtistEdit = {
  id: 1,
  name: 'lhj',
  bio: 'a',
}

console.log('mre :>> ', mre);
