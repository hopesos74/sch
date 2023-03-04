// API 인증 정보
const CLIENT_ID = '94379887274-p7jb3ov9ga63m8polr0qm9u9ltggbktj.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';

// 인증 스코프
const SCOPES = 'https://www.googleapis.com/auth/photoslibrary.readonly';

// API 클라이언트 초기화
gapi.load('client:auth2', initClient);

// API 클라이언트 초기화 함수
function initClient() {
  gapi.client.init({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    scope: SCOPES,
    redirectUri: REDIRECT_URI
  }).then(function() {
    // 인증 확인
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
      // 이미지 가져오기
      loadPhotos();
    } else {
      // 로그인 페이지로 이동
      gapi.auth2.getAuthInstance().signIn();
    }
  });
}

// 이미지 가져오기 함수
function loadPhotos() {
  // 이미지 검색
  gapi.client.photoslibrary.mediaItems.search({
    pageSize: 10,
    orderBy: 'creationTime'
  }).then(function(response) {
    //
