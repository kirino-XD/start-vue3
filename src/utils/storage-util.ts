export const storageUtil = {
  /**
   * 根据键值获取sessionStorage
   * @param key 键
   * @returns 失败false,成功对象
   */
  getSession(key: string): boolean | string | object | null {
    if (typeof Storage !== "undefined") {
      let value: string | null = sessionStorage.getItem(key);
      if (value) {
        try {
          value = JSON.parse(value);
        } catch (error: any) {
          throw new Error(error);
        }
      }
      return value;
    }
    return false;
  },
  /**
   * 设置sessionStorage
   * @param key 键
   * @param value 值   String或者JSON或者ARRAY
   * @returns {boolean}
   */
  setSession(key: string, value: string | Object): boolean {
    if (typeof Storage !== "undefined") {
      if (typeof value !== "string") {
        value = JSON.stringify(value);
      }
      sessionStorage.setItem(key, <string>value);
      return true;
    }
    return false;
  },
  /**
   * 移除sessionStorage
   * @param key
   * @returns {boolean}
   */
  removeSession(key: string): boolean {
    if (typeof Storage !== "undefined") {
      sessionStorage.removeItem(key);
      return true;
    }
    return false;
  },
  /**
   * 清空所有
   * @returns {boolean}
   */
  clearSession() {
    if (typeof Storage !== "undefined") {
      sessionStorage.clear();
      return true;
    }
    return false;
  },
  /**
   * 根据键值获取localStorage
   * @param key 键
   * @returns 失败false,成功对象
   */
  getLocalStorage(key: string): boolean | string | object | null {
    if (typeof Storage !== "undefined") {
      let value = localStorage.getItem(key);
      if (value) {
        try {
          value = JSON.parse(value);
        } catch (error: any) {
          throw new Error(error);
        }
      }
      return value;
    }
    return false;
  },
  /**
   * 设置localStorage
   * @param key 键
   * @param value 值   String或者JSON或者ARRAY
   * @returns {boolean}
   */
  setLocalStorage(key: string, value: string | Object): boolean {
    if (typeof Storage !== "undefined") {
      if (typeof value !== "string") {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, <string>value);
      return true;
    }
    return false;
  },
  /**
   * 移除localStorage
   * @param key
   * @returns {boolean}
   */
  removeLocalStorage(key: string): boolean {
    if (typeof Storage !== "undefined") {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  },
  /**
   * 清空所有localStorage
   * @returns {boolean}
   */
  clearLocalStorage(): boolean {
    if (typeof Storage !== "undefined") {
      localStorage.clear();
      return true;
    }
    return false;
  },
};
