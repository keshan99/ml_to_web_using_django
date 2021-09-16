from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse

import json


# Create your views here.

def home(request):
    print("hi")
    return render(request,'home.html')


def ans(request):
    
    if request.method == 'GET':


        A = int(request.GET["aaaa"])
        B = int(request.GET['bbbb'])

        for i in range(1,20000000):
            j=i
        ans = A + B
        return HttpResponse(ans)




