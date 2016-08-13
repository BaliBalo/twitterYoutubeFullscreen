var iframe = document.querySelector('iframe');
if(iframe && (iframe.getAttribute('data-src') || '').startsWith('https://www.youtube.com/'))
	iframe.setAttribute('allowFullScreen', '');