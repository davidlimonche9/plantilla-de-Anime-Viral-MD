
<IfModule mod_expires.c> 
  ExpiresActive On 
  ExpiresDefault "access plus 1000 seconds" 
  ExpiresByType image/x-icon "access plus 604800 seconds" 
  ExpiresByType image/jpg "access plus 604800 seconds" 
  ExpiresByType image/jpeg "access plus 604800 seconds" 
  ExpiresByType image/png "access plus 604800 seconds" 
  ExpiresByType image/gif "access plus 604800 seconds" 
  ExpiresByType text/css "access plus 604800 seconds" 
  ExpiresByType text/javascript "access plus 604800 seconds" 
  ExpiresByType application/x-javascript "access plus 604800 seconds" 
  ExpiresByType text/html "access plus 7200 seconds" 
  ExpiresByType application/xhtml+xml "access plus 7200 seconds" 
</IfModule> 

<IfModule mod_headers.c> 
  <FilesMatch "\.(ico|jpeg|jpg|png|gif|swf|css|js)$"> 
    Header set Cache-Control "max-age=604800, public" 
  </FilesMatch> 
  <FilesMatch "\.(x?html?|php)$"> 
    Header set Cache-Control "max-age=7200, private, must-revalidate" 
  </FilesMatch> 
</IfModule>