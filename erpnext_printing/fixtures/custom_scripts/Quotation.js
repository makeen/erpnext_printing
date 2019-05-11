frappe.ui.form.on("Quotation", {
	"customer": function(frm) {
        frappe.call({
            "method": "frappe.client.get",
            args: {
                doctype: "Customer",
                name: frm.doc.customer_name
            },
            callback: function (data) {
                frappe.model.set_value(frm.doctype,
                    frm.docname, "print_items_images",
                    data.message.print_items_images
                );
                frappe.model.set_value(frm.doctype,
                    frm.docname, "print_prices",
                    data.message.print_prices
                )
            }
        })
    }
});