/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("dayByTimeblock").del()
  await knex("dayByTimeblock").insert([
    {
      dayByTimeblock_id: "76db996a-df34-4945-81da-2d94c3902607",
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "8f6c9a42-46a1-4e7d-a1ae-5a6018e44b2d",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "d1f068a9-a800-48e8-a6f4-bf2d7c150364",
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "c6870852-127d-4dc5-91d4-9b425fe5907e",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "7bb83f36-8ec8-4561-8503-f7b380041897"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "7128502c-9bc3-46d2-94b9-ccb492b7b73c",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "8b8c6f90-ddf3-455a-a8c8-eed83a654cd1"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "3981502f-8f9c-48b0-ba3f-0e971e955ecd",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "462599cd-ebce-4408-a0b8-434d9ae6882f"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "7a37fe36-28c9-4146-989e-9260422b9c9e",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "06110ac6-6f11-48a1-92e9-8647012cb46d"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "51b15c8c-fc0e-4f27-b6ce-0aa37020351b",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "6813ea7b-0576-455d-9d5f-147ab45ce0d4"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "1810415a-8d50-4c40-a4df-30a33b010ef8",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "edf03687-315f-41a9-a567-51553c109879"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "79efca56-1be2-4ad3-a5fd-6bc251bb2837",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "5af32bfc-dbba-4d61-824a-75a1bf401455"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "e8043a4e-ec1d-4c96-a451-1b8c076ab69c",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "7d6d4ce3-c6e7-4e2e-be07-a1b12e1ee2d3"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "2d6cd566-8144-4a5c-a677-51c5076d6c67",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "2910fd34-9b04-4ece-ae7f-f946cab8998c"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "222228c9-d7d2-48a9-a4a8-a8b0caa686ed",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "95fb0362-9066-486e-89c6-af533a56379d"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "5924a2bf-42b5-4b29-9c48-4488e174a8cc",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "451ff603-562d-42f9-b266-4f9fd0da2530"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "dde28382-61b9-4951-82fd-ced2bac7a208",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "cf86eb15-0a64-4130-8cf1-79deef937974"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "1f15c8bc-3dfa-4f65-8890-81c602f82cf8",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "49830ac9-a8e7-4e47-9faa-6e6e2a170a57"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "c79b5227-e4d4-4c27-a9fb-29b8bb74940e",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "c2a6b3e0-c63b-475f-97cc-9c942590b835"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "78df8add-db68-45c5-a430-bed2ba03f6b3",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "bc1edcbd-880e-4311-9771-9fdb5850738f"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "fabb0b04-3612-4604-80af-e643989be806",
      fk_tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
    },
    {
      dayByTimeblock_id: "e7cef37c-67b3-42db-baa0-b626e91cf0f9"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "655b12cd-ab43-43a1-97ca-89520dc2c56a",
      fk_tag_id: "33ab623f-e415-4c31-a89b-815bfbade7a5",
    },
    {
      dayByTimeblock_id: "9310bf86-e8a1-41fd-a975-bc73fb01167f"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "c5cf332c-0329-4c71-9f0f-63fe973d0ee1",
      fk_tag_id: "33ab623f-e415-4c31-a89b-815bfbade7a5",
    },
    {
      dayByTimeblock_id: "458e6b12-d4c8-4b8d-af30-c8b8e9d38c12"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "32785c36-6327-4742-a5c2-4b41cc00cf41",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "9b0270e8-f1ad-4054-9d88-af4d723dd784"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "a6dfd17c-d62d-4100-8699-1970a0e99970",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "e325e894-bf2c-4e06-8a9a-001c18339abe"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "680fbe3d-faec-4559-81a3-5451afe9def3",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "7d7da1d0-64b8-4b2e-8941-5c34c936fe7c"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "52eaf81d-bba4-42e5-9ef1-6f05ac911d4d",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "66677e92-4267-45a3-b3dc-dd2090839b0c"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "61b27264-1951-420d-9627-842c23a7734c",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "bad91957-b59c-4803-9cd7-c6d26c816147"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "3ecaa1e1-78ff-4f54-a2d5-282287bb4763",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "a9852aa4-85f8-452d-9300-dc1755369a29"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "a9fbb0eb-c452-427d-a519-ca8476bc9bdb",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "91c51b7d-55e5-4d88-ba54-5fa22e030e53"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "1b5e76b6-f176-4044-9d92-ef7ad14275fc",
      fk_tag_id: "63d69f63-3948-4be0-ac42-2efdd9a6837d",
    },
    {
      dayByTimeblock_id: "a2e0abb1-56e3-4fda-97ba-19252b4f2f9c"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "c0485839-ff46-46eb-af2d-95de8955722b",
      fk_tag_id: "33ab623f-e415-4c31-a89b-815bfbade7a5",
    },
    {
      dayByTimeblock_id: "6474b646-a75a-4b3c-b383-40a69de2f05c"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "babb8867-895f-4b54-a3d3-1a63adee86bf",
    },
    {
      dayByTimeblock_id: "16b5ced1-ccc8-4544-abed-9daf2defcb08"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "917f8f78-44ac-4144-ae6e-69dc4170f7f9",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "109d947b-6ea2-4f0c-8aab-f87e51a781c7"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "1dbb7272-ea93-411f-97d0-e8ef54947be3",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "c6fe283a-77d9-47e7-9e57-273f550a663c"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "d4c3775c-e20f-4b34-ae6b-cd174a15e8f2",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "6e60e523-6838-4d5d-86b2-018c8bc54cd3"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "4d753a96-e1ca-42cb-b6f7-3e8d013d2a7b",
      fk_tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
    },
    {
      dayByTimeblock_id: "ab8b5fc4-8c16-4813-85f7-d6c33b0c0995"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "cc19cf8d-386b-47f0-af13-bcab79cdf99b",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "34b9ff53-bf3e-4d53-b209-5e807f68ef99"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "7ac725e7-ad33-4d29-a810-1086bf62767a",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "c1ffac06-39d7-430b-b31c-da1684395fe1"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "e0ab2995-34c3-487f-bb13-c573be8131be",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "fcf7e7fb-caac-4df7-979f-63ae58386258"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "46d6e93d-f892-4f30-9f49-cfa9e185ce24",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "f9e56fbe-430b-4416-9601-4fa433d35850"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "f8fcee3f-8b4c-4bcb-b753-6a1024c42f90",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "dc9e4091-d9e4-4d78-8255-9c5e3ab70500"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "93455e37-fe9c-4358-9e36-4e7db4686ebe",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "5b7028ab-239b-49ce-b339-a31170020b1e"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "11ea634c-2759-4a9a-bb3e-1982434ba369",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "a9b6c926-7bab-46fc-9136-a1541089b3b5"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "7d5375de-5bcf-4177-b7f0-3cfa870db3b2",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "f84e7366-4d31-42c7-bf9d-3e959d8f9da6"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "d29f42ee-5da4-404d-96f5-cb01702ee73e",
      fk_tag_id: "63d69f63-3948-4be0-ac42-2efdd9a6837d",
    },
    {
      dayByTimeblock_id: "4236f21d-14fc-4863-af7f-22cbcec5ac8e"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "b54f6703-f4a5-4c7a-b2c2-fdb6ff7cebee",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "2d24788d-4f0f-4524-902c-b5f44d8c05a7"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "0662f80c-4740-454d-b600-95f5e07713ab",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "18526407-7902-48bd-a476-8f75c72626ac"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "1f3a927c-d9ba-479e-b399-42e46a5b565f",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "4f0ba534-9a23-44cd-b7a4-2aba4e927b91"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "bfd4587b-35d6-4fd2-b5d2-9cebc4027fd2",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "76453a4e-b736-4de8-aadc-79ced49bab97"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "87f20725-af52-4ed3-9bf5-187be9c1dcb3",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
    {
      dayByTimeblock_id: "4ea9c083-e282-435a-abcf-2dd43f5b01b2"
      fk_day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",
      fk_timeblock_id: "87f20725-af52-4ed3-9bf5-187be9c1dcb3",
      fk_tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
    },
  ])
}
