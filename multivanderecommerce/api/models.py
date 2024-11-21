from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
#vendor model
class Vendor(models.Model):
   user = models.ForeignKey(User , on_delete=models.CASCADE)
   address = models.TextField(null=True)
  
   def __str__(self):
      return self.user.username

#product category model
class ProductCategory(models.Model):
   title =models.CharField(max_length=200)
   detail = models.TextField(null=True)

   def __str__(self):
      return self.title
   
   #product model
class Product(models.Model):
   category = models.ForeignKey(ProductCategory , on_delete=models.SET_NULL ,null=True,related_name='category_products')
   user = models.ForeignKey(User ,on_delete=models.SET_NULL ,null=True)
   title =models.CharField(max_length=200)
   detail = models.TextField(null=True)
   price =models.FloatField()

   def __str__(self):
      return  self.title 

# customer model
class Customer(models.Model):
   user = models.ForeignKey(User , on_delete=models.CASCADE)
   address =models.TextField(null=True)
   mobile = models.PositiveBigIntegerField()
   def __str__(self):
      return  self.user.username


# order model
class Order(models.Model):
   customer =models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_items' )
   order_time =models.DateTimeField(auto_now_add=True)
  

# order Item model
class OrderItem(models.Model):
   order = models.ForeignKey(Order,on_delete=models.CASCADE, related_name='order_items',  null=True,  # Allow the field to be nullable
        default=None )
   product = models.ForeignKey(Product,on_delete=models.CASCADE, null = True)
   def __str__(self):
      return  self.product.title 

#rating model
class CustomerAddress(models.Model):
   customer = models.ForeignKey(Customer, on_delete=models.CASCADE ,related_name='customer_address' )
   address =models.TextField(null=True)
   default_address =models.BooleanField(default=False)
   def __str__(self):
      return  self.address
   
class Productrating(models.Model):
   customer =models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rating_customer' )
   product = models.ForeignKey(Product,on_delete=models.CASCADE, null = True ,related_name='product_rating')
   rating = models.IntegerField()
   reviews = models.TextField()
   add_time = models.DateTimeField(auto_now_add=True)
   def __str__(self):
      return  f'{self.rating} - {self.reviews}'