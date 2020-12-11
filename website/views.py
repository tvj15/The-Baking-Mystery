from django.shortcuts import render,HttpResponse, redirect
from django.template import loader
from .models import Gallery,Menu,Review_text,Review_images

# Create your views here.
def index(request):
	reviews = Review_text.objects.all()
	reviews = reviews.order_by('key')
	reviews = reviews[:5]
	count = Review_text.objects.all().count()
	print(count)
	print(reviews)
	return render(request, 'website/index.html',{'reviews':reviews,'title':'home'})

def gallery(request):
	obj = Gallery.objects.all()
	obj = obj.order_by('key')
	return render(request, 'website/gallery.html',{'gallery':obj,'title':'gallery'})

def menu(request):
	items = Menu.objects.all()
	items = items.order_by('key')
	print(items)
	cake_items = items.filter(options = 'Cakes')
	cupcake_items = items.filter(options = 'Cupcakes')
	tart_items = items.filter(options = 'Tarts')
	chocolate_items = items.filter(options = 'Chocolates')
	customized_cake_items = items.filter(options = 'Customized Cakes')
	print(cake_items)

	return render(request,'website/menu.html',{'cake_items':cake_items,'cupcake_items':cupcake_items,'tart_items':tart_items,'chocolate_items':chocolate_items,'customized_cake_items':customized_cake_items,'title':'menu'})


def reviews(request):
    text_objects = Review_text.objects.all()
    text_objects = text_objects.order_by('key')
    image_objects = Review_images.objects.all()
    image_objects = image_objects.order_by('key')
    print(image_objects)
    return render(request, 'website/reviews.html',{'reviews':text_objects,'image_reviews':image_objects,'title':'review'})

