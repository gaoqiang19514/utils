import UA from 'ua-device';

export function isDevMode() {
  // 允许通过url设置为开发模式
  if (window.location.search.includes("devMode=on")) {
    return true;
  }

  return process?.env?.NODE_ENV === "development";
}

export function isPC() {
  const system = {
    win: false,
    mac: false,
    xll: false,
  };

  // 检测平台
  const p = navigator.platform;
  system.win = p.indexOf("Win") === 0;
  system.mac = p.indexOf("Mac") === 0;
  system.x11 = p === "X11" || p.indexOf("Linux") === 0;

  if (system.win || system.mac || system.xll) {
    return true;
  }

  return false;
}

export function canOpenWeapp() {
  const output = new UA(navigator.userAgent);

  if (isPC()) {
	  return false;
  }

  // 微信版本要求为：7.0.12及以上
  if (output.browser.name === "微信" && output.browser.version >= "7.0.12") {
    return true;
  }

  // 系统版本要求：iOS 10.3及以上
  if (output.os.name === "IOS" && output.version >= "iOS 10.3") {
    return true;
  }

  // 系统版本要求为：Android 5.0及以上
  if (output.os.name === "Android" && output.os.version >= "5.0") {
    return true;
  }

  return false;
}
