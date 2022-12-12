exports.seed = async (knex) => {
  await knex("users").del()
  await knex("users").insert([
    {
      id: "1",
      first_name: "Allan",
      last_name: "Somera",
      email: "123fake@email.com",
    },
    {
      id: "2",
      first_name: "Paga",
      last_name: "Nini",
      email: "456fake@email.com",
    },
    {
      id: "3",
      first_name: "Bach",
      last_name: "DeBussy",
      email: "789fake@email.com",
    },
  ])
}
