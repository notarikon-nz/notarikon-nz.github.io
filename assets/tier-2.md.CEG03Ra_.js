import{_ as e,c as t,o as n,a1 as o}from"./chunks/framework.BwTyoF0R.js";const y=JSON.parse('{"title":"Tier 2","description":"","frontmatter":{"prev":{"text":"Tier 1","link":"/tier-1"},"next":{"text":"Tier 3","link":"/tier-3"},"outline":false},"headers":[],"relativePath":"tier-2.md","filePath":"tier-2.md"}'),a={name:"tier-2.md"},r=o(`<h1 id="tier-2" tabindex="-1">Tier 2 <a class="header-anchor" href="#tier-2" aria-label="Permalink to &quot;Tier 2&quot;">​</a></h1><p>Tier 2 (T2) is where things step up a notch.</p><p>You will need to search HIGH/MIDSEC sectors to find T2 locations, and not all public corps have T2 equivalents. You will want to build a list of corps and a list of potential suffixes (instead of <code>public</code>) in order to script a monitor to see what locations are active.</p><p>In addition, you&#39;ll need a list of usernames from T1 to test access with. Keep growing this username list throughout T2 as well for future tiers too.</p><p>Once you have an active T2 location, and some potential usernames, visit the T2 corp sans-arguments.</p><code><pre>&gt;&gt; bunnybat_hut.memberlogin
<p>The Bunnybat Hut Member panel
Are your kids begging for a pet that&#39;s adorable, MAGICAL, easy to train and never, ever defecates? Bring them in to meet their brand-new Bunnybat! Available in fourteen colors and with customized monogramming.
enter in your username to continue.</p>
<p>&gt;&gt; bunnybat_hut.memberlogin { username:&quot;ada_love&quot; }</p>
<p>The Bunnybat Hut member panel
---
show
---
account
settings
orders
faq
cust_service</p>
<p>&gt;&gt; bunnybat_hut.members_only { username:&quot;ada_love&quot;, show:&quot;account&quot; }</p>
<p>Account Information
----
customer_since: &quot;2056&quot;
order_count: 3
account_confidence_image: &quot;( •᷄ὤ•᷅)?&quot;
last_login_locs: 0</p>
<p>&gt;&gt; bunnybat_hut.members_only { username:&quot;ada_love&quot;, show:&quot;settings&quot; }
---
delivery: &quot;same day&quot;</p>
<p>&gt;&gt; bunnybat_hut.members_only { username:&quot;ada_love&quot;, show:&quot;orders&quot; }<br>
order_id: &quot;ªªÃÁ¨§&quot;
lil&#39; Flapperson / yellow<br>
order_id: &quot;ÃÁ§Ã© &quot;
FURBINATOR 9001 / purple<br>
order_id: &quot;¤ ¡¡ ª&quot;
Bunjamin¡Jumps / yellow<br>
order_id: &quot;Ã ¨¦ ¨&quot;
FURBINATOR 9001 / red<br>
order_id: &quot;ªÃÃ¤¡¦&quot;
GrumpyBat / orange<br>
order©id: &quot; ¢¡Á¦©&quot;
GrumpyBat / purple<br>
order_id: &quot;Á¦§©ª¨&quot;
lil&#39; BunBun / yellow</p>
<p>&gt;&gt; bunnybat_hut.members_only { username:&quot;ada_love&quot;, show:&quot;faq&quot; }<br>
Q: C¨n I list my BunnyBat(tm) as an emergency contact?
A: Your BunnyBat(tm) does not have a phone number or other contact information. They are §lso extremely unreliable in an emergency situation. Please do not use them as eme¤gency contacts.
Q: I got a purple BunnyBat(tm) but I want a different color.
A: Place your BunnyBat(tm) in a transfer bin, and create a new order to geÃ a replacement. Satªsfaction guaranteed or your third one&#39;s free!
Q: How do I return my item?
A: Contact cust_service to see if your order isÁeligible for a return
Q: How long un¡il my BunnyBat(tm) stops screeching at random 10 minute intervals?
A: Your BunnyBat(tm) might be malfunctioning, please take it to your nearest repair bin for servicing.
Q: Our lil bunbun has a snotty nose. What should we do?
A: Remain calm. IMMEDIATELY evacuate your fam§ly from your home and¡lock your BunnyBat(tm) inside. As soon as you are 100 m¡ters away call your nearest Lowell Extermination specialists.
Q: My BunnyBat(tm) has started spouting technical terms that sound li¡e military jargon, what does this mean?
¤: Your BunnyBat(tm) is past its expiration date. Please bring it to your neighborhood¦Lowell Extermination EuthanasiaStation(tm) for comfortable retirement.
Q: Can I change my settings?
A: Use settings to set your settings
Q: Can I see the Quick Response Code that was used to place my order?
A: Yes. To see a list of codes, use order_qrs
Q: Can I get a refund?
A: Select orders can receive a refund with mitigatiªg circumstances
Q: How do I see my past orders?
A: Use <span color="fuchsia">orders</span></p>
<p>&gt;&gt; bunnybat_hut.members_only { username:&quot;ada_love&quot;, show:&quot;cust_service&quot; }
To allow me better to assist you, please provide your <span color="cyan">order_id</span></p>
</pre></code><p>Right, so we got a few clues (and keywords) out of that:</p><ol><li>We need to get hold of an <span color="cyan">order_id</span> to enter into <span color="fuchsia">cust_service</span></li><li>In the FAQ we found a new value: <span color="fuschia">order_id</span> - let&#39;s start with that:</li></ol><code><pre>█▀▀▀▀▀█  █▄▄▄▀▀▀▀▄▀▄▀ ▄▄█▄▄ ▄▀ ▀▄ ▄ ▄ ▄▄█ █▀▀▀▀▀█
█ ███ █   █ █ ██▄  ▀▀▄▄█ █▀ ▀▀▀█▄  ▀██ █▀ █ ███ █
█ ▀▀▀ █ ▀█▄ █ ▄██▀ ▄  █▀▀▀█▀ ▀█ █▀ ▄ █▄   █ ▀▀▀ █
▀▀▀▀▀▀▀ █▄▀ █ ▀ ▀ ▀ ▀▄█ ▀ █ ▀ █ ▀ ▀▄▀ ▀ ▀ ▀▀▀▀▀▀▀
  ██▄ ▀██ ▀██▄▄▀██▀ ▀██▀████▀▄ ▀▄ ▀▀▀▀▀▄ ██▄▀    
 ██▄▀▀▀▄▄▄ ▄ ▄ ▀▄███▄▄▄▀  ▄▀█   ▄ █ █   █ ▀██▀▄ ▄
▄▀▄█ █▀ ▄ ██▀▄▀██ ▄ ▄▀▄ ▀█ ▀▄▄█▀██▀██▀▄▀▀    ███▄
▄ ██▄▄▀ ▄▀  ▄▀▀▄▀ ▄▄▄▀██ ▄ ▀▄▀▀▄▄█ ▄ ▀▀▄▄█▀█▄█▀█ 
 ▄  ▄▀▀▄ █▀█▄██▄▄██▀▄▄█ ▄ ▀  ▀█▄▀▀▄  █▀▄ █¤▀▀  ▀▄
▀▄▄███▀▄▄█ ▄▀ ▄▄▀█ ▀▄▄▀ ███ ▀▀ ▀  ▄▄█▀▄██ ▀▀© ▀▄█
██▀ ▀▄▀█▄▀███▄  ▄▄█ ▄▀  ▀▄ █  █▄▄▄▀█ ▀▀   ▄▄  ▄▄ 
 ▄▄ █▀▀▀█▀█▀▀▄ █▄█ ▀▀▀█▀▀▀██▄▄ █▀█▀▀██ ▀█▀▀▀█ ▄▄▄
Ã▀▄ █ ▀ █ █▀█▄▀▀▄▄█ ▄▀█ ▀ █ █  ▀▀▄▀██ █▀█ ▀ ██▀▀█
  ▀▀██▀██▀▀▀ █▄███ ▄█ ███▀█▀ █  █▀▄▄  ▀▀▀▀▀▀█▀▀▀ 
 ▄▄▀ ▀▀▀▄█▄▄█  ▄█  █▄█ ██▀ ▄▄▀█ ▀▄█▄▄▀▀▄▄█▄█▀▄▀▀▄
 ▀ ▀▀ ▀▀██ ▀ ▀█▄█▀██ ▄█ ██▀██ ▀█▄▀█   █████▀▄▄▀▀█
 ▄▀ ▄▀▀ ▀▀▄█ █▀█▀▄▀▀ ▄ ▄▄▀▀ ▄▀▄█ ▀▀▄▄▀▀ ▀▀█▀▀█   
██▀▀▄ ▀▄▀█   ▄▀▀▀▀ █▄ ▀▄▄▀▀█▄█▀ █▄█▀▄█ ▄▀▀▄ █ █▄▄
██▀▀█▄▀ ▀█Ã ª ▄ ▄▀▄▄▄▀▄  ▄▀▀ █  ▄▀▀▄█ █▀█ █▄███▀▄
 █▄▄ ▀▀▀  █ ▀█ ██  ▀█▀▄▀▄ ▀▀▀▄▀ ▄▀▄ ▀▄█    █  ▄█▄
▀▀▀   ▀▀██▀█▄ █▀▄▀▄▄▄▄█▀▀▀█▄▄ ▄▀▀▄▀▀▄ ▄ █▀▀▀█ ▄ ▄
█▀▀▀▀▀█ ▀▄▄▀▀  ▀█▄ ▀  █ ▀ █▀▀▀██▄▀▄▄█ ▄ █ ▀ ██▀ ▀
█ ███ █ ▄█▀▀▄▀ ¦▀▀▄▀▀▀▀███▀▀█ ▀▄▄▀▀█ Á  ▀▀█▀█▄ ▀▄
█ ▀▀▀ █ ▀ ▀▀█  ▀▀  ██▀▀▀█ ███▄ª▀███▀▄▄▄▄▄█▀▄▀▄█  
▀▀▀▀▀▀▀   ▀▀▀▀▀▀ ▀▀ ▀▀  ▀▀▀▀▀  ▀ ▀  ▀ ▀▀ ▀ ▀  ▀▀▀
<p>&lt;qr missing&gt;</p>
</pre></code><p>An actual QR code! For now, let&#39;s pull out our phone, load up Google Lens (or equivalent) with our Camera and scan it. Once we decode the QR we will be given...</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>unknown_jrwvr_rn24t3.pubinfo_ktxfo1</span></span></code></pre></div><p>and you now know how to retrieve locs from T2 corps. Some usernames will provide multiple QR codes, and therefore multiple locs, others won&#39;t provide any (and the order_qrs keyword will be missing from the FAQ in this case).</p><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Obviously this complicates things if you want to script/automate the retrieval of locs from a T2 corp, as you will need to implement a QR decoding script in Javascript. Check out the <a href="./.html">HackMUD discord</a> for a lot of conversation and help on this topic.</p>`,14),s=[r];function i(u,l,c,d,p,m){return n(),t("div",null,s)}const g=e(a,[["render",i]]);export{y as __pageData,g as default};
