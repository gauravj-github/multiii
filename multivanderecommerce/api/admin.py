from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Vendor)
admin.site.register(ProductCategory)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Customer)
admin.site.register(CustomerAddress)
admin.site.register(Productrating)


