import moment from "moment"

const state = {
  currentYear: moment().format("Y"),
  currentDayNum: Number(moment().format("D")),
  currentDayStr: moment().format("DDDD"),
  currentMonthNum: moment().format("M"),
  currentMonthStr: moment().format("MMMM"),
  currentMonthIndex: moment().format("M") - 1,
  moment,
  months: [
    {
      month: "Januari",
      ndays: 31
    },
    {
      month: "Februari",
      ndays: 28
    },
    {
      month: "Mars",
      ndays: 31
    },
    {
      month: "April",
      ndays: 30
    },
    {
      month: "Maj",
      ndays: 31
    },
    {
      month: "Juni",
      ndays: 30
    },
    {
      month: "Juli",
      ndays: 31
    },
    {
      month: "Augusti",
      ndays: 31
    },
    {
      month: "September",
      ndays: 30
    },
    {
      month: "Oktober",
      ndays: 31
    },
    {
      month: "November",
      ndays: 30
    },
    {
      month: "December",
      ndays: 31
    }
  ],
}

  const mutations = {
    nextMonth(state) {
      if(state.currentMonthIndex < 11) {
        state.currentMonthIndex += 1
      } else {
        state.currentYear = Number(state.currentYear) + 1
        state.currentMonthIndex = 0
      }
      return
    },
    previousMonth(state) {
      if(state.currentMonthIndex > 0) {
        state.currentMonthIndex -= 1
      } else {
        state.currentYear = Number(state.currentYear) - 1
        state.currentMonthIndex = 11
      }
      return
    },
  }

  const actions = {
   
  }

  const getters = {

  }

export default {
  state,
  getters,
  actions,
  mutations
}