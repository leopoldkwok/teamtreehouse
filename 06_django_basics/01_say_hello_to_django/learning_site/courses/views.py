from django.http import HttpResponse
from django.shortcuts import render

from .models import Course

# Create your views here.
def course_list(request):
	courses = Course.objects.all()
	output = ', '.join([str(course) for course in courses])
	return HttpResponse(output)