from django.db import models

# Create your models here.
class Gallery(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='gallery')
    key = models.FloatField(max_length=10)

    def __str__(self):  
          return f'{self.name}'     


menu_choices = (
	('Cakes','Cakes'),
	('Cupcakes','Cupcakes'),
	('Tarts','Tarts'),
	('Chocolates','Chocolates'),
	('Customized Cakes','Customized Cakes'),
	)

class Menu(models.Model):
	options = models.CharField(max_length=30, choices=menu_choices)
	image = models.ImageField(upload_to='menu',blank=True,null=True)
	name = models.CharField(max_length=100)
	price = models.CharField(max_length=10)
	description = models.CharField(max_length=500)
	quantity = models.CharField(max_length=10)
	key = models.FloatField(max_length=10)

	def __str__(self):
		return f'{self.name}'
  


class Review_images(models.Model):
	image = models.ImageField(upload_to='review')
	key = models.FloatField(max_length=10)


class Review_text(models.Model):
	review = models.CharField(max_length=500)
	name = models.CharField(max_length=100)
	key = models.FloatField(max_length=10)

	def __str__(self):
		return f'{self.name}' 	
    

