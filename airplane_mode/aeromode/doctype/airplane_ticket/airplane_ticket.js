// Copyright (c) 2024, sapna and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Airplane Ticket", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('Airplane Ticket', {
    refresh: function (frm) {
        frm.add_custom_button('Set Seat', () => {
            frappe.prompt(
                [
                    {
                        label: 'Seat',
                        fieldname: 'seat',
                        fieldtype: 'Data',
                        reqd: 1,
                    },
                ],
                (values) => {
                    frm.set_value('seat', values.seat);
                    frappe.msgprint(`Seat Number set to: ${values.seat}`);
                },
                'Set Seat Number',
                'Set'
            );
        }, 'Actions');
    },
});
