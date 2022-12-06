/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("timeblock").del()
  await knex("timeblock").insert([
    {
      timeblock_id: "8f6c9a42-46a1-4e7d-a1ae-5a6018e44b2d",
      timeslot: "00:00",
    },
    {
      timeblock_id: "c6870852-127d-4dc5-91d4-9b425fe5907e",
      timeslot: "00:30",
    },
    {
      timeblock_id: "7128502c-9bc3-46d2-94b9-ccb492b7b73c",
      timeslot: "01:00",
    },
    {
      timeblock_id: "3981502f-8f9c-48b0-ba3f-0e971e955ecd",
      timeslot: "01:30",
    },
    {
      timeblock_id: "7a37fe36-28c9-4146-989e-9260422b9c9e",
      timeslot: "02:00",
    },
    {
      timeblock_id: "51b15c8c-fc0e-4f27-b6ce-0aa37020351b",
      timeslot: "02:30",
    },
    {
      timeblock_id: "1810415a-8d50-4c40-a4df-30a33b010ef8",
      timeslot: "03:00",
    },
    {
      timeblock_id: "79efca56-1be2-4ad3-a5fd-6bc251bb2837",
      timeslot: "03:30",
    },
    {
      timeblock_id: "e8043a4e-ec1d-4c96-a451-1b8c076ab69c",
      timeslot: "04:00",
    },
    {
      timeblock_id: "2d6cd566-8144-4a5c-a677-51c5076d6c67",
      timeslot: "04:30",
    },
    {
      timeblock_id: "222228c9-d7d2-48a9-a4a8-a8b0caa686ed",
      timeslot: "05:00",
    },
    {
      timeblock_id: "5924a2bf-42b5-4b29-9c48-4488e174a8cc",
      timeslot: "05:30",
    },
    {
      timeblock_id: "dde28382-61b9-4951-82fd-ced2bac7a208",
      timeslot: "06:00",
    },
    {
      timeblock_id: "1f15c8bc-3dfa-4f65-8890-81c602f82cf8",
      timeslot: "06:30",
    },
    {
      timeblock_id: "c79b5227-e4d4-4c27-a9fb-29b8bb74940e",
      timeslot: "07:00",
    },
    {
      timeblock_id: "78df8add-db68-45c5-a430-bed2ba03f6b3",
      timeslot: "07:30",
    },
    {
      timeblock_id: "fabb0b04-3612-4604-80af-e643989be806",
      timeslot: "08:00",
    },
    {
      timeblock_id: "655b12cd-ab43-43a1-97ca-89520dc2c56a",
      timeslot: "08:30",
    },
    {
      timeblock_id: "c5cf332c-0329-4c71-9f0f-63fe973d0ee1",
      timeslot: "09:00",
    },
    {
      timeblock_id: "32785c36-6327-4742-a5c2-4b41cc00cf41",
      timeslot: "09:30",
    },
    {
      timeblock_id: "a6dfd17c-d62d-4100-8699-1970a0e99970",
      timeslot: "10:00",
    },
    {
      timeblock_id: "680fbe3d-faec-4559-81a3-5451afe9def3",
      timeslot: "10:30",
    },
    {
      timeblock_id: "52eaf81d-bba4-42e5-9ef1-6f05ac911d4d",
      timeslot: "11:00",
    },
    {
      timeblock_id: "61b27264-1951-420d-9627-842c23a7734c",
      timeslot: "11:30",
    },
    {
      timeblock_id: "3ecaa1e1-78ff-4f54-a2d5-282287bb4763",
      timeslot: "12:00",
    },
    {
      timeblock_id: "a9fbb0eb-c452-427d-a519-ca8476bc9bdb",
      timeslot: "12:30",
    },
    {
      timeblock_id: "1b5e76b6-f176-4044-9d92-ef7ad14275fc",
      timeslot: "13:00",
    },
    {
      timeblock_id: "c0485839-ff46-46eb-af2d-95de8955722b",
      timeslot: "13:30",
    },
    {
      timeblock_id: "babb8867-895f-4b54-a3d3-1a63adee86bf",
      timeslot: "14:00",
    },
    {
      timeblock_id: "917f8f78-44ac-4144-ae6e-69dc4170f7f9",
      timeslot: "14:30",
    },
    {
      timeblock_id: "1dbb7272-ea93-411f-97d0-e8ef54947be3",
      timeslot: "15:00",
    },
    {
      timeblock_id: "d4c3775c-e20f-4b34-ae6b-cd174a15e8f2",
      timeslot: "15:30",
    },
    {
      timeblock_id: "4d753a96-e1ca-42cb-b6f7-3e8d013d2a7b",
      timeslot: "16:00",
    },
    {
      timeblock_id: "cc19cf8d-386b-47f0-af13-bcab79cdf99b",
      timeslot: "16:30",
    },
    {
      timeblock_id: "7ac725e7-ad33-4d29-a810-1086bf62767a",
      timeslot: "17:00",
    },
    {
      timeblock_id: "e0ab2995-34c3-487f-bb13-c573be8131be",
      timeslot: "17:30",
    },
    {
      timeblock_id: "46d6e93d-f892-4f30-9f49-cfa9e185ce24",
      timeslot: "18:00",
    },
    {
      timeblock_id: "f8fcee3f-8b4c-4bcb-b753-6a1024c42f90",
      timeslot: "18:30",
    },
    {
      timeblock_id: "93455e37-fe9c-4358-9e36-4e7db4686ebe",
      timeslot: "19:00",
    },
    {
      timeblock_id: "11ea634c-2759-4a9a-bb3e-1982434ba369",
      timeslot: "19:30",
    },
    {
      timeblock_id: "7d5375de-5bcf-4177-b7f0-3cfa870db3b2",
      timeslot: "20:00",
    },
    {
      timeblock_id: "d29f42ee-5da4-404d-96f5-cb01702ee73e",
      timeslot: "20:30",
    },
    {
      timeblock_id: "b54f6703-f4a5-4c7a-b2c2-fdb6ff7cebee",
      timeslot: "21:00",
    },
    {
      timeblock_id: "0662f80c-4740-454d-b600-95f5e07713ab",
      timeslot: "21:30",
    },
    {
      timeblock_id: "1f3a927c-d9ba-479e-b399-42e46a5b565f",
      timeslot: "22:00",
    },
    {
      timeblock_id: "bfd4587b-35d6-4fd2-b5d2-9cebc4027fd2",
      timeslot: "22:30",
    },
    {
      timeblock_id: "87f20725-af52-4ed3-9bf5-187be9c1dcb3",
      timeslot: "23:30",
    },
  ])
}
