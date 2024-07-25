from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    return JsonResponse({"message": "Hello, world!"})

@csrf_exempt
def chatbot(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_message = data.get('message')
        
        # Your chatbot logic here
        bot_reply = "Hello! You said: " + user_message
        
        return JsonResponse({'reply': bot_reply})
