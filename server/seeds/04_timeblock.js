/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("timeblock").del()
  await knex("timeblock").insert([
    {
      timeblock_id: 0,
      timeslot: "00:00",
    },
    {
      timeblock_id: 1,
      timeslot: "00:30",
    },
    {
      timeblock_id: 2,
      timeslot: "01:00",
    },
    {
      timeblock_id: 3,
      timeslot: "01:30",
    },
    {
      timeblock_id: 4,
      timeslot: "02:00",
    },
    {
      timeblock_id: 5,
      timeslot: "02:30",
    },
    {
      timeblock_id: 6,
      timeslot: "03:00",
    },
    {
      timeblock_id: 7,
      timeslot: "03:30",
    },
    {
      timeblock_id: 8,
      timeslot: "04:00",
    },
    {
      timeblock_id: 9,
      timeslot: "04:30",
    },
    {
      timeblock_id: 10,
      timeslot: "05:00",
    },
    {
      timeblock_id: 11,
      timeslot: "05:30",
    },
    {
      timeblock_id: 12,
      timeslot: "06:00",
    },
    {
      timeblock_id: 13,
      timeslot: "06:30",
    },
    {
      timeblock_id: 14,
      timeslot: "07:00",
    },
    {
      timeblock_id: 15,
      timeslot: "07:30",
    },
    {
      timeblock_id: 16,
      timeslot: "08:00",
    },
    {
      timeblock_id: 17,
      timeslot: "08:30",
    },
    {
      timeblock_id: 18,
      timeslot: "09:00",
    },
    {
      timeblock_id: 19,
      timeslot: "09:30",
    },
    {
      timeblock_id: 20,
      timeslot: "10:00",
    },
    {
      timeblock_id: 21,
      timeslot: "10:30",
    },
    {
      timeblock_id: 22,
      timeslot: "11:00",
    },
    {
      timeblock_id: 23,
      timeslot: "11:30",
    },
    {
      timeblock_id: 24,
      timeslot: "12:00",
    },
    {
      timeblock_id: 25,
      timeslot: "12:30",
    },
    {
      timeblock_id: 26,
      timeslot: "13:00",
    },
    {
      timeblock_id: 27,
      timeslot: "13:30",
    },
    {
      timeblock_id: 28,
      timeslot: "14:00",
    },
    {
      timeblock_id: 29,
      timeslot: "14:30",
    },
    {
      timeblock_id: 30,
      timeslot: "15:00",
    },
    {
      timeblock_id: 31,
      timeslot: "15:30",
    },
    {
      timeblock_id: 32,
      timeslot: "16:00",
    },
    {
      timeblock_id: 33,
      timeslot: "16:30",
    },
    {
      timeblock_id: 34,
      timeslot: "17:00",
    },
    {
      timeblock_id: 35,
      timeslot: "17:30",
    },
    {
      timeblock_id: 36,
      timeslot: "18:00",
    },
    {
      timeblock_id: 37,
      timeslot: "18:30",
    },
    {
      timeblock_id: 38,
      timeslot: "19:00",
    },
    {
      timeblock_id: 39,
      timeslot: "19:30",
    },
    {
      timeblock_id: 40,
      timeslot: "20:00",
    },
    {
      timeblock_id: 41,
      timeslot: "20:30",
    },
    {
      timeblock_id: 42,
      timeslot: "21:00",
    },
    {
      timeblock_id: 43,
      timeslot: "21:30",
    },
    {
      timeblock_id: 44,
      timeslot: "22:00",
    },
    {
      timeblock_id: 45,
      timeslot: "22:30",
    },
    {
      timeblock_id: 46,
      timeslot: "23:00",
    },
    {
      timeblock_id: 47,
      timeslot: "23:30",
    },
  ])
}
