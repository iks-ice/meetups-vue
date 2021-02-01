<template>
  <div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <base-button
            class="rangepicker__selector-control-left"
            @click="selectMonth('prev')"
          />
          <div>{{ selectedDate }}</div>
          <base-button
            class="rangepicker__selector-control-right"
            @click="selectMonth('next')"
          />
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div
          v-for="day in calendarLeaf"
          :key="day.id"
          :class="[
            'rangepicker__cell',
            { rangepicker__cell_inactive: day.inactive },
          ]"
        >
          <div>{{ day.date }}</div>
          <div v-if="day.events">
            <a
              v-for="event in day.events"
              :key="event.id"
              class="rangepicker__event"
              >{{ event.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { BaseButton } from "@/components/base-components";
  import { createIdGenerator, MY, MYD } from "@/utils/index.js";
  const dayId = createIdGenerator();
  const eventId = createIdGenerator();

  const DAY_DURATION = 86400000;

  const getNextMonth = (year, month) => ({
    month: month === 12 ? 1 : month + 1,
    year: month === 12 ? year + 1 : year,
  });
  const getPreviousMonth = (year, month) => ({
    month: month === 1 ? 12 : month - 1,
    year: month === 1 ? year - 1 : year,
  });
  const getFirstMonthDate = (curYear, curMonth) =>
    new Date(`${curYear}-${curMonth}-01`);

  const getLastMonthDate = (curYear, curMonth) => {
    const { year, month } = getNextMonth(curYear, curMonth);
    const nextMonthFirstDate = getFirstMonthDate(year, month);
    const previousMonthLastDate = nextMonthFirstDate - DAY_DURATION; // in milliseconds
    return new Date(previousMonthLastDate);
  };

  const getInactiveDaysBefore = (firstWeekDay) =>
    firstWeekDay === 0 ? 6 : firstWeekDay - 1;
  const getInactiveDaysAfter = (lastWeekDay) =>
    lastWeekDay === 0 ? 0 : 7 - lastWeekDay;

  const getNDaysBeforeAfterDate = (date, nDays) =>
    new Date(date.getTime() + nDays * DAY_DURATION);

  const createDate = (year, month, date) =>
    new Date(`${year}-${month}-${date}`);

  const setInitials = () => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    return {
      year,
      month,
      first: getFirstMonthDate(year, month).getDay(),
      last: getLastMonthDate(year, month).getDay(),
    };
  };
  export default {
    name: "MeetupsCalendar",
    components: { BaseButton },
    props: {
      meetups: {
        type: Array,
        required: true,
      },
    },

    data() {
      return {
        current: {
          ...setInitials(),
        },
      };
    },

    computed: {
      selectedDate() {
        const { year, month } = this.current;
        return MY.format(createDate(year, month, "01"));
      },
      meetupsCollection() {
        return this.meetups.reduce((acc, meetup) => {
          const date = MYD.format(meetup.date);
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(meetup);
          return acc;
        }, {});
      },
      calendarLeaf() {
        const { year, month, first, last } = this.current;
        const calendar = [];
        const add = (day) => {
          calendar.push({
            id: dayId(),
            ...day,
          });
        };

        const fillCalendar = (count, mode = "default") => {
          for (let i = 0; i < count; i++) {
            let diffInDays, date;
            switch (mode) {
              case "before": {
                diffInDays = i - count;
                date = getNDaysBeforeAfterDate(
                  getFirstMonthDate(year, month),
                  diffInDays,
                ).getDate();
                break;
              }
              case "after": {
                diffInDays = i + 1;
                date = getNDaysBeforeAfterDate(
                  getLastMonthDate(year, month),
                  diffInDays,
                ).getDate();
                break;
              }
              default: {
                date = i + 1;
              }
            }
            const dateProp = MYD.format(createDate(year, month, date));
            const day = {
              id: eventId(),
              events: this.meetupsCollection[dateProp],
              date,
              inactive: mode !== "default",
            };
            add(day);
          }
        };

        const daysBefore = getInactiveDaysBefore(first);
        fillCalendar(daysBefore, "before");

        const activeDays = getLastMonthDate(year, month).getDate();
        fillCalendar(activeDays);

        const daysAfter = getInactiveDaysAfter(last);
        // const DAYS_IN_CALENDAR_LEAF = 42;
        // const daysAfter = DAYS_IN_CALENDAR_LEAF - activeDays - daysBefore;
        fillCalendar(daysAfter, "after");
        return calendar;
      },
    },

    methods: {
      selectMonth(mode = "prev") {
        const { year: curYear, month: curMonth } = this.current;
        const { year, month } =
          mode === "next"
            ? getNextMonth(curYear, curMonth)
            : getPreviousMonth(curYear, curMonth);
        const first = getFirstMonthDate(year, month).getDay();
        const last = getLastMonthDate(year, month).getDay();
        this.current = { year, month, first, last };
      },
    },
  };
</script>

<style></style>
