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
   
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='category_products')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=300, unique=True, null=True)
    detail = models.TextField(null=True)
    price = models.FloatField()
    tag = models.TextField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='Product_img/', null=True)
    demo_url = models.URLField(null=True , blank=True)

    def __str__(self):
        return self.title

    @property
    def tag_list(self):
        if self.tag:  # Use 'tag' instead of 'tags'
            return self.tag.split(',')
        return []  # Return an empty list if no tags are provided


# customer model
class Customer(models.Model):
   user = models.ForeignKey(User , on_delete=models.CASCADE)
   # address =models.TextField(null=True)
   mobile = models.PositiveBigIntegerField(unique=True)
   def __str__(self):
      return  self.user.username


# order model
class Order(models.Model):
   customer =models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_items' )
   order_time =models.DateTimeField(auto_now_add=True)
   order_status = models.BooleanField(default=False)
   def __str__(self):
      return  self.customer.user.username 

# order Item model
class OrderItem(models.Model):
   order = models.ForeignKey(Order,on_delete=models.CASCADE, related_name='order_items',  null=True,  # Allow the field to be nullable
        default=None )
   product = models.ForeignKey(Product,on_delete=models.CASCADE, null = True)
   qty =models.IntegerField(default=1)
   price = models.DecimalField(max_digits=10,decimal_places=2, default=0)
   # def __str__(self):
   #    return  self.product.title 

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
   

class ProductImage(models.Model):
   Product = models.ForeignKey(Product, on_delete=models.CASCADE ,related_name='product_imgs' )
   image =models.ImageField(upload_to='Product_img/',null=True)
   def __str__(self):
      return  self.image.url
   