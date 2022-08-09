const TABLE_MENUS = "menus";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_MENUS).insert([
    { id: 1, shop_id: 1, name: "Blue Bottle decaf Tea", price: 600 },
    { id: 2, shop_id: 1, name: "Blue Bottle Herbal decaf Tea", price: 650 },
    { id: 3, shop_id: 1, name: "Blue Bottle Organic decaf Coffee", price: 600 },
    { id: 4, shop_id: 1, name: "Blue Bottle Organic decaf Cafe Late", price: 700 },
    { id: 5, shop_id: 2, name: "Hoshino Special Tea", price: 400 },
    { id: 6, shop_id: 2, name: "Hoshino decaf Coffee", price: 600 },
    { id: 7, shop_id: 2, name: "Hoshino decaf Cafe Late", price: 750 },
    { id: 8, shop_id: 3, name: "Verve Special Tea", price: 400 },
    { id: 9, shop_id: 3, name: "Verve decaf Coffee", price: 600 },
    { id: 10, shop_id: 3, name: "Verve decaf Cafe Late", price: 750 },
    { id: 11, shop_id: 4, name: "Veloce Special Tea", price: 450 },
    { id: 12, shop_id: 4, name: "Veloce decaf Coffee", price: 550 },
    { id: 13, shop_id: 4, name: "Veloce decaf Cafe Late", price: 650 },
    { id: 14, shop_id: 5, name: "Starbucks decaf Hot Coffee", price: 400 },
    { id: 15, shop_id: 5, name: "Starbucks decaf Ice Coffee", price: 450 },
    { id: 16, shop_id: 5, name: "Starbucks decaf Ice Late", price: 500 },
    { id: 17, shop_id: 6, name: "Shibuya Special Tea", price: 550 },
    { id: 18, shop_id: 6, name: "Shibuya decaf Coffee", price: 800 },
    { id: 19, shop_id: 6, name: "Shibuya decaf Cafe Late", price: 900 },
    { id: 20, shop_id: 7, name: "L'OCCITANE Special Tea", price: 900 },
    { id: 21, shop_id: 7, name: "L'OCCITANE decaf Coffee", price: 1100 },
    { id: 22, shop_id: 7, name: "L'OCCITANE decaf Cafe Late", price: 1200 },
    { id: 23, shop_id: 8, name: "Noa Special Tea", price: 550 },
    { id: 24, shop_id: 8, name: "Noa decaf Coffee", price: 800 },
    { id: 25, shop_id: 8, name: "Noa decaf Cafe Late", price: 850 },
    { id: 26, shop_id: 9, name: "Sarutahiko Special Tea", price: 450 },
    { id: 27, shop_id: 9, name: "Sarutahiko decaf Coffee", price: 600 },
    { id: 28, shop_id: 9, name: "Sarutahiko decaf Cafe Late", price: 700 },
    { id: 29, shop_id: 10, name: "mint cafe Special Tea", price: 300 },
    { id: 30, shop_id: 10, name: "mint cafe decaf Coffee", price: 350 },
    { id: 31, shop_id: 10, name: "mint cafe decaf Cafe Late", price: 500 },
    { id: 32, shop_id: 10, name: "mint cafe decaf Ice Cafe Late", price: 600 },
    { id: 33, shop_id: 11, name: "Hard Rock Special Tea", price: 600 },
    { id: 34, shop_id: 11, name: "Hard Rock decaf Coffee", price: 700 },
    { id: 35, shop_id: 11, name: "Hard Rock decaf Cafe Late", price: 800 },
    { id: 36, shop_id: 11, name: "Hard Rock decaf Ice Cafe Late", price: 900 },
  ]);
};
