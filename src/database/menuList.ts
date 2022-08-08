import AppleManGo from "../asserts/drinks/Apple-mango-Bingsu.png";
import BlueHawail from "../asserts/drinks/Blue-BlueHawail.png";
import DdangmobanJuice from "../asserts/drinks/Ddangmoban-juice.png";
import HoneyGrapefruitBingsu from "../asserts/drinks/Honey-grapefruit-Bingsu.png";
import OceanEinspanner from "../asserts/drinks/Ocean-Einspanner.png";
import PineMojitoAde from "../asserts/drinks/PineMojito-Ade.png";
import RedBeanBingsu from "../asserts/drinks/Red-bean-Bingsu.png";
import TripleCheesecakeBingsu from "../asserts/drinks/Triple-cheesecake-Bingsu.png";

export const MenuList = [
  {
    id: "drink-01",
    title: "오션아인슈페너",
    subTitle: "Ocean Einspanner",
    image: OceanEinspanner,
    description:
      "푸른 바다를 연상시키는 라떼에 시그니쳐 포션 커피를 직접 부어 쫀득한 치즈크림과 함께 즐길 수 있는 아인슈페너",
    nutrients: "나트륨 122mg, 당류 9g, 포화지방 12g, 단백질 6g, 카페인 125mg",
    type: "ICE",
    price: 5500,
  },
  {
    id: "drink-02",
    title: "파인애플 모히또 에이드",
    subTitle: "Pineapple Mojito Ade",
    image: PineMojitoAde,
    description:
      "새콤달콤한 파인애플과 싱그러운 라임과 민트가 어우러져 시원하고 청향한 무알콜 모히또 에이드",
    nutrients: "나트륨 11mg, 당류 30g, 포화지방 0g, 단백질 1g, 카페인 0mg",
    type: "ICE",
    price: 5000,
  },
  {
    id: "drink-03",
    title: "땡모반 주스 (수박주스)",
    subTitle: "Watermelon Juice",
    image: DdangmobanJuice,
    description:
      "달콤한 국내산 수박주스와 시원한 얼음ㅇ르 갈아 넣어 갈증 해소에 탁월한 주스",
    nutrients: "나트륨 1mg, 당류 36g, 포화지방 0g, 단백질 2g, 카페인 0mg",
    type: "ICE",
    price: 6000,
  },
  {
    id: "drink-04",
    title: "블루하와이 블렌디드",
    subTitle: "Blue Hawail Blended",
    image: BlueHawail,
    description:
      "푸른 바다를 연상시키는 상큼한 베이스에 새콤달콤한 파인애플과 레몬을 더해 눈과 입이 즐거운 블랜디드",
    nutrients: "나트륨 24mg, 당류 39g, 포화지방 0g, 단백질 1g, 카페인 0mg",
    type: "ICE",
    price: 5500,
  },
  {
    id: "shavedIce-01",
    title: "정통 팥빙수",
    subTitle: "Original Red Bean Bingsu",
    image: RedBeanBingsu,
    description:
      "고운 밀크 눈꽃 얼음 위에 국내산 팥과 대추칩이 어우러진 오리지널 빙수",
    nutrients: "나트륨 189mg, 당류 62.5g, 포화지방 7g, 단백질 17.4g",
    type: "ICE",
    price: 7000,
  },

  {
    id: "shavedIce-02",
    title: "애플망고 빙수",
    subTitle: "Apple Mango Bingsu",
    image: AppleManGo,
    description:
      "고운 밀크 눈꽃 얼음 위에 달콤하고 쫀득한 애플망고와 치즈케이크가 풍성하게 어우러진 빙수",
    nutrients: "나트륨 109mg, 당류 53g, 포화지방 5g, 단백질 7g",
    type: "ICE",
    price: 8000,
  },
  {
    id: "shavedIce-03",
    title: "트리플 치즈케이크 빙수",
    subTitle: "Triple Cheese Cube Bingsu",
    image: TripleCheesecakeBingsu,
    description:
      "세가지 맛의 치즈케이크 큐브와 부드러운 바닐라 아이스크림이 어우러진 빙수",
    nutrients: "나트륨 194.8mg, 당류 54.2g, 포화지방 20.6g, 단백질 142g",
    type: "ICE",
    price: 9000,
  },
  {
    id: "shavedIce-04",
    title: "꿀자몽 빙수",
    subTitle: "Honey grapefruit Bingsu",
    image: HoneyGrapefruitBingsu,
    description:
      "달콤한 꿀과 상큼한 생자몽이 통째로 어우러져 쌉쓰름한 맛과 달콤한 맛이 조화로운 빙수",
    nutrients: "나트륨 51.2mg, 당류 51.2g, 포화지방 1.7g, 단백질 2.2g",
    type: "ICE",
    price: 9500,
  },
];
