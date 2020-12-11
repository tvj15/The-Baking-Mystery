from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('gallery/', views.gallery, name='gallery'),
    path('menu/', views.menu, name='menu'),
    path('reviews/', views.reviews, name='reviews'),        

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)