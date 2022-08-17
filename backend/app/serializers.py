from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Article
        fields= '__all__'
    
    def get_photo_url(self, obj):
        request = self.context.get(request)
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)
