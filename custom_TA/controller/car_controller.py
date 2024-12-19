from odoo import http
from odoo.http import request

class CarPageController(http.Controller):

    @http.route('/car_page', type='http', auth='public', website=True)
    def car_page(self, **kwargs):
        # Render the form page template
        return request.render('custom_TA.car_template', {})