import { MockMethod } from "vite-plugin-mock";
const proxy = [
  {
    url: "/api/login",
    method: "post",
    response: ({
      body: { username, password },
    }: {
      body: {
        username: string;
        password: string;
      };
    }) => {
      if (username === "admin" && password === "123456") {
        return {
          code: 200,
          message: "登录成功",
        };
      }
      return {
        code: 201,
        message: "账号密码错误",
      };
    },
  },
  {
    url: "/api/list",
    timeout: 100,
    method: "post",
    response: ({
      body: { current, size },
    }: {
      body: { current: number; size: number };
    }) => {
      return {
        code: 0,
        message: "ok",
        data: {
          ["list|" + size]: [
            {
              id: "@guid",

              name: "@cname",
              desc: "@csentence(10,20)",
              "count|10-100": 22,
              date: "@date(yyyy-MM-dd HH-mm-ss)",
              address: "@county",
              "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
            },
          ],
          current: current,
          size: size,
        },
      };
    },
  },
] as MockMethod[];
export default proxy;
