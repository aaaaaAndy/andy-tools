/**
 * @author andy
 * @Description 判断机型是否为iphone
 * @Date 10:13 2020-04-08
 * */
function isIOS() {
  return !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
 * @author andy
 * @Description 判断是否为安卓
 * @Date 15:11 2020-04-08
 * */
function isAndroid() {
  return !!/(Android)/i.test(window.navigator.userAgent)
}

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
function isIphoneX() {
  if (isIOS()) {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;

    const XSR_WIDTH = 414;
    const XSR_HEIGHT = 896;

    const D_HEIGHT = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const D_WIDTH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return (
      isIOS() && (
        (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH)
        || (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
      || (D_HEIGHT === XSR_WIDTH && D_WIDTH === XSR_HEIGHT)
      || (D_HEIGHT === XSR_HEIGHT && D_WIDTH === XSR_WIDTH)
    );
  }
  return false;
}

export default {
  isIOS,
  isIphoneX,
  isAndroid,
}
