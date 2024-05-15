window.addEventListener("load", function () {
  // true / false로 모바일, tablet 구분
  // 대신 그 기기가 바탕으로 되어있는 os를 가지고 구분하기 때문에
  // 일단 그 부분은 조심하고 사용해야 될듯
  // 모바일일 때 토글 버튼이 이상해서
  // 현재 그 부분을 js하고 css로 반응형 구현해야 될거같음.
  // 화면크기를 조절할 때는 그냥 줄어들고
  // 사이드바도 똑같이 오른쪽에서 나오게 구현할듯.
  const isMobile = function () {
    console.log(navigator.userAgent);
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test();
  };

  console.log(isMobile());
});
