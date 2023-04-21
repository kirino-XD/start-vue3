import { defineStore } from "pinia";
import axios from "axios";

// interface tableDataInterface {
//   list: Array<{
//     name?: string;
//     desc?: string;
//     count?: number;
//     date?: string;
//     address?: string;
//     job?: string;
//   }>;
//   current: number;
//   size: number;
// }

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    tableData: {
      list: [],
      current: 1,
      size: 10,
      total: 0,
      loading: false,
    },
  }),
  // getters
  getters: {
    tableList: (state) => state.tableData.list,
  },
  actions: {
    // changePagination(data: { current?: number; size?: number }) {
    //   this.tableData.current = data.current || this.tableData.current;
    //   this.tableData.size = data.size || this.tableData.size;
    // },
    async getTableInfo(data: {
      select?: string;
      keyword?: string;
      current?: number;
      size?: number;
    }) {
      this.tableData.loading = true;
      this.tableData.current = data.current || this.tableData.current;
      this.tableData.size = data.size || this.tableData.size;
      axios({
        url: "/list",
        method: "post",
        data: {
          select: data.select,
          keyword: data.keyword,
          current: this.tableData.current,
          size: this.tableData.size,
        },
      })
        .then((res) => {
          this.tableData.list = res?.data?.list || [];
          this.tableData.current = res?.data?.current;
          this.tableData.size = res?.data?.size;
          this.tableData.total = res?.data?.total || 0;
          return res;
        })
        .catch((error) => {
          throw new Error(error.message);
        })
        .finally(() => {
          this.tableData.loading = false;
        });
    },
  },
});
