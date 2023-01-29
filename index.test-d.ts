import {expectType} from 'tsd';
import SixtyFourGuasZhTw from './zh-TW/64-gua.json';
import XianTian8GuasZhTw from './zh-TW/8-gua_xian-tian.json';
import SixtyFourGuasZhCn from './zh-CN/64-gua.json';
import XianTian8GuasZhCn from './zh-CN/8-gua_xian-tian.json';
import {SixtyFourGuas, XianTian8Guas} from './';

expectType<SixtyFourGuas>(SixtyFourGuasZhTw);
expectType<XianTian8Guas>(XianTian8GuasZhTw);
expectType<SixtyFourGuas>(SixtyFourGuasZhCn);
expectType<XianTian8Guas>(XianTian8GuasZhCn);
