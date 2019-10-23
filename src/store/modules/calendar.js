import * as moment from 'moment';

const state = {
  currentYear: moment().format('Y'),
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
  prevOrNext: '',
  months: [{
    month: 'January',
    ndays: 31,
  },
  {
    month: 'February',
    ndays: 28,
  },
  {
    month: 'March',
    ndays: 31,
  },
  {
    month: 'April',
    ndays: 30,
  },
  {
    month: 'May',
    ndays: 31,
  },
  {
    month: 'June',
    ndays: 30,
  },
  {
    month: 'July',
    ndays: 31,
  },
  {
    month: 'August',
    ndays: 31,
  },
  {
    month: 'September',
    ndays: 30,
  },
  {
    month: 'October',
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
};

const mutations = {
  nextMonth(state) {
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
    }
  },
  setNextTransition(state) {
    state.prevOrNext = 'slide-next';
  },
  setPrevTransition(state) {
    state.prevOrNext = 'slide-previous';
  },
  resetToToday(state) {
    state.MonthIndex = Number(state.currentMonth - 1);
    state.currentYear = moment().format('YYYY');
  },
};


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
    if (getters.prevMonthFillerDays === 0) {
      const firstWeek = moment(`${state.currentYear}${getters.displayedMonthNum}01`).format('W');
      return firstWeek;
    }
    const firstDay = getters.prevMonth.ndays - (getters.prevMonthFillerDays - 1);
    const firstWeek = moment(
      `${getters.prevMonthYear}${getters.prevMonthNum}${state.addZero(firstDay)}`,
    ).format('W');
    return firstWeek;
  },
  getLastWeek(state, getters) {
    const lastDay = getters.displayedMonth.ndays;
    const lastWeek = moment(
      `${state.currentYear}${getters.displayedMonthNum}${state.addZero(lastDay)}`,
    )
      .format('W');
    return lastWeek;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
