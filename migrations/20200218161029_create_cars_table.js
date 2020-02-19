
exports.up = function(knex) {

    return knex.schema.createTable("cars", tbl => {
        tbl.increments(); 
    
        tbl
          .string("vin", 17)
          .notNullable()
          .index();
    
        tbl.string("make", 128).notNullable();
    
        tbl.string("model", 256).notNullable();

        tbl.integer("mileage", 6).notNullable();

        tbl.string("transmission", 256);

        tbl.string("title", 256);
    
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};



  