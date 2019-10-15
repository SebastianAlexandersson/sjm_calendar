import moment from "moment"

const state = {
  currentDayNum: Number(moment().format("D")),
  currentMonthStr: moment().format("MMMM"),
  months: [
    {
      month: "Januari",
      ndays: 30
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
      ndays: 30
    },
    {
      month: "September",
      ndays: 31
    },
    {
      month: "October",
      ndays: 30
    },
    {
      month: "November",
      ndays: 31
    },
    {
      month: "December",
      ndays: 31
    }
  ]
}

  const mutations = {

  }

  const actions = {
    getMonths() {
      return state.months
    }
  }

  const getters = {
    allCalendar: state => state
  }

export default {
  state,
  getters,
  actions
}