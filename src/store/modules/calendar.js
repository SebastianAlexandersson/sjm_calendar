import moment from 'moment';

const state = {
  currentYear: moment().format('Y'),
<<<<<<< HEAD
  currentDay: moment().format('D'),
  currentMonth: moment().format('MM'),

  // MonthIndex decides what month is being shown in the calendar.
  // Default is current month.

  MonthIndex: moment().format('M') - 1,

  // Formating single digit months/days for moment

  addZero(num) {
    return num < 10 ? `0${num}` : num;
  },
  getNameOfDay(year, month, day) {
    return moment(`${year}${month}${day}`, 'YYYYMMDD').format('dddd');
  },
  weeks: 0,
=======
  currentDayNum: Number(moment().format('D')),
  currentDayStr: moment().format('DDDD'),
  currentMonthNum: moment().format('M'),
  currentMonthStr: moment().format('MMMM'),
  currentMonthIndex: moment().format('M') - 1,
  moment,
>>>>>>> masiu-dev-home
  months: [
    {
      month: 'Januari',
      ndays: 31,
    },
    {
      month: 'Februari',
      ndays: 28,
    },
    {
      month: 'Mars',
      ndays: 31,
    },
    {
      month: 'April',
      ndays: 30,
    },
    {
      month: 'Maj',
      ndays: 31,
    },
    {
      month: 'Juni',
      ndays: 30,
    },
    {
      month: 'Juli',
      ndays: 31,
    },
    {
      month: 'Augusti',
      ndays: 31,
    },
    {
      month: 'September',
      ndays: 30,
    },
    {
      month: 'Oktober',
      ndays: 31,
    },
    {
      month: 'November',
      ndays: 30,
    },
    {
      month: 'December',
      ndays: 31,
    },
  ],
<<<<<<< HEAD

  // Lookup how many filler days from previous month to add.

  days: {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  },
=======
>>>>>>> masiu-dev-home
};

const mutations = {
  nextMonth(state) {
<<<<<<< HEAD
    if (state.MonthIndex < 11) {
      state.MonthIndex += 1;
    } else {
      state.currentYear = (Number(state.currentYear) + 1).toString();
      state.MonthIndex = 0;
    }
  },
  previousMonth(state) {
    if (state.MonthIndex > 0) {
      state.MonthIndex -= 1;
    } else {
      state.currentYear = (Number(state.currentYear) - 1).toString();
      state.MonthIndex = 11;
=======
    if (state.currentMonthIndex < 11) {
      state.currentMonthIndex += 1;
    }
  },
  previousMonth(state) {
    if (state.currentMonthIndex > 0) {
      state.currentMonthIndex -= 1;
>>>>>>> masiu-dev-home
    }
  },
};

<<<<<<< HEAD
const actions = {};

const getters = {
  displayedMonth(state) {
    return state.months[state.MonthIndex];
  },

  // Returns number representation of currently displayed month.

  displayedMonthNum(state) {
    const month = state.MonthIndex + 1;
    return state.addZero(month);
  },

  // Returns string with name of day. Used for looking up nr of filler days.

  whatDayIsTheFirst(state, getters) {
    return moment(`${state.currentYear}${getters.displayedMonthNum}01`, 'YYYYMMDD')
      .format('dddd');
  },
  prevMonth(state) {
    if (state.MonthIndex === 0) {
      return state.months[11];
    }
    return state.months[state.MonthIndex - 1];
  },
  prevMonthNum(state) {
    if (state.MonthIndex === 0) {
      return 12;
    }
    return state.addZero(state.MonthIndex);
  },

  // Check if previous month is also in the previous year,
  // to get correct dates.

  prevMonthYear(state, getters) {
    return getters.prevMonth.month === 'December'
      ? (Number(state.currentYear) - 1).toString()
      : state.currentYear;
  },
  prevMonthFillerDays(state, getters) {
    return state.days[getters.whatDayIsTheFirst];
  },

  // Makes sure filler days have correct dates since loop starts at 1.

  prevMonthFillerStartDate(state, getters) {
    return getters.prevMonth.ndays - getters.prevMonthFillerDays;
  },
  numWeeks(state, getters) {
    return Math.ceil((getters.displayedMonth.ndays + getters.prevMonthFillerDays) / 7);
  },
  getFirstWeek(state, getters) {
    const firstDay = getters.prevMonth.ndays - (getters.prevMonthFillerDays - 1);
    const firstWeek = moment(`${state.currentYear}${getters.prevMonthNum}${state.addZero(firstDay)}`)
      .format('W');
    return firstWeek;
  },
  getLastWeek(state, getters) {
    const lastDay = getters.displayedMonth.ndays;
    const lastWeek = moment(`${state.currentYear}${getters.displayedMonthNum}${state.addZero(lastDay)}`)
      .format('W');
    return lastWeek;
  },
=======
const actions = {

};

const getters = {

>>>>>>> masiu-dev-home
};

export default {
  state,
  getters,
  actions,
  mutations,
};
