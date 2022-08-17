from rest_framework import serializers
from .models import Articles, Comments, Posts

class ArticleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Articles
        fields= '__all__'
    
    def get_photo_url(self, obj):
        request = self.context.get(request)
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)


class PostsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Posts
        fields= '__all__'

class CommentsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Comments
        fields= '__all__'