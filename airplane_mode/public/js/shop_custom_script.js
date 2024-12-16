// frappe.ui.form.on('Shop', {
//     after_save: function (frm) {
//         if (frm.doc.airport) {
//             frappe.db.get_list('Shop', {
//                 filters: { airport: frm.doc.airport },
//                 fields: ['status']
//             }).then((shops) => {
//                 let total = shops.length;
//                 let available = shops.filter(shop => shop.status === 'Available').length;
//                 let occupied = total - available;

//                 frappe.db.set_value('Airport', frm.doc.airport, {
//                     total_shops: total,
//                     available_shops: available,
//                     occupied_shops: occupied
//                 });
//             });
//         }
//     }
// });
