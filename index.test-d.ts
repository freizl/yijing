import { expectType } from 'tsd';
import SixtyFourGuasZhTw from './zh-TW/64gua.json';
import XianTian8GuasZhTw from './zh-TW/xian-tian-8gua.json';
import SixtyFourGuasZhCn from './zh-CN/64gua.json';
import XianTian8GuasZhCn from './zh-CN/xian-tian-8gua.json';
import shuoguaZhCn from './zh-CN/shuo-gua.json';
import shuoguaZhTw from './zh-TW/shuo-gua.json';
import wenyanZhCn from './zh-CN/wen-yan.json';
import wenyanZhTw from './zh-TW/wen-yan.json';
import xiciZhCn from './zh-CN/xi-ci.json';
import xiciZhTw from './zh-TW/xi-ci.json';
import xuguaZhCn from './zh-CN/xu-gua.json';
import xuguaZhTw from './zh-TW/xu-gua.json';
import zaguaZhCn from './zh-CN/za-gua.json';
import zaguaZhTw from './zh-TW/za-gua.json';

import { SixtyFourGuas, XianTian8Guas } from './';
import { ShuoGuaTexts, WenYanTexts, XiCiTexts, XuGuaTexts, ZaGuaTexts } from './others';

expectType<SixtyFourGuas>(SixtyFourGuasZhTw);
expectType<XianTian8Guas>(XianTian8GuasZhTw);
expectType<SixtyFourGuas>(SixtyFourGuasZhCn);
expectType<XianTian8Guas>(XianTian8GuasZhCn);

expectType<ShuoGuaTexts>(shuoguaZhCn);
expectType<ShuoGuaTexts>(shuoguaZhTw);

expectType<WenYanTexts>(wenyanZhCn);
expectType<WenYanTexts>(wenyanZhTw);

expectType<XiCiTexts>(xiciZhCn);
expectType<XiCiTexts>(xiciZhTw);

expectType<XuGuaTexts>(xuguaZhCn);
expectType<XuGuaTexts>(xuguaZhTw);

expectType<ZaGuaTexts>(zaguaZhCn);
expectType<ZaGuaTexts>(zaguaZhTw);
