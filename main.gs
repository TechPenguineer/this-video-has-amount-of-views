function updateTitle() {
  
  var videoID = 'xsO5p50bSbA'; //https://youtu.be/xsO5p50bSbA
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;
  var videoLikeCount = video.statistics.likeCount;
  var videoDislikeCount = video.statistics.dislikeCount;
  var videoCommentCount = video.statistics.commentCount;
  var videoTitle = ' This video has ' + videoViewsCount + ' views and ' + videoCommentCount + ' comments!!!';
  
  video.snippet.title = videoTitle;
  video.snippet.description = `Stats:\nViews: ${videoViewsCount}\nLikes: ${videoLikeCount}\nDislikes: ${videoDislikeCount}\nComments: ${videoCommentCount}`
  
  try{
    YouTube.Videos.update(video, part);
    
  }catch(e){
    
      YouTube.Videos.update(video, part);

  }
  
}
