from django.shortcuts import render,redirect

from lishapp.models import Contact


# Create your views here.
def index(request):
    return render(request,'index.html')


def starter(request):
        return render(request, 'starter-page.html')


def contact(request):
    if request.method == "POST":
        mycontacts=Contact(
            name=request.POST['name'],
            email=request.POST['email'],
            subject=request.POST['subject'],
            message=request.POST['message']
        )
        mycontacts.save()
        return redirect('/contact')
    else:
        return render(request,'contact.html')


def about(request):
    return render(request,'about.html')

def interest(request):
    return render(request,'interest.html')

def education(request):
    return render(request,'education.html')

def project(request):
    return render(request,'project.html')