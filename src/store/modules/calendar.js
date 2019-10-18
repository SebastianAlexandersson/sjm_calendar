import moment from "moment"

const state = {
  currentYear: moment().format("Y"),
  currentDay: moment().format("D"),
  currentMonth: moment().format("MM"),
  MonthIndex: moment().format("M") - 1,
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
  days: {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
    "Saturday": 5,
    "Sunday": 6
  },
}

  const mutations = {
    nextMonth(state) {
      if(state.MonthIndex < 11) {
        state.MonthIndex += 1
      } else {
        state.currentYear = (Number(state.currentYear) + 1).toString()
        state.MonthIndex = 0
      }
      return
    },
    previousMonth(state) {
      if(state.MonthIndex > 0) {
        state.MonthIndex -= 1
      } else {
        state.currentYear = (Number(state.currentYear) - 1).toString()
        state.MonthIndex = 11
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