exports.seed = async (knex) => {
    await knex("users").del()
    await knex("users").insert([
        {
            id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
            first_name: "Allan",
            last_name: "Somera",
            email: "123fake@email.com",
        },
        {
            id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
            first_name: "Paga",
            last_name: "Nini",
            email: "456fake@email.com",
        },
        {
            id: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
            first_name: "Bach",
            last_name: "DeBussy",
            email: "789fake@email.com",
        },
    ])
}
