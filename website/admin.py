from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Gallery)
admin.site.register(models.Menu)
admin.site.register(models.Review_images)
admin.site.register(models.Review_text)
