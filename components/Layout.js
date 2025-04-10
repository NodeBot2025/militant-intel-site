
import React from 'react';

const Layout = ({ children }) => (
  <div style={ maxWidth: '800px', margin: '0 auto', padding: '1rem' }>
    <header>
      <h1 style={ color: '#58a6ff' }>Militant Intel</h1>
    </header>
    <main>
      
<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-4298428440444502" crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="pub-4298428440444502"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({{}});
</script>

      {children}
    </main>
    <footer style={ marginTop: '2rem', color: '#666' }>
      &copy; 2025 Militant Society
    </footer>
  </div>
);

export default Layout;
