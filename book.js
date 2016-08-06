db.towns.insert({
    name: "New York",
    population: 22200000,
    last_census: ISODate("2009-07-31"),
    famous_for: ["status of liberty", "food"],
    mayor: {
        name: "Michael Bloomberg",
        party: "I"
    }
})