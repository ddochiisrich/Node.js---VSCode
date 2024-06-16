/* ESM 모듈 시스템 방식
export 문으로 내보내기 하고 import문으로 모듈을 불러온다.
모듈을 정적으로 처리하며 순환 종속성 문제가 발생하지 않는다.
확장자는 .mjs를 권장하고 //, /*//*/, # 을 주석으로 사용한다. */
const PI = 3.14;

function helloUser(user) {
  return "Hello " + user + " - ESM";
}

export function helloTest(user){
  return "Hello Test " + user + " - ESM";
}

export {PI, helloUser}