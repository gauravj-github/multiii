from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Vendor)
admin.site.register(ProductCategory)
# admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Customer)
admin.site.register(CustomerAddress)
admin.site.register(Productrating)
admin.site.register(ProductImage)
class ProductImageInline(admin.StackedInline):
    model=ProductImage
class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    inlines =[
        ProductImageInline
    ]


admin.site.register(Product,ProductAdmin)

class ordedrAdmin(admin.ModelAdmin):
  list_display =['id','customer','order_time','order_status']


admin.site.register(Order,ordedrAdmin)