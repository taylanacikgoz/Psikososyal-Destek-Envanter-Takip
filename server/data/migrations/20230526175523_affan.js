/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("Roller", (Roller) => {
      Roller.increments("Rol_id");
      Roller.string("Rol_Adi", 32).notNullable();
    })
    .createTable("Sehir", (Sehir) => {
      Sehir.increments("Sehir_id");
      Sehir.string("Sehir_Adi", 32).notNullable().unique();
      Sehir.string("Sehir_Koordinat").notNullable().unique();
      Sehir.string("Aciklama");
    })
    .createTable("Merkez", (Merkez) => {
      Merkez.increments("Merkez_id");
      Merkez.string("Merkez_Adi", 32).notNullable().unique();
      Merkez.integer("Iletisim_1", 32);
      Merkez.integer("Iletisim_2", 32);
      Merkez.string("Adres").notNullable();
      Merkez.string("Tam_Koordinatlar");
      Merkez.date("Acilis_Tarihi");
      Merkez.integer("Sehir_id")
        .references("Sehir_id")
        .inTable("Sehir")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      //Kurum_id gelmeli mi ?
    })
    .createTable("Personel", (Personel) => {
      Personel.increments("Personel_id");
      Personel.string("Personel_Adi", 32).notNullable();
      Personel.string("Personel_Soyadi", 32).notNullable();
      Personel.string("Iletisim").notNullable().unique(); //Cep No ve Email ayrı mı verilmeli
      Personel.string("Email");
      Personel.string("Kan_Grubu").notNullable();
      Personel.string("Saha_Adresi");
      Personel.string("TC_Numara"); //Gizli olacak
      Personel.string("Ikametgah");
      Personel.string("Calisma_Durumu"); //Çalışıyor mu?
      Personel.string("Acil_Durum_Kisisi").notNullable();
      Personel.string("Acil_Durum_Iletisim").notNullable();
      Personel.string("Acil_Durum_Bag").notNullable();
      Personel.integer("Merkez_id")
        .references("Merkez_id")
        .inTable("Merkez")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      Personel.integer("Rol_id")
        .references("Rol_id")
        .inTable("Roller")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("Envanter", (Envanter) => {
      Envanter.increments("Envanter_id");
      Envanter.string("Envanter_Adi", 32).notNullable().unique();
      Envanter.string("Türü").notNullable(); //Dropdown olacak
      Envanter.string("Aciklama");
      Envanter.integer("Merkez_id")
        .references("Merkez_id")
        .inTable("Merkez")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      Envanter.integer("Sehir_id")
        .references("Sehir_id")
        .inTable("Sehir")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("Kurum", (Kurum) => {
      Kurum.increments("Kurum_id");
      Kurum.string("Kurum_Adi", 32).notNullable().unique();
      Kurum.string("Kısa_Isim").notNullable();
      Kurum.string("Aciklama");
      Kurum.string("Logo");
      Kurum.string("Web_Adresi").unique();
      Kurum.integer("Merkez_id")
        .references("Merkez_id")
        .inTable("Merkez")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("Hizmet", (Hizmet) => {
      Hizmet.increments("Hizmet_id");
      Hizmet.string("Hizmet_Adi", 32).notNullable().unique();
      Hizmet.string("Hizmet_Tipi").notNullable();
      Hizmet.string("Sisteme_Giris_Tarihi");
      Hizmet.string("Donem");
      Hizmet.string("Erisilen_Kisi");
      Hizmet.integer("Merkez_id")
        .references("Merkez_id")
        .inTable("Merkez")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Hizmet")
    .dropTableIfExists("Kurum")
    .dropTableIfExists("Envanter")
    .dropTableIfExists("Personel")
    .dropTableIfExists("Merkez")
    .dropTableIfExists("Sehir")
    .dropTableIfExists("Roller");
};
