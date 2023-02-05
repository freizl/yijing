export type SixtyFourGua = {
  id: string;
  // 卦名
  name: string;
  // 卦辞
  gua_ci: string;
  // 彖辞
  tuan_ci: string;
  // 大象
  da_xiang: string;
  // 爻辞
  yao_ci: Array<string>;
  // 小象
  xiao_xiang: Array<string>;
  //
  symbol: string;
};

export type SixtyFourGuas = Array<SixtyFourGua>;

export type XianTian8Gua = {
  id: string;
  // 卦名
  name: string;
  alias: string;
};

export type XianTian8Guas = Array<XianTian8Gua>;
