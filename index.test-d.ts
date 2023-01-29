import {expectType} from 'tsd';
import SixtyFourGuasZhTw from './zh-TW/64gua.json';
import XianTian8GuasZhTw from './zh-TW/xian-tian-8gua.json';
import SixtyFourGuasZhCn from './zh-CN/64gua.json';
import XianTian8GuasZhCn from './zh-CN/xian-tian-8gua.json';
import {SixtyFourGuas, XianTian8Guas} from './';

expectType<SixtyFourGuas>(SixtyFourGuasZhTw);
expectType<XianTian8Guas>(XianTian8GuasZhTw);
expectType<SixtyFourGuas>(SixtyFourGuasZhCn);
expectType<XianTian8Guas>(XianTian8GuasZhCn);
