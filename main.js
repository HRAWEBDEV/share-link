const shareButton = document.querySelector('.share');

const copyButton = document.querySelector('.copy');

shareButton.addEventListener('click', () => {
 if (!navigator.share) return;
 navigator.share({
  title: 'share app',
  text: 'you can share your app here',
  url: location.href,
 });
});
copyButton.addEventListener('click', () => {
 if (!navigator.clipboard) return;
 navigator.clipboard.writeText(location.href);
 alert('app link coppied');
});
