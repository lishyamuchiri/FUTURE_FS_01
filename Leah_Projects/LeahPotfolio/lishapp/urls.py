
from django.contrib import admin
from django.urls import path
from lishapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('education/', views.education, name='education'),
    path('interest/', views.interest, name='interest'),
    path('project/', views.project, name='project'),
    path('starter/', views.starter, name='starter-page'),
]
