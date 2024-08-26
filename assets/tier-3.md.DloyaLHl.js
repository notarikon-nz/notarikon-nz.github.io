import{_ as s,c as e,a as t,a1 as n,j as a,o as p}from"./chunks/framework.BwTyoF0R.js";const q=JSON.parse('{"title":"Tier 3","description":"","frontmatter":{"prev":{"text":"Tier 2","link":"/tier-2"},"next":{"text":"Tier 4","link":"/tier-4"},"outline":false},"headers":[],"relativePath":"tier-3.md","filePath":"tier-3.md"}'),o={name:"tier-3.md"},i=n(`<h1 id="tier-3" tabindex="-1">Tier 3 <a class="header-anchor" href="#tier-3" aria-label="Permalink to &quot;Tier 3&quot;">​</a></h1><p>By now you will have accumulated a list of usernames. It will be getting longer all the time.</p><p>Tier 3 now includes locks that won&#39;t just take your GC, but will take, and destroy, your upgrades. If you&#39;re not prepared, this could be very expensive.</p><p>First things first, we need to find some T3 corp locs. Just like T1 and T2 these will rotate on a regular basis. The corp locs will utilise a variation on words like private, internal or employee, and will be <code>LOWSEC</code>, compared to T2s <code>HIGHSEC</code> or <code>MIDSEC</code></p><p>There will be three distinct flavours of console:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>shell</span></span>
<span class="line"><span>archaic</span></span>
<span class="line"><span>futuretech</span></span></code></pre></div><div class="hackmud"><pre>&gt;&gt; nuutec.1internal
NuuTec Corporation
sn_w inc employee cons_le
<p>enter in your username and 4 digit pin to continue.</p>
</pre></div><p>Our first step will be identifying a valid username. Loop through our list of usernames, and find one that asks you to provide a PIN, e.g.</p><div class="hackmud"><pre>&gt;&gt; nuutec.internal {username:&quot;bobranator&quot;}
NuuTec Corporation
sn_w inc employee cons_le
<p>please provide pin as text.</p>
</pre></div>`,9),l=n(`<ol><li>The PIN will never contain a 9 (11% faster if you remember this)</li><li>Automate this step</li><li>Avoid timeouts, it&#39;ll slow you down</li><li>Practice best code practices, garbage collections slow you down</li><li>Corruption is a thing, but calling decorrupt is a waste of time</li><li><code>/auto</code> is your friend</li></ol><div class="hackmud"><pre>&gt;&gt; nuutec.internal {username:&quot;bobranator&quot;,pin:&quot;2306&quot;}<br>
NuuTec Corporation<br>
perform<br>
+~~~~~~~~~~~+ +~~~~~~~~~~~+<br>+  Enhance  + + Synergize +<br>&#39;~~~~~~~~~~~&#39; &#39;~~~~~~~~~~~&#39;<br>
+~~~~~~~~~~~+ +~~~~~~~~~~~+<br>+   Flow    + +  Á§¨¡¡ª¤  +<br>&#39;~~~~~~~~~~~&#39; &#39;~~~~~~~~~~~&#39;
</pre></div><p>Different corps will have different keywords and values, ensure that any scripting you produce can handle all scenarios. Tip: you can add all variants to the same set of arguments, and the invalid ones will be ignored.</p><table width="100%!"><tbody><tr><td>perform</td><td>work</td><td>a_t</td></tr><tr><td>enhance</td><td>reviews</td><td>t_st</td></tr><tr><td>synergize</td><td>org chart</td><td>bo_s</td></tr><tr><td>flow</td><td>calendar</td><td>w_ek</td></tr><tr><td>connect</td><td>&lt;unknown&gt;</td><td>m_g</td></tr></tbody></table>`,4),r=a("hr",{noshade:""},null,-1),c=n(`<h3 id="synergize-org-chart-bo-s" tabindex="-1">synergize | org chart | bo_s | <a class="header-anchor" href="#synergize-org-chart-bo-s" aria-label="Permalink to &quot;synergize | org chart | bo_s |&quot;">​</a></h3><p>The corruption here is fixed, and cannot be removed. Take note of any usernames you have not encountered yet, and add to your master username list.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>purple1</span></span>
<span class="line"><span>  frank_einstein</span></span>
<span class="line"><span>  ÁÃ§§¤</span></span>
<span class="line"><span>  carrie_on_</span></span>
<span class="line"><span>   ª¡¦¡¦</span></span>
<span class="line"><span>    ¦¡¢Á¢ </span></span>
<span class="line"><span>  ¤© Á¦</span></span>
<span class="line"><span>  ÁÁ¤¢ª¤¨</span></span>
<span class="line"><span> d4ft</span></span>
<span class="line"><span>  ¨¡¡¨ª</span></span>
<span class="line"><span>  §¦§¡ ¦ÁÃ</span></span>
<span class="line"><span>  pick4rluc</span></span>
<span class="line"><span>  ¤ ©¢¨</span></span>
<span class="line"><span>  wiley_curry</span></span>
<span class="line"><span>  Ã¤ª Á</span></span>
<span class="line"><span>  rey_tr4cer</span></span>
<span class="line"><span>   ¨Á¢ÃÃ§</span></span>
<span class="line"><span>  ¢§Ãª¡©©ªÁ</span></span>
<span class="line"><span>  ¦Á ÃÁ</span></span>
<span class="line"><span>  ad4m4</span></span>
<span class="line"><span>  ©¢¢§ÃÃª¢</span></span>
<span class="line"><span>  ©¦¡¡ ¢¤Á§¨</span></span>
<span class="line"><span>  jim_c_kirk</span></span>
<span class="line"><span>  ©§¢§ </span></span>
<span class="line"><span>  ÃÃ§Ã Ã</span></span>
<span class="line"><span>  ¦Ã¢¦</span></span>
<span class="line"><span>  Á © </span></span>
<span class="line"><span>  m_poppins</span></span></code></pre></div>`,3),d=a("hr",{noshade:""},null,-1),u=n(`<h3 id="flow-calendar-we-k" tabindex="-1">flow | calendar | we_k | <a class="header-anchor" href="#flow-calendar-we-k" aria-label="Permalink to &quot;flow | calendar | we_k |&quot;">​</a></h3><p>The calendar accepts two arguments: <code>d</code> in order to move the date forward or back, e.g. <code>d:1</code> (or even better <code>d:12</code> - try it out) and <code>i</code> to view information about specific entries, e.g. <code>i:&quot;w01xnk&quot;</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt;&gt; nuutec.internal{username:&quot;bobranator&quot;,pin:&quot;2306&quot;,perform:&quot;flow&quot;,date:1}</span></span>
<span class="line"><span>flow- </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2061AD</span></span>
<span class="line"><span>-D081----+D082----+D083----+D084----+</span></span>
<span class="line"><span>-        |        | w01xnk | th3sgh -</span></span>
<span class="line"><span>-        |        |        | c8kz59 -</span></span>
<span class="line"><span>-        |        |        |        -</span></span>
<span class="line"><span>-        |        |        |        -</span></span>
<span class="line"><span>-D085----+D086----+D087----+D088----+</span></span>
<span class="line"><span>- hx5h29 | ddvi8e | tha2ep | abwfzn -</span></span>
<span class="line"><span>- zwewgt |        |        | apl1vt -</span></span>
<span class="line"><span>-        |        |        | q197or -</span></span>
<span class="line"><span>-        |        |        |        -</span></span>
<span class="line"><span>-D089----+D090----+D091----+D092----+</span></span>
<span class="line"><span>-        | 20iiow | gurkik | ffoof5 -</span></span>
<span class="line"><span>-        |        |        |        -</span></span>
<span class="line"><span>-        |        |        |        -</span></span>
<span class="line"><span>-        |        |        |        -</span></span>
<span class="line"><span>=====================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt; nuutec.internal{username:&quot;bobranator&quot;,pin:&quot;2306&quot;,perform:&quot;flow&quot;,i:&quot;w01xnk&quot;}</span></span>
<span class="line"><span>flow- </span></span>
<span class="line"><span></span></span>
<span class="line"><span>HNy0bcApFHWpJchkXWUvgoufIvamxpuzdGtWevGEURLYcKrahe615RHbLK4L58CDQd6uas1l1oeWusqbfstm53JeC8miwMQUiHRkepuhqNzIdFDdSvO6SSXVOc=Xfcm15RqbLK4m57a+Hs+ndcAnFL2fGsFlxcxtg3NWuIEA</span></span></code></pre></div><p>Calendar entries (and others) are decryped using a custom (but not horrible) encryption algorithm that requires a key. In order to retrieve the key, you will need to search for an unencrypted loc within the calendar.</p><p>What we&#39;re looking for is a reference to a private storage location. Not all users will have one, but make sure you check the calendar thoroughly. Once you find it, leave the current corp for a moment, and head over there.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span></code></pre></div><p>Now that we have our passphrase in hand, let&#39;s return to the <code>reviews</code>. Take note of the <code>page</code> keyword at the top.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt;&gt;sn_w.employee_login{username:&quot;zap_moon&quot;,pin:&quot;2306&quot;,perform:&quot;enhance&quot;,passphrase:&quot;largewhitecat&quot;}</span></span>
<span class="line"><span>enhance- page: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>oeTbSfCPd/hAUx9PpcZia1oudAMw§G9zyAdKV1A8gc8HXlo=vrL9XxttlKzLVVkglLPKDFMairH=VR4SV384ot0disfh1R4KiK2bzhQXjhea</span></span>
<span class="line"><span>Ft+4eX4nDr+IQy+3JbDaf351RRbNacCLhvBISdHXej4Sj/qltB/LeTMWhvqsuItcdXFhFc+od+91xHZWI8+xw5gnBLqrH96qaXt5CL+6Boql</span></span>
<span class="line"><span>RGrNBbyAOAC4eK8ZepAU</span></span>
<span class="line"><span>DPKlg7qZxID6drEOMYHRlARaBoG7D/mifblLBXr2¡bohaMalxh+vS8qIF=afjM5LFI=nfrkRccizdwAi/YJ207FXOXWL5zr=dstHcMC0wRpA</span></span>
<span class="line"><span>tQIJVVcTnMWiUvEgKNtxwLK4wRIuIha1SRkbWWAOkXWxzOEqHyb5wgO¤TSLLGAm9TvhuKhtvls8mzygkE+L4wwMEYV4Ui=auTvHbchQ+vX8G</span></span>
<span class="line"><span>1BgkHsL+VgpkYlQPnram0JzfXwW3zQ3MWhcfI=R=Sv9b</span></span>
<span class="line"><span>broken staff. LAZY. appears uninterested in new duties. FFFFF! NOHIRE. -rockyK¢\`b\`</span></span>
<span class="line"><span>FMNsbHFv0NLddXF+PRrNBH51P9orE79oy5tehvamdXuLiNy0e76aEd1Id3RkTyrWib+JSdtpD7Gkv9Q0fa9htZCYjvJqa7zoGcuxdYeqFCTc</span></span>
<span class="line"><span>dBAU</span></span>
<span class="line"><span>DdBNhnG8PItrh=Gxc¢6bE++IB7+1d98Nh9+5NHaH/yg¡AelheKzÁF4HMg766d9xeOvl5bHqoSdÃmE7Buun4PFd2Je4K6PMgrhPW4JcyfIymI</span></span>
<span class="line"><span>D8SpuN=eRoq1dYiHBhEnC/17Jc4XH9SWNLCYgMQZg/F0ZDVemVZIQxPiEMCU</span></span>
<span class="line"><span>mMIPKQ81pT/KOwRxQeOc0ncgSBIgxeU8CCtGz1bvTimAcwOp0c1umgoedfcvVBb111vuVuWGcQbgH8ktSA9vgvIvXhoA1WbjWhMPLNbb</span></span>
<span class="line"><span>tRxgbRPxuMPbYho+dAdda2A+dAduDFg/tw44Y1o8vs88W1kvdb=KDFo+kbPJX§jLmK3EURA¦ksH5UyIQjrv9ziQeScXj1BfLlLmixSIeVsWd</span></span>
<span class="line"><span>jNAL88JqzxkzFgqsvuD2DMViHBGBV2j8qBO¦Vmf9Eo7/</span></span>
<span class="line"><span>FMNsbbnv0Nu6ZrFfEsNqaDMW+ahHY21WBq+7YzW5AaiIblqI/d+IV1aCJ¨H+YlmaKNH5ZlWoKgÃ7WX51G+yTxXC4OCP4CbWH/Á9uBXCLQ9oy</span></span>
<span class="line"><span>BXC4wt120nChlog2FbityND6FPOh</span></span></code></pre></div><p>Cycle through each of the pages, and if you&#39;re lucky (i.e. someone hasn&#39;t beaten you to it), you&#39;ll discover one or more unencrypted T3 NPC locations.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>derelict_ddttl_n47haw.pubinfo_a8jwh6</span></span></code></pre></div>`,10),h=a("hr",{noshade:""},null,-1),g=n('<h3 id="connect-m-g" tabindex="-1">connect | m_g <a class="header-anchor" href="#connect-m-g" aria-label="Permalink to &quot;connect | m_g&quot;">​</a></h3><p>In the initial screen there is a fourth corrupted option - it&#39;s possible to guess this option, so far we&#39;ve discovered <code>perform: &quot;connect&quot;</code> and <code>a_t: &quot;m_g&quot;</code>. <code>work: &quot;???&quot;</code> is still unknown.</p><p>Whenever you try to use one of these options, the only response you get is: <code>&lt;command&gt; currently unavailable</code></p><p>Despite years of community effort we haven&#39;t found the third command or been able to get anything besides &quot;currently unavailable&quot;. Several users have offered bounties for the discovery, with ast being the most active currently:</p><p><strong>[ast]</strong><br> 1TGC for third word<br> 5TGC for getting past command is currently unavailable</p>',5);function b(_,m,v,f,y,w){return p(),e("div",null,[i,t(" At this point we start bruting the PIN - there are no clues that tell you the answer, it's a case of start at 0000 and keep checking all the way to 8888. "),l,r,c,d,u,h,g])}const T=s(o,[["render",b]]);export{q as __pageData,T as default};
